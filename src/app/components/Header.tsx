import Link from "next/link";
import { useState } from "react";
import "tailwindcss/tailwind.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#272343] shadow-md w-full">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-white">Comforty</div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row sm:space-x-6 w-full sm:w-auto mt-4 sm:mt-0 sm:items-center`}
        >
            <div className=" flex gap-4 md:gap-8 text-sm md:text-base">
            <Link className=" text-white hover:text-[#56d3be]" href="/">Home</Link>
            <Link className=" text-white hover:text-[#56d3be]" href="/ShopCart">ShopCart</Link>
            <Link className=" text-white hover:text-[#56d3be]" href="/Products">Products</Link>
            <Link className=" text-white hover:text-[#56d3be]" href="/Pages">Pages</Link>
            <Link className=" text-white hover:text-[#56d3be]" href="/About">About</Link>
          </div>
        </nav>

        {/* Contact Info */}
        <div className="w-full sm:w-auto mt-4 sm:mt-0 text-sm text-white text-center sm:text-right">
          <div>Contact: (080) 555-0111</div>
          <span className="text-xs text-white block sm:inline">
            Free Shipping On All Orders Over $50
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
