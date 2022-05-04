import useSWR from "swr";
import dynamic from "next/dynamic";
import React from "react";
import { useUserContext } from "../../Contexts/UserContext";
import connect from "../../lib/database";
import styled from "styled-components";
import DashboardMenu from "../../components/DashboardMenu";
import Playground from "../../components/Playground";
const Navbar = dynamic(() => import("../../components/Navbar"), {
  ssr: false,
  loading: () => (
    <div
      style={{ width: "100vw", height: "60px", backgroundColor: "#1f1f1f" }}
    />
  ),
});
const Footer = dynamic(() => import("../../components/Footer"), {
  ssr: false,
  loading: () => <div />,
});

const fetcher = (...args) => fetch(...args).then((response) => response.json());
const PlaygroundDetail = ({ pathInfo }) => {
  const { userUpdater } = useUserContext();
  const { data, error } = useSWR(
    `/api/auth/user/user-auth`,
    fetcher
  );
  if (data) {
    userUpdater(data);
  }

  return (
    <div>
      <Navbar whiteBar={true}/>
      <Wrapper>
        <DashboardMenu />
        <Playground />
      </Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default PlaygroundDetail;

export async function getStaticProps(){
    return{
        props:{}
    }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "python" } },
      { params: { id: "c++" } },
      { params: { id: "c" } },
      { params: { id: "csharp" } },
      { params: { id: "julia" } },
      { params: { id: "bash" } },
      { params: { id: "nodejs" } },
    ],
    fallback: false,
  };
}
