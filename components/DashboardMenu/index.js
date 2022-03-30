import {
  Container,
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

const DashboardMenu = () => {
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
        <MenuLink className="active">
          <MdSpeed />
          Dashboard
        </MenuLink>
        <MenuLink>
          <MdLaptop />
          My Courses
        </MenuLink>
        <MenuLink>
          <MdOutlineAccountTree />
          Learning Paths
        </MenuLink>
        <MenuLink>
          <MdGroups />
          Community
        </MenuLink>
        <MenuLink>
          <AiOutlineProject />
          Projects
        </MenuLink>
        <MenuLink>
          <MdOutlineEmojiEvents />
          Events
        </MenuLink>
        <MenuLink>
          <AiOutlineSafetyCertificate />
          Your Certificates
        </MenuLink>
      </MenuLinkContainer>

      <MenuButtonHolder>
        <LogoutButton onClick={handleLogout}>
          <AiOutlineLogout />
          Logout
        </LogoutButton>
      </MenuButtonHolder>
    </Container>
  );
};

export default DashboardMenu;
