import React from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import dynamic from "next/dynamic";
import NewPasswordScreen from "../../../components/NewPasswordScreen";

const Footer = dynamic(() => import("../../../components/Footer"));

const ChangePasswordPage = ({ email, id }) => {
  return (
    <div>
      <Navbar whiteBar={true} />
      {email ? (
        <NewPasswordScreen email={email} id={id} />
      ) : (
        <div
          style={{
            width: "100vw",
            minHeight: "calc(100vh - 60px)",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <h1>Invalid Id Provided </h1>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ChangePasswordPage;

export async function getServerSideProps({ req, res, query }) {
  const { id } = query;
  try {
    const res = await axios.get(`http://localhost:3000/api/verify_email/${id}`);
    if (res.status === 200) {
      const email = res.data.email;

      return {
        props: {
          email,
          id,
        },
      };
    } else {
      return {
        props: {},
      };
    }
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}
