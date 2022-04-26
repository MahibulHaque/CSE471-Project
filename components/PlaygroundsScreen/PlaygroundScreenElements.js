import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 60px);
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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  width: 90%;
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(0, 0,0, 0.05) 1px 1px 2px 2px,
    rgba(0, 0, 0, 0.05) -1px -1px 2px 2px;
  width: 100%;
  border-radius: 0.4rem;
  gap: 2rem;
  cursor: pointer;

  & .image__holder{
      padding:10px;
      background-color:#f5f5f5;
      border-radius:.5rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap:.5rem;
    &>h2{
        font-size:24px;
        font-weight:600;
        color:black;
    }

    &>p{
        font-size:14px;
        color:#757575;
        font-weight:600;
    }
  }
`;
