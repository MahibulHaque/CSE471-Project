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

const Navbar = () => {
  const { data: session, status } = useSession();
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
            <div style={{display:"flex",alignItems:"center",justifyContent:"center", borderRadius: "50%",overflow:"hidden" }}>
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
