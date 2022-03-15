import { Container, Logo, NavLinks, NavButtons } from "./NavbarElements";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Container>
        <div>
          <Link href="/">
            <NavLinks>Start Learning</NavLinks>
          </Link>
          <NavLinks>Learning Paths</NavLinks>
          <NavLinks>Pricing</NavLinks>
          <NavLinks>Contact Us</NavLinks>
        </div>
        <div>
          <Link href="/login">
            <NavButtons variant="outlined" color="primary">
              Sign in
            </NavButtons>
          </Link>
          <Link href="/register">
            <NavButtons variant="contained"  style={{ marginLeft: "1.5rem" }}>
              Register
            </NavButtons>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
