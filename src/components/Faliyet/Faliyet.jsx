

import logo from '../../assets/images/logo.jpeg';
import React, { useRef } from 'react';
import Slider from '../Slider/Slider';
const faaliyetItems = [
     { 
       name: 'ZEKAT', 
       link: '/zekat', 
       image: logo, // Ajoute l'image ici
       description: 'Zekat est l\'un des cinq piliers de l\'Islam. C\'est une aumône obligatoire sur les biens des musulmans pour aider les nécessiteux.' 
     },
     { 
       name: 'EĞİTİM / KÜLTÜR', 
       link: '/egitim-kultur', 
       image: logo, 
       description: 'Éducation et culture, soutient les projets éducatifs pour favoriser l\'apprentissage et le développement culturel.'
     },
     { 
       name: 'HAYRİ HİZMETLER', 
       link: '/hayri-hizmetler', 
       image: logo,  
       description: 'Services caritatifs pour améliorer les conditions de vie des communautés défavorisées.'
     },
     { 
       name: 'YETİM', 
       link: '/yetim', 
       image: logo, 
       description: 'Aide aux orphelins, en leur fournissant un soutien matériel et éducatif.'
     },
     { 
       name: 'KRİZ BÖLGELERİ', 
       link: '/kriz-bolgeleri', 
       image: logo, 
       description: 'Aide humanitaire dans les régions en crise, où les populations sont touchées par les conflits ou les catastrophes naturelles.'
     },
     { 
       name: 'RAMAZAN', 
       link: '/ramazan', 
       image: logo, 
       description: 'Soutien pendant le mois de Ramadan avec des distributions alimentaires et des aides financières pour les plus démunis.'
     },
     { 
       name: 'KURBAN', 
       link: '/kurban', 
       image: logo, 
       description: 'Distribution de viande de Kurban aux personnes dans le besoin pendant les festivités de l\'Aïd.'
     },
     { 
       name: 'SU KUYUSU', 
       link: '/su-kuyusu', 
       image: logo, 
       description: 'Construction de puits pour fournir de l\'eau potable dans les régions touchées par la sécheresse.'
     },
     { 
       name: "HEDİYEM KUR'AN OLSUN", 
       link: '/hediyem-kuran-olsun', 
       image: logo, 
       description: 'Initiative pour offrir des exemplaires du Coran aux musulmans qui n\'ont pas accès à cette ressource essentielle.'
     },
     { 
       name: 'HEDİYEM KİTAP OLSUN', 
       link: '/hediyem-kitap-olsun', 
       image: logo, 
       description: 'Projet de donation de livres pour promouvoir l\'éducation et l\'apprentissage à travers la lecture.'
     },
     { 
       name: 'CAMİLER', 
       link: '/camiler', 
       image: logo, 
       description: 'Soutien à la construction et la restauration de mosquées dans diverses régions.'
     },
     { 
       name: 'MESCİTLER', 
       link: '/mescitler', 
       image: logo, 
       description: 'Petits lieux de prière, souvent construits dans les villages pour faciliter l\'accès à la pratique religieuse.'
     },
   ];
   
   const Faliyet = () => {
     const faaliyetRefs = useRef(faaliyetItems.map(() => React.createRef()));
   
     const scrollToItem = (index) => {
       faaliyetRefs.current[index].current.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
       });
     };
   
     return (
    <div>
    <Slider />
    <h1 className="text-5xl font-bold text-center mb-14 text-gray-900 tracking-tight">
         Faaliyetlerimiz
       </h1>
 
       {/* Navigation Buttons */}
       <div className="sticky top-0 z-50 bg-white py-4 flex justify-center mb-8 space-x-4 shadow-md">
         {faaliyetItems.map((item, index) => (
           <button
             key={index}
             className="px-4 py-2 bg-gray-800 text-white font-medium rounded-lg shadow-sm transition duration-300 ease-in-out hover:bg-gray-700 hover:scale-105"
             onClick={() => scrollToItem(index)}
           >
             {item.name}
           </button>
         ))}
       </div>
        <div className="container mx-auto px-4 py-8 bg-white-50">
       
       {/* Main Title */}
       
 
       {/* Grid Layout */}
       <div className="grid  grid-cols-1 md:grid-cols-1 gap-2">
         {faaliyetItems.map((item, index) => (
           <div
             ref={faaliyetRefs.current[index]}
             key={index}
             className="block p-6 border border-gray-200 rounded-lg shadow-md transform transition-transform duration-500  hover:shadow-lg"
           >
             <div className="flex flex-col md:flex-row items-center">
               {/* Image */}
               <div className="md:w-1/2">
                 <img
                   src={item.image}
                   alt={item.name}
                   className="w-full h-auto rounded-md transition-transform duration-500 hover:rotate-1 hover:scale-105"
                 />
               </div>
 
               {/* Description */}
               <div className="md:w-1/2 md:pl-6 mt-2 md:mt-0">
                 <h2 className="text-2xl font-medium text-gray-800">
                   {item.name}
                 </h2>
                 <p className="text-gray-600 mt-3 leading-relaxed">
                   {item.description}
                 </p>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
    </div>
     );
   };
   
   

export default Faliyet;
