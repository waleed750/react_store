import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Layout({ children }: { children: ReactNode }) {
  const { cart } = useCart();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top Navbar */}
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
              <Link to="/" className="hover:underline font-bold">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Black header */}
      <div className="bg-black text-white text-sm font-semibold tracking-wide py-2 px-6">
        ← MEN
      </div>

      {/* Page content */}
      <main className="px-6 py-10">{children}</main>

      {/* Floating Cart Button (visible everywhere) */}
      <Link to="/cart">
        <div className="fixed bottom-6 right-6 w-16 h-16 bg-black text-white text-xs font-bold rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer z-50">
          CART
          <span className="text-[10px] font-normal">{cart.length} item(s)</span>
        </div>
      </Link>
    </div>
  );
}
