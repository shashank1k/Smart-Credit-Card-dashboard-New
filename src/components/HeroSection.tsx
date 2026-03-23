import { motion } from "motion/react";
import CreditCard from "./CreditCard";
import BalanceCard from "./BalanceCard";
import UserCard from "./UserCard";
import TrustedCompanies from "./TrustedCompanies";

export default function HeroSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-16 overflow-visible">
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[12px] font-semibold text-accent-blue tracking-[2px] uppercase mb-4"
        >
          Start saving money
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-4xl md:text-[48px] leading-[1.1] text-white tracking-[0.5px] max-w-[420px] mb-8"
        >
          Smart credit cards for your business.
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ backgroundColor: "#E6F0F3" }}
          className="bg-white text-btn-dark px-8 py-4 rounded-[4px] font-bold text-base card-shadow transition-colors mb-4"
        >
          Learn more
        </motion.button>

        <TrustedCompanies />
      </div>

      {/* Right Content - Floating Cards */}
      <div className="flex-1 relative flex justify-center items-center h-[400px] w-full max-w-[500px]">
        <div className="relative">
          <BalanceCard />
          <CreditCard />
          <UserCard />
          
          {/* Background decorative blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-blue/10 blur-[100px] -z-20"></div>
        </div>
      </div>
    </section>
  );
}
