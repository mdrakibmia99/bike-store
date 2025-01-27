
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
                Welcome to Bike Shop
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Located in the heart of Gazipur, Dhaka, Bangladesh, we are
                passionate about bringing you the best biking experience. Our shop
                offers a wide range of high-quality bicycles, accessories, and
                repair services. Whether you’re a mountain biking enthusiast, a
                road biking fan, or just looking for an eco-friendly way to get
                around, we have something for everyone.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our mission is to promote cycling as a lifestyle choice by
                providing top-notch products and exceptional customer service.
                Join our growing community of cycling enthusiasts and experience
                the joy of riding.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From professional bikers to beginners, we cater to all levels of
                experience. Your satisfaction is our priority, and we are here to
                ensure you have a smooth ride every time.
              </p>
            </div>
  
            {/* Image Section */}
            <div className="flex justify-center items-center">
              <img
                src="/images/bike-shop.jpg"
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
                  <i className="fas fa-bicycle text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Wide Range of Products</h3>
                <p className="text-gray-600">
                  From mountain bikes to accessories, we’ve got everything you
                  need for your cycling adventures.
                </p>
              </div>
  
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-tools text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Repair Services</h3>
                <p className="text-gray-600">
                  Our skilled technicians are ready to handle any repairs or
                  maintenance to keep you riding safely.
                </p>
              </div>
  
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-star text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  We prioritize your needs and ensure that you have the best
                  shopping experience with us.
                </p>
              </div>
            </div>
          </div>
  
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-2">Address: Gazipur, Dhaka, Bangladesh</p>
            <p className="text-gray-700 mb-2">Email: devrakibmia@gmail.com</p>
            <p className="text-gray-700">Phone: (+880) 19135-47448</p>
          </div>
        </div>
      </div>
    );
  }