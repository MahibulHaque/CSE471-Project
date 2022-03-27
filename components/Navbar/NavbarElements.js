import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: rgb(0 0 0/10%) 0 1px 1px 1px, rgb(0 0 0/10%) 0 -1px 1px 1px;
  z-index: 2;
  position: sticky;
`;

export const Logo = styled.img`
  height: 80%;
  width: auto;
`;

export const NavLinks = styled.a`
  margin-right: 1.5rem;
  cursor: pointer;
  font-size: 16px;
  color: #d4d4d4;
  color: ${({ whiteBar }) => (whiteBar ? "#545454" : "#d4d4d4")};
  &:hover {
    color: ${({ whiteBar }) => (whiteBar ? "black" : "white")};
  }
`;
export const NavButtons = styled(Button)``;

export const NavbarDashContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DashboardButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  background-color: #707070;
  padding-inline: 1.25rem;
  padding-block: 0.5rem;
  margin-right: 1.5rem;
  color: white;
  font-size: 16px;
  &:hover {
    background-color: #404040;
  }
`;

export const NotificationButton = styled.div`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 0.25em;
  background-color: ${({ whiteBar }) => (whiteBar ? "white" : "#191919")};
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  & > svg {
    width: 18px;
    height: 18px;
    fill: ${({ whiteBar }) => (whiteBar ? "#757575" : "#d4d4d4")};
  }
  &:hover {
    background-color: ${({ whiteBar }) => (whiteBar ? "#F5F5F5" : "#404040")};
  }
`;
