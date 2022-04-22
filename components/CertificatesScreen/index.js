import React from "react";
import { Container, TextContainer } from "./CertificatesScreenElements";

const CommunityScreen = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Certificates</h1>
        <p>
          Enroll in and complete <a href="/learning-paths">learning paths</a> or{" "}
          <a href="/courses">interactive courses</a> to become a certified developer.
          All of your certificates will be displayed in this section.
        </p>
      </TextContainer>
    </Container>
  );
};

export default CommunityScreen;
