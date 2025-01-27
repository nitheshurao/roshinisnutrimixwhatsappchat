"use client";
import { useEffect, useState } from "react";
import ShopNowButton from "./ShopNowButton";

export default function NutrimixChefAdventure() {
  const dryFruits = ["🥙", "🌰", "🥜", "🍉", "🫘", "🍈", "🥓",];
  const seedCount = 20; // Number of dry fruits to generate

  const [dryFruitElements, setDryFruitElements] = useState<any>([]);

  const generateRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  const generateRandomSize = () => ({
    fontSize: `${Math.random() * 2 + 1}rem`,
  });

  const generateRandomDuration = () => `${Math.random() * 5 + 3}s`;

  useEffect(() => {
    const elements = Array.from({ length: seedCount }, (_, i) => {
      const position = generateRandomPosition();
      const size = generateRandomSize();
      const duration = generateRandomDuration();

      return (
        <div
        key={i}
        className="absolute flex items-center justify-center opacity-60 text-gray-500"
        style={{
          ...position,
          ...size,
          animation: `float ${duration} ease-in-out infinite`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      >
        {dryFruits[Math.floor(Math.random() * dryFruits.length)]}
      </div>
      
      );
    });
    setDryFruitElements(elements);
  }, []); // Only run once on the client

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
      {/* Floating Dry Fruits */}
      {dryFruitElements}
   
   
      <div className="relative z-40 text-center flex flex-col items-center  opacity-1">
        {/* Heading */}
        <h1 className="text-6xl font-bold text-transparent    bg-clip-text bg-gradient-to-r from-[#e8b653] via-orange-400 to-red-500 mb-4 transition-opacity duration-1000 ease-in-out opacity-100">
      Fuel Your Health, Naturally
    </h1>

    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 mb-6 transition-opacity duration-1000 delay-200 ease-in-out opacity-100">
      Discover the wholesome goodness of{" "}
      <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500">
        Roshini's Nutrimix
      </span>, your perfect blend of nutrition and taste.
    </p>
        {/* Call to Action */}
        {/* <a
          href="shop"
          className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-green-700 transition-transform duration-500 transform hover:scale-105 opacity-100 translate-y-0"
        >
          Shop Now
        </a> */}
        <ShopNowButton/>
      </div>

      {/* Floating Seed Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(60) rotate(0deg);
          }
          50% {
            transform: translateY(-50px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
}
