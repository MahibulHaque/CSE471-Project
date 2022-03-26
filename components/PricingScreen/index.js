import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
  Container,
  PricingButton,
  PricingButtonContainer,
  PricingHeader,
  PricingPlanButton,
  PricingPlanContainer,
  PricingPlanHeader,
  PricingPlanHeaderBottomTag,
  PricingPlanHolder,
  PricingPlanListItem,
  PricingPlanSmallHeader,
  PricingPlanSpliter,
  PricingPlanUl,
  PricingPlanUlHeader,
  WrapperPrice,
} from "./PricingScreenElements";

const PricingScreen = () => {
  const [activeButton, setActiveButton] = useState(2);

  return (
    <Container>
      <WrapperPrice>
        <PricingHeader>Pricing Plans</PricingHeader>
        <PricingButtonContainer>
          <PricingButton
            onClick={() => {
              setActiveButton(1);
            }}
            className={`${activeButton == 1 ? "active" : ""}`}
          >
            Monthly
          </PricingButton>
          <PricingButton
            onClick={() => {
              setActiveButton(2);
            }}
            className={`${activeButton == 2 ? "active" : ""}`}
          >
            Half Yearly<span>✨</span>
          </PricingButton>
          <PricingButton
            onClick={() => {
              setActiveButton(3);
            }}
            className={`${activeButton == 3 ? "active" : ""}`}
          >
            Yearly
          </PricingButton>
        </PricingButtonContainer>
        <PricingPlanHolder>
          <PricingPlanContainer>
            <PricingPlanSmallHeader>Free</PricingPlanSmallHeader>
            <PricingPlanHeader>Free forever</PricingPlanHeader>
            <PricingPlanHeaderBottomTag>
              Free access to basic courses
            </PricingPlanHeaderBottomTag>
            <PricingPlanButton>Create a Free account</PricingPlanButton>
            <PricingPlanSpliter />
            <PricingPlanUlHeader>WHAT'S INCLUDED</PricingPlanUlHeader>
            <PricingPlanUl>
              <PricingPlanListItem>
                <FaCheck style={{ fill: "#2ebc4f" }} /> 10 hours/month of
                practice
              </PricingPlanListItem>
              <PricingPlanListItem>
                <FaCheck style={{ fill: "#2ebc4f" }} /> Access to basic
                interactive courses
              </PricingPlanListItem>
              <PricingPlanListItem>
                <FaCheck style={{ fill: "#2ebc4f" }} /> Community Support
              </PricingPlanListItem>
            </PricingPlanUl>
          </PricingPlanContainer>
          <PricingPlanContainer>
            <PricingPlanSmallHeader>Pro</PricingPlanSmallHeader>
            <PricingPlanHeader>
              {`${activeButton == 1 ? "৳999" : ""}${
                activeButton == 2 ? "৳800" : ""
              }${activeButton == 3 ? "৳750" : ""}`}
              <span>/mo</span>
            </PricingPlanHeader>
            <PricingPlanHeaderBottomTag>{`${
              activeButton == 1 ? "৳999 billed every month" : ""
            }${activeButton == 2 ? "৳4800 billed every 6 months" : ""}${
              activeButton == 3 ? "৳9000 billed every 1 year" : ""
            }`}</PricingPlanHeaderBottomTag>
            <PricingPlanButton>Subscribe to Pro</PricingPlanButton>
            <PricingPlanSpliter />
            <PricingPlanUlHeader>WHAT'S INCLUDED</PricingPlanUlHeader>
            <PricingPlanUl>
              <PricingPlanListItem>
                <FaCheck style={{ fill: "#2ebc4f" }} />
                Everything in Free
              </PricingPlanListItem>
              <PricingPlanListItem>
                <FaCheck style={{ fill: "#2ebc4f" }} />
                Unlimited course labs practice time
              </PricingPlanListItem>
              <PricingPlanListItem>
                <FaCheck style={{ fill: "#2ebc4f" }} />
                Unlimited practice time in playgrounds
              </PricingPlanListItem>
              <PricingPlanListItem>
                <FaCheck style={{ fill: "#2ebc4f" }} />
                Access to all interactive courses
              </PricingPlanListItem>
              <PricingPlanListItem>
                <FaCheck style={{ fill: "#2ebc4f" }} />
                Official learning path certifications from codedamn
              </PricingPlanListItem>
              <PricingPlanListItem>
                <FaCheck
                  style={{ fill: "#2ebc4f", width: "22px", height: "22px" }}
                />
                Prepare for interviews with our interview-tailored interactive
                exams (available in beta)
              </PricingPlanListItem>
              <PricingPlanListItem>
                <FaCheck style={{ fill: "#2ebc4f" }} />
                50+ hands-on projects to practice and add to portfolio
              </PricingPlanListItem>
              <PricingPlanListItem>
                <FaCheck style={{ fill: "#2ebc4f" }} />
                Unlock 2x more XP on certain actions
              </PricingPlanListItem>
            </PricingPlanUl>
          </PricingPlanContainer>
        </PricingPlanHolder>
      </WrapperPrice>
    </Container>
  );
};

export default PricingScreen;
