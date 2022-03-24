import { Button,styled as styledMui } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.nav`
    width:100%;
    height:80px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    color:${({theme})=>theme.colors.white};
    
`

export const Logo = styled.img`
    height:80%;
    width:auto;
`

export const NavLinks = styled.a`
    margin-right:1.5rem;
    cursor: pointer;
    font-size:18px;
    color:#d4d4d4;
    color:${({whiteBar})=>whiteBar?"#545454":"#d4d4d4"};
    &:hover{
        color:${({whiteBar})=>whiteBar?"black":"white"};
    }
`
export const NavButtons = styled(Button)`
    
`

export const NavbarDashContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const DashboardButton = styled.button`
    cursor: pointer;
    border:none;
    border-radius:.25rem;
    outline:none;
    background-color:#707070;
    padding-inline:1.5rem;
    padding-block:.75rem;
    margin-right:1.5rem;
    color:white;
    font-size:18px;
    &:hover{
        background-color:#404040;
    }
`

export const NotificationButton = styled.div`
    width:2rem;
    height:2rem;
    border-radius:.25em;
    background-color:#191919;
    padding:.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:1.5rem;
    &:hover{
        background-color:#404040;
    }
`