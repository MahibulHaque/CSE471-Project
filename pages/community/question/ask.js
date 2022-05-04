import { getCookie } from "cookies-next";
import { connect } from "formik";
import jwt from "jsonwebtoken";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import styled from "styled-components";
import EditorScreen from "../../../components/EditorScreen";
import { useUserContext } from "../../../Contexts/UserContext";
import User from "../../../models/User";
const Navbar = dynamic(() => import("../../../components/Navbar"));
const DashboardMenu = dynamic(() => import("../../../components/DashboardMenu"), {
  ssr: false,
  loading: () => <div />,
});
const Footer = dynamic(() => import("../../../components/Footer"));
const AskPage = ({ name, email, image }) => {
  const { userUpdater } = useUserContext();
  const userInfo = { name: name, email: email, image: image };
  useEffect(() => {
    userUpdater(userInfo);
  }, []);
  return (
    <div>
      <Navbar whiteBar={true} />
      <Wrapper>
        <DashboardMenu />
        <EditorScreen />
      </Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: #fafafa;
`;

export default AskPage;

export async function getServerSideProps({ req, res }) {
  try {
    await connect();
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
