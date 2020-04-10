const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    description: String,
  },
  { timestamps: true }
);

const commentModel = model("comment", commentSchema);
module.exports = commentModel;
