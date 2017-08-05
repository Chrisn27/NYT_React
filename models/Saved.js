import mongoose from "mongoose";
let Schema = mongoose.Schema;

var SavedSchema = new Schema({
  topic: {
    type: String
  },
  link: {
    type: String
  },
  date: {
    type: Date
  }
});

var History = mongoose.model("History", HistorySchema);
module.exports = Saved;
