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
  MdDashboard
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
          className={`${router.asPath.includes("dashboard") ? "active" : ""}`}
        >
          <MdSpeed />
          Dashboard
        </MenuLink>
        <MenuLink
          href="/courses/view"
          className={`${router.asPath.includes("courses") ? "active" : ""}`}
        >
          <MdLaptop />
          My Courses
        </MenuLink>
        <MenuLink
          href="/learning-paths"
          className={`${
            router.asPath.includes("learning-paths") ? "active" : ""
          }`}
        >
          <MdOutlineAccountTree />
          Learning Paths
        </MenuLink>
        <MenuLink
          href="/community"
          className={`${router.asPath.includes("community") ? "active" : ""}`}
        >
          <MdGroups />
          Community
        </MenuLink>
        <MenuLink
          href="/playgrounds"
          className={`${router.asPath.includes("playgrounds") ? "active" : ""}`}
        >
          <MdDashboard />
          Playgrounds
        </MenuLink>
        <MenuLink
          href="/projects"
          className={`${router.asPath.includes("projects") ? "active" : ""}`}
        >
          <AiOutlineProject />
          Projects
        </MenuLink>
        <MenuLink
          href="/events"
          className={`${router.asPath.includes("events") ? "active" : ""}`}
        >
          <MdOutlineEmojiEvents />
          Events
        </MenuLink>
        <MenuLink
          href="/certificates"
          className={`${
            router.asPath.includes("certificates") ? "active" : ""
          }`}
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
