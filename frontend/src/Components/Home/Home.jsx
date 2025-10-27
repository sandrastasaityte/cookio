import React from 'react'
import './Home.css'
import Hero from "../Hero/Hero.jsx";
import NewArrivals from '../NewArrivals/NewArrivals.jsx';
import About from '../About/About.jsx';
import PopularFood from '../PopularFood/PopularFood.jsx'



const Home = () => {
  return (
    <div>
      <Hero/>
      <NewArrivals/>
      <About/>
      <PopularFood/>
   
      
    </div>
  )
}

export default Home
