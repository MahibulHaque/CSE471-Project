import axios from "axios";
import useSWR from "swr";
import dynamic from "next/dynamic";
import Course from "../../models/Course";
import React, { useEffect } from "react";
import CourseScreen from "../../components/CourseScreen";
import { useCourseContext } from "../../Contexts/CourseDetailContext";
import { useUserContext } from "../../Contexts/UserContext";
import connect from "../../lib/database";
const Navbar = dynamic(() => import("../../components/Navbar"), {
  ssr: false,
  loading: () => (
    <div
      style={{ width: "100vw", height: "60px", backgroundColor: "#1f1f1f" }}
    />
  ),
});
const Footer = dynamic(() => import("../../components/Footer"), {
  ssr: false,
  loading: () => <div />,
});

const fetcher = (...args) => fetch(...args).then((response) => response.json());
const CourseDetail = ({ courseInfo }) => {
  const { courseDetailUpdater } = useCourseContext();
  const { userUpdater } = useUserContext();
  const { data, error } = useSWR(
    `/api/auth/user/user-auth`,
    fetcher
  );
  if (data) {
    userUpdater(data);
  }

  useEffect(() => {
    courseDetailUpdater(courseInfo);
  }, []);
  return (
    <div>
      <Navbar />
      <CourseScreen />
      <Footer />
    </div>
  );
};

export default CourseDetail;
export async function getStaticProps({ params }) {
  await connect();
  const courseId = params.courseName;

  const res = await Course.findOne({ id: courseId });
  const courseInfo = JSON.parse(JSON.stringify(res));
  return {
    props: { courseInfo },
  };
}

export const getStaticPaths = async () => {
  await connect();
  const courses = await Course.find({});
  // Get the paths we want to pre-render based on posts
  const paths = courses.map((course) => ({
    params: { courseName: course.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};
