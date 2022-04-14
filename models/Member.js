import mongoose from "mongoose";
import validator from "validator";

const memberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  paymentStatus: {
    type: Boolean,
    required: true,
    default: false,
  },
  productID: {
    type: String,
    required: true,
  },
  periodStart: {
    type: Date,
    required: true,
  },
  periodEnd: {
    type: Date,
    required: true,
  },
  customerID: {
    type: String,
    required: true,
  },
  interval: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Member || mongoose.model("Member", memberSchema);
