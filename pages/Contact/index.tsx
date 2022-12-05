import ContactContent from "../../components/LandingPages/Contact";
import Footer from "../../components/LandingPages/Home/Footer";
import NavBarTwo from "../../components/NavTwo";
import { BodyContainer, Container } from "../../Global";

const Contact = () => {
  return (
    <Container>
      <NavBarTwo />
      <BodyContainer>
        <ContactContent />
      </BodyContainer>
      <Footer />
    </Container>
  );
};

export default Contact;
