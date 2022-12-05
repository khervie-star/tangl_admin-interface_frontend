import type { NextPage } from "next";
import Footer from "../components/LandingPages/Home/Footer";
import Header from "../components/LandingPages/Home/Header";
import SliderComponent from "../components/LandingPages/Home/SliderComponent";
import TabEight from "../components/LandingPages/Home/TabEight";
import TabFive from "../components/LandingPages/Home/TabFive";
import TabFour from "../components/LandingPages/Home/TabFour";
import TabNine from "../components/LandingPages/Home/TabNine";
import TabSeven from "../components/LandingPages/Home/TabSeven";
import TabSix from "../components/LandingPages/Home/TabSix";
import TabThree from "../components/LandingPages/Home/TabThree";
import TabTwo from "../components/LandingPages/Home/TabTwo";
import NavBar from "../components/Nav";
import { BodyContainer, Container } from "../Global";

const Home: NextPage = () => {
  return (
    <Container>
      <NavBar />
      <BodyContainer>
        <Header />
        <SliderComponent />
        <TabTwo />
        <TabThree />
        <TabFour />
        <TabFive />
        {/* <TabNine/> */}
        <TabSix />
        <TabSeven />
        <TabEight />
      </BodyContainer>
      <Footer />
    </Container>
  );
};

export default Home;
