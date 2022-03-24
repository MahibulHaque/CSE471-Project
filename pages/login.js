import db from "../lib/database";
import Login from "../components/LoginScreen";
import Navbar from "../components/Navbar";
const login = () => {
  return (
    <>
      <Navbar whiteBar={true}/>
      <Login />
    </>
  );
};

export default login;
