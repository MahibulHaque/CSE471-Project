import Image from "next/image";
import React from "react";
import { CardHeader, styled } from "@mui/material";
import {
  Card,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { FaCheck } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import {RiVideoLine} from "react-icons/ri"
import { useCourseContext } from "../../Contexts/CourseDetailContext";
import {
  CardList,
  Container,
  CourseStructureContainer,
  DescriptionContainer,
  GoalsContainer,
  HeroButtonContainer,
  HeroContainer,
  HeroContainerWrapper,
  HeroTextContainer,
  Wrapper,
} from "./CourseScreenElements";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const CardHeaderStyled = styled(CardHeader)(({ theme }) => ({
  // color: theme.palette.success.main,
  "& .MuiCardHeader-title": {
    fontSize: "18px",
    fontWeight:700,
    fontFamily:"Inter",
  },
}));

const CourseScreen = () => {
  const { courseDetail } = useCourseContext();
  const [expandedId, setExpandedId] = React.useState(-1);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };
  return (
    <>
      {courseDetail && (
        <Container>
          <HeroContainer>
            <HeroContainerWrapper>
              <HeroTextContainer>
                <h1>{courseDetail.courseTitle}</h1>
                <p>{courseDetail.courseDesc}</p>
              </HeroTextContainer>
              <HeroButtonContainer>
                <Image src={courseDetail.imageUrl} width={389} height={219} />
                <h1>{courseDetail.courseType}</h1>
                <button>Start your course</button>
              </HeroButtonContainer>
            </HeroContainerWrapper>
          </HeroContainer>
          <Wrapper>
            <GoalsContainer>
              <h1>Goals</h1>
              {courseDetail.courseGoals.map((goal) => (
                <ul>
                  <li>
                    <FaCheck style={{ fill: "#2ebc4f" }} />
                    {goal}
                  </li>
                </ul>
              ))}
            </GoalsContainer>
            <DescriptionContainer>
              <h1>Description</h1>
              <p>{courseDetail.courseDesc}</p>
            </DescriptionContainer>
            <CourseStructureContainer>
              <h1>Course Structure</h1>

              {courseDetail.courseUnits.map((unit, i) => (
                <Card sx={{ maxWidth: 400 }} key={i}>
                  <CardActions
                    disableSpacing
                    style={{ display: "flex", justifyContent: "space-between",backgroundColor:"#f5f5f5" }}
                  >
                    <CardHeaderStyled title={unit.title} />
                    <ExpandMore
                      expand={expandedId === i}
                      onClick={() => handleExpandClick(i)}
                      aria-expanded={expandedId === i}
                      aria-label="show more"
                    >
                      <MdExpandMore />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography style={{fontSize:"16px",fontFamily:"Inter",color:"black"}}>{unit?.unitDesc}</Typography>
                      <CardList>
                        {unit?.unitTopics?.map((topic, j) => (
                          <li>
                            <RiVideoLine />
                            {topic}
                          </li>
                        ))}
                      </CardList>
                    </CardContent>
                  </Collapse>
                </Card>
              ))}
            </CourseStructureContainer>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default CourseScreen;
