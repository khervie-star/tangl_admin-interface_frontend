import type { NextPage } from 'next'
import Footer from '../components/Home/Footer'
import Header from '../components/Home/Header'
import TabEight from '../components/Home/TabEight'
import TabFive from '../components/Home/TabFive'
import TabFour from '../components/Home/TabFour'
// import TabNine from '../components/Home/TabNine'
import TabSeven from '../components/Home/TabSeven'
import TabSix from '../components/Home/TabSix'
import TabThree from '../components/Home/TabThree'
import TabTwo from '../components/Home/TabTwo'
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
