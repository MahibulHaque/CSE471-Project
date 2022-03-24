import React from "react";
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
  return (
    <Container>
      <WrapperPrice>
        <PricingHeader>Pricing Plans</PricingHeader>
        <PricingButtonContainer>
          <PricingButton activeButton={true}>Monthly</PricingButton>
          <PricingButton>
            Half Yearly<span>✨</span>
          </PricingButton>
          <PricingButton>Yearly</PricingButton>
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
              ৳999<span>/mo</span>
            </PricingPlanHeader>
            <PricingPlanHeaderBottomTag>
              ৳999 billed every month
            </PricingPlanHeaderBottomTag>
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
