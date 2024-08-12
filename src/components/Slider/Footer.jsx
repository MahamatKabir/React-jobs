import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Section 1: Description */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">The Coding Journey</h1>
            <p className="text-gray-300">
              TCJ is a platform dedicated to empowering aspiring developers.
              From beginner tutorials to advanced programming concepts, we
              provide a comprehensive learning experience designed to help you
              master coding skills, build projects, and launch your tech career.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="mx-12 space-y-4">
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <ul className="space-y-5 text-lg">
              <li className="cursor-pointer hover:text-teal-400 duration-200">
                Home
              </li>
              <li className="cursor-pointer hover:text-teal-400 duration-200">
                Services
              </li>
              <li className="cursor-pointer hover:text-teal-400 duration-200">
                About
              </li>
              <li className="cursor-pointer hover:text-teal-400 duration-200">
                Contact
              </li>
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex space-x-6 py-3">
              <a href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0" aria-label="WhatsApp">
                <FaWhatsapp className="text-2xl hover:text-teal-400 hover:scale-110 transform duration-300" />
              </a>
              <a href="https://www.instagram.com/the.coding.journey/" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:text-teal-400 hover:scale-110 transform duration-300" />
              </a>
              <a href="https://thecodingjourney.com/" aria-label="Website">
                <TbWorldWww className="text-2xl hover:text-teal-400 hover:scale-110 transform duration-300" />
              </a>
              <a href="https://www.youtube.com/@TheCodingJourney" aria-label="YouTube">
                <FaYoutube className="text-2xl hover:text-teal-400 hover:scale-110 transform duration-300" />
              </a>
            </div>
          </div>

          {/* Section 4: Newsletter */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Newsletter</h1>
            <p className="text-gray-300">
              Stay updated with our latest content, offers, and news by subscribing to our newsletter.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
              <button className="bg-teal-500 text-white font-semibold px-6 rounded-r-lg hover:bg-teal-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>

        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">&copy; 2024 The Coding Journey. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
