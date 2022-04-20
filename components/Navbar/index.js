import {
  Container,
  NavButtons,
  NavbarDashContainer,
  DashboardButton,
  NotificationButton,
  NavLinks,
  NavWrapper,
  MenuButton,
  NavMenuContainer,
  NavMenu,
  NavMenuLinkContainer,
  NavMenuLink,
  Logo,
} from "./NavbarElements";
import Link from "next/link";
import {
  FaRegBell,
  FaMap,
  FaCreditCard,
  FaLaptop,
  FaGlobe,
} from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiBeaker } from "react-icons/hi";
import Image from "next/image";
import { useUserContext } from "../../Contexts/UserContext";
import { useState } from "react";

const Navbar = ({ whiteBar }) => {
  const { user } = useUserContext();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <NavWrapper whiteBar={whiteBar}>
      <Container whiteBar={whiteBar}>
        <Logo>
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
        </Logo>
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
          <div style={{ display: "flex", alignItems:"center" }}>
            <Link href="/login" passHref>
              <NavButtons whiteBar={whiteBar} style={{ background: "none" }}>
                Sign in
              </NavButtons>
            </Link>
            <Link href="/register" passHref>
              <NavButtons whiteBar={whiteBar} style={{ color: "white" }}>
                register
              </NavButtons>
            </Link>
            <MenuButton
              whiteBar={whiteBar}
              onClick={() => {
                setMenuOpen((prev) => !prev);
              }}
            >
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </MenuButton>
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
            <MenuButton
              whiteBar={whiteBar}
              onClick={() => {
                setMenuOpen((prev) => !prev);
              }}
            >
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </MenuButton>
          </NavbarDashContainer>
        )}
      </Container>
      {menuOpen && (
        <NavMenuContainer whiteBar={whiteBar}>
          <NavMenu whiteBar={whiteBar}>
            <NavMenuLinkContainer whiteBar={whiteBar}>
              <NavMenuLink whiteBar={whiteBar} href="/learning-paths">
                <FaMap />
                Learning Paths
              </NavMenuLink>
              <NavMenuLink whiteBar={whiteBar} href="/courses">
                <FaLaptop />
                Courses
              </NavMenuLink>
              <NavMenuLink whiteBar={whiteBar} href="/pricing">
                <FaCreditCard />
                Pricing
              </NavMenuLink>
              <NavMenuLink whiteBar={whiteBar} href="/projects">
                <HiBeaker />
                Build a Project
              </NavMenuLink>
              <NavMenuLink whiteBar={whiteBar} href="/contact">
                <FaGlobe />
                Contact Us
              </NavMenuLink>
            </NavMenuLinkContainer>
            <Link href="/dashboard" passHref>
              <button>Dashboard</button>
            </Link>
          </NavMenu>
        </NavMenuContainer>
      )}
    </NavWrapper>
  );
};

export default Navbar;
