import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  courseTitle: {
    type: String,
    required: true,
  },

  id: {
    type: String,
    required: true,
    unique: true,
  },
  courseGoals: {
    type: Array,
    required: true,
  },
  courseDesc: {
    type: String,
    required: true,
  },
  courseUnits: {
    type: Array,
    required: true,
  },
});

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
