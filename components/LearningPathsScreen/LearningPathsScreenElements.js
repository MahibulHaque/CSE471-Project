import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  align-items: center;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 2rem;
  align-items: center;
  width: 95%;
  text-align: center;
  & > h1 {
    font-size: clamp(30px, 5vw, 40px);
    font-weight: 700;
    color: black;
    margin-bottom: 2rem;
  }

  & > p {
    max-width: 900px;
    font-size: clamp(16px, 3vw, 20px);
    color: #525252;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;
export const FeaturedPathContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 95%;
  margin-bottom: 4rem;
  & > h1 {
    font-size: 20px;
    font-weight: 500;
    color: black;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid rgb(229 229 229);
    margin-bottom: 2rem;
    text-transform: uppercase;
    width: 100%;
  }
`;

export const FeaturedPathCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  width: 100%;
  border: 1px solid #d4d4d4;
  cursor: pointer;


  border-radius: 0.5rem;

  & > button {
    background-color: #fafafa;
    color: #4f46e5;
    font-size: 14px;
    padding-block: 16px;
    width: 100%;
    padding-left: 20px;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;
  }

  & .featured__path_content_container {
    display: flex;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap:20px;
    margin-left: 20px;

    & .detail_container {
      display: flex;
      flex-direction: column;
      /* margin-left: 2rem; */
      & > h1 {
        font-size: 20px;
        color: black;
        font-weight: 500;
        margin-bottom: 1rem;
        /* padding-left: 20px; */
      }

      & > div {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: 14px;
        gap: 0.75rem;
        margin-bottom: 1rem;
        /* justify-content: space-evenly; */

        & > span {
          color: #be5a0e;
        }
        & > svg {
          width: 16px;
          height: auto;
          margin-right: 0.5em;
          fill: #eb8a2f;
          color: #eb8a2f;
        }
      }
      & > p {
        font-size: 14px;
        color: #525252;
      }
    }
  }
`;

export const AllLearningPathContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;

  & > h1 {
    font-size: 20px;
    font-weight: 500;
    color: black;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid rgb(229 229 229);
    margin-bottom: 2rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding-inline: 20px; */
  padding-top: 20px;
  width: 100%;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 1px solid #d4d4d4;

  & > h3 {
    font-size: 20px;
    color: black;
    font-weight: 500;
    margin-bottom: 1rem;
    padding-left: 20px;
  }

  & > p {
    color: #737373;
    font-size: 16px;
    margin-bottom: 1rem;
    padding-left: 20px;
  }
  & > div {
    padding-inline: 20px;
    padding-block: 16px;
    background-color: #fafafa;
    color: #4f46e5;
    font-size: 14px;
  }
`;
