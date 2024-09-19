
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
          <div className="mx-12 space-y-4">
            <h1 className="text-3xl font-bold">{t('quick_links')}</h1>
            <ul className="space-y-5 text-lg">
              <li><NavLink to="/"> Home </NavLink></li>
              <li><NavLink to="/kurumsal"> Kurumsal </NavLink></li>
              <li><NavLink to="/faliyet"> Faaliyet </NavLink></li>
              <li><NavLink to="/contact"> Contact </NavLink></li>
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
            <h1 className="text-3xl font-bold">{t('newsletter')}</h1>
            <p className="text-gray-300">
              {t('newsletter_description')}
            </p>
            <div className="flex">
              <input type="email" placeholder={t('your_email')} className="w-full p-3 rounded-l-lg bg-gray-700 text-white" />
              <button className="bg-teal-500 text-white font-semibold px-6 rounded-r-lg hover:bg-teal-600 transition-all duration-300">
                {t('subscribe')}
              </button>
            </div>
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
