//import { Link } from 'react-router-dom';


const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <div>
            <h2 className='text-2xl font-bold'>For Developers</h2>
            <p className='mt-2 mb-4'>
              Browse our React jobs and start your career today
            </p>
            <p
              to='/jobs'
              className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
              Browse Jobs
            </p>
          </div>
          <div className='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>For Employers</h2>
            <p className='mt-2 mb-4'>
              List your job to find the perfect developer for the role
            </p>
            <p
              to='/add-job'
              className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
            >
              Add Job
            </p>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-3  gap-4 m-4">
        <div className="min-h-[100px] rounded-lg shadow bg-amber-300">
           
        </div>
        <div className="min-h-[100px] rounded-lg shadow bg-slate-700">
           
        </div>
        <div className="min-h-[100px] rounded-lg shadow bg-green-700">
           
        </div>
      </div>
      <div className="grid sm:grid-cols-12 grid-cols-1 gap-4 m-4">
        <div className="min-h-[100px] rounded-lg shadow bg-red-300 sm:col-span-2">
           
        </div>
        <div className="min-h-[100px] rounded-lg shadow bg-slate-700 sm:col-span-10 sm:block hidden">
           
        </div>
        
      </div>
    </section>
  );
};
export default HomeCards;