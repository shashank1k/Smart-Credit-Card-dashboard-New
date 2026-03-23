import { motion } from "motion/react";
import { useMemo } from "react";

export default function CreditCard() {
  const cardData = useMemo(() => {
    const names = ["ALEX JOHNSON", "JORDAN SMITH", "CASEY RIVERA", "TAYLOR MORGAN", "RILEY COOPER", "ANDREW TRAFALGAR"];
    const name = names[Math.floor(Math.random() * names.length)];
    
    const rand4 = () => Math.floor(1000 + Math.random() * 9000);
    const cardNumber = `•••• ${rand4()} ${rand4()} ${rand4()}`;
    
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const year = String(new Date().getFullYear() % 100 + Math.floor(Math.random() * 5) + 1).padStart(2, '0');
    const expiry = `${month}/${year}`;
    
    return { name, cardNumber, expiry };
  }, []);

  return (
    <motion.div
      initial={{ y: -20, scale: 0.95, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      whileHover={{ scale: 1.04 }}
      className="relative w-[340px] h-[200px] rounded-[16px] overflow-hidden card-shadow glass border border-white/10 flex flex-col justify-between p-6 z-10"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pastel-gradient -z-10 blur-[2px]"></div>
      
      <div className="flex justify-between items-start">
        <span className="text-white font-bold text-xl italic tracking-tighter">VISA</span>
        {/* Small Logo */}
        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
           <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Chip and Contactless */}
        <div className="flex items-center gap-4">
           <div className="w-10 h-8 bg-white/30 rounded-md flex flex-col gap-[2px] p-1 justify-center">
              <div className="h-[2px] w-full bg-white/40"></div>
              <div className="h-[2px] w-full bg-white/40"></div>
              <div className="h-[2px] w-full bg-white/40"></div>
           </div>
           <div className="flex flex-col gap-[2px]">
              <div className="w-4 h-[2px] bg-white/60 rounded-full"></div>
              <div className="w-6 h-[2px] bg-white/60 rounded-full"></div>
              <div className="w-4 h-[2px] bg-white/60 rounded-full"></div>
           </div>
        </div>

        {/* Card Number */}
        <div className="flex items-center gap-4">
          <span className="text-white font-medium text-lg tracking-widest">{cardData.cardNumber}</span>
        </div>

        {/* Name and Expiry */}
        <div className="flex justify-between items-end">
          <span className="text-white/90 font-medium text-xs tracking-wide uppercase">
            {cardData.name}
          </span>
          <div className="flex flex-col items-end">
            <span className="text-[8px] text-white/60 uppercase">Expires</span>
            <span className="text-white/90 font-medium text-xs">{cardData.expiry}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
