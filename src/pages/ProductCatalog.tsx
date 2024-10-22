import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Product } from '../types';

// Fallback sample data
const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Nepali Literature Collection",
    price: 1500,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A curated collection of classic Nepali literature books.",
    category: "Books"
  },
  {
    id: 2,
    name: "Premium Notebook Set",
    price: 500,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "High-quality notebooks with smooth paper, perfect for journaling or note-taking.",
    category: "Stationery"
  },
  {
    id: 3,
    name: "Scientific Calculator",
    price: 1200,
    image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Advanced scientific calculator for students and professionals.",
    category: "Electronics"
  },
  {
    id: 4,
    name: "Art Supply Kit",
    price: 2000,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Complete art supply kit including colored pencils, watercolors, and sketchbook.",
    category: "Art Supplies"
  },
  {
    id: 5,
    name: "English-Nepali Dictionary",
    price: 800,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Comprehensive English-Nepali dictionary for language learners and translators.",
    category: "Books"
  }
];

const ProductCatalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/.netlify/functions/api/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        // Fallback to sample data if API call fails
        console.warn('Failed to fetch products from API, using sample data');
        setProducts(sampleProducts);
      }

      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set(sampleProducts.map((p: Product) => p.category))
      );
      setCategories(uniqueCategories as string[]);
    } catch (error) {
      console.error('Error fetching products:', error);
      // Fallback to sample data if API call fails
      setProducts(sampleProducts);
      const uniqueCategories = Array.from(
        new Set(sampleProducts.map((p: Product) => p.category))
      );
      setCategories(uniqueCategories as string[]);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory ? product.category === selectedCategory : true) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Product Catalog</h1>

      <div className="flex space-x-4 mb-4">
        <div className="flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
        <select
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCategory || ''}
          onChange={(e) => setSelectedCategory(e.target.value || null)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition duration-300"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.category}</p>
            <p className="text-blue-600 font-bold">NPR {product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 mb-2">{selectedProduct.category}</p>
            <p className="text-blue-600 font-bold mb-4">NPR {selectedProduct.price}</p>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
