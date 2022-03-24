import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WrapperPrice = styled.div`
  width: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 2em;
`;
export const PricingHeader = styled.h1`
  font-size: clamp(30px, 6vw, 50px);
  font-weight: 900;
  width: 100%;
  text-align: center;

`;
export const PricingButtonContainer = styled.div`
  max-width: 400px;
  display: flex;
  background-color: #262626;
  padding-block: 3px;
  padding-inline: 3px;
  border-radius: 5px;
  margin-bottom: 2.5em;
`;
export const PricingButton = styled.button`
  border: none;
  outline: none;
  background-color: ${({ activeButton }) =>
    activeButton ? "white" : "#262626"};
  font-size: 14px;
  padding-inline: 2em;
  text-align: center;
  padding-block: 0.5em;
  border-radius: 6px;
  cursor: pointer;
  color: ${({ activeButton }) => (activeButton ? "#262626" : "white")};
`;
export const PricingPlanHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  width: 100%;
  justify-content: center;
`;
export const PricingPlanContainer = styled.div`
  width: clamp(400px, 80%, 450px);
  display: flex;
  flex-direction: column;
  min-height: 600px;
  align-items: center;
  background-color: white;
  border-radius: 0.25em;
  box-shadow: rgb(0 0 0/10%) 0 1px 1px 1px, rgb(0 0 0/10%) 0 -1px 1px 1px;
`;

export const PricingPlanSmallHeader = styled.h3`
  width: 90%;
  text-align: left;
  font-size: 16px;
  margin-top: 1em;
  margin-bottom: 2em;
  color: black;
`;
export const PricingPlanHeader = styled.h1`
  width: 90%;
  text-align: left;
  font-size: 30px;
  margin-top: 0px;
  margin-bottom: -0.25em;
  color: black;

  &>span{
      color:#757575;
      font-size:18px;
  }
`;
export const PricingPlanHeaderBottomTag = styled.p`
  width: 90%;
  text-align: left;
  font-size: 14px;
  margin-bottom: 0.5em;
  color: #757575;
  margin-bottom: 32px;
`;
export const PricingPlanButton = styled.button`
  width: 90%;
  font-size: 14px;
  outline: none;
  border: none;
  border-radius: 0.5em;
  background-color: #262626;
  text-align: center;
  color: white;
  padding-block: 0.75em;
  cursor: pointer;
  &:hover {
    background-color: black;
  }

  margin-bottom: 2em;
`;
export const PricingPlanSpliter = styled.div`
  width: 100%;
  background-color: #d4d4d4;
  height: 1px;
  margin-bottom: 1em;
`;
export const PricingPlanUlHeader = styled.h1`
  width: 90%;
  text-align: left;
  font-size: 14px;
  margin-bottom: 1em;
  color: black;
  font-weight: 500;
`;
export const PricingPlanUl = styled.ul`
  width: 100%;
  list-style: none;
`;
export const PricingPlanListItem = styled.li`
  width: 90%;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #757575;
  list-style: none;
  text-decoration: none;
  margin-bottom: 1.5em;
  & > svg {
    margin-right: 0.75em;
  }
`;
