import  { useState } from 'react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Web Development Project',
      category: 'web',
      image: 'https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg',
    },
    {
      id: 2,
      title: 'Mobile App Project',
      category: 'mobile',
      image: 'https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg',
    },
    {
      id: 3,
      title: 'Design Project',
      category: 'design',
      image: 'https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg',
    },
    {
      id: 4,
      title: 'Web Development Project 2',
      category: 'web',
      image: 'https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg',
    },
    {
      id: 5,
      title: 'Design Project 2',
      category: 'design',
      image: 'https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg',
    },
    {
      id: 6,
      title: 'Mobile App Project 2',
      category: 'mobile',
      image: 'https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg',
    },
  ];

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">Derniers projets</h1>

      {/* Filtre des catégories */}
      <div className="flex justify-center space-x-4 mb-10">
        <button
          onClick={() => filterProjects('all')}
          className={`py-2 px-4 rounded ${
            selectedCategory === 'all' ? 'bg-slate-500 text-white' : 'bg-white text-slate-500 border border-slate-500'
          }`}
        >
          All
        </button>
        <button
          onClick={() => filterProjects('web')}
          className={`py-2 px-4 rounded ${
            selectedCategory === 'web' ? 'bg-slate-500 text-white' : 'bg-white text-slate-500 border border-slate-500'
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => filterProjects('mobile')}
          className={`py-2 px-4 rounded ${
            selectedCategory === 'mobile' ? 'bg-slate-500 text-white' : 'bg-white text-slate-500 border border-slate-500'
          }`}
        >
          Mobile Apps
        </button>
        <button
          onClick={() => filterProjects('design')}
          className={`py-2 px-4 rounded ${
            selectedCategory === 'design' ? 'bg-slate-500 text-white' : 'bg-white text-slate-500 border border-slate-500'
          }`}
        >
          Design
        </button>
      </div>

      {/* Liste des projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            
          </div>
        ))}
      </div>
    </div>
  );
}
