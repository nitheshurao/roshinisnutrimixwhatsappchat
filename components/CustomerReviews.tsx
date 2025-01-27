"use client";

import React, { useEffect, useState } from "react";

export default function CustomerReviews() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/testimonials");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data.testimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#eed3b6]  to-[#f5d899]  overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#f0fb29] rounded-full opacity-20 transform -translate-x-20 -translate-y-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5e9231] rounded-full opacity-20 transform translate-x-20 translate-y-10"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-8">
          What Our Customers Are Saying
        </h2>

        {testimonials.length === 0 ? (
          <p className="text-gray-600">No customer reviews yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((review: any, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#e2cebc] to-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-transparent opacity-10 rounded-xl blur-md"></div>

                <div className="absolute top-0 left-4 -translate-y-6 text-6xl text-yellow-500">
                  &ldquo;
                </div>

                <div className="relative h-64 mx-auto mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 to-pink-200 blur-xl opacity-50"></div>
                  {review?.images?.[0] ? (
                    <img
                      src={review.images[0]}
                      alt={review.name || "Customer Avatar"}
                      className="relative z-10 rounded-full w-full h-full object-cover border-4 border-white shadow-md"
                    />
                  ) : (
                    <div className="relative z-10 text-4xl font-semibold text-yellow-600">
                      😊 📷
                    </div>
                  )}
                </div>

                <div className="relative z-10 text-center">
                  <p className="text-xl italic text-gray-700 mb-4">
                    {review.feedback || "No feedback provided."}
                  </p>
                </div>

                <div className="relative z-10 text-center">
                  <p className="text-lg font-semibold text-yellow-700">
                    {review.name || "Anonymous"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {review.location || "Location not specified"}
                  </p>

                  <p className="text-sm text-gray-500">
                    {review.feedback || "Location not specified"}
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 h-8 w-8 bg-yellow-500 rounded-full shadow-lg animate-pulse"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
