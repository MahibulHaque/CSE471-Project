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

const Navbar = ({ whiteBar }) => {
  const { data: session, status } = useSession();
  return (
    <>
      <Container whiteBar={whiteBar}>
        {!whiteBar && (
          <Image width={161.0938} height={48} src="/images/logo-white-01.svg" />
        )}
        {whiteBar && (
          <Image width={161.0938} height={48} src="/images/logo-black.svg" />
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
        {!session && (
          <div>
            <Link href="/login">
              <NavButtons variant="outlined" color="primary">
                Sign in
              </NavButtons>
            </Link>
            <Link href="/register">
              <NavButtons variant="contained" style={{ marginLeft: "1.5rem" }}>
                Register
              </NavButtons>
            </Link>
          </div>
        )}
        {session && (
          <NavbarDashContainer>
            <DashboardButton>Dashboard</DashboardButton>
            <NotificationButton>
              <FaRegBell
                style={{ width: "22px", height: "22px", fill: "#d4d4d4" }}
              />
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
              <Image
                width={45}
                height={45}
                alt="Picture of user"
                src={session?.user.image}
              />
            </div>
          </NavbarDashContainer>
        )}
      </Container>
    </>
  );
};

export default Navbar;
