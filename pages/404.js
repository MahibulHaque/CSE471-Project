import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function FourOhFour() {
  return (
    <Container>
      <Image src="/images/404.gify" width={386} height={558} alt="404-image"/>
      <h1>404 Not Found</h1>
      <p>Try a learning path instead?</p>
      <button>Become a ROS Developer</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  padding-top:2rem;
  & > h1 {
    font-size: 30px;
    margin-bottom: 2rem;
  }
  & > p {
    font-size: 18px;
    margin-bottom: 1rem;
  }
  & > button {
    width: 90%;
    max-width: 250px;
    padding-block: 0.75rem;
    border-radius: 0.25rem;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    color: white;
    background-color: #9333ea;

    &:hover {
      background-color: #8c27e8;
    }
  }
`;
