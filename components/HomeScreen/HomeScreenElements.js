import styled from "styled-components";
import { Button } from "@material-ui/core";
import { FaGoogle } from "react-icons";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ whiteForm }) => (whiteForm ? "" : "1400px")};
  display: ${({ whiteForm }) => (whiteForm ? "flex" : "grid")};
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: center;
  justify-content: center;
  flex-direction: column;
  place-items: center;
  grid-gap: 5em;
  margin-block: 6em;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;
export const HomeHeaderTag = styled.h1`
  font-size: clamp(40px, 6vw, 65px);
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  & > span {
    background-image: linear-gradient(45deg, #c4d2fe, #41d2f1);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;
export const HomeSubTag = styled.p`
  width: 100%;
  font-size: clamp(14px, 3.5vw, 20px);
  color: #d4d4d4;
  margin-block:2rem;
`;

export const HomeExploreButton = styled.button`
  outline: none;
  border: none;
  border-radius: 0.5rem;
  background-image: linear-gradient(45deg, #4e46e4, #0f7491);
  color: white;
  font-size: 16px;
  width: 100%;
  text-align: center;
  justify-content: center;
  padding-block: 1rem;
  cursor: pointer;
`;
export const FormContainer = styled.div`
  width: clamp(350px, 450px, 500px);
  border: 2px solid;
  border-color: ${({ whiteForm }) => (whiteForm ? "white" : "#262626")};
  border-radius: 0.25em;
  display: flex;
  background-color: ${({ whiteForm }) => (whiteForm ? "white" : "")};
  padding-top: ${({ whiteForm }) => (whiteForm ? "2em" : "")};
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ whiteForm }) => (whiteForm ? "5em" : "")};
  /* box-shadow: rgb(0 0 0 / 9%) 0px 26px 30px -10px,
    rgb(0 0 0 / 3%) 0px 16px 10px -10px; */
  box-shadow: rgb(0 0 0/10%) 0 1px 1px 1px, rgb(0 0 0/10%) 0 -1px 1px 1px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`;
export const FormHeader = styled.h1`
  width: 90%;
  margin-block:2ch;
  text-align: ${({ whiteForm }) => (whiteForm ? "center" : "")};
  font-size: ${({ whiteForm }) => (whiteForm ? "30px" : "16px")};
  color: ${({ whiteForm }) => (whiteForm ? "black" : "#d4d4d4")};
  font-weight: ${({ whiteForm }) => (whiteForm ? "800" : "600")};

  & > span {
    background-image: linear-gradient(45deg, #fb923c, #e11d48);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export const ButtonContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-block: 1em;
`;
export const Buttons = styled.button`
  background-color: ${({ whiteForm }) => (whiteForm ? "white" : "#171717")};
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 0.75em;
  cursor: pointer;
  outline: none;
  border: 1px solid;
  border-color: ${({ whiteForm }) => (whiteForm ? "#d4d4d4" : "#262626")};
  border-radius: 0.5em;

  &:hover {
    background-color: ${({ whiteForm }) => (whiteForm ? "#FAFAFA" : "#404040")};
  }
`;
export const FormLine = styled.p`
  width: 95%;
  display: flex;
  align-items: center;
  & > span {
    flex-grow: 1;
    height: 2px;
    background-color: ${({ whiteForm }) => (whiteForm ? "#d4d4d4" : "#262626")};
    margin-inline: 1rem;
  }
  color: #757575;
`;
export const Label = styled.label`
  color: #757575;
  font-size: 14px;
  align-self: flex-start;
  display: block;
  margin-bottom: 0.5em;
`;
export const InputField = styled.input`
  width: 97%;
  outline: none;
  border: 1px solid;
  border-color: ${({ whiteForm }) => (whiteForm ? "#d4d4d4" : "#262626")};
  border-radius: 0.5em;
  background-color: ${({ whiteForm }) => (whiteForm ? "white" : "#171717")};
  font-size: 14px;
  caret-color: ${({ whiteForm }) => (whiteForm ? "#171717" : "white")};
  font-family: "Inter";
  font-weight: 400;
  padding-block: 0.75em;
  padding-inline: 0.5em;
  margin-bottom: .5em;
  color: ${({ whiteForm }) => (whiteForm ? "#757575" : "#d4d4d4")};

  &:focus-within {
    border: 2px solid #2563eb;
  }
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SubmitButton = styled.button`
  width: 100%;
  flex-grow: 1;
  background-color: #4f46e5;
  color: white;
  outline: none;
  border: none;
  border-radius: 0.5em;
  font-family: "Inter";
  font-size: 16px;
  margin-block: 1em;
  padding-block: 0.75em;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
`;

export const StrengthIndicator = styled.div`
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  & > span {
    width: 100%;
    height: 100%;
    background-color: lightgray;
    border-radius: 5px;
  }
  & .medium {
    margin: 0 3px;
  }
`;
