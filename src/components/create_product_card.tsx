import type { Product } from '../types/Product';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="text-center">
      <Link to={`/product/${product.id}`}>
        <div className="w-full h-[250px] bg-white flex items-center justify-center mb-4 border">
          <img src={product.image} alt={product.title} className="max-h-[180px] object-contain" />
        </div>
        <h2 className="text-sm font-semibold mb-1 line-clamp-2 px-4">{product.title}</h2>
        <p className="text-xs text-gray-500">Moon Boots</p>
        <p className="text-base font-bold mt-1">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
}
