import { useState, createContext, useContext } from "react";

const CourseContext = createContext();

export const useCourseContext = () => useContext(CourseContext);

function CourseDetailContextProvider(props) {
  const [courseDetail, setCourseDetail] = useState();
  function courseDetailUpdater(courseInfo) {
    setCourseDetail(courseInfo);
  }

  const value = { courseDetail, setCourseDetail, courseDetailUpdater };
  return (
    <CourseContext.Provider value={value}>{props.children}</CourseContext.Provider>
  );
}
export default CourseDetailContextProvider;
