import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content:center; */
  background-color: #fafafa;
  margin-bottom:4rem;
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
  }

  & > button {
    color: #3747bb;
    background-color: #e0e7ff;
    outline: none;
    border: none;
    border-radius: 1.5rem;
    font-size: 16px;
    padding-inline: 20px;
    padding-block: 10px;
    cursor: pointer;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 90%;
  gap: 2.5rem;
`;

export const Card = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.4rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, .1) 1px 1px 2px 2px,
    rgba(0, 0, 0, .1) -1px -1px 2px 2px;
  cursor: pointer;
  justify-content: space-between;

  & > h3 {
    margin-left: 20px;
    font-size: 18px;
    margin-block: 1rem;
    font-weight: 600;
  }
  & > p {
    margin-left: 20px;
    font-size: 16px;
    margin-bottom: 1rem;
    color: #757575;
    line-height: 1.75rem;
  }

  & > div {
    padding-block: 5px;
    padding-inline: 15px;
    border-radius: 20px;
    width: fit-content;
    font-size: 14px;
    margin-left: 20px;
    margin-bottom: 1rem;
    background-color: #ffe4e6;
    color: #9f126b;
  }

  & .Easy {
    background-color: #dcfce7;
    color: #306534;
  }

  & .Medium {
    background-color: #fef9c3;
    color: #a44d0e;
  }
`;
