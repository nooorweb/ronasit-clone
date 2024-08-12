import React from 'react'


const Calculater = () => {
  return (
    <div className=' flex justify-center items-justify py-16 mt-20   bg-customBlue '>
<div className=' flex flex-col gap-7  text-center max-w-xl  text-white'  >
<h1 className='text-5xl font-medium'>MVP calculater</h1>
<div className='text-center '>
<p className='text-sm px-3'>An MVP is a basic version of a product built with the core features to satisfy early users and validate a product idea quickly and with minimal costs. Here you can get a rough estimate of your future product and set budget frames.
</p>

</div>


  <button className='border-2 py-5 rounded-full cursor-pointer bg-customBlue text-white mx-3 '>
          Start
        </button>


</div>


    </div>
  )
}

export default Calculater