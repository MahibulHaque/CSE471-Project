import Course from "../../../models/Course";

export default async function handler(req, res) {
  try {
    const courses = await Course.find({});

    res.status(200).json({ courses });
  } catch (error) {
    throw error;
  }
}
