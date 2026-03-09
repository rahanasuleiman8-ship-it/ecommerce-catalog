import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        <span className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full mb-6">
          🛍️ Modern E-Commerce Experience
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Discover Amazing<br />
          <span className="text-indigo-600">Products</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mb-10">
          Browse our curated catalog of products across multiple categories. Filter, search, and add to cart with ease.
        </p>
        <Link
          to="/products"
          className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Shop Now →
        </Link>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: '🔍', title: 'Smart Search', desc: 'Find products instantly with our powerful search functionality.' },
          { icon: '🏷️', title: 'Category Filter', desc: 'Browse by category to find exactly what you\'re looking for.' },
          { icon: '🛒', title: 'Easy Cart', desc: 'Add items, update quantities, and checkout seamlessly.' },
        ].map((f) => (
          <div key={f.title} className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{f.title}</h3>
            <p className="text-gray-500">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;