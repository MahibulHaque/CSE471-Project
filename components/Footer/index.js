import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import {
  ContentContainer,
  CopyrightContainer,
  FooterContainer,
  FooterContentWrapper,
  FooterMainContainer,
  MultiContentContainer,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentWrapper>
        <FooterMainContainer>
          <ContentContainer className="firstContainer">
            <Image
              width={69.280575}
              height={60}
              src="/images/logo-mark-white.png"
              alt="logo-white"
            />
            <p>
              Learn robotics interactively - without ever leaving your browser.
            </p>
            <div className="svg-container">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaGithub />
              <FaYoutube />
            </div>
          </ContentContainer>
          <MultiContentContainer>
            <ContentContainer>
              <h4>SOLUTIONS</h4>
              <a href="">Learning paths</a>
              <a href="">Become a fullstack robotics developer</a>
              <a href="">What programming course should you learn?</a>
            </ContentContainer>
            <ContentContainer>
              <h4>SUPPORT</h4>
              <a href="">Contact us</a>
              <a href="">Pricing</a>
              <a href="">Create a free account</a>
            </ContentContainer>
          </MultiContentContainer>
          <MultiContentContainer>
            <ContentContainer>
              <h4>COMPANY</h4>
              <a href="">Blog</a>
              <a href="">Careers</a>
              <a href="">Write on open robotics</a>
              <a href="">Campus Evangelist</a>
              <a href="">Affiliate Program</a>
            </ContentContainer>
            <ContentContainer>
              <h4>LEGAL</h4>
              <a href="">Privacy</a>
              <a href="">Terms</a>
            </ContentContainer>
          </MultiContentContainer>
        </FooterMainContainer>
        <CopyrightContainer>
          <p>© Open Robotics™ 2022 | All rights reserved.</p>
        </CopyrightContainer>
      </FooterContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
