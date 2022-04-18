import { useState, createContext, useContext } from "react";

const PathContext = createContext();

export const usePathContext = () => useContext(PathContext);

function PathDetailContextProvider(props) {
  const [pathDetail, setPathDetail] = useState();
  function pathDetailUpdater(pathInfo) {
    setPathDetail(pathInfo);
  }

  const value = { pathDetail, setPathDetail, pathDetailUpdater };
  return (
    <PathContext.Provider value={value}>{props.children}</PathContext.Provider>
  );
}
export default PathDetailContextProvider;