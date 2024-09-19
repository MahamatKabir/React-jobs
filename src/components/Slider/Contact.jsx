import Footer from "./Footer";
import Slider from "./Slider";

export default function ContactForm() {
  return (
    <div className="min-h-[500px] bg-cover bg-center bg-no-repeat">
      <Slider />
      <div className="flex items-center justify-center h-full bg-gray-300 bg-opacity-50">
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulaire de Contact */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
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

            {/* Contact Info Section */}
            <div className="text-white flex flex-col justify-center bg-slate-800 p-8 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold mb-4">Welcome to Our Contact Page</h1>
              <p className="mb-6 text-lg">
                We d love to hear from you! Whether you have a question about features, pricing, or anything else, our team is here to help.
              </p>
              <p className="mb-6 text-lg">
                Feel free to reach out by filling out the contact form, or visit us at our office. We welcome new ideas and collaborations.
              </p>
              {/* Separate Contact Info */}
              <div className="bg-slate-700 p-4 rounded-lg mt-6">
                <h3 className="text-xl font-bold mb-2">Contact Info</h3>
                <p className="text-lg">
                  <strong>Phone:</strong> 559393
                </p>
                <p className="text-lg">
                  <strong>Email:</strong> m@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
