import type { NextPage } from 'next'
import Footer from '../components/Home/Footer'
import Header from '../components/Home/Header'
import TabEight from '../components/Home/TabEight'
import TabEleven from '../components/Home/TabEleven'
import TabFive from '../components/Home/TabFive'
import TabFour from '../components/Home/TabFour'
import TabNine from '../components/Home/TabNIne'
import TabSeven from '../components/Home/TabSeven'
import TabSix from '../components/Home/TabSix'
import TabTen from '../components/Home/TabTen'
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
      <TabSix/>
      <TabSeven/>
      <TabEight/>
      <TabNine/>
      <TabTen/>
      <TabEleven/>
      <Footer/>
    </Container>
  )
}

export default Home
