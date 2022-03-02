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
`
export const NavButtons = styled(Button)`
    
`