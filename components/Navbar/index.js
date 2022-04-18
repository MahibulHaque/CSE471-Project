import {
  Container,
  NavButtons,
  NavbarDashContainer,
  DashboardButton,
  NotificationButton,
  NavLinks,
} from "./NavbarElements";
import Link from "next/link";
import { FaRegBell } from "react-icons/fa";
import Image from "next/image";
import { useUserContext } from "../../Contexts/UserContext";

const Navbar = ({ whiteBar }) => {
  const { user } = useUserContext();
  return (
    <>
      <Container whiteBar={whiteBar}>
        {!whiteBar && (
          <Image
            width={123.033}
            height={36}
            src="/images/logo-white.svg"
            alt="Open Robotics logo"
          />
        )}
        {whiteBar && (
          <Image
            width={123.033}
            height={36}
            src="/images/logo-black-01.svg"
            alt="Open Robotics logo"
          />
        )}
        <div>
          <Link href="/" passHref>
            <NavLinks whiteBar={whiteBar}>Start Learning</NavLinks>
          </Link>
          <Link href="/learning-paths" passHref>
            <NavLinks whiteBar={whiteBar}>Learning Paths</NavLinks>
          </Link>

          <Link href="/pricing" passHref>
            <NavLinks whiteBar={whiteBar}>Pricing</NavLinks>
          </Link>
          <NavLinks whiteBar={whiteBar}>Contact Us</NavLinks>
        </div>
        {!user?.name && (
          <div>
            <Link href="/login" passHref>
              <NavButtons
                variant="outlined"
                color="primary"
                style={{ textTransform: "capitalize" }}
              >
                Sign in
              </NavButtons>
            </Link>
            <Link href="/register" passHref>
              <NavButtons
                variant="contained"
                style={{ marginLeft: "1.5rem", textTransform: "capitalize" }}
              >
                register
              </NavButtons>
            </Link>
          </div>
        )}
        {user?.name && (
          <NavbarDashContainer>
            <Link href="/dashboard" passHref>
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
              <Image
                width={35}
                height={35}
                alt="Picture of user"
                src={user?.image}
              />
            </div>
          </NavbarDashContainer>
        )}
      </Container>
    </>
  );
};

export default Navbar;
