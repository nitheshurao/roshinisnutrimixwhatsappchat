export default function CTASection() {
    return (
      <section className="relative py-16 bg-gradient-to-r from-[rgb(168,208,144)] via-[#dcb64d] to-[#95e838] overflow-hidden">
     
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-500 rounded-full opacity-30 animate-float delay-500"></div>
  
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Experience Nutrimix?
          </h2>
          <p className="text-lg text-white mb-8 animate-fade-in delay-200">
            Take control of your health today with our all-natural, nutrient-rich products.
          </p>
  
          <a
            href="shop"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-green-600 hover:text-white hover:shadow-xl transition-transform transform hover:scale-105 animate-fade-in delay-400"
          >
            Shop Now
          </a>
        </div>
      </section>
    );
  }
  