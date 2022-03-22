import Header from "../components/Home/Header";
import NavBar from "../components/Nav";
import TabThree from "../components/Home/TabThree";
import TabFour from "../components/Home/TabFour";
import TabFive from "../components/Home/TabFive";
import TabSix from "../components/Home/TabSix";
import TabSeven from "../components/Home/TabSeven";
import TabEight from "../components/Home/TabEight";
import TabNine from "../components/Home/TabNine";
import TabTen from "../components/Home/TabTen";
import TabEleven from "../components/Home/TabEleven";
import Footer from "../components/Home/Footer";
import TabTwo from "../components/Home/TabTwo";


const Home = () => {
  return (
    <>
      <NavBar/>
      <Header />
      <TabTwo/>
      <TabThree/>
      <TabFour/>
      <TabFive/>
      <TabSix/>
      <TabSeven/>
      <TabEight/>
      <TabNine/>
      <TabTen/>
      <TabEleven/>
      <Footer/>
    </>
  );
};

export default Home;
