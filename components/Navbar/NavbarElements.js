import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: fit-content;
  align-items: center;
  box-shadow: rgb(0 0 0/10%) 0 2px 6px 2px;
  background-color: ${({ whiteBar }) => (whiteBar ? "white" : "#1f1f1f")};
  color: ${({ theme }) => theme.colors.white};
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: sticky;
  z-index: 100;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  /* flex-grow: 1; */
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

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const NavButtons = styled.button`
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
  border-radius: 0.25em;
  font-size: 16px;
  display: block;
  margin-right: 0.5rem;
  padding-inline: 1rem;
  padding-block: .7rem;
  border: none;
  outline: none;
  text-transform: capitalize;
  background-color: #757575;
  color: ${({ whiteBar }) => (whiteBar ? "black" : "white")};

  &:hover{
    background-color: #383838;
    
  }

  @media screen and (max-width: 1024px) {
    display:none;
  }
`;

export const NavbarDashContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MenuButton = styled.div`
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 0.25em;
  background-color: ${({ whiteBar }) => (whiteBar ? "white" : "#191919")};
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.5rem;
  & > svg {
    min-width: 20px;
    min-height: 20px;
    fill: ${({ whiteBar }) => (whiteBar ? "#757575" : "#d4d4d4")};
  }
  &:hover {
    background-color: ${({ whiteBar }) => (whiteBar ? "#F5F5F5" : "#404040")};
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
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

  @media screen and (max-width: 1024px) {
    display: none;
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
    width: 20px;
    height: 20px;
    fill: ${({ whiteBar }) => (whiteBar ? "#757575" : "#d4d4d4")};
  }
  &:hover {
    background-color: ${({ whiteBar }) => (whiteBar ? "#F5F5F5" : "#404040")};
  }
`;

export const NavMenuContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: fit-content;
  background-color: ${({ whiteBar }) => (whiteBar ? "white" : "#1f1f1f")};
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  margin-block: 2rem;

  & > button {
    outline: none;
    border: none;
    border-radius: 0.5rem;
    background-image: linear-gradient(45deg, #4e46e4, #0f7491);
    color: white;
    font-size: 16px;
    width: 100%;
    text-align: center;
    justify-content: center;
    padding-block: 1rem;
    cursor: pointer;
  }
`;

export const NavMenuLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const NavMenuLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: ${({ whiteBar }) => (whiteBar ? "black" : "#d4d4d4")};
  &:hover {
    color: ${({ whiteBar }) => (whiteBar ? "black" : "white")};
  }

  & > svg {
    min-height: 20px;
    min-width: 20px;
    fill: ${({ whiteBar }) => (whiteBar ? "black" : "#d4d4d4")};
    margin-right: 0.75rem;
    &:hover {
      fill: ${({ whiteBar }) => (whiteBar ? "black" : "white")};
    }
  }
`;
