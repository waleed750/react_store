import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import type { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const { cart } = useCart();

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* TOP NAVIGATION BAR */}
      <nav className="border-b py-3">
        <ul className="flex justify-center gap-6 text-sm uppercase font-medium">
          {[
            "New In",
            "Shop By",
            "Women",
            "Men",
            "Designers",
            "Clothing",
            "Shoes",
            "Bags",
            "Accessories",
            "Jewellery",
          ].map((item) => (
            <li key={item} className="cursor-pointer hover:underline list-none">
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* BLACK BAR */}
      <div className="bg-black text-white text-sm font-semibold tracking-wide py-2 px-6">
        ← MEN
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex px-6 py-10 gap-10">
        {/* SIDEBAR FILTERS */}
        <aside className="w-1/4 space-y-8 text-sm">
          <div className="uppercase font-bold border-b pb-2">
            Product Categories
          </div>
          <div className="uppercase font-bold border-b pb-2">
            Filter by Price
          </div>
        </aside>

        {/* PRODUCTS + SORTING */}
        <section className="w-3/4">
          {/* Breadcrumbs + Controls */}
          <div className="flex justify-between items-center mb-6 text-sm">
            <div>
              Home / <span className="font-bold">Men</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Show:</span>
              <span className="font-semibold">50</span> / 100 / 150
              <div className="flex gap-2 ml-4">
                <div className="w-4 h-4 border bg-black" />
                <div className="w-4 h-4 border" />
              </div>
              <div>Sort by latest ▼</div>
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-3 gap-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* Inside return */}
      <Link to="/cart">
        <div className="fixed bottom-6 right-6 w-16 h-16 bg-black text-white text-xs font-bold rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer z-50">
          CART
          <span className="text-[10px] font-normal">{cart.length} item(s)</span>
        </div>
      </Link>
    </div>
  );
}
