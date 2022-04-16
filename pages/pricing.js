import dynamic from "next/dynamic";
import jwt from "jsonwebtoken";
import { useEffect } from "react";
import PricingScreen from "../components/PricingScreen";
import { useUserContext } from "../Contexts/UserContext";
import { getCookie } from "cookies-next";
import User from "../models/User";
const Navbar = dynamic(() => import("../components/Navbar"));
const Footer = dynamic(() => import("../components/Footer"));
const pricing = ({ name, email, image }) => {
  const { userUpdater } = useUserContext();
  const userInfo = { name: name, email: email, image: image };
  useEffect(() => {
    userUpdater(userInfo);
  }, []);
  return (
    <>
      <Navbar whiteBar={true} />
      <PricingScreen />
      <Footer />
    </>
  );
};
export default pricing;
export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("user-token", { req, res });
    if (token) {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      const obj = await User.findOne({ _id: verified.id });

      if (obj) {
        return {
          props: {
            email: obj.email,
            name: obj.username,
            image: obj.imageUrl,
          },
        };
      }
    }
    return { props: {} };
  } catch (error) {
    return { props: {} };
  }
}
