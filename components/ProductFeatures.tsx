export default function ProductFeatures() {
  const features = [
    {
      title: "No Added Flavors",
      description: "Enjoy the natural taste without any artificial flavoring.",
      icon: "🌿",
    },
    {
      title: "No Artificial Colors",
      description: "Pure ingredients, free from synthetic color additives.",
      icon: "🎨",
    },
    {
      title: "No Preservatives",
      description: "Fresh and healthy with no added preservatives.",
      icon: "❌",
    },
    {
      title: "No Added Sugar",
      description: "100% natural sweetness, with zero added sugars.",
      icon: "🍯",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-yellow-100 to-Amber-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-400 rounded-full opacity-20 -translate-x-20 -translate-y-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 rounded-full opacity-20 translate-x-20 translate-y-10 animate-pulse"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 border-l-4 border-yellow-400 hover:border-yellow-500 relative"
            >
              <div className="text-6xl mb-4 icon-container transition-transform duration-500 hover:rotate-12">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-lg text-gray-600">{feature.description}</p>

              <div className="absolute inset-0 rounded-xl bg-yellow-400 opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
