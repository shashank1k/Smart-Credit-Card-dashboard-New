import { motion } from "motion/react";

export default function Navbar({ onNavigate, activePage }: { onNavigate: (page: string) => void, activePage: string }) {
  const navLinks = ["Features", "Pricing", "About us", "Help", "Blog"];

  return (
    <nav className="flex items-center justify-between py-8 px-6 md:px-12 max-w-[1200px] mx-auto w-full relative">
      {/* Left: Logo */}
      <div 
        className="flex items-center cursor-pointer z-10" 
        onClick={() => onNavigate("Home")}
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <div className="w-4 h-4 bg-bg-main rounded-full translate-x-[-2px]"></div>
        </div>
      </div>

      {/* Center: Links */}
      <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => onNavigate(link)}
            className={`text-base font-medium transition-colors no-underline cursor-pointer ${
              activePage === link ? "text-white" : "text-accent-blue hover:text-white"
            }`}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Right: Auth Buttons */}
      <div className="flex items-center gap-4 z-10">
        <button className="px-6 py-2 text-white text-base font-medium border-2 border-card-bg rounded-full hover:bg-card-bg transition-colors">
          Log in
        </button>
        <button className="px-6 py-2 bg-white text-btn-dark text-base font-bold rounded-full hover:bg-nav-text transition-colors">
          Sign up
        </button>
      </div>
    </nav>
  );
}
