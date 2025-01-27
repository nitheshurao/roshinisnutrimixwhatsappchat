
export default function Benefits() {
    const benefits = [
      {
        title: 'Boosts Energy',
        description: 'Feel revitalized throughout the day with our all-natural formula.',
        icon: '⚡️', 
      },
      {
        title: 'Enhances Immunity',
        description: 'Strengthen your immune system with essential vitamins and minerals.',
        icon: '🛡️',
      },
      {
        title: 'Improves Digestion',
        description: 'Support your digestive health with our blend of natural ingredients.',
        icon: '🍃',
      },
      {
        title: 'Promotes Wellness',
        description: 'Take care of your overall well-being with balanced nutrition.',
        icon: '🌿',
      },
    ];
  
    return (
      <section className="relative py-16 bg-gradient-to-b from-green-50 to-green-100 overflow-hidden">
  
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-300 rounded-full opacity-20 -translate-x-20 -translate-y-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400 rounded-full opacity-20 translate-x-20 translate-y-10"></div>
  
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-12">Benefits of Using Nutrimix</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-500 border-t-4 border-yellow-500"
              >
                <div className="text-5xl mb-4 icon-container animate-bounce">
                  {benefit.icon}
                </div>
  
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
  
                <p className="text-gray-700">{benefit.description}</p>
  
                <div className="absolute inset-0 bg-yellow-400 opacity-0 hover:opacity-10 rounded-lg transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  