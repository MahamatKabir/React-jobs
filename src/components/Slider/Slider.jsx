import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaHandsHelping, FaWater, FaHome, FaHospital, FaSchool } from 'react-icons/fa';
import sadakat from "../../assets/sadakat.jpg";
import mescitte from "../../assets/mescitte.jpg";
import zekate from "../../assets/zekate.jpg";
import { useTranslation } from 'react-i18next';

const ArrowButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 ${direction === 'left' ? 'left-2' : 'right-2'}
    p-2 bg-black bg-opacity-50 rounded-full hover:scale-110 hover:translate-x-1 transition duration-300 ease-in-out 
    hover:blur-sm hover:rotate-3 hover:skew-x-6 hover:skew-y-3 active:rotate-y-180 animate-pulse`}
  >
    {direction === 'left' ? (
      <FaArrowAltCircleLeft className="text-blue-500" size={40} />
    ) : (
      <FaArrowAltCircleRight className="text-blue-500" size={40} />
    )}
  </button>
);

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
};

const Slide = ({ slide }) => (
  <div className="min-w-full">
    <img
      src={slide.imageUrl}
      alt={`Slide ${slide.id}`}
      className="w-full h-100 object-cover transition-transform duration-700 ease-in-out hover:scale-105"
    />
  </div>
);

Slide.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const ListItem = ({ icon: Icon, label, index, currentIndex, handleClick }) => (
  <li
    onClick={() => handleClick(index)}
    className={`cursor-pointer flex flex-col items-center space-x-2 p-2 rounded-lg ${
      currentIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'
    }`}
  >
    <Icon className="text-2xl text-yellow-400" />
    <span className="font-normal text-center w-full  ">{label}</span>
  </li>
);

ListItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default function Slider() {
  const { t } = useTranslation(); // Use translation hook

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    { id: 1, imageUrl: 'https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg' },
    { id: 2, imageUrl: 'https://cdn.sefkateli.org.tr/upload/images/bagis/bagis-icerik/su-kuyusu-bagis-afrika-icerik.jpg' },
    { id: 3, imageUrl: sadakat },
    { id: 4, imageUrl: mescitte },
    { id: 5, imageUrl: zekate },
  ];

  const listItems = [
    { icon: FaHandsHelping, label: t('aidons_ensemble') }, // Use translation key
    { icon: FaWater, label: t('forage_eau') }, // Use translation key
    { icon: FaHome, label: t('ramazan') }, // Use translation key
    { icon: FaHospital, label: t('construction_mosques') }, // Use translation key
    { icon: FaSchool, label: t('zekat') }, // Use translation key
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const handleListItemClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);

    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  return (
    <div className="relative w-full my-1 h-[600px] mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Slider */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </div>

      {/* Arrow Buttons */}
      <ArrowButton direction="left" onClick={prevSlide} />
      <ArrowButton direction="right" onClick={nextSlide} />

      {/* List Section */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 p-4 rounded-lg shadow-lg">
        <ul className="flex space-x-8 items-center">
          {listItems.map((item, index) => (
            <ListItem
              key={index}
              icon={item.icon}
              label={item.label} // Translated label
              index={index}
              currentIndex={currentIndex}
              handleClick={handleListItemClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
