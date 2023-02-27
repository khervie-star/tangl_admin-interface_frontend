import Footer from "../../components/LandingPages/Home/Footer";
import RiskContent from "../../components/LandingPages/Risk";
import NavBarTwo from "../../components/NavTwo";
import { BodyContainer } from "../../Global";

const Risk = () => {
  return (
    <>
      <NavBarTwo />
      <BodyContainer>
        <RiskContent />
      </BodyContainer>
      <Footer />
    </>
  );
};

export default Risk;
