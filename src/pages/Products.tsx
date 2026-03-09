import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchProducts, fetchCategories, setSearchQuery } from '../store/productsSlice';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredItems, loading, error, searchQuery } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-500">{filteredItems.length} products found</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="w-full md:w-96 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow-sm"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar />

          <div className="flex-1">
            {loading && (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              </div>
            )}
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl">{error}</div>
            )}
            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
                {filteredItems.length === 0 && (
                  <div className="col-span-full text-center py-16 text-gray-400">
                    <span className="text-5xl">🔍</span>
                    <p className="mt-4 text-lg">No products found</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;