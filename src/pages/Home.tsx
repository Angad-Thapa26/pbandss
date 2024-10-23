import React, { useState, useEffect } from 'react';
import { Book, Pencil, Printer, Search, Mail, Star, Bell } from 'lucide-react';
import { Notice } from '../types';
interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const [showShop, setShowShop] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [latestNotice, setLatestNotice] = useState<Notice | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShop(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Fetch the latest notice
    // This is a mock implementation. In a real app, you'd fetch from an API
    const fetchLatestNotice = async () => {
      // Simulating an API call
      const mockNotices: Notice[] = [
        {
          id: 1,
          title: 'NOTICE',
          content: 'This website is live ,Welcome ',
          date: '2024-10-23',
        },
      ];
      if (mockNotices.length > 0) {
        setLatestNotice(mockNotices[0]);
      }
    };

    fetchLatestNotice();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup for:', email);
    setEmail('');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          filter: 'brightness(0.3)',
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-12 text-white">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">
          Welcome to Pratap Book and Stationery
        </h1>
        <p className="text-xl mb-8 animate-slide-in">
          Your one-stop shop for all your book and stationery needs in Byas 2,
          Tanahun, Nepal.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 animate-fade-in">
            <Book className="text-yellow-400 w-12 h-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Wide Selection</h2>
            <p>Explore our vast collection of books across all genres.</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.2s' }} >
            <Pencil className="text-yellow-400 w-12 h-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Quality Stationery</h2>
            <p>
              Find premium stationery for all your writing and creative needs.
            </p>
          </div>
          <div
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Printer className="text-yellow-400 w-12 h-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Printing Services</h2>
            <p>High-quality printing services for documents and photos at a go.</p>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Search Our Products</h2>
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setCurrentPage('productCatalog')} 
              placeholder="Search for books, stationery, and more..."
              className="flex-grow p-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 p-3 rounded-r-lg hover:bg-yellow-300 transition duration-300"
            >
              <Search />
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <section className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Book of the Month
            </h2>
            <div className="flex items-center">
              <img
                src="https://shopratnaonline.com/wp-content/uploads/2023/10/Usle-Diyeko-Umer.webp"
                alt="Book of the Week"
                className="w-32 h-48 object-cover rounded-lg mr-4"
              />
              <div className="bow-12">
                <h3 className="text-xl font-semibold mb-2">Usla diyako umer</h3>
                <p className="text-gray-200 mb-2">by Buddhisagar</p>
                <p className="text-yellow-300 font-bold mb-2"></p>
                <button  onClick={() => setCurrentPage('productCatalog')} 
                  className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300 font-semibold">
                  About the book
                </button>
              </div>
            </div>
          </section>

         <section className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6">
             <h2 className="text-3xl font-semibold mb-4 text-center">Latest Notice</h2>
                {latestNotice ? (
                 <div className="bg-white bg-opacity-30 rounded-lg p-4 shadow-md">
                   <div className="flex items-center mb-2">
                      <Bell className="text-yellow-300 mr-2" size={24} />
                        <h3 className="text-xl font-semibold text-yellow-300">
                        {latestNotice.title}
                        </h3>
                     </div>
                  <p className="text-gray-100 mb-2">{latestNotice.content}</p>
                  <p className="text-right text-gray-200 text-sm">
                 Posted on: {new Date(latestNotice.date).toLocaleDateString()}
                 </p>
                </div>
              ) : (
             <p className="text-gray-200">No notices at the moment.</p>
            )}
</section>
          <section className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Special Offers
            </h2>
            <div className="bg-white bg-opacity-30 rounded-lg p-4 shadow-md">
              <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                Brightness of TIHAR Sale!
              </h3>
              <p className="text-gray-100">
                Get exciting discount and gift hampers to lucky consumers this Tihar from us.
                Don't miss out!
              </p>
              <button className="mt-4 bg-yellow-400 text-blue-900 px-6 py-2 rounded-full hover:bg-yellow-300 transition duration-300 font-semibold"></button>
            </div>
          </section>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <form onSubmit={handleNewsletter} className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="*ERROR being updated at the moment*"
              className="flex-grow p-3 rounded-l-lg text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 p-3 rounded-r-lg hover:bg-yellow-300 transition duration-300"
            >
              <Mail />
            </button>
          </form>
        </div>
        <div
          className={`transition-all duration-2000 ${
            showShop ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl font-semibold mb-4">Visit Our Shop</h2>
          <p className="text-xl mb-4">
            Experience our wide range of products in person at our store in Byas
            2, Tanahun, Nepal.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full hover:bg-yellow-300 transition duration-300 font-semibold"
          >
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
