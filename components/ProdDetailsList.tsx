"use client"
import React from "react";
import {
  Heart,
  Apple,
  Leaf,
  Droplet,
  ShieldCheck,
  Activity,
  Star,
  Layers,
  Award,
  Smile,
  Feather,
} from "lucide-react";

const ProdDetailsList = ({ }) => {
  return (
    <div className="bg-white rounded-lg mt-2 ">
      <div className="relative bg-gradient-to-br from-green-50 to-white rounded-lg  p-6 hover:shadow-xl transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        <div className="absolute -top-4 left-16 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        <div className="absolute bottom-0 right-16 w-32 h-32 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>

        <div className="relative">
          <h3 className="text-3xl font-bold text-green-800 mb-6">
            Nutrimix Product Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Key Feature: Ingredients */}
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Apple className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Key Ingredient</p>
                <p className="text-sm font-semibold text-gray-800">
                  35 Seeds & Dry Fruits
                </p>
              </div>
            </div>

            {/* Nutritional Value */}
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Rich in</p>
                <p className="text-sm font-semibold text-gray-800">
                  Protein & Fiber
                </p>
              </div>
            </div>

            {/* Health Benefits */}
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Droplet className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Health Benefit</p>
                <p className="text-sm font-semibold text-gray-800">
                  Boosts Immunity
                </p>
              </div>
            </div>

            {/* Natural & Organic */}
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Quality</p>
                <p className="text-sm font-semibold text-gray-800">
                  100% Natural & Organic
                </p>
              </div>
            </div>

            {/* Energy Boost */}
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Activity className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Benefit</p>
                <p className="text-sm font-semibold text-gray-800">
                  Energy Boost
                </p>
              </div>
            </div>

            {/* Satisfaction */}
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Smile className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Feedback</p>
                <p className="text-sm font-semibold text-gray-800">
                  Customer Favorite
                </p>
              </div>
            </div>

            {/* Awards */}
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Recognition</p>
                <p className="text-sm font-semibold text-gray-800">
                  Award-Winning Quality
                </p>
              </div>
            </div>

            {/* Protective Packaging */}
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Packaging</p>
                <p className="text-sm font-semibold text-gray-800">
                  Tamper-Proof & Secure
                </p>
              </div>
            </div>
            {/* Nutritional Highlights */}
<div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg">
  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
    <Layers className="w-6 h-6 text-indigo-600" />
  </div>
  <div>
    <p className="text-xs font-medium text-gray-500">Nutritional Value</p>
    <p className="text-sm font-semibold text-gray-800">
      High in Omega-3 & Antioxidants
    </p>
  </div>
</div>

{/* Customer Testimonial */}
<div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg">
  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
    <Smile className="w-6 h-6 text-yellow-600" />
  </div>
  <div>
    <p className="text-xs font-medium text-gray-500">What Customers Say</p>
    <p className="text-sm italic text-gray-800">
      "A game-changer for my daily nutrition!" – John D.
    </p>
  </div>
</div>
{/* Tooltip Example */}
<div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg relative group">
  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
    <Leaf className="w-6 h-6 text-green-600" />
  </div>
  <div>
    <p className="text-xs font-medium text-gray-500">100% Natural</p>
    <p className="text-sm font-semibold text-gray-800">
      No additives or preservatives
    </p>
  </div>
  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition">
    Nutrimix is crafted from all-natural ingredients.
  </div>
</div>
{/* Call to Action */}

{/* Eco-Friendly */}
<div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg">
  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
    <Feather className="w-6 h-6 text-green-700" />
  </div>
  <div>
    <p className="text-xs font-medium text-gray-500">Eco-Friendly</p>
    <p className="text-sm font-semibold text-gray-800">
      Recyclable Packaging
    </p>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdDetailsList;
