import Link from "next/link";
import React from "react";
import { Container, TextContainer } from "./CertificatesScreenElements";

const CommunityScreen = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Certificates</h1>
        <p>
          Enroll in and complete{" "}
          <Link href="/learning-paths">
            <a>learning paths</a>
          </Link>{" "}
          or{" "}
          <Link href="/courses">
            <a>interactive courses</a>
          </Link>{" "}
          to become a certified developer. All of your certificates will be
          displayed in this section.
        </p>
      </TextContainer>
    </Container>
  );
};

export default CommunityScreen;
