import axios from "axios";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import CourseScreen from "../../components/CourseScreen";
import { useCourseContext } from "../../Contexts/CourseDetailContext";
const Navbar = dynamic(() => import("../../components/Navbar"), {
  ssr: false,
  loading: () => <div style={{width:"100vw",height:"60px",backgroundColor:"#1f1f1f"}}/>,
});
const Footer = dynamic(() => import("../../components/Footer"), {
  ssr: false,
  loading: () => <div />,
});
const CourseDetail = ({ courseInfo }) => {
  const { courseDetailUpdater } = useCourseContext();

  useEffect(() => {
    courseDetailUpdater(courseInfo);
  }, []);
  return (
    <>
      <Navbar />
      <CourseScreen />
      <Footer />
    </>
  );
};

export default CourseDetail;
export async function getStaticProps({ params }) {
  const courseId = params.courseName;

  const res = await axios.get(`http://localhost:3000/api/courses/${courseId}`);
  const courseInfo = res.data.course;
  return {
    props: { courseInfo },
  };
}

export async function getStaticPaths() {
  const courses = await axios.get("http://localhost:3000/api/courses");

  // Get the paths we want to pre-render based on posts
  const paths = courses.data.courses.map((course) => ({
    params: { courseName: course.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
