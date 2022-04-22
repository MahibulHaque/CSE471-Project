import mongoose from "mongoose";

const communityQuestionSchema = mongoose.Schema({
  questionId: {
    type: String,
    required: true,
  },
  questionTitle: {
    type: String,
    required: true,
  },

  questionDesc: {
    type: String,
    required: true,
  },
  questionTags: {
    type: Array,
  },
  questionBy: {
    type: String,
    required: true,
  },
  questionPostTime: {
    type: Date,
    required: true,
  },
  questionAnswers: {
    type: Array,
    default: [],
  },
  questionVoteCount: {
    type: Number,
    default: 0,
  },
  questionViewCount: {
    type: Number,
    default: 0,
  },
  questionAnswerCount: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.CommunityQuestion ||
  mongoose.model("CommunityQuestion", communityQuestionSchema);
