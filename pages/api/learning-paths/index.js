import Path from "../../../models/Path";

export default async function handler(req, res) {
  try {
    const paths = await Path.find({});
    return res.status(200).json({ paths });
  } catch (error) {
    throw error;
  }
}
