import { getCookie } from "cookies-next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import jwt from "jsonwebtoken";
import User from "../models/User";
import dynamic from "next/dynamic";
import HomeScreen from "../components/HomeScreen";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useUserContext } from "../Contexts/UserContext";

const PromoHomeScreen = dynamic(() => import("../components/PromoHomeScreen"), {
  ssr: false,
  loading: () => <div />,
});

const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
  loading: () => <div />,
});

export default function Home({ email, name, image }) {
  const { userUpdater } = useUserContext();
  const userInfo = { name: name, email: email, image: image };
  useEffect(() => {
    userUpdater(userInfo);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Open Robotics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Navbar email={email} name={name} image={image} />
        <HomeScreen />
      </Main>
      <PromoHomeScreen />
      <Footer />
    </div>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
  min-height: fit-content;
  width: 100%;
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
