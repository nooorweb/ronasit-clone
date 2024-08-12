import React from 'react'
import Hero from '../Hero/index.jsx'
import Intro from '../Intro/index.jsx'
import Service from '../Servicetypes/index.jsx'
import Design from '../Services/Design/index.jsx'
import Development from '../Services/Development/index.jsx'
import Maintain from '../Services/Maintainence/index.jsx'
import Sidebar from '../Sidebar/index.jsx'




const Home = () => {
  
  return (
<div className='px-20'>
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