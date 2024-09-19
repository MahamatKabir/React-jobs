import logo from '../../assets/images/logo.jpeg';
import zekat from '../../assets/zekat.jpg'
import yetim from '../../assets/yetim.png'
import ramazane from '../../assets/ramazane.jpeg'
import sukuyu from '../../assets/sukuyu.jpeg'
import kurbane from '../../assets/kurbane.jpg'
import mescit from '../../assets/mescit.jpeg'
import camie from '../../assets/cami.jpg'
import  { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from '../Slider/Slider';
import Footer from '../Slider/Footer';

const faaliyetItems = [
  { 
    name: 'ZEKAT', 
    link: '/zekat', 
    image: zekat, // Ajoute l'image ici
    description: 'Zekat est l\'un des cinq piliers de l\'Islam. C\'est une aumône obligatoire sur les biens des musulmans pour aider les nécessiteux.' 
  },
  { 
    name: 'YETİM', 
    link: '/yetim', 
    image: yetim, 
    description: 'Aide aux orphelins, en leur fournissant un soutien matériel et éducatif.'
  },
  { 
    name: 'RAMAZAN', 
    link: '/ramazan', 
    image: ramazane, 
    description: 'Soutien pendant le mois de Ramadan avec des distributions alimentaires et des aides financières pour les plus démunis.'
  },
  { 
    name: 'KURBAN', 
    link: '/kurban', 
    image: kurbane, 
    description: 'Distribution de viande de Kurban aux personnes dans le besoin pendant les festivités de l\'Aïd.'
  },
  { 
    name: 'SU KUYUSU', 
    link: '/su-kuyusu', 
    image: sukuyu, 
    description: 'Construction de puits pour fournir de l\'eau potable dans les régions touchées par la sécheresse.'
  },
  { 
    name: 'CAMİLER', 
    link: '/camiler', 
    image: camie, 
    description: 'Soutien à la construction et la restauration de mosquées dans diverses régions.'
  },
  { 
    name: 'MESCİTLER', 
    link: '/mescitler', 
    image: mescit, 
    description: 'Petits lieux de prière, souvent construits dans les villages pour faciliter l\'accès à la pratique religieuse.'
  },
];

const Faliyet = () => {
  const [selectedItem, setSelectedItem] = useState(faaliyetItems[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Slider />

      <h1 className="text-5xl font-extrabold text-center mb-16 text-gray-800 tracking-tight leading-tight">
        Faaliyetlerimiz
      </h1>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row">
          {/* Liste d'éléments verticale */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 mb-8 md:mb-0"
          >
            <ul className="space-y-4">
              {faaliyetItems.map((item, index) => (
                <li key={index}>
                  <button
                    className={`w-full px-5 py-3 text-left font-semibold rounded-lg shadow-lg transition-all duration-300 
                      ${selectedItem.name === item.name ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contenu affiché pour l'élément sélectionné */}
          <motion.div
            key={selectedItem.name} // Assure la réinitialisation de l'animation à chaque changement d'élément
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-2/3 p-6 bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Image */}
              <div className="md:w-1/2 mb-4 md:mb-0">
                <motion.img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-96 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Description */}
              <div className="md:w-1/2 md:pl-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold text-gray-800"
                >
                  {selectedItem.name}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-600 mt-3 leading-relaxed"
                >
                  {selectedItem.description}
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
