
import { NavLink } from "react-router-dom"
const About = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center p-10 gap-10  bg-gradient-to-r from-slate-300 to-white relative overflow-hidden rounded-xl shadow-lg">
    {/* Ligne Courbe dans le fond */}
    <div className="absolute inset-0 bg-white opacity-80 rounded-full w-[200%] h-[100%] -top-32 -left-64 transform rotate-45"></div>
  
    {/* Champ Texte */}
    <div className="relative mx-11 md:w-1/2 p-14">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-800">AL-İNFAK Organisation hakkında</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
      AL-İNFAK Organisation , savunmasız grupların yararına çeşitli türlerde yardımlar sağlamak amacıyla yeni kurulmuş, kar amacı gütmeyen ve siyasi olmayan bir dernektir.
      </p>
      <div className="text-left mt-8">
          <NavLink
            to="/kurumsal"
            className="bg-yellow-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
          >
            Fazla
          </NavLink>
        </div>
    </div>
  
    {/* Champ Image */}
    <div className="relative  md:w-1/3 p-2 bg-yellow-400 rounded-lg shadow-lg">
      <img
        src="https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg"
        alt="Organisation IDA"
        className="w-[400px] h-[400px] object-cover relative right-10 top-6 rounded-lg shadow-md border-4 border-blue-600 transition-transform duration-300 ease-in-out "
      />
    </div>
  </div>
  
  )
}

export default About
