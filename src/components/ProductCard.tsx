import React from 'react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addItem, items } = useCart();
  const inCart = items.find((i) => i.id === product.id);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden group">
      <div className="relative h-56 bg-gray-50 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 right-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded-full capitalize">
          {product.category}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 flex-1">{product.title}</h3>
        <div className="flex items-center space-x-1 mb-3">
          <span className="text-yellow-400">{'★'.repeat(Math.round(product.rating.rate))}</span>
          <span className="text-gray-400 text-xs">({product.rating.count})</span>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addItem(product)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              inCart
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {inCart ? `✓ In Cart (${inCart.quantity})` : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;