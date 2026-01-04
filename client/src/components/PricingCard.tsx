import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

export function PricingCard({ title, price, features, isPopular, delay = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: isPopular ? 1.05 : 1.02 }}
      className={`relative p-10 rounded-[2rem] border flex flex-col h-full transition-all duration-500 ${
        isPopular 
          ? "bg-primary/5 border-primary/50 shadow-[0_0_80px_rgba(0,255,255,0.15)] scale-105 z-10" 
          : "bg-white/[0.01] border-white/10 hover:border-primary/30 hover:bg-white/[0.03]"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20">
          Best Value
        </div>
      )}

      <div className="mb-10">
        <h3 className="text-sm font-black text-primary mb-4 tracking-[0.3em] uppercase opacity-80">{title}</h3>
        <div className="flex flex-col gap-2">
          <span className="text-5xl md:text-6xl font-black font-heading text-glow tracking-tighter">{price}</span>
          <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest mt-2">One-time setup cost</span>
        </div>
      </div>

      <ul className="space-y-5 mb-10 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-4 text-base text-foreground/70 group/item">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors">
              <Check className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-500 group overflow-hidden relative ${
          isPopular
            ? "bg-primary text-primary-foreground shadow-[0_20px_40px_-10px_rgba(0,255,255,0.3)] hover:shadow-[0_25px_50px_-10px_rgba(0,255,255,0.5)]"
            : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
        }`}
      >
        <span className="relative z-10 group-hover:tracking-[0.4em] transition-all duration-500">Get Started</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </button>
    </motion.div>
  );
}
