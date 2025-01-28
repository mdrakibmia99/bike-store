

export default function Services() {
  const services = [
    {
      title: "Custom Bike Design",
      description:
        "Get a personalized bike that reflects your personality. Choose from unique designs, parts, and colors.",
      image:
        "https://images.unsplash.com/photo-1611171663397-5dc06d60372f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxjdXN0b20lMjBtb3RvcmN5Y2xlfGVufDB8fHx8MTY4Mjc1NzU3Ng&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      title: "Repair & Maintenance",
      description:
        "Keep your bike in top condition with expert repair and maintenance services by certified technicians.",
      image:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fG1haW50ZW5hbmNlJTIwYmlrZXN8ZW58MHx8fHwxNjgyNzU3NTc2&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      title: "Performance Upgrades",
      description:
        "Enhance your bike's performance with premium parts and accessories for speed and endurance.",
      image:
        "https://images.unsplash.com/photo-1577224003743-03b5fbebaa56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDczfHxiZXN0JTIwcGVyZm9ybWFuY2UlMjB1cGdyYWRlc3xlbnwwfHx8fDE2ODI3NTc1NzY&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      title: "Bike Rentals",
      description:
        "Explore new terrains and trails with our flexible and affordable bike rental options.",
      image:
        "https://images.unsplash.com/photo-1600184851221-dfa4b3de0aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHxvZmYlMjByb2FkJTIwYmlrZXN8ZW58MHx8fHwxNjgyNzU3NTc2&ixlib=rb-1.2.1&q=80&w=1080",
    },
  ];

  return (
    <div className="bg-matteWhite text-darkBlue py-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-crimsonRed mb-4 animate-fade-in">
          Our Services
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We provide the best solutions for your biking needs. Whether you're
          looking for repairs, customizations, or rentals, we’ve got you
          covered.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:-translate-y-2"
          >
            {/* Service Image */}
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>

            {/* Service Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-black mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>

            {/* Call-to-Action */}
            <div className="p-6">
              <button className="bg-crimsonRed text-white px-4 py-2 rounded-lg shadow-md hover:bg-darkBlue transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Banner */}
      <div className="mt-16 bg-darkBlue text-white py-8 px-6 lg:px-12 rounded-lg shadow-lg text-center md:flex md:justify-between md:items-center">
        <h3 className="text-2xl font-bold">
          Ready to transform your biking experience?
        </h3>
        <button className="mt-4 md:mt-0 bg-neonGreen text-darkBlue font-medium px-6 py-3 rounded-lg hover:bg-crimsonRed hover:text-white transition-all duration-300">
          Contact Us Now
        </button>
      </div>
    </div>
  );
}
