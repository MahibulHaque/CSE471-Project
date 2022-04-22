import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.section`
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

  & > p {
    font-size: 22px;
    color: #757575;
    line-height: 2rem;
    text-align: center;
  }
`;

export const MainContainer = styled.section`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionsHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 1.5rem;
  & > h3 {
    font-size: clamp(25px,4vw,30px);
    color: black;
    font-weight: 800;
  }
  & > button {
    background-color: #4f46e5;
    color: white;
    outline: none;
    border: none;
    border-radius: 0.3em;
    font-family: "Inter";
    font-size: 16px;
    padding:.75em;
    cursor: pointer;

    &:hover {
      background-color: #4338ca;
    }
  }
`;

export const QuestionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  border: 1px solid #d4d4d4;
  align-items: center;
`;

export const QuestionHolder = styled.div`
  width: 100%;
  padding: 1rem;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  border-bottom:1px solid #d4d4d4;
`;

export const QuestionCounterHolder = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  justify-content: space-around;
  gap:.5rem;
  & > p {
    display: flex;
    align-items: center;
    flex-direction: column;
    line-height: 1.5rem;
    padding:.75rem;
  }
  @media screen and (max-width: 1360px) {
    flex-shrink: 0;
    flex-grow: 1;
  }
`;

export const QuestionDetailHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  & > a {
    font-size: clamp(18px, 3vw, 22px);
    width: 100%;
    color: black;
    cursor: pointer;
    line-height: 2rem;
    margin-bottom: 2rem;

    &:hover {
      text-decoration: underline;
      text-decoration-color: black;
    }
  }
`;

export const QuestionTagHolder = styled.div`
  width: 100%;
  align-self: flex-end;
  font-size: 12px;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media screen and (max-width: 648px) {
    justify-content: center;
  }
  & > span {
    gap: 0.5rem;
    padding-inline: 0.5rem;
    padding-block: 0.15rem;
    border-radius: 15px;
    background-color: #e0e7ff;
    color: #3730a3;
    text-align: center;
    font-weight: 600;
  }
  & > p {
    color: black;
  }
`;
