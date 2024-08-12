import  { useState } from 'react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Web Development Project',
      category: 'web',
      image: 'https://via.placeholder.com/300x200?text=Web+Project+1',
    },
    {
      id: 2,
      title: 'Mobile App Project',
      category: 'mobile',
      image: 'https://via.placeholder.com/300x200?text=Mobile+Project+1',
    },
    {
      id: 3,
      title: 'Design Project',
      category: 'design',
      image: 'https://via.placeholder.com/300x200?text=Design+Project+1',
    },
    {
      id: 4,
      title: 'Web Development Project 2',
      category: 'web',
      image: 'https://via.placeholder.com/300x200?text=Web+Project+2',
    },
    {
      id: 5,
      title: 'Design Project 2',
      category: 'design',
      image: 'https://via.placeholder.com/300x200?text=Design+Project+2',
    },
    {
      id: 6,
      title: 'Mobile App Project 2',
      category: 'mobile',
      image: 'https://via.placeholder.com/300x200?text=Mobile+Project+2',
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
            selectedCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
          }`}
        >
          All
        </button>
        <button
          onClick={() => filterProjects('web')}
          className={`py-2 px-4 rounded ${
            selectedCategory === 'web' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => filterProjects('mobile')}
          className={`py-2 px-4 rounded ${
            selectedCategory === 'mobile' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
          }`}
        >
          Mobile Apps
        </button>
        <button
          onClick={() => filterProjects('design')}
          className={`py-2 px-4 rounded ${
            selectedCategory === 'design' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
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
