import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content:center; */
  background-color: #fafafa;
  margin-bottom: 4rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 90%;
  margin-bottom: 4rem;
  & > h1 {
    font-size: clamp(30px, 4vw, 50px);
    font-weight: 800;
    margin-block: 2rem;
  }

  & > p {
    width: 100%;
    font-size: clamp(16px, 3vw, 20px);
    margin-bottom: 1rem;
    color: #757575;
    line-height: 1.75rem;
    text-align: center;

    & > a {
      color: #6366f1;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
