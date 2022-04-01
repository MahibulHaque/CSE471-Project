import { getCookie, removeCookies } from "cookies-next";
import React from "react";
import connect from "../lib/database";
import jwt from "jsonwebtoken";
import User from "../models/User";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"));
const DashBoardScreen = dynamic(() => import("../components/DashBoardScreen"));

const dashboard = ({ email, name, image }) => {
  return (
    <>
      <Navbar whiteBar={true} email={email} name={name} image={image} />
      <DashBoardScreen />
    </>
  );
};

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
        name: obj.name,
        image: obj.imageUrl,
      },
    };
  } catch (error) {
    removeCookies("user-token", { req, res });
    return { redirect: { destination: "/" } };
  }
}

export default dashboard;
