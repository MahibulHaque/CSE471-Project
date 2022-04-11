import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.h1`
  font-size: clamp(40px, 6vw, 70px);
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  /* background-image: linear-gradient(45deg, #c4d2fe, #41d2f1);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent; */
  color: #6280f9;
  width:80%;
`;

export const NameHolder = styled.h4`
  font-size: 20px;
  font-weight: 400;
  color: #b5b5b5;
  text-align: center;
  margin-bottom: 2rem;
  width:80%;
`;
export const RedirectionButton = styled.div`
  width: 90%;
  max-width: 300px;
  outline: none;
  border: none;
  border-radius: 2rem;
  background-color: #4f46e5;
  color: white;
  font-size: 16px;
  width: 100%;
  text-align: center;
  justify-content: center;
  padding-block: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #4036e3;
  }
`;
