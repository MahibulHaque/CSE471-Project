import {
  Container,
  ImageHolder,
  LogoutButton,
  MenuButtonHolder,
  MenuLink,
  MenuLinkContainer,
} from "./DashboardElements";
import {
  MdSpeed,
  MdLaptop,
  MdOutlineAccountTree,
  MdGroups,
  MdOutlineEmojiEvents,
} from "react-icons/md";
import {
  AiOutlineProject,
  AiOutlineSafetyCertificate,
  AiOutlineLogout,
} from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";
import { useUserContext } from "../../Contexts/UserContext";

const DashboardMenu = () => {
  const { user } = useUserContext();
  const router = useRouter();
  const handleLogout = () => {
    fetch("/api/auth/user/logout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <Container>
      <MenuLinkContainer>
        <MenuLink
          href="/dashboard"
          className={`${router.asPath === "/dashboard" ? "active" : ""}`}
        >
          <MdSpeed />
          Dashboard
        </MenuLink>
        <MenuLink
          href="/my-courses"
          className={`${router.asPath === "/my-courses" ? "active" : ""}`}
        >
          <MdLaptop />
          My Courses
        </MenuLink>
        <MenuLink
          href="/learning-paths"
          className={`${router.asPath === "/learning-paths" ? "active" : ""}`}
        >
          <MdOutlineAccountTree />
          Learning Paths
        </MenuLink>
        <MenuLink
          href="/community"
          className={`${router.asPath === "/community" ? "active" : ""}`}
        >
          <MdGroups />
          Community
        </MenuLink>
        <MenuLink
          href="/projects"
          className={`${router.asPath === "/projects" ? "active" : ""}`}
        >
          <AiOutlineProject />
          Projects
        </MenuLink>
        <MenuLink
          href="/events"
          className={`${router.asPath === "/events" ? "active" : ""}`}
        >
          <MdOutlineEmojiEvents />
          Events
        </MenuLink>
        <MenuLink
          href="/certificates"
          className={`${router.asPath === "/certificates" ? "active" : ""}`}
        >
          <AiOutlineSafetyCertificate />
          Your Certificates
        </MenuLink>
      </MenuLinkContainer>
      {user?.name && (
        <MenuButtonHolder>
          <LogoutButton onClick={handleLogout}>
            <AiOutlineLogout />
            Logout
          </LogoutButton>
          <ImageHolder>
            <div>
              <Image
                src={user?.image}
                width={30}
                height={30}
                style={{ marginLeft: "20px" }}
                alt="user-profile-image"
              />
            </div>

            <p>{user?.name}</p>
          </ImageHolder>
        </MenuButtonHolder>
      )}
    </Container>
  );
};

export default DashboardMenu;
