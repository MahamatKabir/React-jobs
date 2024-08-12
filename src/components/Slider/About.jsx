

const About = () => {
  return (
     <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      {/* Champ Texte */}
      <div className="mx-11  md:w-1/2 p-14  rounded-xl  shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-800">À propos de l organisation IDA</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
         L&apos;organisation IDA est dédiée à fournir des services de qualité dans divers domaines. Notre mission est de
         promouvoir l&apos;innovation, l&apos;engagement communautaire, et de créer un impact positif à travers nos initiatives.
         Nous croyons en l&apos;importance de la collaboration et de l&apos; pour atteindre nos objectifs communs.
       </p>
     </div>

     {/* Champ Image */}
     <div className="md:w-1/2 p-4">
       <img
         src="https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg"
         alt="Organisation IDA"
         className="w-full h-auto object-cover rounded-lg shadow-md"
       />
     </div>
   </div>
  )
}

export default About
