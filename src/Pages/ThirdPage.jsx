import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
import img from '../assets/Vibrant Sneakers in Whimsical Garden.jpeg'

const ThirdPage = () => {

useGSAP(() => {
    // Hero content elements with stagger
    gsap.from('.hero-content > *', {
      scrollTrigger: {
        trigger: '.third-page-container',
        start: "top 80%",
        end: "30% center",
        // markers: true,
        toggleActions: 'play none none reverse',
        scrub: 1
      },
      y: 50,
      opacity: 0,
      stagger: {
        amount: 0.8,    // total stagger duration
        from: "start"   // stagger from first element
      }
    });

    // Hero image animation
    gsap.from('.hero-image', {
      scrollTrigger: {
        trigger: '.third-page-container',
        start: "top 80%",
        end: "30% center",
        // markers: true, 
        toggleActions: 'play none none reverse',
        scrub: 1
      },
      x: 100,
      opacity: 0,
    });

    // Case study animations - these will start later
    gsap.from('.case-study-title', {
      scrollTrigger: {
        trigger: '.third-page-container',
        start: "30% center",     // pehli animation khatam hone ke baad start
        end: "60% center",       // container ka 60% viewport ke center me ho
        // markers: true, 
        toggleActions: 'play none none reverse',
        scrub: 1
      },
      x: -50,
      opacity: 0,
    });

    gsap.from('.case-study-desc', {
      scrollTrigger: {
        trigger: '.third-page-container',
        start: "30% center",
        end: "60% center",
        // markers: true, 
        toggleActions: 'play none none reverse',
        scrub: 1
      },
      x: 50,
      opacity: 0,
    });

}, []);

  return (
    <div className='pt-36 mb-10 w-full  '>
      <div className='third-page-container bg-[#F3F3F3] h-[50vh] w-[93%] gap-6  p-4 flex mx-auto rounded-[40px]'>
        <div className='hero-content w-[90%] p-4 flex flex-col gap-4 xl:gap-10 justify-center'>
          <h1 className='text-3xl xl:text-5xl font-semibold'>Unlock Your Style</h1>
          <p className='hidden md:block md:text-[13px] xl:text-lg font-medium w-[70%]'>
          Find your perfect match with our diverse range of shoes, tailored to fit every lifestyle. Whether you prefer sporty, casual, or formal styles, we have something for everyone.
          </p>
          <button className="bg-black w-fit text-xs md:text-sm xl:text-xl text-white py-2 md:px-10 md:py-4 md:mt-4 rounded-lg">
          Explore the Collection
          </button>
        </div>
        <div className='hero-image h-full w-full'>
          
            <img className='w-full h-full object-cover rounded-3xl ' src={img} alt="" />
        </div>
        
      </div>
      <section className="sec1 items-center flex my-16  gap-8 md:gap-0">
        <h1 className=" case-study-title text-xl  h-fit md:h-full md:text-2xl lg:text-4xl px-1 py-2 font-semibold  md:px-3 md:py-2 mx-6 md:mx-18 bg-[#B9FF6A] rounded-lg">
        Join the Journey
        </h1>
        <p className=" case-study-desc  font-semibold w-[48%]">
        Step into luxury with our premium shoe line, where every detail is meticulously crafted to provide an unparalleled experience. Treat your feet to the comfort they deserve.
        </p>
      </section>
    </div>
  )
}

export default ThirdPage
