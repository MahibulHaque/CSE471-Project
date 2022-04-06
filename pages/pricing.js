import dynamic from "next/dynamic";
import PricingScreen from "../components/PricingScreen";
const Navbar = dynamic(() => import("../components/Navbar"));
const Footer = dynamic(() => import("../components/Footer"));
const pricing = () => {
  return (
    <>
      <Navbar whiteBar={true} />
      <PricingScreen />
      <Footer />
    </>
  );
};
export default pricing;
