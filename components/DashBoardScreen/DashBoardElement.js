import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

export const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 350px;
  width: 50%;
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
