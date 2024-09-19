import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import kurban from "../../assets/kurban.jpg"
import ramazan from "../../assets/ramazan.jpg"
import cami from "../../assets/cami.jpg"
const TestimonialData = [
  {
    id: 1,
    name: "Kurban Bayramı",
    text: "Yardımlaşma ve dayanışma misyonumuz doğrultusunda her yıl Kurban Bayramı'nda et dağıtımı düzenliyoruz. Bağışçılarımızın cömertliği sayesinde, ihtiyaç sahibi ailelere kurban hediye ediyor ve bu kutsal bayramın bereketini paylaşıyoruz",
    img: kurban,
  },
  {
    id: 2,
    name: "Ramazan Etkinliği",
    text: "Mübarek Ramazan ayında, topluluk etkinlikleri ve ihtiyaç sahiplerine yemek dağıtımları düzenliyoruz. Amacımız, topluluk içindeki kardeşlik ve dayanışma ruhunu güçlendirmek, aynı zamanda maddi ve manevi destek sağlamak",
    img: ramazan,
  },
  {
    id: 3,
    name: "Camı İnşaati",
    text: "Birlikte, ibadet, eğitim ve buluşma yeri olacak bir cami inşasına katkıda bulunuyoruz                      ",
    img: cami,
  },
 
];

const Testimonials = () => {
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
        {/* header section */}
        <div className="mb-10">
          <h1 data-aos="fade-up" className="text-center text-4xl font-bold">
            Faaliyetler
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.slice(0, 3).map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-5 rounded-xl bg-primary/10 relative">
                  
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                  <h1 className="text-xl font-bold text-yellow-400 text-left">
                        {data.name}
                      </h1>
                    <div className="space-y-3 text-center">
                      
                      <p className="text-xs text-gray-500">{data.text}</p>
                      
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                  <div className="mb-4 relative">
  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
    <img
      src={data.img}
      alt={data.name}
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

        {/* More button */}
        <div className="text-center mt-8">
          <NavLink
            to="/faliyet"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
          >
            Fazla
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
