const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestmonialSchema = new Schema(
  {
    photo: { type: String },
    name: { type: String },
    post: { type: String },
    description: { type: String },
    active: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TestmonialModel = mongoose.model("testmonial", TestmonialSchema);
module.exports = TestmonialModel;
