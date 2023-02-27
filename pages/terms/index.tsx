import Footer from "../../components/LandingPages/Home/Footer";
import TermsContent from "../../components/LandingPages/Terms";
import NavBarTwo from "../../components/NavTwo";
import { BodyContainer } from "../../Global";

const Terms = () => {
  return (
    <>
      <NavBarTwo />
      <BodyContainer>
        <TermsContent />
      </BodyContainer>
      <Footer />
    </>
  );
};

export default Terms;
