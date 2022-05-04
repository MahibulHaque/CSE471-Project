import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import styled from "styled-components";
import DashboardMenu from "../../components/DashboardMenu";
import { useUserContext } from "../../Contexts/UserContext";
import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import User from "../../models/User";
import PlayGroundsScreen from "../../components/PlaygroundsScreen";
import connect from "../../lib/database";
const Navbar = dynamic(() => import("../../components/Navbar"), {
  ssr: false,
  loading: () => <div style={{ height: 60 }} />,
});
const Footer = dynamic(() => import("../../components/Footer"), {
  ssr: false,
  loading: () => <div />,
});

const PlaygroundsPage = ({ name, email, image }) => {
  const userInfo = { name: name, email: email, image: image };
  const { userUpdater } = useUserContext();
  useEffect(() => {
    userUpdater(userInfo);
  }, []);
  return (
    <div>
      <Navbar whiteBar={true} />
      <Wrapper>
        <DashboardMenu />
        <PlayGroundsScreen />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default PlaygroundsPage;

const Wrapper = styled.div`
  display: flex;
`;

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
