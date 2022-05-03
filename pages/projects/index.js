import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useProjectContext } from "../../Contexts/ProjectDetailContext";
import { useUserContext } from "../../Contexts/UserContext";
import Project from "../../models/Project";
import ProjectScreen from "../../components/ProjectScreen";
import User from "../../models/User";
import connect from "../../lib/database";
const Navbar = dynamic(() => import("../../components/Navbar"));
const DashboardMenu = dynamic(() => import("../../components/DashboardMenu"), {
  ssr: false,
  loading: () => <div />,
});
const Footer = dynamic(() => import("../../components/Footer"));
const ProjectPage = ({ name, email, image, projectInfo }) => {
  const { userUpdater } = useUserContext();
  const { projectDetailUpdater } = useProjectContext();
  const userInfo = { name: name, email: email, image: image };
  useEffect(() => {
    userUpdater(userInfo);
    projectDetailUpdater(projectInfo);
  }, []);
  return (
    <div>
      <Navbar whiteBar={true} />
      <Wrapper>
        <DashboardMenu />
        <ProjectScreen />
      </Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: #fafafa;
`;

export default ProjectPage;

export async function getServerSideProps({ req, res }) {
  try {
    await connect();
    const token = getCookie("user-token", { req, res });
    const projects = await Project.find({});
    const projectInfo = JSON.parse(JSON.stringify(projects));
    if (token) {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      const obj = await User.findOne({ _id: verified.id });

      if (obj) {
        return {
          props: {
            email: obj.email,
            name: obj.username,
            image: obj.imageUrl,
            projectInfo,
          },
        };
      }
    }
    return { props: { projectInfo } };
  } catch (error) {
    return { props: {} };
  }
}
