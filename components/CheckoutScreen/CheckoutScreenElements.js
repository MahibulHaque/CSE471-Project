import { FormControlLabel } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap-reverse;
  /* align-items: center; */
  min-height:100vh;
  height:fit-content;
`;
export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  flex-grow: 0.7;
  padding: 40px;
`;
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
`;

export const HeaderDetail = styled.h2`
  font-size: 20px;
  margin-bottom: 2rem;
  color: black;
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
  font-size: 14px;
  align-items: center;
  border: 1px solid #d4d4d4;
  border-radius: 0.25em;
  color: #262626;
  margin-bottom: 2rem;
`;

export const NameContainer = styled.div`
  width: 100%;
  padding-block: 1em;

  & > span {
    margin-right: 1.5em;
    color: #757575;
  }
`;
export const EmailContainer = styled.div`
  border-top: 1px solid #d4d4d4;
  width: 100%;
  padding-block: 1em;
  & > span {
    margin-right: 1.5em;
    color: #757575;
  }
`;
export const PaymentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #d4d4d4;
  border-radius: 0.25em;
`;

export const PaymentProcessContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;

  & > p {
    width: 90%;
    color: #262626;
    font-size: 14px;
    text-align: center;
  }

  & > svg {
    margin-top: 2rem;
    fill: #757575;
    font-size: 100px;
    width: auto;
    margin-top: 2rem;

    & > path {
    }
  }
`;

export const RadioButtons = styled(FormControlLabel)`
  padding-block: 15px;
  width: 100%;
  /* padding-inline: 15px; */
  margin-left: 0;
  margin-right:0;

  & .MuiTypography-body1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 600;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
  & > button {
    outline: none;
    border: none;
    font-size: 14px;
    cursor: pointer;
    background-color: none;
  }
  & .paymentButton {
    font-weight: 600;
    color: white;
    background-color: #1878b9;
    padding: 1.5rem;
    border-radius: 0.5em;
    &:hover {
      background-color: #125b8c;
    }
  }
  & .redirectButton {
    background: none;
    color: #1878b9;
    &:hover {
      color: #125b8c;
    }
  }
`;

export const PriceInfoContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100vh; */
  flex-grow: 0.5;

  @media screen and (max-width:1400px){
    flex-grow:1;
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  padding-block: 10px;
  margin-top:40px;
  border-bottom: 1px solid #d4d4d4;
  & > h3 {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    & > span {
      font-size: 14px;
      color: #757575;
      font-weight: 400;
    }
  }

  @media screen and (max-width:768px){
    flex-direction:column;
    align-items:center;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  font-size: 14px;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  & > h4 {
    font-size: 16px;
    font-weight: 500;
    margin-block: 0.5em;
  }
  & > h2 {
    font-weight: 600;
    font-size: 22px;
    & > span {
      font-weight: 600;
      font-size: 14px;
      color: #757575;
    }
  }
`;

export const WrapperPrice = styled.div`
  display:flex;
  background-color:#f5f5f5;
  flex-grow:.5;
  min-height:100%;

  @media screen and (max-width:1200px){
    flex-grow:1;
    justify-content:center;
  }
`;
