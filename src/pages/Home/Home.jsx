import React from 'react'
import Welcome from '../welcome/Welcome'
import Partner from '../partner/Partner'
import Booking from '../booking/Booking'
import Dishes from '../dishes/Dishes'
import Ambiance from '../ambiance/Ambiance'
import Delivery from '../delivery/Delivery'

const Home = () => {
  return (
   <>
  <Welcome></Welcome>
  <Partner></Partner>
  <Booking></Booking>
  <Dishes></Dishes>
  <Ambiance></Ambiance>
  <Delivery></Delivery>


   </>
  )
}

export default Home