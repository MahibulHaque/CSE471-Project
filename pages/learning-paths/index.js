import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";
import LearningPaths from "../../components/LearningPathsScreen";
import DashboardMenu from "../../components/DashboardMenu";
const Navbar = dynamic(() => import("../../components/Navbar"), {
  ssr: false,
  loading: () => <div style={{height:60}}/>,
});
const Footer = dynamic(() => import("../../components/Footer"), {
  ssr: false,
  loading: () => <div />,
});

const learningPaths = () => {
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
