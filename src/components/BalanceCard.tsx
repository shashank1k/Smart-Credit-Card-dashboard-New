import { motion } from "motion/react";
import { Wallet } from "lucide-react";

export default function BalanceCard() {
  return (
    <motion.div
      initial={{ y: -20, scale: 0.95, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="absolute -top-12 right-0 w-[140px] h-[48px] glass rounded-[12px] px-2 flex items-center justify-between card-shadow z-20 border border-white/10"
    >
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center">
          <Wallet size={12} className="text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] text-accent-blue font-semibold uppercase tracking-wider">Balance</span>
          <span className="text-[10px] font-bold text-white">$2200.50</span>
        </div>
      </div>
      <button className="bg-card-bg text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md hover:bg-white/20 transition-colors">
        Top up
      </button>
    </motion.div>
  );
}
