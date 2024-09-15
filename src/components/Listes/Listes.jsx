// import { FaReadme } from "react-icons/fa";
// import Button from "../Ui/Button";
import Slider from "../Slider/Slider";
import About from "../Slider/About";
import Portfolio from "../Slider/Activiter";
import ContactForm from "../Slider/Contact";
import Footer from "../Slider/Footer";
import Testimonials from "../Testimonial/Testimonial";
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
     <Portfolio />
     <Testimonials />
     <ContactForm />
     <Footer />
    </div>
  )
}

export default Listes
