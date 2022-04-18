import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const HeroContainerWrapper = styled.div`
  background-color: #1f1f1f;
  padding-block: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  justify-content: space-between;
  /* gap: 2rem; */
  flex-wrap: wrap-reverse;
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-right: 1.5rem;

  & .progress__percentage__container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    & > div {
      font-size: 14px;
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
      & > span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 0.75em;
        background-color: #818cf8;
      }
    }
  }

  & > h1 {
    font-size: 35px;
    margin-block: 1rem;
  }
  & > p {
    font-size: 16px;
    line-height: 2rem;

    text-align: justify;
  }
  & > button {
    border: none;
    outline: none;
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;
    border-radius: 0.25rem;
    padding-block: 0.5rem;
    font-size: 14px;
    font-weight: 600;
    color: white;
    background-color: #4338ca;

    &:hover {
      background-color: #4f46e5;
    }
  }
`;

export const ModuleContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  padding-block: 3rem;
  padding-inline: 3rem;
  align-items: flex-end;
  background-color: #fafafa;
  width: 100%;
  gap: 2rem;
`;

export const ModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  & > h1 {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 5px;
    border-bottom: 1px solid #d4d4d4;
    margin-bottom: 1rem;
    color: #4f46e5;
  }

  & > div {
    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
      flex-direction: column;
      padding-block: 1rem;
      padding-inline: 1rem;
      border-bottom: 1px solid #d4d4d4;
      margin-bottom: 1rem;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }

      & > h4 {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
      & > p {
        font-size: 18px;
        margin-bottom: 0.3rem;
      }

      & > span {
        font-size: 14px;
        color: #757575;
      }
    }
  }
`;

export const DetailCard = styled.div`
  display: flex;
  padding-inline: 15px;
  padding-block: 30px;
  flex-direction: column;
  font-size: 14px;
  position: sticky;
  flex-grow:.1;
  background-color: white;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px 1px,
    rgba(0, 0, 0, 0.1) -1px -1px 1px 1px;

  & > h3 {
    color: #4f46e5;
    margin-bottom: 1rem;
  }

  & > h4 {
    margin-bottom: 0.5rem;
    color: #757575;
    font-weight:500;
    display:flex;
    align-items:center;
    &>span{
        color:black;
        font-weight:700;
        margin-right:.25rem;
    }

    &>svg{
        min-height:18px;
        min-width:18px;
        fill:#008000;
        margin-right:.5rem;
    }
  }
  & > p {
    margin-bottom: 1rem;
    color: #757575;
  }

  & > button {
    border: none;
    outline: none;
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;
    border-radius: 0.25rem;
    padding-block: 0.5rem;
    font-size: 18px;
    font-weight: 600;
    color: white;
    background-color: #4338ca;

    &:hover {
      background-color: #4f46e5;
    }
  }
`;
