import React, { useEffect } from 'react'
import Aos from "aos";

const AsCompany = () => {

useEffect(()=>{

Aos.init({

duration:1000

})

})

  return (
    <div className='py-16 px-10  text-2xl  ' data-aos='fade-up'>
        <div className=' max-w-lg  px-5 flex flex-col gap-10'>

        <p>As a software development company, we are not only releasing successful projects but also constantly sharing our experience.</p>

<p className='pr-20'>Take a look at some projects that we have implemented.</p>

        </div>


    </div>
  )
}

export default AsCompany