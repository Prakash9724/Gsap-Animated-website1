import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const FirstPage = () => {
  

  const leftSection = useRef();
  const rightSection = useRef();

  useGSAP(()=>{
    const tl = gsap.timeline({
      defaults:{
        duration:1,
        ease:'power4.out'
      }}
    );

    tl.from(".title",{
      x:-100,
      opacity:0
    })
    .from('.description',{
      x:-100,
      opacity:0,
    },'-=0.5')
    .from('.cta-button',{
      y:50,
      opacity:0,
    },'-=0.3')


    .from('.imagee',{
      x:100,
      opacity:0,
      scale:0.5
    },'-=0.8')
    
    .from('.brand-logo',{
      y:30,
      opacity:0,
      stagger:0.1,
    },'-=0.5')
    
    gsap.to(".brand-logo", {
      y: -10,
      duration: 1.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.2,
        from: "random"
      }
    });

  },[])

  return (
    <div className="w-full h-screen overflow-x-hidden">
      <div className=" md:flex  w-full h-screen md:h-[70vh]">
        <div ref={leftSection} className=" md:w-[45%]  px-10  md:px-10 lg:pl-20  ">
          <h1  className=" title text-4xl md:text-5xl xl:text-6xl xl:leading-tight  xl:w-[95%] font-bold py-5 md:py-10 w-[80%]">
          Experience the perfect blend of style and comfort with our latest collection.
          </h1>

          <p className="description pb-5 md:pb-2 text-gray-600 text-sm  lg:text-sm lg:py-6 lg:pb-10 md:text-sm md:w-[100%] lg:w-[70%]">
         Elevate your footwear game with our stylish options that combine fashion and functionality. Each pair is a testament to quality craftsmanship and innovative design
          </p>
          <button className="cta-button bg-black text-sm md:text-sm lg:text-xl text-white px-10 py-5 md:mt-2 rounded-lg">
          Get Yours Today
          </button>
        </div>
        <div  ref={rightSection} className="md:w-[55%] lg:w-[55%] flex justify-center p-5 md:p-10 items-center">
          <img
            className="imagee md:w-[100%]  lg:w-[80%] object-cover"
            src="https://framerusercontent.com/images/57Ruwy4ZsvnD8kCeRIyxAbfU0.png"
            alt=""
          />
        </div>
      </div>
      <div className="justify-between grid-cols-3 grid gap-4 lg:flex items-center p-5 mb-24 md:px-20 md:py-14">
        <img className="brand-logo h-8 md:h-9 " src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-black-transparent.png" alt="" />
        <img className="brand-logo h-8 md:h-9 " src="https://logovectordl.com/wp-content/uploads/2021/11/dribbble-logo-vector.png" alt="" />
        <img className="brand-logo h-8 md:h-9 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwG7AvRZNY_aBVjnUWVgf-iopbz_7QOMVf4Q&s" alt="" />
        <img className="brand-logo h-8 md:h-9 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDYTqzqvXPGK2VOxhVJCmdmDbfpzWDqQDEQ&s" alt="" />
        <img className="brand-logo h-8 md:h-9 " src="https://logowik.com/content/uploads/images/netflix-black6126.logowik.com.webp" alt="" />
        <img className="brand-logo h-8 md:h-9 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMqvr9VLfcmwxvMfxU8bkODl0iMYdBKEA2A&s" alt="" />
      </div>
    </div>
  );
};


export default FirstPage;
