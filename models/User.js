import mongoose from "mongoose"
import validator from "validator"

const userSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  username: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  password: {
    type: String,
  },
  imageUrl:{
    type:String,
    default:"https://images.weserv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Favatar.png&w=32&q=75"
  }
})

export default mongoose.models.User || mongoose.model("User", userSchema)