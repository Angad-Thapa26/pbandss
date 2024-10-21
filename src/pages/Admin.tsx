import React, { useState, useEffect } from 'react';
import { Notice, Product } from '../types';

// This is not secure and should be replaced with proper authentication in a real application
const ADMIN_PASSWORD = '09876123';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'notices' | 'products'>('notices');
  const [notices, setNotices] = useState<Notice[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [newNotice, setNewNotice] = useState<Omit<Notice, 'id'>>({
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
  });

  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    image: '',
    description: '',
    category: '',
  });

  useEffect(() => {
    // Load notices from localStorage
    const storedNotices = localStorage.getItem('notices');
    if (storedNotices) {
      setNotices(JSON.parse(storedNotices));
    }

    // Load products from localStorage
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault();
    const id = notices.length + 1;
    const updatedNotices = [...notices, { ...newNotice, id }];
    setNotices(updatedNotices);
    localStorage.setItem('notices', JSON.stringify(updatedNotices));
    setNewNotice({ title: '', content: '', date: new Date().toISOString().split('T')[0] });
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const id = products.length + 1;
    const updatedProducts = [...products, { ...newProduct, id }];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setNewProduct({ name: '', price: 0, image: '', description: '', category: '' });
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'notices' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('notices')}
        >
          Notices
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'products' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
      </div>

      {activeTab === 'notices' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add New Notice</h2>
          <form onSubmit={handleAddNotice} className="space-y-4">
            <div>
              <label htmlFor="title" className="block mb-1">Title</label>
              <input
                type="text"
                id="title"
                value={newNotice.title}
                onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block mb-1">Content</label>
              <textarea
                id="content"
                value={newNotice.content}
                onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                className="w-full p-2 border rounded"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="date" className="block mb-1">Date</label>
              <input
                type="date"
                id="date"
                value={newNotice.date}
                onChange={(e) => setNewNotice({ ...newNotice, date: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Add Notice
            </button>
          </form>
        </div>
      )}

      {activeTab === 'products' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
          <form onSubmit={handleAddProduct} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block mb-1">Price</label>
              <input
                type="number"
                id="price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-1">Image URL</label>
              <input
                type="url"
                id="image"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-1">Description</label>
              <textarea
                id="description"
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                className="w-full p-2 border rounded"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="category" className="block mb-1">Category</label>
              <input
                type="text"
                id="category"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Add Product
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admin;