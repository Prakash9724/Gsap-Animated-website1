import React from "react";
import Card from "../components/Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import  ScrollTrigger  from "gsap/ScrollTrigger";
import img1 from '../assets/Dynamic Sneaker Splash.jpeg'
import img2 from '../assets/Floral Sneaker Harmony.jpeg'
import img3 from '../assets/Minimalist Sneaker Display.jpeg'
import img4 from '../assets/Stylish Sneaker with Flowers.jpeg'
import img5 from '../assets/Stylish Sneakers with Flowers.jpeg'
import img6 from '../assets/Stylish Pastel Sneakers.jpeg'



gsap.registerPlugin(ScrollTrigger);
const SecondPage = () => {


  useGSAP(()=>{
    gsap.from('.sec1',{
      scrollTrigger:{
        trigger: '.sec1',
        start: 'top 80%',
        end: 'top 20%',
        // markers: true,
        toggleActions: 'play none none reverse',
        scrub: 1
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })

    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'top center',
          // markers: true,
          toggleActions: 'play none none reverse',
          scrub: 1
        },
        x: index % 2 === 0 ? -200 : 200,
        opacity: 0,
        duration: 1.5
      });
    });
  },[])

  return (
    <div className="w-screen min-h-screen">
      <section className="sec1 items-center flex my-4 gap-8 md:gap-0">
        <h1 className="text-xl  h-fit md:h-full md:text-2xl lg:text-4xl px-1 py-2 font-semibold  md:px-3 md:py-2 mx-6 md:mx-18 bg-[#B9FF6A] rounded-lg">
        See the Latest
        </h1>
        <p className="font-semibold w-[48%]">
        Discover the joy of walking in shoes that are designed to support your every step. Our ergonomic designs ensure that you stay comfortable, no matter how long you’re on your feet.
        </p>
      </section>

      <section className="sec2  flex flex-wrap gap-8 xl:gap-14 shrink-0 mx-3 md:ml-6 mt-18 lg:ml-14">
        <Card
          className='card'
          title="Every step tells a story!"
          imageUrl={img1}
          buttonText="Explore More"
          
          bgColor="bg-white"
          btntext="text-[#B9FF6A]"
        />

        <Card
          className='card'
          title="Where comfort meets style!"
          imageUrl={img2}
          textColor="text-white"
          buttonText="Explore More"
          bgColor="bg-black"
          btntext="text-black"
          btnbg="bg-white"
        />

        <Card
          className='card'
          title="Walk your way to a better day!"
          imageUrl={img3}
          buttonText="Explore More"
          bgColor="bg-black"
          btntext="text-black"
          btnbg="bg-white"
          textColor="text-white"
        />

        <Card
          className='card'
          title="Fashion at your feet!"
          imageUrl={img4}
          buttonText="Explore More"
          btntext="text-[#B9FF6A]"
        />

        <Card
          className='card'
          title="Shoes that define your personality!"
          imageUrl={img5}
          buttonText="Explore More"
          btntext="text-[#B9FF6A]"
        />
        <Card
          className='card'
          title="Shoes that take you places!"
          imageUrl={img6}
          buttonText="Explore More"
          bgColor="bg-black"
          btntext="text-black"
          btnbg="bg-white"
          textColor="text-white"
        />
      </section>
    </div>
  );
};

export default SecondPage;
