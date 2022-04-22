import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom:4rem;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 2rem;
  width: 90%;
  max-width: 700px;
  & > h1 {
    font-size: clamp(40px, 5vw, 50px);
    color: black;
    margin-bottom: 1rem;
    font-weight: 900;
  }
`;

export const TextAreaHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  background-color: #f5f5f5;
  max-width: 1000px;
  border-radius: 0.3rem;
  box-shadow: rgb(0 0 0/10%) 1px 1px 4px 1px, rgb(0 0 0/10%) -1px -1px 4px 1px;
  width: 90%;

  & > p {
    font-size: 16px;
    margin-bottom: 0.5rem;
    color: #171717;
  }
  & > span {
    font-size: 12px;
    margin-bottom: 0.5rem;
    color: #757575;
  }
`;

export const InputField = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid;
  border-color: #d4d4d4;
  border-radius: 0.5em;
  background-color: white;
  font-size: 14px;
  caret-color: #171717;
  font-family: "Inter";
  font-weight: 400;
  padding-block: 0.75em;
  padding-inline: 0.5em;
  margin-bottom: 2rem;
  color: #757575;

  &:focus-within {
    border: 2px solid #2563eb;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 2rem;
  & > p {
    font-size: 16px;
    margin-bottom: 0.5rem;
    color: #171717;
  }
  & > span {
    font-size: 12px;
    margin-bottom: 0.5rem;
    color: #757575;
  }
`;

export const ButtonHolder = styled.div`
  margin-top:1rem;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  & > button {
    background-color: #4f46e5;
    color: white;
    outline: none;
    border: none;
    border-radius: 0.3em;
    font-family: "Inter";
    font-size: 16px;
    padding: 0.75em;
    cursor: pointer;

    &:hover {
      background-color: #4338ca;
    }
  }
`;
