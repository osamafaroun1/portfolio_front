// import React, { useEffect, useState } from 'react'
// import NavBar from '../../Components/NavBar/NavBar'
import ShowHero from '../ShowHero/ShowHero'
import ShowAboutMe from '../ShowAboutMe/ShowAboutMe'
import MyProject from '../../Components/MyProject/MyProject'
import { Contact } from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar'

export const Home = () => {

  return (
    <div>
      <NavBar/>
      <ShowHero/>
      <ShowAboutMe/>
      <MyProject/>
      <Contact/>
      <Footer/>
    </div>
  )
// export default Home
}