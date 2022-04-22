import Image from "next/image";
import React from "react";
import {
  AllLearningPathContainer,
  Card,
  CardContainer,
  Container,
  FeaturedPathCard,
  FeaturedPathContainer,
  TextContainer,
} from "./LearningPathsScreenElements";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
const LearningPaths = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Learning Paths</h1>
        <p>
          Learning paths are <b>content + jobs-backed</b> roadmaps curated by
          developers to accelerate your learning. Following these paths get you
          started immediately with the developer skills you need.
        </p>
      </TextContainer>
      <FeaturedPathContainer>
        <h1>Featured Path</h1>
        <FeaturedPathCard>
          <div className="featured__path_content_container">
            <Image
              src="https://codedamn.com/_next/image?url=%2Fassets%2Fimages%2Fpayments%2Ffullstack.png&w=256&q=75"
              width={192}
              height={108}
              alt="featured-path thumbnail"
            />
            <div className="detail_container">
              <h1>Fullstack ROS Developer</h1>
              <div>
                <span>4.9</span>
                <div>
                  <FaStar style={{ fill: "#eb8a2f" }} />
                  <FaStar style={{ fill: "#eb8a2f" }} />
                  <FaStar style={{ fill: "#eb8a2f" }} />
                  <FaStar style={{ fill: "#eb8a2f" }} />
                  <FaStar style={{ fill: "#eb8a2f" }} />
                </div>
                <p>750+ ratings</p>
                <p>2k students enrolled</p>
              </div>
              <p>
                Become a full-stack web developer, deploy applications
                end-to-end, use CI/CD, code backends, frontends, learn to write
                at scale, and more.
              </p>
            </div>
          </div>
          <button>Start Learning</button>
        </FeaturedPathCard>
      </FeaturedPathContainer>
      <AllLearningPathContainer>
        <h1>ALL LEARNING PATHS</h1>
        <CardContainer>
          <Link href="/learning-paths/ros-for-beginners" passHref>
            <Card>
              <h3>ROS For Beginners</h3>
              <p>The must-have learning path for ROS & Robotics beginners.</p>
              <div>Start Learning</div>
            </Card>
          </Link>
          <Link href="/learning-paths/robot-navigation" passHref>
            <Card>
              <h3>Robot Navigation</h3>
              <p>
                Make your robot navigate autonomously and understand how to
                build all the things.
              </p>
              <div>Start Learning</div>
            </Card>
          </Link>
          <Link href="/learning-paths/machine-learning-for-robots">
            <Card>
              <h3>Machine Learning for Robots</h3>
              <p>Machine Learning for Robots</p>
              <div>Start Learning</div>
            </Card>
          </Link>
        </CardContainer>
      </AllLearningPathContainer>
    </Container>
  );
};

export default LearningPaths;
