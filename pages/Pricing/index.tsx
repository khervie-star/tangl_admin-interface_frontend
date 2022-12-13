import Footer from "../../components/LandingPages/Home/Footer";
import NavBarTwo from "../../components/NavTwo";
import PricingContent from "../../components/LandingPages/Pricing";
import { BodyContainer } from "../../Global";

const Pricing = () => {
  return (
    <>
      <NavBarTwo />
      <BodyContainer>
        <PricingContent />
      </BodyContainer>
      <Footer />
    </>
  );
};

export default Pricing;
