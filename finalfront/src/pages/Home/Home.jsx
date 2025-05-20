import React from 'react'
import Header from '../../components/Header/Header'
import HomeSection from '../../components/HomeSection/HomeSection'
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection'
import OurSection from '../../components/OurSection/OurSection'
import GalerySection from '../../components/GalerySection/GalerySection'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <HomeSection/>
        <WelcomeSection/>
        <OurSection/>
        <GalerySection/>
        <Footer/>
    </div>
  )
}

export default Home