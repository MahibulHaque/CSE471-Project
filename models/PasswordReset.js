import mongoose from "mongoose";
import validator from "validator";

const passwordResetSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
});

export default mongoose.models.PasswordReset ||
  mongoose.model("PasswordReset", passwordResetSchema);
