import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"));
const PricingScreen = dynamic(() => import("../components/PricingScreen"));
const pricing = () => {
  return (
    <>
      <Navbar whiteBar={true} />
      <PricingScreen />
    </>
  );
};
export default pricing;
