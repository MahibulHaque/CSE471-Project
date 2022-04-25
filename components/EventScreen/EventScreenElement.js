import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 60px);
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
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

  & > p {
    font-size: 22px;
    color: #757575;
    line-height: 2rem;
    text-align: center;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
  width: 90%;
  gap: 2rem;
  max-width: 1400px;
  margin-bottom: 2rem;
`;
export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;
export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 0.25rem;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.05) 1px 1px 2px 2px,
    rgba(0, 0, 0, 0.05) -1px -1px 2px 2px;

  & > h1 {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 1rem;
  }
  & > p {
    font-size: 14px;
    color: #757575;
    font-weight: 600;
    margin-bottom: 1rem;

    & > span {
      font-size: 12px;
      padding-inline: 0.5rem;
      border-radius: 15px;
      background-color: #dcfce7;
      color: #306534;
      text-align: center;
      font-weight: 600;
    }
    & .end__date__container {
      background-color: #ffe4e6;
      color: #9f126b;
    }
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content:space-between;
    width:100%;
    & > span {
      flex-grow:1;
      font-size: 12px;
      text-align: center;
      background-color: #e0e7ff;
      color: #3730b8;
      padding-inline: 10px;
      padding-block: 4px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      max-width: fit-content;
      &>div{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 0.75em;
        background-color: #818cf8;
      }
    }
    & > a {
      font-size: 16px;
      color: #6366f1;
      display: flex;
      align-items: center;
      cursor: pointer;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      & > svg {
        margin-left: 0.5em;
      }
    }
  }
`;
