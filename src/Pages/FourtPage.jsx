import React, { useRef } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const FourtPage = () => {
  const containerRef = useRef(null);
  const footerRef = useRef(null);

  useGSAP(() => {
    // Dark section cards animation
    gsap.from('.card-content', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "30% center",
        toggleActions: 'play none none reverse',
        scrub: 1
      },
      y: 100,
      opacity: 0,
      stagger: 0.2
    });

    // Learn More buttons animation
    gsap.from('.learn-more', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "10% 70%",
        end: "40% center",
        toggleActions: 'play none none reverse',
        scrub: 1
      },
      y: 30,
      opacity: 0,
      stagger: 0.3
    });

    // Footer animations
    gsap.from('.footer-col', {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        end: "30% center",
        toggleActions: 'play none none reverse',
        scrub: 1
      },
      y: 50,
      opacity: 0,
      stagger: 0.2
    });

    // Social icons animation
    gsap.from('.social-icon', {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 70%",
        toggleActions: 'play none none none'
      },
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(1.7)"
    });

    // Footer bottom links animation
    gsap.from('.footer-bottom', {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "20% 80%",
        toggleActions: 'play none none none'
      },
      y: 20,
      opacity: 0,
      duration: 1
    });
  }, []);

  return (
    <div className='w-full'>
      <div ref={containerRef} className='w-[93%] mx-auto rounded-[40px] py-10 bg-[#1E1E1E]'>
        <div className='bg-[#1E1E1E] w-full px-6 md:px-10 lg:px-16 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            
            {/* First Card */}
            <div className='card-content border-r border-gray-700 pr-4'>
              <p className='text-white mb-8'>
              Step into a world of comfort and style with our latest footwear collection. Each pair is designed to provide the perfect balance of support and elegance, ensuring you look and feel your best.
              </p>
            </div>
            
            {/* Second Card */}
            <div className='card-content border-r border-gray-700 pr-4'>
              <p className='text-white mb-8'>
              Our shoes are crafted with the finest materials, offering durability and style for every occasion. Whether you're heading to the office or out for a casual stroll, we have the perfect pair for you.
              </p>
            </div>
            
            {/* Third Card */}
            <div className='card-content'>
              <p className='text-white mb-8'>
              Experience the freedom of movement with our lightweight and flexible designs. Our shoes are engineered to keep you comfortable all day long, no matter where your adventures take you. From classic designs to modern trends, our collection caters to every taste. Discover shoes that not only enhance your outfit but also provide the comfort you deserve.
              </p>
            </div>
          </div>
          
          {/* Learn More buttons in one line */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
            <div className='learn-more flex items-center text-[#7CFC00]'>
              <h2 className='text-xl font-medium'>Learn More</h2>
              <i className='ri-arrow-right-up-line text-xl ml-2'></i>
            </div>
            
            <div className='learn-more flex items-center text-[#7CFC00]'>
              <h2 className='text-xl font-medium'>Learn More</h2>
              <i className='ri-arrow-right-up-line text-xl ml-2'></i>
            </div>
            
            <div className='learn-more flex items-center text-[#7CFC00]'>
              <h2 className='text-xl font-medium'>Learn More</h2>
              <i className='ri-arrow-right-up-line text-xl ml-2'></i>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern Footer */}
      <footer ref={footerRef} className='bg-[#111] text-white py-16 mt-20'>
        <div className='w-[93%] mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
            {/* Logo and Description */}
            <div className='footer-col col-span-1 md:col-span-2'>
              <h1 className='text-3xl font-bold mb-6'>WizardZ</h1>
              <p className='text-gray-400 mb-6 pr-10'>
                Navigating the digital landscape for success. We help businesses transform their ideas into reality.
              </p>
              <div className='flex space-x-4'>
                <a href="#" className='social-icon bg-[#222] p-3 rounded-full hover:bg-[#333] transition-all hover:text-[#7CFC00]'>
                  <i className='ri-instagram-line text-xl'></i>
                </a>
                <a href="#" className='social-icon bg-[#222] p-3 rounded-full hover:bg-[#333] transition-all hover:text-[#7CFC00]'>
                  <i className='ri-twitter-x-line text-xl'></i>
                </a>
                <a href="#" className='social-icon bg-[#222] p-3 rounded-full hover:bg-[#333] transition-all hover:text-[#7CFC00]'>
                  <i className='ri-linkedin-fill text-xl'></i>
                </a>
                <a href="#" className='social-icon bg-[#222] p-3 rounded-full hover:bg-[#333] transition-all hover:text-[#7CFC00]'>
                  <i className='ri-facebook-fill text-xl'></i>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className='footer-col'>
              <h3 className='text-xl font-semibold mb-6'>Quick Links</h3>
              <ul className='space-y-3'>
                <li><a href="#" className='text-gray-400 hover:text-[#7CFC00] transition-all'>About Us</a></li>
                <li><a href="#" className='text-gray-400 hover:text-[#7CFC00] transition-all'>Services</a></li>
                <li><a href="#" className='text-gray-400 hover:text-[#7CFC00] transition-all'>Use Cases</a></li>
                <li><a href="#" className='text-gray-400 hover:text-[#7CFC00] transition-all'>Pricing</a></li>
                <li><a href="#" className='text-gray-400 hover:text-[#7CFC00] transition-all'>Blog</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className='footer-col'>
              <h3 className='text-xl font-semibold mb-6'>Contact Us</h3>
              <ul className='space-y-3'>
                <li className='flex items-center text-gray-400'>
                  <i className='ri-map-pin-line mr-3'></i>
                  <span>123 Digital Avenue, Tech City</span>
                </li>
                <li className='flex items-center text-gray-400'>
                  <i className='ri-mail-line mr-3'></i>
                  <span>hello@wizardz.com</span>
                </li>
                <li className='flex items-center text-gray-400'>
                  <i className='ri-phone-line mr-3'></i>
                  <span>+91 9876543210</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className='footer-bottom border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-500 mb-4 md:mb-0'>© 2023 WizardZ. All rights reserved.</p>
            <div className='flex space-x-6'>
              <a href="#" className='text-gray-500 hover:text-[#7CFC00] transition-all'>Privacy Policy</a>
              <a href="#" className='text-gray-500 hover:text-[#7CFC00] transition-all'>Terms of Service</a>
              <a href="#" className='text-gray-500 hover:text-[#7CFC00] transition-all'>Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FourtPage
