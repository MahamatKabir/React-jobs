import Footer from "./Footer";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function ContactForm() {
  const { t } = useTranslation(); // Initialize useTranslation hook
  return (
    <div className="min-h-[500px] bg-cover bg-center bg-no-repeat relative">
      
      <div className="flex items-center justify-center h-full bg-gray-800 bg-opacity-50">
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{t('contact.title')}</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('contact.name')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-transform transform hover:scale-105"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('contact.email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-transform transform hover:scale-105"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-transform transform hover:scale-105"
                    placeholder="Your Message"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-slate-700 text-white font-bold rounded-lg shadow-lg hover:bg-slate-600 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  >
                    {t('contact.send')}
                  </button>
                </div>
              </form>
            </div>
            {/* Google Map Section */}
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.725646261933!2d15.044497275391554!3d12.134845191371284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11151f321f4d7d59%3A0x40d8992721f84a97!2sN&#39;Djamena%2C%20Chad!5e0!3m2!1sen!2str!4v1696608172204!5m2!1sen!2str"
                width="100%"  
                height="500"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-lg border-2 border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
