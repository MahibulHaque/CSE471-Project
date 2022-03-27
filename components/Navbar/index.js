import {
  Container,
  Logo,
  NavLinks,
  NavButtons,
  NavbarDashContainer,
  DashboardButton,
  NotificationButton,
} from "./NavbarElements";
import { useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import { FaRegBell } from "react-icons/fa";
import Image from "next/image";

const Navbar = ({ whiteBar, email, name, image }) => {
  const { data: session, status } = useSession();

  return (
    <>
      <Container whiteBar={whiteBar}>
        {!whiteBar && (
          <Image width={123.033} height={36} src="/images/logo-white.svg" />
        )}
        {whiteBar && (
          <Image width={123.033} height={36} src="/images/logo-black-01.svg" />
        )}
        <div>
          <Link href="/">
            <NavLinks whiteBar={whiteBar}>Start Learning</NavLinks>
          </Link>
          <NavLinks whiteBar={whiteBar}>Learning Paths</NavLinks>
          <Link href="/pricing">
            <NavLinks whiteBar={whiteBar}>Pricing</NavLinks>
          </Link>
          <NavLinks whiteBar={whiteBar}>Contact Us</NavLinks>
        </div>
        {!name && (
          <div>
            <Link href="/login">
              <NavButtons
                variant="outlined"
                color="primary"
                style={{ textTransform: "capitalize" }}
              >
                Sign in
              </NavButtons>
            </Link>
            <Link href="/register">
              <NavButtons
                variant="contained"
                style={{ marginLeft: "1.5rem", textTransform: "capitalize" }}
              >
                register
              </NavButtons>
            </Link>
          </div>
        )}
        {name && (
          <NavbarDashContainer>
            <Link href="/dashboard">
              <DashboardButton>Dashboard</DashboardButton>
            </Link>
            <NotificationButton whiteBar={whiteBar}>
              <FaRegBell />
            </NotificationButton>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image width={35} height={35} alt="Picture of user" src={image} />
            </div>
          </NavbarDashContainer>
        )}
      </Container>
    </>
  );
};

export default Navbar;
