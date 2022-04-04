import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #171717;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 60px;
`;
export const FooterContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 95%;
  max-width: 1100px;
`;
export const FooterMainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 1.5rem;

  & .firstContainer {
    max-width: 300px;
    @media screen and (max-width: 1200px) {
      width: 100%;
      max-width: none;
      margin-bottom: 2rem;
    }
    & > p {
      margin-block: 1rem;
    }
  }
`;
export const MultiContentContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-right: 1rem;
  @media screen and (max-width: 840px) {
    flex-direction: column;
    gap:3rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 200px;
  color: #d4d4d4;
  font-size: 16px;
  margin-right: 1rem;

  & > h4 {
    text-transform: uppercase;
    color: rgb(163, 163, 163);
    font-size: 14px;
    font-weight: 500;
  }

  & .svg-container {
    display: flex;
    align-items: center;

    & > svg {
      cursor: pointer;
      width: 24px;
      height: 24px;
      margin-right: 1.5rem;
      fill: rgb(163, 163, 163);
      &:hover {
        fill: white;
      }
    }
  }
  & > a {
    cursor: pointer;
    color: #d4d4d4;
    &:hover {
      color: white;
    }
  }
`;

export const CopyrightContainer = styled.div`
  width: 100%;
  padding-top: 1rem;
  text-align: center;
  border-top: 1px solid #757575;
  color: rgb(163, 163, 163);
  font-size: 16px;
`;
