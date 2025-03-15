import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Navbar = () => {
    const navbarRef = useRef();
   
    useGSAP(()=>{
        // navbar ke andar ke saare elements ko select kiya
        const elements = navbarRef.current.querySelectorAll('.nav-item');
        
        gsap.from(elements, {
          duration: 1,
          y: -100,
          opacity: 0,
          stagger: 0.2, // har element 0.2 seconds ke delay se animate hoga
          ease: "power2.out"
        })
    },[])
      
    return (
    <div ref={navbarRef} className=' overflow-y-hidden h-16 md:py-14 md:h-20 px-6 md:px-8 lg:px-20 w-full flex justify-between items-center'>
      <h1 className=' text-xl md:text-1xl lg:text-2xl font-semibold nav-item'>WizardZ</h1>
        <div className='flex gap-4 items-center  lg:gap-8'>

        <h2 className=' hidden md:block font-semibold md:text-sm lg:textxs nav-item'>About Us</h2>
        <h2 className=' hidden md:block font-semibold md:text-sm lg:text-xs nav-item'>Services</h2>

        <h2 className=' hidden md:block font-semibold md:text-sm lg:text-xs nav-item'>Use Cases</h2>
        <h2 className=' hidden md:block font-semibold md:text-sm lg:text-xs nav-item'>Pricing</h2>
        <h2 className=' hidden md:block font-semibold md:text-sm lg:text-xs nav-item'>Blog</h2>

        <button className='font-bold border md:text-sm lg:text-xs rounded-lg px-4 py-2 lg:px-10 lg:py-4 nav-item'>Request a Quote</button>
      </div>
    </div>

  )
}

export default Navbar
