import Image from "next/image";
import React from "react";
import {
  BigHeader,
  BottomLines,
  Container,
  IconContainer,
  LearnMoreLink,
  SmallHeader,
  Wrapper,
} from "./PromoHomeScreenElements";

const PromoHomeScreen = () => {
  return (
    <Wrapper>
      <Container>
        <IconContainer>
          <Image src="/images/star.svg" width={32} height={32} alt="star-icon"/>
        </IconContainer>
        <SmallHeader>GET OUT OF TUTORIAL HELL</SmallHeader>
        <BigHeader>Videos are so 2008-ish...</BigHeader>
        <BottomLines>
          You have read about "Practice makes a man perfect", but you still
          learn by watching hours of videos. For the first time ever, you can
          experience an interactive course completely online - a perfect blend
          of theory and practice right inside your browser. 10x more engaging,
          higher quality, cheaper, and a stellar experience for visual learners.
        </BottomLines>
        <LearnMoreLink href="/learning-paths/fullstack">
          Learn More
        </LearnMoreLink>
      </Container>
    </Wrapper>
  );
};

export default PromoHomeScreen;
