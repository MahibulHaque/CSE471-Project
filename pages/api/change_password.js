import bcryptjs from "bcryptjs";
import User from "../../models/User";
import PasswordReset from "../../models/PasswordReset";

export default async function handler(req, res) {
  const { email, id, newpassword } = req.body;

  try {
    //final check if user exists in "password_reset" table

    const user = await PasswordReset.findOne({ email: email });
    if (!user) {
      return res.status(404).send("an error occured");
    }

    //hash new password

    const salt = await bcryptjs.genSalt(10);
    const hashedpassword = await bcryptjs.hash(newpassword, salt);

    //update the users table!

    await User.findOneAndUpdate(
      { email: email },
      { $set: { password: hashedpassword } }
    );

    //clear the record in "password_reset" table for security

    await PasswordReset.findOneAndDelete({ id: id });

    return res.status(200).send("password successfully changed!");
  } catch (error) {
    res.send(error.message);
  }
}
