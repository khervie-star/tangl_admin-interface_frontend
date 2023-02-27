import AMLContent from "../../components/LandingPages/AML";
import Footer from "../../components/LandingPages/Home/Footer";
import NavBarTwo from "../../components/NavTwo";
import { BodyContainer } from "../../Global";

const AML = () => {
  return (
    <>
      <NavBarTwo />
      <BodyContainer>
        <AMLContent />
      </BodyContainer>
      <Footer />
    </>
  );
};

export default AML;
