// server/index.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const PandaItem = require("./Models/Panda");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  // Have Node serve the files for our built React app
  app.use(express.static(path.resolve(__dirname, "../client/build")));
}
const returnData = async () => {
  let data = await fs.readFileSync(path.join(__dirname, "db.json"));
  return JSON.parse(data);
};

app.post("/update/:user", async (req, res) => {
  let foundOne = await PandaItem.findOne({
    owner: req.params.user,
    name: req.body.name,
  });
  if (foundOne) {
    let foundOne = await PandaItem.findOneAndUpdate(
      {
        owner: req.params.user,
        name: req.body.name,
      },
      { staking: req.body.staking }
    );
  } else {
    let panda = new PandaItem({ ...req.body, owner: req.params.user });
    await panda.save();
  }
  res.json({ succes: true });
});

app.get("/user/:user", async (req, res) => {
  let data = await PandaItem.find({ staking: true, owner: req.params.user });
  data = data.map((i) => i.name);
  console.log(data)
  res.json(data);
});

if (process.env.NODE_ENV === "production") {
  // All other GET requests not handled before will return our React app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then((result) => {
    app.listen(PORT, (error) => {
      if (error) throw error;
      console.log("Server running on port " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
