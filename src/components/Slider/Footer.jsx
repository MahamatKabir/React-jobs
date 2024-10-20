
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1: Description */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{t('footer_title')}</h1>
            <p className="text-gray-300">
              {t('footer_description')}
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className=" space-y-4">
            <h1 className="text-3xl font-bold">{t('quick_links')}</h1>
            <ul className="space-y-5 text-lg">
              <li><NavLink to="/"> {t('navbar.home')}</NavLink></li>
              <li><NavLink to="/kurumsal"> {t('navbar.kurumsal')}</NavLink></li>
              <li><NavLink to="/faliyet"> {t('navbar.faliyet')} </NavLink></li>
              <li><NavLink to="/contact"> {t('navbar.contact')} </NavLink></li>
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex space-x-6 py-3">
              <NavLink to="https://www.instagram.com/alinfak_organisation?igsh=d2diNG0zbDFsMWIz" target="_blank" className="hover:text-pink-600 transition-colors duration-300 text-white">
                <FaInstagram size={24} />
              </NavLink>
              <NavLink to="http://tiktok.com/@alinfakorganisation" target="_blank" className="hover:text-black transition-colors duration-300 text-white">
                <FaTiktok size={24} />
              </NavLink>
              <NavLink to="https://www.facebook.com" target="_blank" className="hover:text-blue-600 transition-colors duration-300 text-white">
                <FaFacebookF size={24} />
              </NavLink>
            </div>
          </div>

          {/* Section 4: Newsletter */}
          <div className="space-y-4">
  <h1 className="text-3xl font-bold">Contact</h1>
  <p className="text-gray-300">
    Ndjamena  - tchad
  </p>
  <p className="text-gray-300">
    Phone: +235 96956323
  </p>
  
  <p className="text-gray-300">
    Email: alinfakorganisation@gmail.com
  </p>
  
</div>

        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p>&copy; 2024 AL-İNFAK Organisation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
