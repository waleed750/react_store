// File: src/pages/CartPage.tsx
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">📍 Riyadh, Saudi Arabia</span>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        </div>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4 gap-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                <div>
                  <h2 className="font-semibold text-sm line-clamp-1 max-w-[180px]">{item.title}</h2>
                  <p className="text-sm text-gray-600">{item.category}</p>
                  <p className="text-lg font-bold mt-1">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="p-1 rounded border hover:bg-gray-100"
                  onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                >
                  <Minus size={16} />
                </button>
                <span>{item.quantity || 1}</span>
                <button
                  className="p-1 rounded border hover:bg-gray-100"
                  onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                >
                  <Plus size={16} />
                </button>
                <button
                  className="ml-4 p-1 text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          <div className="text-right text-xl font-bold mt-6">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}

      <div className="mt-10 text-center">
        <Link to="/" className="text-blue-600 hover:underline text-sm">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
