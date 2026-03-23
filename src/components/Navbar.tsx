import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ onNavigate, activePage }: { onNavigate: (page: string) => void, activePage: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Features", "Pricing", "About us", "Help", "Blog"];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between py-8 px-6 md:px-12 max-w-[1200px] mx-auto w-full relative">
      {/* Left: Logo */}
      <div 
        className="flex items-center cursor-pointer z-50" 
        onClick={() => handleNavigate("Home")}
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <div className="w-4 h-4 bg-bg-main rounded-full translate-x-[-2px]"></div>
        </div>
      </div>

      {/* Center: Desktop Links */}
      <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => handleNavigate(link)}
            className={`text-base font-medium transition-colors no-underline cursor-pointer ${
              activePage === link ? "text-white" : "text-accent-blue hover:text-white"
            }`}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Right: Auth Buttons & Hamburger */}
      <div className="flex items-center gap-4 z-50">
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 text-white text-base font-medium border-2 border-card-bg rounded-full hover:bg-card-bg transition-colors">
            Log in
          </button>
          <button className="px-6 py-2 bg-white text-btn-dark text-base font-bold rounded-full hover:bg-nav-text transition-colors">
            Sign up
          </button>
        </div>

        {/* Hamburger Icon */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-bg-main/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavigate(link)}
                className={`text-2xl font-display font-bold transition-colors ${
                  activePage === link ? "text-white" : "text-accent-blue hover:text-white"
                }`}
              >
                {link}
              </button>
            ))}
            <div className="flex flex-col gap-4 mt-8 w-full px-12">
              <button className="w-full py-4 text-white text-lg font-medium border-2 border-card-bg rounded-full">
                Log in
              </button>
              <button className="w-full py-4 bg-white text-btn-dark text-lg font-bold rounded-full">
                Sign up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
