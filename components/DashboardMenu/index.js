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
const DashboardMenu = () => {
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
        <LogoutButton>
          <AiOutlineLogout />
          Logout
        </LogoutButton>
      </MenuButtonHolder>
    </Container>
  );
};

export default DashboardMenu;
