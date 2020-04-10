const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    id: Schema.Types.ObjectId,
    name: {
      type: String,
      default: "ivan",
    },
    surname: {
      type: String,
      default: "Petrov",
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    comment: [
      {
        type: Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
  },
  { timestamps: true }
);
userSchema.pre('save', ()=>{
  console.log(this.password)
})

const userModel = model("user", userSchema);

module.exports = userModel;
