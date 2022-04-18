import mongoose from "mongoose";

const pathSchema = mongoose.Schema({
  pathTitle: {
    type: String,
    required: true,
  },

  pathId: {
    type: String,
    required: true,
    unique: true,
  },
  pathModules: {
    type: Array,
    required: true,
  },
  pathDesc: {
    type: String,
    required: true,
  },
  pathDuration: {
    type: String,
    required: true,
  },
  pathTotalModuleCount: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Path ||
  mongoose.model("Path", pathSchema);
