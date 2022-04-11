import mongoose from "mongoose"
import validator from "validator"

const memberSchema = mongoose.Schema({
  _id:{
    type:String,
    required:true,
  },
  name: {
    type: String,
    required:true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  paymentStatus:{
      type:Boolean,
      required:true,
      default:false
  }
  
})

export default mongoose.models.Member || mongoose.model("Member", memberSchema)