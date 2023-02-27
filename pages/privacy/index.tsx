import Footer from "../../components/LandingPages/Home/Footer";
import PrivacyContent from "../../components/LandingPages/Privacy";
import NavBarTwo from "../../components/NavTwo";
import { BodyContainer } from "../../Global";

const Privacy = () => {
  return (
    <>
      <NavBarTwo />
      <BodyContainer>
        <PrivacyContent />
      </BodyContainer>
      <Footer />
    </>
  );
};

export default Privacy;
