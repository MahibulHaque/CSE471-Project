import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  min-height: calc(100vh - 60px);
  display: flex;
  background-color: white;
  box-shadow: rgb(0 0 0/10%) 1px 0 1px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MenuLinkContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
`;

export const MenuLink = styled.a`
  display: inline-flex;
  width: 100%;
  padding-block: 0.75em;
  margin-bottom: 2px;
  text-align: left;
  cursor: pointer;
  color: #757575;
  fill: #757575;

  font-size: 16px;
  background-color: none;
  & > svg {
    font-size: 20px;
    margin-right: .5em;
    margin-left: 1em;
  }

  &:hover {
    background-color: #fafafa;
    color: #262626;
    fill: #262626;
  }

  &.active {
    background-color: #eef2ff;
    color: #4f46e5;
    fill: #4f46e5;
  }
`;
export const MenuButtonHolder = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const LogoutButton = styled.button`
  outline: none;
  border: none;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-block: 0.75em;
  font-size: 16px;
  text-align: center;
  color: #757575;
  background-color: white;
  cursor: pointer;
  & > svg {
    margin-right: .5em;
    margin-left: 1em;
    font-size: 20px;
  }
  &:hover {
    background-color: #fafafa;
    color: #262626;
  }
`;
