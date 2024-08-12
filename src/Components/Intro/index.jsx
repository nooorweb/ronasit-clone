import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Intro = () => {
useEffect(()=>{
AOS.init({

  offset: 200,
  duration: 900,

  
})


},[])


  return (
    <div className=' flex  justify-between gap-2 ' data-aos="fade-up">

<div className='flex flex-col gap-7 items-start  px-10' >
    <p>What We Do</p>
    <h1 className='text-4xl font-semibold leading-normal '> Ronas IT is a software development company that provides professional IT services for entrepreneurs and companies around the world.</h1>


{/* <Btn className='py-5 px-10   text-black rounded-full border-2 border-slate-400 bg-white hover:text-white'>View More</Btn> */}
  
</div>
<div className='flex flex-col gap-4   pt-14'>
    <p className='pl-32'>We have been designing, developing, and maintaining apps since 2007.</p>
    <p className='pl-32 '>Our goal is to create software solutions that match our clients’ needs and expectations. Ronas IT workflow is based on analytics and agile methodology that help us to provide high-quality IT services to small businesses and startups.</p>
</div>

    </div>
  )
}

export default Intro