import React from "react";
import { Card, CardContainer, Container, TextContainer } from "./ProjectScreenElements";
import { useProjectContext } from "../../Contexts/ProjectDetailContext";
import Image from "next/image";

const ProjectScreen = () => {
  const { projectDetail } = useProjectContext();
  return (
    <Container>
      <TextContainer>
        <h1>Build Amazing Projects</h1>
        <p>Projects offer a practical and hands-on approach to reinforce what you've learnt on Codedamn. Build a wide range of projects to hone your development skills.</p>
        <button>Browse Community submissions</button>
      </TextContainer>
      {projectDetail && (
        <CardContainer>
          {projectDetail.map((project,index) => (
            <Card key={index}>
              <Image src={project.projectImage} width={300} height={200} alt="project-image"/>
              <h3>{project.projectName}</h3>
              <p>{project.projectDesc}</p>
              <div className={`${project.projectTag === "Easy" ? "Easy" : ""}${project.projectTag === "Medium" ? "Medium" : ""}`}>{project.projectTag}</div>
            </Card>
          ))}
        </CardContainer>
      )}
    </Container>
  );
};

export default ProjectScreen;
