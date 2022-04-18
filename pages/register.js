import dynamic from "next/dynamic";
import React from "react";
import Navbar from "../components/Navbar";
import Register from "../components/RegisterScreen";
const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
  loading: () => <div />,
});
const register = () => {
  return (
    <>
      <Navbar whiteBar={true} />
      <Register />
      <Footer />
    </>
  );
};

export default register;
