import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderContent = () => {
    if (currentPage === "Home") {
      return (
        <main className="flex-1 flex items-center">
          <HeroSection />
        </main>
      );
    }

    return (
      <main className="flex-1 flex items-center justify-center py-24 px-6 md:px-12">
        <div className="max-w-[800px] w-full flex flex-col items-center text-center gap-6">
          <h1 className="font-display font-extrabold text-5xl md:text-6xl text-white">
            {currentPage}
          </h1>
          <div className="w-20 h-1 bg-accent-blue rounded-full mb-4"></div>
          <p className="text-accent-blue text-lg md:text-xl leading-relaxed max-w-2xl">
            Explore our {currentPage.toLowerCase()} and discover how SmartCredit is revolutionizing business finance. 
            We provide cutting-edge solutions tailored to your specific needs, ensuring you stay ahead in the competitive market.
            Our team is dedicated to delivering excellence and innovation in every aspect of our {currentPage.toLowerCase()} offerings.
          </p>
          <button 
            onClick={() => setCurrentPage("Home")}
            className="mt-8 px-8 py-3 bg-white text-btn-dark font-bold rounded-full hover:bg-nav-text transition-all transform hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </main>
    );
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar onNavigate={setCurrentPage} activePage={currentPage} />
      
      {renderContent()}
      
      {/* Background decorative elements */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-accent-blue/5 blur-[100px] -z-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
}
