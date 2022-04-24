import React from "react";
import { FaMoon } from "react-icons/fa";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

import DashboardMenu from "../DashboardMenu";
import ChartComponent from "../ChartComponent";
import {
  ActivityContainer,
  AsideContainer,
  Container,
  CourseProgressContainer,
  GoalContainer,
  HeaderTag,
  IconContainer,
  LastActivityContainer,
  LeaderBoardLink,
  Levelbar,
  MainContainer,
  MainSection,
  ParticipationContainer,
  ProgressContainer,
  ProgressHeader,
  ProgressP,
  Topbar,
  Wrapper,
} from "./DashBoardElement";
import { LinearProgress, linearProgressClasses, styled } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { useUserContext } from "../../Contexts/UserContext";
import Image from "next/image";

const DashBoardScreen = () => {
  const { user } = useUserContext();
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 10,
    display: "flex",
    flexGrow: 0.95,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 10,
      backgroundColor: theme.palette.mode === "light" ? "#6366F1" : "#308fe8",
    },
  }));

  const percentage = 16;
  return (
    <Container>
      <DashboardMenu />
      <MainContainer>
        <Topbar>
          <HeaderTag>Good evening, {user?.name}.</HeaderTag>
          <IconContainer>
            <FaMoon />
          </IconContainer>
        </Topbar>
        <Wrapper>
          <MainSection>
            <CourseProgressContainer>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={{
                  // Customize the root svg element
                  root: {},
                  // Customize the path, i.e. the "completed progress"
                  path: {
                    // Path color
                    stroke: `#6366F1`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "rounded",
                    // Customize transition animation
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    // Rotate the path
                    transform: "rotate(0.0turn)",
                    transformOrigin: "center center",
                    strokeWidth: "3px",
                    strokeLinecap: "rounded",
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    strokeWidth: "3px",
                    // Trail color
                    stroke: "rgb(205,205,205)",

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    // Rotate the trail
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  // Customize the text
                  text: {
                    // Text color\

                    alignSelf: "center",
                    fill: "#6366F1",
                    // Text size
                    transform: "translate(-25%,10%)",
                    fontSize: "28px",
                  },
                  // Customize background - only used when the `background` prop is true
                  background: {
                    fill: "",
                  },
                }}
              />
              <LastActivityContainer>
                <h1>Fullstack learning path</h1>
                <p>getServerSideProps</p>
                <button>Resume where you left</button>
              </LastActivityContainer>
            </CourseProgressContainer>
            <ProgressContainer>
              <ProgressHeader>Your Progress</ProgressHeader>
              <ProgressP>
                You are at Level 8 (Hustler). Get 1585 more XP to level up
              </ProgressP>
              <Levelbar>
                <span>Lvl. 8</span>
                <BorderLinearProgress
                  variant="determinate"
                  value={60}
                  className="progressBar"
                />
                <span>Lvl. 9</span>
              </Levelbar>
              <LeaderBoardLink href="/ranks?filter=allTime">
                See Leaderboard
                <FaArrowRight />
              </LeaderBoardLink>
            </ProgressContainer>
            <GoalContainer></GoalContainer>
          </MainSection>
          <AsideContainer>
            <ParticipationContainer>
              <div className="image__holder">
                <Image src="/images/giftbox.png" width={90} height={90} />
              </div>
              <div>
                <h2>
                  Take part in <span>#30DaysOfRobotics</span>
                </h2>
                <p>
                  Learn and Practice Robotics every day and win exciting prizes!
                </p>
                <button>Attempt today's challenge</button>
              </div>
            </ParticipationContainer>
            <ActivityContainer>
              <h2>Activity last week</h2>
              <ChartComponent />
            </ActivityContainer>
          </AsideContainer>
        </Wrapper>
      </MainContainer>
    </Container>
  );
};

export default DashBoardScreen;
