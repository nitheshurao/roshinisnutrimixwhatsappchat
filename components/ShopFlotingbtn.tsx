"use client";
import React, { useEffect, useState } from "react";
import ShopNowButton from "./ShopNowButton";

function ShopFlotingbtn() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // window.addEventListener("scroll", toggleVisibility);
    // return () => {
    //   window.removeEventListener("scroll", toggleVisibility);
    // };
  }, []);
  return (
    <>
      {!isVisible && (
   <div className="fixed  bottom-40 left-[80%] z-50">
   {/* <button
     className="bg-lightColor border-[#b89d3b] hover:bg-green-400 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110"
     onClick={() => window.scrollTo(0, 0)}
   >
     Shop
   </button> */}
    {/* <a
          href="shop"
          className="bg-green-600 text-white px-8 py-1 rounded-full font-semibold text-lg shadow-md hover:bg-green-700 transition-transform duration-500 transform hover:scale-105 opacity-100 translate-y-0"
        >
    
        </a> */}
        <ShopNowButton/>
 </div>
 
  
      )}
    </>
  );
}

export default ShopFlotingbtn;
