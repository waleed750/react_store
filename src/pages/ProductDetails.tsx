// File: src/pages/ProductDetail.tsx
import { useParams, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../services/api';
import type { Product } from '../types/Product';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const passedProduct = location.state?.product as Product | undefined;
  const [product, setProduct] = useState<Product | null>(passedProduct ?? null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!product && id) {
      fetchProductById(parseInt(id)).then(setProduct);
    }
  }, [id, product]);

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Image Gallery */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-3">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={product.image}
                alt={product.title + ' view ' + i}
                className="w-16 h-16 object-contain border hover:border-black cursor-pointer"
              />
            ))}
          </div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-contain border rounded"
          />
        </div>

        {/* Right Product Details */}
        <div>
          <h2 className="text-xl font-bold uppercase mb-1">Moon Boot</h2>
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-xl font-bold mb-4">${product.price}</p>

          <label className="block mb-2 text-sm">Size Guide</label>
          <select className="border rounded px-4 py-2 w-full mb-4">
            <option>Choose an option</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white w-full py-3 mb-3 rounded hover:bg-gray-900"
          >
            Add To Cart
          </button>

          <button className="bg-gray-700 text-white w-full py-3 rounded mb-4">
            Pay with <span className="font-bold text-white ml-1">G</span>
            <span className="text-red-500 font-bold">Pay</span>
          </button>

          <div className="flex gap-8 justify-center">
            <img src="/icons/visa.svg" alt="visa" className="h-5" />
            <img src="/icons/master_card.svg" alt="mastercard" className="h-5" />
            <img src="/icons/apple_pay.svg" alt="applepay" className="h-5" />
            <img src="/icons/shopify.svg" alt="shop" className="h-5" />
          </div>

          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-blue-600 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}