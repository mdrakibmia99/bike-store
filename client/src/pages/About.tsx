export default function About() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          About Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Welcome to Bike Haven
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bike Haven is your one-stop destination for premium bicycles, accessories, and expert repair services. Based in Gazipur, Dhaka, Bangladesh, our mission is to promote cycling as a lifestyle choice by offering high-quality products and outstanding customer service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you're a professional cyclist, a weekend rider, or just looking for an eco-friendly way to commute, we've got something for everyone. Join our vibrant community of biking enthusiasts and explore the joy of cycling with us!
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our knowledgeable staff is always ready to assist you in selecting the perfect bike or accessories to meet your needs. Your satisfaction is our top priority!
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src="https://source.unsplash.com/600x400/?bicycle,shop"
              alt="Bike Shop"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center text-secondary mb-6">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                🚴
              </div>
              <h3 className="text-lg font-semibold mb-2">Wide Range of Products</h3>
              <p className="text-gray-600">
                From mountain bikes to accessories, we have everything you need for an amazing cycling experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                🛠
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Repair Services</h3>
              <p className="text-gray-600">
                Our skilled technicians handle all kinds of repairs and maintenance to keep your bike in top shape.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                ⭐
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Your happiness matters to us! We strive to provide the best service and support to all our customers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-2">📍 Address: Gazipur, Dhaka, Bangladesh</p>
          <p className="text-gray-700 mb-2">📧 Email: devrakibmia@gmail.com</p>
          <p className="text-gray-700">📞 Phone: (+880) 19135-47448</p>
        </div>
      </div>
    </div>
  );
}
