import { Container, Logo, NavLinks, NavButtons } from "./NavbarElements";
import {Button} from '@material-ui/core'
import Link from "next/link";


const Navbar = () => {
  return (
    <>
      <Container>
        <div>
          <Link href="/">
            <NavLinks>Start Learning</NavLinks>
          </Link>

          <NavLinks>Pricing</NavLinks>
          <NavLinks>Contact Us</NavLinks>
        </div>
        <div>
        <NavButtons variant="text" color="primary">Login</NavButtons>
        <NavButtons variant="contained">Register</NavButtons>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
