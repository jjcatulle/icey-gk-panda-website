const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pandaItemSchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  staking: {
    type: Boolean,
    required: false,
  },

});
module.exports = mongoose.model("PandaItem", pandaItemSchema);
