import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">
              Pratap Book and Stationery
            </h3>
            <p className="text-sm">
              Your one-stop shop for all stationery and book needs in Byas 2,
              Tanahun, Nepal.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <button
                  onClick={() => setCurrentPage('home')}
                  className="hover:text-blue-300 transition duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('products')}
                  className="hover:text-blue-300 transition duration-300"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('printing')}
                  className="hover:text-blue-300 transition duration-300"
                >
                  Printing Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('notices')}
                  className="hover:text-blue-300 transition duration-300"
                >
                  Notices
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('about')}
                  className="hover:text-blue-300 transition duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="hover:text-blue-300 transition duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-blue-300 transition duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/makuraz_angad/"
                className="hover:text-blue-300 transition duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href=""
                className="hover:text-blue-300 transition duration-300"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Pratap Book and Stationery. All rights reserved.</p>
          <p>Made by mAkuraZ ,a company that builds webs</p>
          <p>testing edit modul //angad thapa//thişto be removed in final deploy//this deploy is not a final deploy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
