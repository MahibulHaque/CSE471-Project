import PasswordReset from "../../../models/PasswordReset";

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    //query for the email with the provided id

    const obj = await PasswordReset.findOne({ id: id });
    //send back the email

    return res.status(200).json({ email: obj.email });
  } catch (error) {
    res.status(404).send(error.message);
  }
}
