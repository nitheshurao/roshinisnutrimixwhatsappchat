"use client";
import React, { useEffect, useState } from "react";

function Flotingbtn() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <div className="fixed bottom-40 left-4 z-50 ">
          <button
            className="bg-lightColor border-s-primaryColor  hover:bg-primaryColor text-white font-bold py-4 px-4 rounded-full shadow-lg"
            onClick={() => window.scrollTo(0, 0)}
          >
            <svg
              className="w-6 h-6 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default Flotingbtn;
