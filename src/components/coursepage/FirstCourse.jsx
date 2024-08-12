import { useState } from "react";


function FirstCourse() {
     const [count , setCount] = useState(15)
    // let count = 15;
     const addValut = () => {
      // count = count + 1 ;
      setCount(count + 1 )
          console.log(count);
     }
     const deletValut = () => {
          // count = count + 1 ;
          setCount(count - 1 )
              console.log(count);
     }
     const imageUrl = 'https://www.ciit.edu.ph/wp-content/uploads/2021/11/122021-5-1024x536.jpg';

     const element = {
          title:'tchad'
     }
          
        
  return (

     <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-3xl bg-green-500 text-white p-5 rounded-lg shadow-lg mb-6 animate-fade-in">
        React premier cours {count}
      </div>
      <div className="flex space-x-4">
        <button 
          onClick={addValut} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg  hover:bg-blue-600 transition-all duration-300"
        >
          Ajouter
        </button>
        <button 
          onClick={deletValut} 
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg  hover:bg-red-600 transition-all duration-300"
        >
          Supprimer
        </button> 
      </div>
      <p className="text-lg text-gray-700 mt-6">Footer {count}</p>
      <div className="gap-8 columns-3">
  <img className="w-full aspect-video " src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <img className="w-full aspect-square " src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <img className="w-full aspect-video " src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  
</div>
<div className="columns-2 box-content h-32 w-32 p-4 border-4  hover:box-content">
  <p>Well, let me tell you something, ...</p>
  <p className="break-after-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
    </div>
    <iframe className="w-full aspect-video md:aspect-square overscroll-none  hover-aspect-squart" src="https://www.youtube.com/watch?v=_n_UVPKC_AE&ab_channel=Melvynx%E2%80%A2Apprendre%C3%A0coder"></iframe>
<div className="  min-h-screen bg-slate-700 p-5 rounded-xl shadow-gray-200 "  style={{ backgroundImage: "url('https://www.ciit.edu.ph/wp-content/uploads/2021/11/122021-5-1024x536.jpg')" }}>
<div className=" my-9 p-1 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div className="shrink-1">
    <img className="size-12" src={imageUrl} alt="ChitChat Logo" />
  </div>
  <div>
    <div className=" text-center sm:text-left text-xl font-medium text-black">ChitChat</div>
    <p className="text-slate-500">You have a new message!</p>
  </div>
</div>
<div className="py-15 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={imageUrl} alt="Woman's Face" />
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text text-black font-semibold">
        Erin Lindford
      </p>
      <p className="text-slate-500 font-medium">
        Product Engineer
      </p>
    </div>
    <button className="px-5 py-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
</div>
<div className=" flex items-center bg-slate-100 ">
  <div className="flex items-center space-x-2 text-base">
    <h4 className="font-semibold text-slate-900">Contributors</h4>
    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
  </div>
  <div className="mt-3 flex -space-x-2 overflow-hidden">
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
  </div>
  <div className="mt-3 text-sm font-medium">
    <a href="#" className="text-blue-500">+ 198 others</a>
  </div>
</div>
<div>
    <img className="rounded" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
    <div className="mt-2">
      <div>
        <div className="text-xs text-slate-600 uppercase font-bold tracking-wider">{element.title}</div>
        <div className="font-bold text-slate-700 leading-snug">
          <a href="#" className="hover:underline">{ element.title }</a>
        </div>
        <div className="mt-2 text-sm text-white">{element.title}</div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default FirstCourse