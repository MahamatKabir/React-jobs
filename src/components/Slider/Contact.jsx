

export default function ContactForm() {
  return (
    <div className="min-h-[500px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg')" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Formulaire de Contact */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-transform transform hover:scale-105"
                    placeholder="Your Name"
                  />  
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-transform transform hover:scale-105"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-transform transform hover:scale-105"
                    placeholder="Your Message"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-slate-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
{/* Texte d'Information */}
            <div className="text-white flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to Our Contact Page</h1>
              <p className="mb-6">
                We d love to hear from you! Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
              </p>
              <p>
                Feel free to reach out by filling out the contact form, or simply drop by our office for a chat. We are always open to new ideas and collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
