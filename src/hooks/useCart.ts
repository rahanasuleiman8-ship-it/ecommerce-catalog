import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { addToCart, removeFromCart, updateQuantity, clearCart, toggleCart } from '../store/cartSlice';
import { Product } from '../types';

export const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    isOpen,
    total,
    count,
    addItem: (product: Product) => dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    })),
    removeItem: (id: number) => dispatch(removeFromCart(id)),
    updateQty: (id: number, quantity: number) => dispatch(updateQuantity({ id, quantity })),
    clearAll: () => dispatch(clearCart()),
    toggle: () => dispatch(toggleCart()),
  };
};