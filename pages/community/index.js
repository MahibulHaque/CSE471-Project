import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useUserContext } from "../../Contexts/UserContext";
import User from "../../models/User";
import CommunityQuestion from "../../models/CommunityQuestion";
import CommunityScreen from "../../components/CommunityScreen";
import { useQuestionContext } from "../../Contexts/QuestionDetailContext";
import connect from "../../lib/database";
const Navbar = dynamic(() => import("../../components/Navbar"));
const DashboardMenu = dynamic(() => import("../../components/DashboardMenu"), {
  ssr: false,
  loading: () => <div />,
});
const Footer = dynamic(() => import("../../components/Footer"));
const CommunityPage = ({ name, email, image, questionDetail }) => {
  const { userUpdater } = useUserContext();
  const { questionDetailUpdater } = useQuestionContext();
  const userInfo = { name: name, email: email, image: image };
  useEffect(() => {
    userUpdater(userInfo);
    questionDetailUpdater(questionDetail);
  }, []);
  return (
    <div>
      <Navbar whiteBar={true} />
      <Wrapper>
        <DashboardMenu />
        <CommunityScreen />
      </Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: #fafafa;
`;

export default CommunityPage;

export async function getServerSideProps({ req, res }) {
  try {
    await connect();
    const questionResult = await CommunityQuestion.find({});
    const questionDetail = JSON.parse(JSON.stringify(questionResult));
    const token = getCookie("user-token", { req, res });
    if (token) {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      const obj = await User.findOne({ _id: verified.id });

      if (obj) {
        return {
          props: {
            email: obj.email,
            name: obj.username,
            image: obj.imageUrl,
            questionDetail,
          },
        };
      }
    }
    return { props: { questionDetail } };
  } catch (error) {
    return { props: {} };
  }
}
