import { Link } from "react-router-dom";
import { FaFacebookF ,FaWhatsapp,FaLinkedinIn  } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-primary-black text-white py-8 px-4 lg:px-0">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              We are passionate about providing top-quality bikes and accessories to
              our customers. Visit us for the best riding experience.
            </p>
            <div className="mt-4 flex space-x-4 text-gray-400">
              <a href="https://www.facebook.com/devrakibmia" target="_blank" className="hover:text-primary-red duration-300"> <FaFacebookF className="w-7 h-7" /></a>
              <a href="https://wa.me/+8801913547448" target="_blank" className="hover:text-primary-red duration-300"> <FaWhatsapp className="w-7 h-7" /></a>
              <a href="https://www.linkedin.com/in/md-rakib-mia" target="_blank" className="hover:text-primary-red duration-300"> <FaLinkedinIn className="w-7 h-7" /></a>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white">Mountain Bikes</li>
              <li className="hover:text-white">Road Bikes</li>
              <li className="hover:text-white">Electric Bikes</li>
              <li className="hover:text-white">Accessories</li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-2">Gazipur, Dhaka</li>
              <li className="mb-2">Phone: (+880) 19135-47448</li>
              <li>Email: <a href="mailto:info@bikeshop.com" className="hover:text-white">rakibmia.dev@.com</a></li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-zinc-200">
          &copy; {new Date().getFullYear()} ROYAL KNIGHT Bike Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
