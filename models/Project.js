import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },

  projectDesc: {
    type: String,
    required: true,
    unique: true,
  },
  projectImage: {
    type: String,
    required: true,
  },
  projectTag: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);