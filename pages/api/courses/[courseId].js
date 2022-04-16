import Course from "../../../models/Course";

export default async function handler(req, res) {
  const { courseId } = req.query;

  try {
    const course = await Course.findOne({ id: courseId });

    if (course) {
      res.status(200).json({ course: course });
    } else {
      res.status(404).json({ error: "Course not found" });
    }
  } catch (error) {
    throw error;
  }
}
