import React from "react";
import 'remixicon/fonts/remixicon.css'

const Card = ({ className, title, imageUrl, buttonText,bgColor="bg-white",textColor="text-black" , btnbg='bg-black', btntext='text-white' }) => {
  return (
    <div className={`${className} shadow-[4px_4px_15px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_20px_rgba(0,0,0,0.3)]  w-full h-[25vh]  md:w-[45vw] lg:h-[40vh] px-10 py-6 flex gap-5  rounded-[40px] shadow-[0px 10px 0px black] overflow-hidden border border-2-black ${bgColor}`}>
      <div className="flex flex-col w-xs  justify-between">
        <h1 className="lg:text-3xl lg:  font-semibold px-3 py-2  bg-[#B9FF6A] rounded-lg">
          {title}
        </h1>
        <div className="flex items-center gap-3">
          <i className={`${btntext} ri-arrow-right-up-line font-medium lg:text-xl px-3 py-2 rounded-full ${btnbg}`}></i>
          <h1 className={`${textColor} font-medium`}>{buttonText}</h1>
        </div>
      </div>
      <div className="w-full">
        <img className="w-full h-full object-cover rounded-3xl" src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Card;
