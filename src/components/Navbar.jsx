import { useState } from "react";
import { NavLink } from "react-router-dom";
import kaman from '../assets/kaman-logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About Us", path: "/about" },
    { name: "Create Article", path: "/create" },
    { name: "Home", path: "/" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        
        {/* لوگو / برند */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <img src={kaman} alt="kaman-logo" className="size-12"/>
          <span className="text-lg font-semibold tracking-wide text-slate-100">
            Kaman<span className="text-indigo-500">.</span>
          </span>
        </div>

        {/* منوی دسکتاپ */}
        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 shadow-sm"
                    : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* دکمه همبرگری موبایل */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-200 focus:outline-none sm:hidden cursor-pointer"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* منوی کشویی موبایل */}
      {isOpen && (
        <nav className="border-t border-slate-800/80 bg-slate-900/95 px-4 py-3 space-y-1 sm:hidden backdrop-blur-xl">
          {navItems.reverse().map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-2.5 text-base font-medium transition-colors ${
                  isActive
                    ? "bg-indigo-500/15 text-indigo-400 font-semibold"
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}