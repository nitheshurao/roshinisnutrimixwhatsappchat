"use client";
import { useEffect, useState } from "react";

export default function PreparationSection() {
  const steps = [
    {
      title: "Boil Water or Milk",
      description: "Bring 80-100 ml of water or milk to a boil in a vessel.",
      icon: "🔥",
    },
    {
      title: "Mix Nutrimix",
      description:
        "In a separate bowl, mix 1-1½ tablespoons of Nutrimix with 30-50 ml of water or milk.",
      icon: "🥄",
    },
    {
      title: "Add Nutrimix Mixture",
      description:
        "Once the water or milk is boiling, gradually add the Nutrimix mixture while stirring continuously to prevent lumps.",
      icon: "🍲",
    },
    {
      title: "Add Optional Sweeteners",
      description: "If desired, add salt or jaggery/rock sugar for taste.",
      icon: "🍬",
    },
    {
      title: "Boil and Serve",
      description:
        "Continue boiling the mixture for 7-10 minutes or until it reaches your desired consistency. Serve hot or cold.",
      icon: "☕",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-16 pr-2 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Simple Preparation
        </h2>

        <div className="relative">
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-[#d0742967] to-[#d1d10f] transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                } space-x-8 md:space-x-16`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-[#b249ef67] to-[#17da52] rounded-full"></div>

                <div className="flex-shrink-0 text-6xl text-green-500 animate-bounce">
                  {step.icon}
                </div>
                <div
                  className={`bg-white max-w-96 p-4 rounded-lg shadow-md transform transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
