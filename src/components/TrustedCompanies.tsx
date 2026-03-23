import { motion } from "motion/react";
import { Apple, Linkedin, Box, Anchor } from "lucide-react";

export default function TrustedCompanies() {
  const icons = [
    { icon: <Box size={24} />, delay: 0.1 },
    { icon: <Anchor size={24} />, delay: 0.2 },
    { icon: <Apple size={24} />, delay: 0.3 },
    { icon: <Linkedin size={24} />, delay: 0.4 },
  ];

  return (
    <div className="flex flex-col gap-4 mt-16">
      <span className="text-[12px] font-semibold text-accent-blue tracking-wider">
        Trusted by leading companies
      </span>
      <div className="flex items-center gap-6">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + item.delay }}
            className="text-white opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
