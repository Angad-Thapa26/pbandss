import React from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  toggleMenu,
  setCurrentPage,
}) => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen size={24} />
          <h1 className="text-xl font-bold">Pratap Book and Stationery</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <button
            onClick={() => setCurrentPage('home')}
            className="hover:text-blue-200 transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('products')}
            className="hover:text-blue-200 transition duration-300"
          >
            Products
          </button>
          <button
            onClick={() => setCurrentPage('printing')}
            className="hover:text-blue-200 transition duration-300"
          >
            Printing Services
          </button>
          <button
            onClick={() => setCurrentPage('notices')}
            className="hover:text-blue-200 transition duration-300"
          >
            Notices
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className="hover:text-blue-200 transition duration-300"
          >
            About
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className="hover:text-blue-200 transition duration-300"
          >
            Contact
          </button>
          <button
            onClick={() => setCurrentPage('admin')}
            className="hover:text-blue-200 transition duration-300"
          >
            Admin
          </button>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <button
              onClick={() => {
                setCurrentPage('home');
                toggleMenu();
              }}
              className="text-left hover:text-blue-200 transition duration-300"
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentPage('products');
                toggleMenu();
              }}
              className="text-left hover:text-blue-200 transition duration-300"
            >
              Products
            </button>
            <button
              onClick={() => {
                setCurrentPage('printing');
                toggleMenu();
              }}
              className="text-left hover:text-blue-200 transition duration-300"
            >
              Printing Services
            </button>
            <button
              onClick={() => {
                setCurrentPage('notices');
                toggleMenu();
              }}
              className="text-left hover:text-blue-200 transition duration-300"
            >
              Notices
            </button>
            <button
              onClick={() => {
                setCurrentPage('about');
                toggleMenu();
              }}
              className="text-left hover:text-blue-200 transition duration-300"
            >
              About
            </button>
            <button
              onClick={() => {
                setCurrentPage('contact');
                toggleMenu();
              }}
              className="text-left hover:text-blue-200 transition duration-300"
            >
              Contact
            </button>
            <button
              onClick={() => {
                setCurrentPage('admin');
                toggleMenu();
              }}
              className="text-left hover:text-blue-200 transition duration-300"
            >
              Admin
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
