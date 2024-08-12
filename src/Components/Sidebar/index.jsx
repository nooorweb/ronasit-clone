import React from 'react';



const Slinks = [
  { iconClass: 'fa-brands fa-instagram fa-lg' },
  {  iconClass: 'fa-brands fa-facebook fa-xl' },
  {  iconClass: 'fa-brands fa-dribbble fa-lg' },
  {  iconClass: 'fa-brands fa-behance fa-lg' },
  {  iconClass: 'fa-brands fa-linkedin-in fa-lg' }
];

const Sidebar = () => {
  return (



    <div className='fixed left-5 z-30 flex flex-col gap-2 bottom-10'>
{Slinks.map((link)=>{

return(
<button className="bg-secondary text-primary w-10 h-10 rounded-full flex justify-center items-center">
  <a href="/#">
    <i className={link.iconClass}></i>
  </a>
</button>

)

})}

    </div>



    // <div className='fixed left-7 z-30 flex flex-col gap-2 bottom-10'>
    //   {socialMediaLinks.map((link) => (
    //     <a
    //       // key={index}
    //       href='/#'
    //       target='/#'
    //       rel='noopener noreferrer'
    //       className='bg-black text-white w-10 h-10 rounded-full flex justify-center items-center'
    //     >
    //       <i className={link.iconClass}></i>
    //     </a>
    //   ))}
    // </div>
  );
};

export default Sidebar;
