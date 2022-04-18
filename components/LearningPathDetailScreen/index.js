import { LinearProgress, styled, linearProgressClasses } from "@mui/material";
import { BsCheckAll } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathContext } from "../../Contexts/PathDetailContext";
import {
  Container,
  DetailCard,
  HeroContainer,
  HeroContainerWrapper,
  HeroTextContainer,
  ModuleContainer,
  ModuleContainerWrapper,
} from "./LearningPathDetailScreenElements";

const LearningPathScreen = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 8,
    display: "flex",
    marginTop: "1rem",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 8,
      backgroundColor: theme.palette.mode === "light" ? "#6366F1" : "#308fe8",
    },
  }));
  const { pathDetail } = usePathContext();
  return (
    <Container>
      {pathDetail && (
        <>
          <HeroContainerWrapper>
            <HeroContainer>
              <HeroTextContainer>
                <h1>{pathDetail.pathTitle}</h1>
                <p>{pathDetail.pathDesc}</p>
                <div className="progress__percentage__container">
                  <div>
                    <span></span>Progress
                  </div>
                  <p>0%</p>
                </div>
                <BorderLinearProgress
                  variant="determinate"
                  value={0}
                  className="progressBar"
                />
                <button>Start your learning path</button>
              </HeroTextContainer>
              <Image
                src={pathDetail.image}
                width={325}
                height={370}
                alt="path-hero-image"
              />
            </HeroContainer>
          </HeroContainerWrapper>
          <ModuleContainerWrapper>
            <ModuleContainer>
              <h1>LEARNING PATH CONTENTS</h1>
              <div>
                {pathDetail.pathModules.map((module, i) => (
                  <Link href={`/learn/${module.moduleId}`} key={i} passHref>
                    <div>
                      <h4>Module {i + 1}</h4>
                      <p>{module.moduleTitle}</p>
                      <span>{module.moduleDesc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </ModuleContainer>
            <DetailCard>
              <h3>Subscribe to Pro</h3>
              <p>
                A Pro membership gives you unlimited access to all the courses
                and interactive labs as long as your membership lasts.
              </p>
              <h4>
                <BsCheckAll />
                <span>Full Stack Certification</span> from open robotics
              </h4>
              <h4>
                <BsCheckAll />
                <span>Learn by doing</span> - Interactive content with projects
              </h4>
              <h4>
                <BsCheckAll />
                <span>Moneyback guarantee</span> - 14 day full refund
              </h4>
              <h4>
                <BsCheckAll />
                <span>Certification exams</span> - to certify your knowledge
              </h4>
              <h4>
                <BsCheckAll /> <span>Up to date content relevant</span> in 2022
              </h4>
              <h4>
                <BsCheckAll />
                <span>Future content updates</span> for free
              </h4>
              <h1>৳999/mo</h1>
              <button>Subscribe to Pro</button>
            </DetailCard>
          </ModuleContainerWrapper>
        </>
      )}
    </Container>
  );
};

export default LearningPathScreen;
