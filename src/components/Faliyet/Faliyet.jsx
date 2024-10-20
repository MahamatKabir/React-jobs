import zekat from '../../assets/zekat.jpg';
import yetim from '../../assets/yetim.png';
import ramazane from '../../assets/ramazane.jpeg';
import sukuyu from '../../assets/sukuyu.jpeg';
import kurbane from '../../assets/kurbane.jpg';
import mescit from '../../assets/mescit.jpeg';
import camie from '../../assets/cami.jpg';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../Slider/Footer';
import { useTranslation } from 'react-i18next';

const faaliyetItems = [
  { name: 'zekat', image: zekat },
  { name: 'yetim', image: yetim },
  { name: 'ramazan', image: ramazane },
  { name: 'kurban', image: kurbane },
  { name: 'su_kuyusu', image: sukuyu },
  { name: 'camiler', image: camie },
  { name: 'mescitler', image: mescit },
];

const Faliyet = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(faaliyetItems[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
     

      <h1 className="text-5xl font-extrabold text-center mb-1 my-10 text-gray-800 tracking-tight leading-tight">
        {t('faliyet.title')}
      </h1>

      <div className="container mx-auto px-4 py-12">
  <div className="flex flex-col items-center">
    {/* Horizontal List of Items */}
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mb-8 overflow-x-auto"
    >
      <ul className="flex space-x-16 items-center">
        {faaliyetItems.map((item, index) => (
          <li key={index}>
            <button
              className={`px-6 py-4 text-center font-semibold rounded-xl shadow-md whitespace-nowrap transition-all duration-300 
              ${
                selectedItem.name === item.name
                  ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-lg'
              }`}
              onClick={() => handleItemClick(item)}
            >
              {t(`faliyet.${item.name}.name`)}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>

    {/* Display selected item content */}
    <motion.div
      key={selectedItem.name}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-11/12 p-8 bg-white border border-gray-200 rounded-2xl shadow-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image */}
        <div className="w-full mb-4">
          <motion.img
            src={selectedItem.image}
            alt={t(`faliyet.${selectedItem.name}.name`)}
            className="w-full h-96 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-out transform hover:scale-105"
          />
        </div>

        {/* Description */}
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-blue-700 tracking-wide"
          >
            {t(`faliyet.${selectedItem.name}.name`)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 mt-5 leading-relaxed"
          >
            {t(`faliyet.${selectedItem.name}.description`)}
          </motion.p>
        </div>
      </div>
    </motion.div>
  </div>
</div>


      <Footer />
    </div>
  );
};

export default Faliyet;
