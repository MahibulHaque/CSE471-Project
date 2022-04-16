import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
  width: 90%;
`;
export const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-block: 3rem;
  align-items: center;
  background-color: #1f1f1f;
  color: white;
  justify-content: space-evenly;
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-right: 1.5rem;
  & > h1 {
    font-size: 35px;
    margin-bottom: 1rem;
  }
  & > p {
    font-size: 16px;
    line-height: 2rem;
    text-align: justify;
  }
`;

export const HeroButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > h1 {
    margin-top: 1rem;
    font-size: 24px;
  }
  & > button {
    background-color: #4f46e5;
    border: none;
    outline: none;
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;
    border-radius: 0.5rem;
    padding-inline: 3rem;
    padding-block: 0.75rem;
    font-size: 18px;
    font-weight: 600;
    color: white;
    &:hover {
      background-color: #4338ca;
    }
  }
`;

export const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin-top: 3rem;
  & > h1 {
    font-size: 35px;
    margin-bottom: 1rem;
  }
  & > ul {
    list-style: none;
    text-decoration: none;

    & > li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      & > svg {
        width: 16px;
        height: 16px;
        margin-right: 0.75rem;
      }
      font-size: 16px;
    }
  }
`;

export const HeroContainerWrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  & > h1 {
    font-size: 35px;
    margin-bottom: 1rem;
  }

  & > p {
    line-height: 2rem;
    font-size: 16px;
    max-width: 600px;
    text-align: justify;
  }
`;

export const CourseStructureContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  & > h1 {
    font-size: 35px;
    margin-bottom: 1rem;
  }

  
`;

export const CardList = styled.ul`
  margin-top:1rem;
  list-style:none;
  &>li{
    font-size:16px;
    font-weight:500;
    margin-bottom:1rem;
    display:flex;
    align-items:center;
    &>svg{
      margin-right:.75rem;
    }
  }
`
