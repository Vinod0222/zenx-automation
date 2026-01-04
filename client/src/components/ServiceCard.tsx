import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-[0_0_20px_rgba(0,255,255,0.1)]">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 font-heading text-foreground group-hover:text-glow transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/90 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
