import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-16">
      {/* Main Grid */}
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/dragon-logo.png"
              alt="DragonNews"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-2xl font-bold text-white">
              Dragon<span className="text-red-600">News</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Stay updated with the latest news, breaking stories and headlines
            from around the world.
          </p>

          {/* Email */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FaEnvelope className="text-red-600" />
            <span>info@dragonnews.com</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-white text-base font-bold uppercase mb-1 tracking-wide">
            Quick Links
          </h3>
          <div className="w-10 h-0.5 bg-red-600 mb-5"></div>
          <ul className="space-y-3">
            {[
              "Home",
              "About Us",
              "Categories",
              "Latest News",
              "Contact Us",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm"
                >
                  <span className="text-red-600 text-xs">❯</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Column */}
        <div>
          <h3 className="text-white text-base font-bold uppercase mb-1 tracking-wide">
            Contact Us
          </h3>
          <div className="w-10 h-0.5 bg-red-600 mb-5"></div>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <FaEnvelope className="text-red-600 text-base shrink-0" />
              <span>info@dragonnews.com</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <FaPhone className="text-red-600 text-base shrink-0" />
              <span>+880 1234-567890</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <FaLocationDot className="text-red-600 text-base shrink-0" />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>

        {/* Follow Us Column */}
        <div>
          <h3 className="text-white text-base font-bold uppercase mb-1 tracking-wide">
            Follow Us
          </h3>
          <div className="w-10 h-0.5 bg-red-600 mb-5"></div>

          {/* Social Icons */}
          <div className="flex gap-3 mb-5">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            >
              <FaYoutube size={16} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            >
              <FaInstagram size={16} />
            </a>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Follow us on social media and stay connected with us.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center">
            © 2026 DragonNews. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <a href="#" className="hover:text-red-500 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-red-500 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
