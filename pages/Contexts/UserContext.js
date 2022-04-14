import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

function UserContextProvider(props) {
  const [user, setUser] = useState();
  function userUpdater(userInfo) {
    setUser(userInfo);
  }

  const value = { user, setUser, userUpdater };
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}
export default UserContextProvider;
