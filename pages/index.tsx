import type { NextPage } from 'next'
import Header from '../components/Home/Header'
import TabTwo from '../components/Home/TabTwo'
import NavBar from '../components/Nav'


const Home: NextPage = () => {
  return (
    <>
      <NavBar/>
      <Header/>
      <TabTwo/>
    </>
  )
}

export default Home
