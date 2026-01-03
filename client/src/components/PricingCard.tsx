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
      className={`relative p-8 rounded-3xl border flex flex-col h-full ${
        isPopular 
          ? "bg-primary/10 border-primary shadow-[0_0_40px_rgba(59,130,246,0.15)]" 
          : "bg-white/5 border-white/10 hover:border-white/20"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-lg font-medium text-muted-foreground mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold font-heading">{price}</span>
          <span className="text-muted-foreground text-sm">/mo</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
            <Check className="w-5 h-5 text-primary shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
          isPopular
            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        Choose {title}
      </button>
    </motion.div>
  );
}
