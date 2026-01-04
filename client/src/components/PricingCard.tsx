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
      className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-300 ${
        isPopular 
          ? "bg-primary/5 border-primary/50 shadow-[0_0_50px_rgba(186,255,255,0.1)] scale-105 z-10" 
          : "bg-white/[0.02] border-white/10 hover:border-primary/30 hover:bg-white/[0.04]"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider animate-pulse">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-lg font-medium text-muted-foreground mb-2 tracking-widest uppercase">{title}</h3>
        <div className="flex flex-col gap-1">
          <span className="text-4xl md:text-5xl font-bold font-heading text-glow">{price}</span>
          <span className="text-primary/70 text-xs font-bold uppercase tracking-tighter">One-time setup cost</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 group">
            <Check className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-125" />
            <span className="group-hover:text-foreground transition-colors">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-xl font-bold transition-all duration-300 group overflow-hidden relative ${
          isPopular
            ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary))]"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        <span className="relative z-10">Get Started Now</span>
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]" />
      </button>
    </motion.div>
  );
}
