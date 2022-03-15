import { getCookie, removeCookies } from "cookies-next";
import React from "react";
import connect from "../lib/database";
import jwt from "jsonwebtoken";
import User from "../models/User";
const dashboard = () => {
  return <div>dashboard</div>;
};

export async function getServerSideProps({ req, res }) {
  try {
    await connect();
    const token = getCookie("token", { req, res });
    if (!token) {
      return { redirect: { destination: "/" } };
    }
    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    const obj = await User.findOne({ _id: verified.id });
    if (!obj) return { redirect: { destination: "/" } };
    return{
        props:{
            email:obj.email,
            name:obj.name,
        }
    }
  } catch (error) {
    removeCookies("token", { req, res });
    return { redirect: { destination: "/" } };
  }
}

export default dashboard;
