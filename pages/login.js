import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/Navbar"));
const Login = dynamic(() => import("../components/LoginScreen"));
const login = () => {
  return (
    <>
      <Navbar whiteBar={true} />
      <Login />
    </>
  );
};

export default login;
