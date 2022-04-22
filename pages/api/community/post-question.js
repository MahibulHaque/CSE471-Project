import CommunityQuestion from "../../../models/CommunityQuestion";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { postUsername, questionTitle, questionDesc, questionTags } =
        req.body;
      const newQuestion = new CommunityQuestion({
        questionId: questionTitle.toLowerCase().replace(" ", "-"),
        questionBy: postUsername,
        questionTitle: questionTitle,
        questionDesc: questionDesc,
        questionPostTime: new Date(),
        questionTags: questionTags,
      });
      newQuestion.save().then(() => {
        return res.status(201).json({ message: "Question post successful" });
      });
    } catch (error) {
      throw error;
    }
  } else {
    res.status(405);
    res.end();
  }
}
