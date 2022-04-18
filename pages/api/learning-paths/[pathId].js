import Path from "../../../models/Path";

export default async function handler(req, res) {
  const { pathId } = req.query;

  try {
    const path = await Path.findOne({ id: pathId });

    if (path) {
      return res.status(200).json({ path: path });
    } else {
      return res.status(404).json({ error: "Path not found" });
    }
  } catch (error) {
    res.status(405).end(error);
    throw error;
  }
}
