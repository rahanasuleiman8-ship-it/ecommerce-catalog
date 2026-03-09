import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Navbar: React.FC = () => {
  const { count, toggle } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">🛍️ ShopCatalog</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Products</Link>
            <button
              onClick={toggle}
              className="relative bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
            >
              <span>🛒</span>
              <span>Cart</span>
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;