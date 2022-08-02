import type { NextPage } from 'next'
import Footer from '../components/LandingPages/Home/Footer'
import Header from '../components/LandingPages/Home/Header'
import TabEight from '../components/LandingPages/Home/TabEight'
import TabFive from '../components/LandingPages/Home/TabFive'
import TabFour from '../components/LandingPages/Home/TabFour'
// import TabNine from '../components/Home/TabNine'
import TabSeven from '../components/LandingPages/Home/TabSeven'
import TabSix from '../components/LandingPages/Home/TabSix'
import TabThree from '../components/LandingPages/Home/TabThree'
import TabTwo from '../components/LandingPages/Home/TabTwo'
import NavBar from '../components/Nav'
import { Container } from '../Global'


const Home: NextPage = () => {
  return (
    <Container>
      <NavBar/>
      <Header/>
      <TabTwo/>
      <TabThree/>
      <TabFour/>
      <TabFive/>
      {/* <TabNine/> */}
      <TabSix/>
      <TabSeven/>
      <TabEight/>
      <Footer/>
    </Container>
  )
}

export default Home
