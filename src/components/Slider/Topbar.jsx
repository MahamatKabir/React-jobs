import { FaPhoneAlt, FaEnvelope, FaInstagram, FaTiktok, FaFacebookF, } from "react-icons/fa";
import  {NavLink}  from "react-router-dom";
import { useTranslation } from 'react-i18next';

const TopBar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        
        {/* Contact Information */}
        <div className="flex flex-row space-x-8 items-center">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-yellow-400" />
            <span> +235 96956323 </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-yellow-400" />
            <span>alinfakorganisation@gmail.com</span>
          </div>
        </div>

        {/* Social Media Icons */}
        

        {/* Language Selection */}
        <div className="flex flex-row">
        <div className="flex flex-row space-x-4 items-center mr-5">
          <NavLink to="https://www.instagram.com/alinfak_organisation?igsh=d2diNG0zbDFsMWIz" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors duration-300 text-yellow-400">
            <FaInstagram size={24} />
          </NavLink>
          <NavLink to="http://tiktok.com/@alinfakorganisation" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300 text-yellow-400">
            <FaTiktok size={24} />
          </NavLink>
          <NavLink to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300 text-yellow-400">
            <FaFacebookF size={24} />
          </NavLink>
          
        </div>
        <select onChange={(e) => changeLanguage(e.target.value)} className="bg-gray-700 text-white p-2 rounded-md">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="tr">Türkçe</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
