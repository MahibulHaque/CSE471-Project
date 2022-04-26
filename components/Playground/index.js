import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Playground = () => {
  const router = useRouter();
  return (
    <Container>
      {router.asPath.includes("playgrounds/c") && (
        <iframe frameborder="0" width="100%" height="900px" src="https://replit.com/@alter10/CompetentFirstPayware?lite=true"></iframe>
      )}
      {router.asPath.includes("playgrounds/python") && (
        <iframe frameborder="0" width="100%" height="900px" src="https://replit.com/@alter10/MoralSingleJavadocs?lite=true"></iframe>
      )}
      {router.asPath.includes("playgrounds/c++") && (
        <iframe frameborder="0" width="100%" height="900px" src="https://replit.com/@alter10/ShamefulModestAmoebas?lite=true"></iframe>
      )}
      {router.asPath.includes("playgrounds/csharp") && (
        <iframe frameborder="0" width="100%" height="900px" src="https://replit.com/@alter10/AgitatedLawngreenGroupware?lite=true"></iframe>
      )}
      {router.asPath.includes("playgrounds/julia") && (
        <iframe frameborder="0" width="100%" height="900px" src="https://replit.com/@alter10/RubberyIndolentLocks?lite=true"></iframe>
      )}
      {router.asPath.includes("playgrounds/nodejs") && (
        <iframe frameborder="0" width="100%" height="900px" src="https://replit.com/@alter10/EverlastingPleasedMarkuplanguage?lite=true"></iframe>
      )}
      {router.asPath.includes("playgrounds/bash") && (
        <iframe frameborder="0" width="100%" height="900px" src="https://replit.com/@alter10/NativeRapidLegacysystem?lite=true"></iframe>
      )}
    </Container>
  );
};

export default Playground;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 60px);
  background-color:#fafafa;
  padding-block:40px;
`;
