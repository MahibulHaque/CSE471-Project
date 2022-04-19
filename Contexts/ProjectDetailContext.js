import { useState, createContext, useContext } from "react";

const ProjectContext = createContext();

export const useProjectContext = () => useContext(ProjectContext);

function ProjectDetailContextProvider(props) {
  const [projectDetail, setProjectDetail] = useState();
  function projectDetailUpdater(projectInfo) {
    setProjectDetail(projectInfo);
  }

  const value = { projectDetail, setProjectDetail, projectDetailUpdater };
  return (
    <ProjectContext.Provider value={value}>{props.children}</ProjectContext.Provider>
  );
}
export default ProjectDetailContextProvider;