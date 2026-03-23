import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export default function UserCard() {
  return (
    <motion.div
      initial={{ y: -20, scale: 0.95, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="absolute -bottom-16 left-12 w-[180px] h-[80px] glass rounded-[16px] p-3 flex flex-col justify-between card-shadow z-20 border border-white/10"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 to-blue-300 overflow-hidden border border-white/20">
          <img 
            src="https://picsum.photos/seed/user1/64/64" 
            alt="Avatar" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white">Eustass Dan</span>
          <span className="text-[9px] text-accent-blue font-medium">Product Designer</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-1.5 border-t border-white/5">
        <span className="text-[9px] text-accent-blue font-semibold uppercase">Company:</span>
        <div className="flex items-center gap-1">
           <div className="w-2.5 h-2.5 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
