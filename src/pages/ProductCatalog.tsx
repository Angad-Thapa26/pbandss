import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Product } from '../types';

const ProductCatalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load products from localStorage
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      const loadedProducts = JSON.parse(storedProducts);
      setProducts(loadedProducts);

      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set(loadedProducts.map((p: Product) => p.category))
      );
      setCategories(uniqueCategories as string[]);
    }
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory ? product.category === selectedCategory : true) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Product Catalog</h1>
      <p>What we have in store....</p>

      <div className="flex items-center bg-white rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-grow p-3 rounded-l-lg focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600 transition duration-300">
          <Search size={24} />
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === null
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-blue-600 font-bold mt-2">
                NPR {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
