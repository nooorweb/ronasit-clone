import React from 'react'
import Hero from './Hero'
import Intro from './Intro'
import Service from './Service'
import Design from './Design'
import Development from './Development'
import Maintain from './Maintain'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className='px-20  '  >
      <Sidebar/>
   <Hero/>

<Intro/>
 <Service/>
<Design/> 
<Development/>
<Maintain/>  



    </div>
  )
}

export default Home