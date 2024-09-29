import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import kurban from "../../assets/kurban.jpg";
import ramazan from "../../assets/ramazan.jpg";
import cami from "../../assets/cami.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "kurban_name",
    text: "kurban_text",
    img: kurban,
  },
  {
    id: 2,
    name: "ramazan_name",
    text: "ramazan_text",
    img: ramazan,
  },
  {
    id: 3,
    name: "cami_name",
    text: "cami_text",
    img: cami,
  },
];

const Testimonials = () => {
  const { t } = useTranslation();

  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
    <div className="container mx-auto">
      {/* Section Title */}
      <div className="mb-10">
        <h1 data-aos="fade-up" className="text-center text-4xl font-bold">
          {t("faaliyetler.title")}
        </h1>
      </div>
  
      {/* Testimonial Cards */}
      <div data-aos="zoom-in">
        <Slider {...settings}>
          {TestimonialData.slice(0, 3).map((data) => (
            <div key={data.id} className="my-6">
              <div className="flex flex-col gap-4 shadow-lg py-9 px-6 mx-5 rounded-xl bg-slate-800 relative h-[500px]">
                
                {/* Content Section */}
                <div className="flex flex-col items-center gap-4">
                  <h1 className="text-xl font-bold text-yellow-500">
                    {t(`faaliyetler.${data.name}`)}
                  </h1>
                  <div className="text-center">
                    <p className="text-lg text-white line-clamp-4">
                      {t(`faaliyetler.${data.text}`)}
                    </p>
                  </div>
                </div>
  
                <p className="text-gray-50 text-7xl font-serif absolute top-0 right-0">
                  ,,
                </p>
  
                {/* Image Section */}
                <div className="mb-4 relative w-full h-60">
                  <div className="w-full h-full mx-auto overflow-hidden transform hover:scale-105 transition-transform duration-500 rounded-lg shadow-md">
                    <img
                      src={data.img}
                      alt={t(`faaliyetler.${data.name}`)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-80 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  
      {/* More Button */}
      <div className="text-center mt-8">
        <NavLink
          to="/faliyet"
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
        >
          {t("faaliyetler.more_button")}
        </NavLink>
      </div>
    </div>
  </div>
  
  );
};

export default Testimonials;
