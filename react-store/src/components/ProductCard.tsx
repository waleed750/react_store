import type { Product } from '../types/Product';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="text-center">
      <div className="w-full h-[250px] bg-white flex items-center justify-center mb-4 border">
        <img src={product.image} alt={product.title} className="max-h-[180px] object-contain" />
      </div>
      <h2 className="text-sm font-semibold mb-1 line-clamp-2 px-4">{product.title}</h2>
      <p className="text-xs text-gray-500">Moon Boots</p>
      <p className="text-base font-bold mt-1">${product.price.toFixed(2)}</p>
      <button
        className="mt-3 px-3 py-2 bg-black text-white rounded hover:bg-gray-900"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}