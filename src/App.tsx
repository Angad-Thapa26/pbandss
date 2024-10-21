import React from 'react';
import { Menu, X, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductCatalog from './pages/ProductCatalog';
import PrintingServices from './pages/PrintingServices';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Notices from './pages/Notices';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'products':
        return <ProductCatalog />;
      case 'printing':
        return <PrintingServices />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'admin':
        return <Admin />;
      case 'notices':
        return <Notices />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;