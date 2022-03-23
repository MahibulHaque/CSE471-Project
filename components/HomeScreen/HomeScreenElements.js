import styled from "styled-components";
import {Button} from "@material-ui/core"
import {FaGoogle} from "react-icons"

export const Container = styled.div`
  width: 100%;
  max-width:1400px;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(400px, 1fr) );
  place-items:center;
  grid-gap:5em;
  margin-block:5em;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width:400px;
`;
export const HomeHeaderTag = styled.h1`
  font-size: clamp(40px, 6vw, 65px);
  font-weight:800;
  color:white;
  margin-bottom:-.5rem;
  & > span {
    background-image: linear-gradient(45deg, #C4D2FE, #41D2F1);
    background-size: 100%;
    background-clip:text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;
export const HomeSubTag = styled.p`
  width:100%;
  font-size: clamp(14px, 3.5vw, 20px);
  color: #d4d4d4;
`;

export const HomeExploreButton = styled.button`
    outline:none;
    border:none;
    border-radius:.5rem;
    background-image: linear-gradient(45deg,#4E46E4,#0F7491);
    color:white;
    font-size:16px;
    width:100%;
    text-align:center;
    justify-content:center;
    padding-block:1rem;
    cursor: pointer;
`
export const FormContainer = styled.div`
  width: clamp(350px,400px,500px);
  border: 2px solid #262626;
  border-radius:.25em;
  display:flex;
  flex-direction:column;
  align-items:center;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 33%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

`
export const FormHeader = styled.h1`
  width:90%;
  font-size:16px;
  color:#D4D4D4;
  margin-bottom:1em;
`

export const ButtonContainer = styled.div`
  width:90%;
  display:flex;
  flex-wrap:wrap;
  margin-bottom:.5em;
`
export const Buttons = styled.button`
  background-color:#171717;
  flex-grow:1;
  display:flex;
  align-items:center;
  justify-content:center;
  padding-block:.75em;
  cursor: pointer;
  outline:none;
  border:1px solid #262626;
  border-radius:.5em;

  &:hover{
    background-color:#404040;
  }

`
export const FormLine = styled.p`
  width: 95%;
  display:flex;
  align-items:center;
  & > span{
    flex-grow:1;
    height:2px;
    background-color:#262626;
    margin-inline:1rem;
  }
  color:#D4D4D4;
`
export const Label = styled.label`
  color:#D4D4D4;
  font-size:14px;
  align-self:flex-start;
  display:block;
  margin-bottom:.75em;
`
export const InputField = styled.input`
  width:97%;
  outline:none;
  border:1px solid #262626;
  border-radius:.5em;
  background-color:#171717;
  font-size:16px;
  caret-color:white;
  font-family:"Inter";
  font-weight:500;
  padding-block:.75em;
  padding-inline:.5em;
  margin-bottom:.25em;
  color:#d4d4d4;

  &:focus-within{
    border:2px solid #2563EB;
  }
`

export const Form = styled.form`
  width:90%;
  display:flex;
  flex-direction:column;
  justify-content:center;
`
export const SubmitButton = styled.button`
  width:100%;
  flex-grow:1;
  background-color:#4F46E5;
  color:white;
  outline:none;
  border:none;
  border-radius:.5em;
  font-family:"Inter";
  font-size:16px;
  margin-block:1em;
  padding-block:.75em;
  cursor:pointer;

  &:hover{
      background-color:#4338CA;
  }
`

export const StrengthIndicator = styled.div`

  height:8px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:10px;

  &>span{
    width:100%;
    height:100%;
    background-color:lightgray;
    border-radius:5px;
  }
  & .medium{

    margin:0 3px;
  }
`