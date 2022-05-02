import axios from "axios";
import useSWR from "swr";
import Path from "../../models/Path";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { useCourseContext } from "../../Contexts/CourseDetailContext";
import { useUserContext } from "../../Contexts/UserContext";
import { usePathContext } from "../../Contexts/PathDetailContext";
import LearningPathScreen from "../../components/LearningPathDetailScreen";
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
const PathDetail = ({ pathInfo }) => {
  const { pathDetailUpdater } = usePathContext();
  const { userUpdater } = useUserContext();
  const { data, error } = useSWR(
    `http://localhost:3000/api/auth/user/user-auth`,
    fetcher
  );
  if (data) {
    userUpdater(data);
  }

  useEffect(() => {
    pathDetailUpdater(pathInfo);
  }, []);
  return (
    <div>
      <Navbar />
      <LearningPathScreen />
      <Footer />
    </div>
  );
};

export default PathDetail;
export async function getStaticProps({ params }) {
  await connect();
  const pathId = params.pathName;

  const res = await Path.findOne({ pathId: pathId });
  const pathInfo = JSON.parse(JSON.stringify(res));
  return {
    props: { pathInfo },
  };
}

export async function getStaticPaths() {
  await connect();
  const res = await Path.find({});

  // Get the paths we want to pre-render based on posts
  const paths = res.map((path) => ({
    params: { pathName: path.pathId },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
