
import img1 from "@/assets/images/hero-image/slider1.jpg"
import img2 from "@/assets/images/hero-image/slider2.jpg"
import img3 from "@/assets/images/hero-image/slider3.jpg"
export default function Services() {
  const services = [
    {
      title: "Custom Bike Design",
      description:
        "Get a personalized bike that reflects your personality. Choose from unique designs, parts, and colors.",
      image:img1
    },
    {
      title: "Repair & Maintenance",
      description:
        "Keep your bike in top condition with expert repair and maintenance services by certified technicians.",
      image:img2
    },
    {
      title: "Performance Upgrades",
      description:
        "Enhance your bike's performance with premium parts and accessories for speed and endurance.",
        image:img3
    },
   
  ];

  return (
    <div className="bg-matteWhite text-darkBlue pt-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-crimsonRed animate-fade-in">
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
