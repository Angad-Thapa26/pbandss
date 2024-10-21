import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Contact Us</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <MapPin size={24} className="text-blue-500" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">Byas 2, Tanahun, Nepal</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone size={24} className="text-blue-500" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+977 1234567890</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail size={24} className="text-blue-500" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">info@pratapbooks.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MessageSquare size={24} className="text-blue-500" />
            <div>
              <h3 className="font-semibold">WhatsApp</h3>
              <p className="text-gray-600">+977 9800000000</p>
            </div>
          </div>
        </div>

        <form className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Location</h2>
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <p className="text-gray-600">
            Google Maps integration will be placed here
          </p>
        </div>
      </section>

      <section className="bg-blue-100 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Sunday-Friday</h3>
            <p className="text-gray-600">7:00 AM - 8:00 PM</p>
          </div>
          <div>
            <h3 className="font-semibold">Saturday</h3>
            <p className="text-gray-600">10:00 AM - 5:00 PM</p>
          </div>
          <div>
            <h3 className="font-semibold">click</h3>
            <a href="./pages/Notices"></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
