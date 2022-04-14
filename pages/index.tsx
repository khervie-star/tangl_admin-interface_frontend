import type { NextPage } from 'next'
import Header from '../components/Home/Header'
import TabFive from '../components/Home/TabFive'
import TabFour from '../components/Home/TabFour'
import TabThree from '../components/Home/TabThree'
import TabTwo from '../components/Home/TabTwo'
import NavBar from '../components/Nav'


const Home: NextPage = () => {
  return (
    <>
      <NavBar/>
      <Header/>
      <TabTwo/>
      <TabThree/>
      <TabFour/>
      <TabFive/>
    </>
  )
}

export default Home
