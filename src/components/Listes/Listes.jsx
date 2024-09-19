// import { FaReadme } from "react-icons/fa";
// import Button from "../Ui/Button";
import Slider from "../Slider/Slider";
import About from "../Slider/About";
import Footer from "../Slider/Footer";
import Testimonials from "../Testimonial/Testimonial";
import IyilikHaritasi from "../İyilik";
const Listes = () => {
     // const choiceThemes = [
     //      {
     //           id:1,
     //           title: "literature",
     //           icon: FaReadme,
     //      },
     //      {
     //           id:2,
     //           title: "loisire",
     //           icon: FaReadme,
     //      },
     //      {
     //           id:3,
     //           title: "les enfents",
     //           icon: FaReadme,
     //      }
          
     // ]
  return (
    <div className="min-h-full">
     <Slider />
     <About />
     <Testimonials />
     <IyilikHaritasi />
     <Footer />
    </div>
  )
}

export default Listes
