import React from 'react';
import { useCart } from '../hooks/useCart';

const Cart: React.FC = () => {
  const { items, isOpen, total, toggle, removeItem, updateQty, clearAll } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={toggle} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">🛒 Your Cart ({items.length})</h2>
          <button onClick={toggle} className="text-gray-500 hover:text-gray-800 text-2xl">✕</button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
            <span className="text-6xl mb-4">🛒</span>
            <p className="text-lg font-medium">Your cart is empty</p>
            <button onClick={toggle} className="mt-4 text-indigo-600 hover:underline">Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain bg-white rounded p-1" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 line-clamp-2">{item.title}</p>
                    <p className="text-indigo-600 font-bold">${item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <button
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                        className="w-6 h-6 bg-gray-200 rounded text-gray-700 hover:bg-gray-300 font-bold"
                      >−</button>
                      <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        className="w-6 h-6 bg-gray-200 rounded text-gray-700 hover:bg-gray-300 font-bold"
                      >+</button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 text-lg">🗑️</button>
                </div>
              ))}
            </div>

            <div className="border-t p-4 space-y-3">
              <div className="flex justify-between text-lg font-bold text-gray-800">
                <span>Total</span>
                <span className="text-indigo-600">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
                Checkout →
              </button>
              <button onClick={clearAll} className="w-full text-red-500 hover:text-red-700 text-sm font-medium">
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;