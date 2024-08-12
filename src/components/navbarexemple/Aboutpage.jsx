
const Aboutpage = () => {
  const imageUrl = 'https://www.ciit.edu.ph/wp-content/uploads/2021/11/122021-5-1024x536.jpg';
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="grid sm:grid-cols-12 grid-cols-1 gap-6 m-4 w-full max-w-5xl">
        <div className="sm:col-span-6 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-extrabold text-center mb-4">MAHAMAT KABIR SOULEYMAN</h1>
          <p className="text-xl text-center text-gray-800">Front-end Developer</p>
        </div>
        <div className="sm:col-span-6 col-span-12 flex items-center justify-center">
          <img src={imageUrl} alt="Profile" className="rounded-lg shadow-lg  object-cover   sm:max-h-full sm:h-auto" />
        </div>
      </div>
      <div className="columns-2 box-content   border-4  hover:box-content">
  <p>Well, let me tell you something, ...</p>
  <p className="break-after-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
    </div>
  );
};

export default Aboutpage;
