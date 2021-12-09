// server/index.js

const express = require("express");
const path = require("path");
const got = require("got");
const PORT = process.env.PORT || 3001;

const app = express();
const NETLINK = "https://link.x.immutable.com";

if (process.env.NODE_ENV === "production") {
  // Have Node serve the files for our built React app
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  // All other GET requests not handled before will return our React app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

// Handle GET requests to /api route
app.get("/api", async (req, res) => {
  const { body } = await got(
    `https://api.x.immutable.com/v1/assets?user=${req.query.user}&collection=0xdf1a6b88b8c1c3a6f6eaf3f43c6b052ef94a662d`,
    {
      responseType: "json",
    }
  );

  res.json(body.result);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
