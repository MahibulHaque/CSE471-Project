import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import styled from "styled-components";
import LearningPaths from "../../components/LearningPathsScreen";
import DashboardMenu from "../../components/DashboardMenu";
import { useUserContext } from "../../Contexts/UserContext";
import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import User from "../../models/User";
const Navbar = dynamic(() => import("../../components/Navbar"), {
  ssr: false,
  loading: () => <div style={{ height: 60 }} />,
});
const Footer = dynamic(() => import("../../components/Footer"), {
  ssr: false,
  loading: () => <div />,
});

const learningPaths = ({ name, email, image }) => {
  const userInfo = { name: name, email: email, image: image };
  const { userUpdater } = useUserContext();
  useEffect(() => {
    userUpdater(userInfo);
  }, []);
  return (
    <>
      <Navbar whiteBar={true} />
      <Wrapper>
        <DashboardMenu />
        <LearningPaths />
      </Wrapper>
      <Footer />
    </>
  );
};

export default learningPaths;

const Wrapper = styled.div`
  display: flex;
`;

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
            name: obj.name,
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
