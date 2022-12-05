import NewsContent from "../../components/LandingPages/News";
import Footer from "../../components/LandingPages/Home/Footer";
import NavBarTwo from "../../components/NavTwo";
import { BodyContainer } from "../../Global";

const News = () => {
  return (
    <>
      <NavBarTwo />
      <BodyContainer>
        <NewsContent></NewsContent>
      </BodyContainer>
      <Footer />
    </>
  );
};

export default News;
