// import { FaReadme } from "react-icons/fa";
// import Button from "../Ui/Button";
import Slider from "../Slider/Slider";
import About from "../Slider/About";
import Portfolio from "../Slider/Activiter";
import ContactForm from "../Slider/Contact";
import Footer from "../Slider/Footer";

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
     <ContactForm />
     <Footer />
     {/* <ul className="m-1 p-7 flex flex-col md:flex-row justify-between  gap-4">
     {choiceThemes.map((choise) => (
          
          <li key={choise.id} className="w-auto h-20 bg-red-500 rounded-xl p-1 items-center">
              <img src={choise.icon}  className="px-7"/>
               <p className="py-2 px-1 text-white">{choise.title}</p>
               
          </li>
     ))}
     </ul>
       <div className="flex justify-center gap-5 ">
       <Button label="CLİCK " className="bg-orange-800 rounded-lg min-h-max hover:bg-cyan-500" />
       <Button label="PUSH" className="bg-cyan-500 rounded-lg hover:bg-orange-800" />
       </div> */}
    </div>
  )
}

export default Listes
