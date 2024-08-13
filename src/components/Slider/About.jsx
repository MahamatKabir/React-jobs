

const About = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center p-10 gap-10  bg-gradient-to-r from-slate-300 to-white relative overflow-hidden rounded-xl shadow-lg">
    {/* Ligne Courbe dans le fond */}
    <div className="absolute inset-0 bg-white opacity-80 rounded-full w-[200%] h-[100%] -top-32 -left-64 transform rotate-45"></div>
  
    {/* Champ Texte */}
    <div className="relative mx-11 md:w-1/2 p-14">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-800">À propos de l organisation IDA</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        L&apos;organisation IDA est dédiée à fournir des services de qualité dans divers domaines. Notre mission est de
        promouvoir l&apos;innovation, l&apos;engagement communautaire, et de créer un impact positif à travers nos initiatives.
        Nous croyons en l&apos;importance de la collaboration et de l&apos; pour atteindre nos objectifs communs.
      </p>
      <button className="px-6 py-3 text-white bg-slate-500 rounded-full shadow-md hover:bg-slate-600 hover:shadow-lg transition-colors duration-300 ease-in-out">
        Read More
      </button>
    </div>
  
    {/* Champ Image */}
    <div className="relative  md:w-1/3 p-2 bg-slate-700 rounded-lg shadow-lg">
      <img
        src="https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg"
        alt="Organisation IDA"
        className="w-[400px] h-[400px] object-cover relative right-10 top-6 rounded-lg shadow-md border-4 border-white transition-transform duration-300 ease-in-out "
      />
    </div>
  </div>
  
  )
}

export default About
