import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Only define the model if it hasn't been defined yet
let User;

try {
  User = mongoose.model("User");
} catch (error) {
  User = mongoose.model("User", userSchema);
}

export default User;