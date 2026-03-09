import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setCategory } from '../store/productsSlice';

const FilterSidebar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, selectedCategory } = useSelector((state: RootState) => state.products);

  const allCategories = ['all', ...categories];

  return (
    <aside className="w-full md:w-56 shrink-0">
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="font-bold text-gray-800 mb-4 text-lg">Categories</h2>
        <ul className="space-y-2">
          {allCategories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => dispatch(setCategory(cat))}
                className={`w-full text-left px-3 py-2 rounded-lg capitalize text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {cat === 'all' ? '🛍️ All Products' : cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default FilterSidebar;