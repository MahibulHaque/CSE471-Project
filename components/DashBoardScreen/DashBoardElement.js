import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #fafafa;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
`;
export const Topbar = styled.div`
  width: 90%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 1.25rem;
  background-image: linear-gradient(45deg, #ffffff, #f4f4f4, #1a1a1a);
  border-radius: 0.5em;
  box-shadow: rgb(0 0 0/10%) 0 1px 1px 1px, rgb(0 0 0/10%) 0 -1px 1px 1px;
`;

export const HeaderTag = styled.h1`
  font-size: clamp(30px, 5vw, 35px);
  margin-inline: 2rem;
  display: flex;
  flex-wrap: wrap;
`;
export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: white;
  margin-inline: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

export const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 350px;
  flex-grow: 1;
`;
export const CourseProgressContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: rgb(0 0 0/10%) 0 1px 1px 1px, rgb(0 0 0/10%) 0 -1px 1px 1px;
  min-width: 350px;
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.1rem;
  flex-wrap: wrap;
  & > svg {
    width: 75px;
    margin-right: 2rem;
  }
`;

export const LastActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > h1 {
    font-size: 20px;
    color: black;
    margin-bottom: 0.25em;
  }
  & > p {
    font-size: 14px;
    margin-bottom: 1em;
  }
  & > button {
    font-size: 14px;
    font-weight: 600;
    outline: none;
    border: none;
    background-color: #171717;
    padding-inline: 1.5em;
    padding-block: 0.75em;
    border-radius: 0.3em;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: black;
    }
  }
`;

export const ProgressContainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  min-width: 350px;
  width: 100%;
  box-shadow: rgb(0 0 0/10%) 0 1px 1px 1px, rgb(0 0 0/10%) 0 -1px 1px 1px;
  padding: 1.5rem;
`;

export const ProgressHeader = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: black;
  margin-bottom: 1rem;
`;
export const ProgressP = styled.p`
  font-size: 14px;
  margin-bottom: 1.5rem;
`;
export const Levelbar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 1.5rem;
`;
export const LeaderBoardLink = styled.a`
  font-size: 16px;
  color: #6366f1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  & > svg {
    margin-left: 0.5em;
  }
`;

export const GoalContainer = styled.div`
  display: flex;
  min-width: 350px;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const AsideContainer = styled.aside`
  display: flex;
  flex-grow: 1;
  min-width: 350px;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  height: 100%;
  max-width: 800px;
`;

export const ParticipationContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  box-shadow: rgb(0 0 0/10%) 0 1px 1px 1px, rgb(0 0 0/10%) 0 -1px 1px 1px;
  gap: 1.6rem;
  align-items: center;
  flex-wrap:wrap;
  

  & .image__holder {
    padding: 10px;
    cursor: pointer;
    &:hover {
      animation: wobble 2s ease-in-out infinite;
      @keyframes wobble {
        0% {
          transform: translateX(0%);
        }
        15% {
          transform: translateX(-25%) rotate(-5deg);
        }
        30% {
          transform: translateX(20%) rotate(3deg);
        }
        45% {
          transform: translateX(-15%) rotate(-3deg);
        }
        60% {
          transform: translateX(10%) rotate(2deg);
        }
        75% {
          transform: translateX(-5%) rotate(-1deg);
        }
        100% {
          transform: translateX(0%);
        }
      }
    }
    @media screen and (max-width:648px){
      margin:auto;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > h2 {
      font-weight: 600;
      font-size: 20px;
      & > span {
        background-color: #fde047;
        padding: 6px;
        border-radius: 0.3rem;
      }
    }

    & > p {
      font-size: 14px;
      color: #757575;
    }

    & > button {
      background-color: #171717;
      cursor: pointer;
      padding-inline: 1.5rem;
      padding-block: 0.5rem;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      outline: none;
      border: none;
      border-radius: 0.3rem;
      color: white;

      &:hover {
        background-color: black;
      }
    }
  }
`;

export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  padding: 20px;
  box-shadow: rgb(0 0 0/10%) 0 1px 1px 1px, rgb(0 0 0/10%) 0 -1px 1px 1px;
  height: 100%;
  & > h2 {
    font-size: 24px;
    width: 100%;
    text-align: left;
  }

  & > div {
    position: relative;
    width: 100%;
  }
`;
