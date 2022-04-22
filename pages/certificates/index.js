import { getCookie, removeCookies } from "cookies-next";
import React, { useEffect } from "react";
import connect from "../../lib/database";
import jwt from "jsonwebtoken";
import User from "../../models/User";
import dynamic from "next/dynamic";
import DashboardMenu from "../../components/DashboardMenu";
import CertificatesScreen from "../../components/CertificatesScreen";
import Head from "next/head";
import { useUserContext } from "../../Contexts/UserContext";
import styled from "styled-components";

const Navbar = dynamic(() => import("../../components/Navbar"));

const Footer = dynamic(() => import("../../components/Footer"), {
  ssr: false,
  loading: () => <div />,
});
const CertificatePage = ({ email, name, image }) => {
  const { userUpdater } = useUserContext();
  const userInfo = { name: name, email: email, image: image };

  useEffect(() => {
    userUpdater(userInfo);
  }, []);
  return (
    <div>
      <Head>
        <title>Open Robotics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar whiteBar={true} />
      <Wrapper>
        <DashboardMenu />
        <CertificatesScreen />
      </Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export async function getServerSideProps({ req, res }) {
  try {
    await connect();
    const token = getCookie("user-token", { req, res });
    if (!token) {
      return { redirect: { destination: "/login" } };
    }
    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    const obj = await User.findOne({ _id: verified.id });
    if (!obj) return { redirect: { destination: "/register" } };
    return {
      props: {
        email: obj.email,
        name: obj.username,
        image: obj.imageUrl,
      },
    };
  } catch (error) {
    removeCookies("user-token", { req, res });
    return { redirect: { destination: "/" } };
  }
}

export default CertificatePage;
