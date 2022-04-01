import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import CheckoutScreen from "../components/CheckoutScreen";


const checkout = ({ headerToken }) => {
  
  return (
    <>
      {headerToken && <CheckoutScreen headerToken={headerToken} />}
      {!headerToken && (
        <div style={{position:"absolute",top:"50%",left:"50%",textAlign:"center",transform:"translate(-50%,-50%)",fontSize:"28px",color:"#757575",width:"95%"}}>
          Your checkout session is expired or invalid. Please initiate the
          checkout again.
        </div>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  const headerToken = context.query?.token;
  if (headerToken) {
    return {
      props: { headerToken }, // will be passed to the page component as props
    };
  } else {
    return {
      props: {},
    };
  }
}

export default checkout;
