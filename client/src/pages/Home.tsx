import { useState, useEffect } from "react";
import stockImage1 from "@assets/stock_images/futuristic_ai_robot__07177da8.jpg";
import stockImage2 from "@assets/stock_images/futuristic_ai_robot__ee2ff8f4.jpg";
import stockImage3 from "@assets/stock_images/futuristic_ai_robot__3034dbc1.jpg";
import stockImage4 from "@assets/stock_images/high-tech_futuristic_934bc576.jpg";
import stockImage5 from "@assets/stock_images/futuristic_digital_n_4b91da1b.jpg";
import stockImage6 from "@assets/stock_images/futuristic_isometric_867bbcda.jpg";
import stockImage7 from "@assets/stock_images/futuristic_isometric_13e2461e.jpg";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { ContactForm } from "@/components/ContactForm";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Bot, Zap, BrainCircuit, ChevronRight, CheckCircle2, ArrowRight, Stethoscope, Store, Settings2, Building2, ShoppingBag, HelpCircle, Cpu, Network, Sparkles, Star, Quote } from "lucide-react";
import BotpressChat from "@/components/BotpressChat";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const cursorX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const cursorY = useSpring(mouseY, { damping: 20, stiffness: 100 });
  const bgTransform = useTransform(
    [cursorX, cursorY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(0,255,255,0.15), transparent 80%)`
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 relative">
      <motion.div 
        className="pointer-events-none fixed inset-0 z-30 opacity-40 mix-blend-screen"
        style={{ background: bgTransform }}
      />
      <BotpressChat />
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {[Cpu, Network, Sparkles, Bot, Zap].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
                x: [Math.random() * 50, Math.random() * -50, Math.random() * 50],
                rotate: [0, 360]
              }}
              transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
              className="absolute text-primary"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              <Icon size={40 + i * 10} strokeWidth={1} />
            </motion.div>
          ))}
        </div>
        {/* Animated Gradient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.08),transparent_50%)] -z-10 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-sm bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6"
              >
                ZenX Automation
              </motion.span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter mb-6 leading-[0.9] uppercase">
                Unlock the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Power of AI
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed opacity-70">
                Transforming industries through next-generation intelligent automation. Efficiency redefined for the modern age.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-sm bg-primary text-primary-foreground font-black text-sm uppercase tracking-widest hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">Book Free Demo</span>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#pricing"
                  className="w-full sm:w-auto px-8 py-4 rounded-sm bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
                >
                  View Pricing
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
              <img 
                src={stockImage6} 
                alt="Futuristic AI" 
                className="relative z-10 w-full max-w-2xl mx-auto rounded-3xl shadow-[0_0_100px_rgba(0,255,255,0.2)]"
              />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-[60px] animate-blob" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-[80px] animate-blob animation-delay-2000" />
            </motion.div>
          </div>
        </div>
        
        {/* Floating elements animation */}
        <div className="absolute top-1/3 left-10 hidden lg:block opacity-20">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Bot size={64} />
          </motion.div>
        </div>
        <div className="absolute bottom-1/3 right-10 hidden lg:block opacity-20">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <BrainCircuit size={64} />
          </motion.div>
        </div>
      </section>

      {/* USE-CASES SECTION */}
      <section id="use-cases" className="py-24 relative overflow-hidden bg-white/[0.01]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 italic text-glow">Tailored for Your Industry</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our AI solutions are designed to solve specific challenges across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { 
                title: "Clinics & Hospitals", 
                icon: Stethoscope, 
                color: "text-blue-400",
                statement: "Automate appointment bookings & patient inquiries 24/7"
              },
              { 
                title: "Local Businesses", 
                icon: Store, 
                color: "text-emerald-400",
                statement: "Capture local leads & handle common customer questions instantly"
              },
              { 
                title: "Service Centers", 
                icon: Settings2, 
                color: "text-orange-400",
                statement: "Streamline service scheduling & status updates automatically"
              },
              { 
                title: "Agencies", 
                icon: Building2, 
                color: "text-purple-400",
                statement: "Qualify high-ticket leads & automate client onboarding flows"
              },
              { 
                title: "E-commerce", 
                icon: ShoppingBag, 
                color: "text-pink-400",
                statement: "Recover abandoned carts & provide instant order tracking support"
              }
            ].map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 ${useCase.color} group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-xl shadow-current/10`}>
                  <useCase.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading leading-tight">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground italic font-medium group-hover:text-foreground/90 transition-colors">
                  “{useCase.statement}”
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-black/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-glow">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We build intelligent systems that work 24/7 so you don't have to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="AI Chatbots"
              description="Customized Website & WhatsApp chatbots. Lead qualification & automated customer support that learns your business."
              icon={Bot}
              delay={0.1}
            />
            <ServiceCard 
              title="Workflow Automation"
              description="Connect CRM, Google Sheets, & Email. Automated workflows that move data and save hours of manual labor."
              icon={Zap}
              delay={0.2}
            />
            <ServiceCard 
              title="AI Sales Agents"
              description="Intelligent sales, booking & engagement bots. High-performance AI trained to convert visitors into customers."
              icon={BrainCircuit}
              delay={0.3}
            />
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden glass-panel"
            >
              <img src={stockImage1} alt="AI Interface" className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Neural Processing</h3>
                  <p className="text-white/70">Advanced AI models trained specifically for your business logic.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group rounded-3xl overflow-hidden glass-panel"
            >
              <img src={stockImage6} alt="AI Collaboration" className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Infinite Scaling</h3>
                  <p className="text-white/70">Seamlessly handle thousands of interactions simultaneously without breaking a sweat.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 relative overflow-hidden bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 italic text-glow">How We Work</h2>
              <p className="text-muted-foreground mb-12 text-lg">
                A simple, transparent process to get you from idea to automation in weeks, not months.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Discover", desc: "Understand your business goals and identify high-impact automation opportunities." },
                  { title: "Build", desc: "Design & train AI chatbots while configuring custom workflows & integrations." },
                  { title: "Deploy", desc: "Launch across web & messaging platforms with rigorous testing for performance & reliability." },
                  { title: "Optimize", desc: "Monitor usage and continuously refine responses for maximum business ROI." }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group cursor-default"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <motion.div 
                initial={{ opacity: 0, rotate: -2 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-primary/20 blur-[120px] -z-10 rounded-full scale-90 group-hover:scale-100 transition-transform duration-700" 
              />
              <img 
                src={stockImage4} 
                alt="AI Neural Process" 
                className="rounded-3xl border border-white/20 shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-glow">Simple Pricing</h2>
            <p className="text-muted-foreground">Choose the plan that fits your scaling needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              title="Basic"
              price="₹24,999"
              features={[
                "Basic AI Chatbot",
                "Email Automation",
                "Mon-Fri Support",
                "Monthly Performance Report"
              ]}
              delay={0.1}
            />
            <PricingCard 
              title="Standard"
              price="₹34,999"
              isPopular
              features={[
                "Advanced AI Chatbot (GPT-4)",
                "Workflow Integration (3 apps)",
                "Priority Support",
                "Weekly Analytics",
                "CRM Integration"
              ]}
              delay={0.2}
            />
            <PricingCard 
              title="Premium"
              price="₹44,999"
              features={[
                "Custom AI Agents",
                "Full Workflow Automation",
                "24/7 Dedicated Support",
                "Real-time Dashboard",
                "Custom Training Data",
                "API Access"
              ]}
              delay={0.3}
            />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>One-time setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>No hidden charges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Full ownership</span>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all group glass-panel"
            >
              Book Free Demo
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section className="py-24 relative overflow-hidden bg-[#0A0C10]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl relative overflow-hidden text-center bg-[#161B22] border border-[#30363D] hover:border-primary/30 transition-all duration-500 shadow-2xl">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Bot size={120} className="text-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 tracking-tighter text-white italic">
              See how it <span className="text-primary">works</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Experience the power of ZenX automation. Our live demo bot is waiting to show you its capabilities.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.3em] text-xs animate-pulse">
                <span>Try asking for a demo</span>
                <ArrowRight size={14} />
              </div>
              <button 
                onClick={() => {
                  if (window.botpress && window.botpress.open) {
                    window.botpress.open();
                  }
                }}
                className="px-12 py-6 rounded-full bg-[#0D1117] border border-[#30363D] text-primary font-black text-2xl hover:bg-[#1C2128] hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl"
              >
                Launch Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-24 bg-[#0A0C10] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-glow italic text-white">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Hear from businesses already scaling with ZenX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Clinic Director",
                content: "The AI appointment bot has reduced our front-desk calls by 60%. Patients love the instant booking feature!",
                rating: 5
              },
              {
                name: "Mark Thompson",
                role: "E-commerce Founder",
                content: "Abandoned cart recovery is now fully automated. We saw a 15% increase in revenue in the first month alone.",
                rating: 5
              },
              {
                name: "Alex Rivera",
                role: "Agency Owner",
                content: "ZenX's lead qualification bot is like having a top-tier sales rep working 24/7. Highly recommended!",
                rating: 5
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-[#161B22]/60 border border-[#30363D] hover:border-primary/40 transition-all duration-300 relative group"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="absolute top-8 right-8 text-primary/10 w-10 h-10" />
                <p className="text-lg text-gray-200 mb-6 italic leading-relaxed">"{review.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MANUAL REVIEW FORM */}
          <div className="max-w-2xl mx-auto bg-[#161B22]/80 border border-[#30363D] p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10" />
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="text-primary w-5 h-5" />
              Leave a Review
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full px-4 py-3 rounded-xl bg-[#0D1117] border border-[#30363D] text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Your Role</label>
                  <input 
                    type="text" 
                    placeholder="e.g. CEO, Manager" 
                    className="w-full px-4 py-3 rounded-xl bg-[#0D1117] border border-[#30363D] text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Your Message</label>
                <textarea 
                  placeholder="Tell us about your experience..." 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#0D1117] border border-[#30363D] text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button 
                className="w-full py-4 rounded-xl bg-[#0D1117] border border-[#30363D] text-primary font-black text-lg hover:bg-[#161B22] hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Post Your Review
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                Ready to <span className="text-primary">ZenX</span> your workflow?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 text-lg">
                Book a free consultation today. We'll analyze your business and show you exactly where you can save time and money.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-xl">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-4 text-xl">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span>No technical knowledge required</span>
                </div>
                <div className="flex items-center gap-4 text-xl">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span>ROI within 30 days</span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 relative bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 italic text-glow">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Clearing up any doubts before we start automating.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "Is this a one-time cost?", a: "Yes, our setup costs are one-time payments for building and integrating your custom AI solution. We believe in full ownership for our clients." },
              { q: "Can this work for my business?", a: "Absolutely. We've designed automations for clinics, agencies, retail, and more. If you handle customer inquiries or data, AI can help." },
              { q: "Where does the data go?", a: "All data captured by your AI is routed directly to your preferred platform—whether that's a CRM, Google Sheet, or your email. You have 100% data privacy." },
              { q: "Can I change bot responses later?", a: "Yes. We provide you with an easy-to-use interface where you can update training data or specific responses anytime without technical knowledge." },
              { q: "Do I need technical knowledge?", a: "Zero. We handle the heavy lifting, integration, and training. You just focus on scaling your business with the time you've saved." }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex gap-5">
                  <div className="mt-1 shrink-0">
                    <HelpCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Still have questions?</h3>
            <a 
              href="#contact"
              className="px-10 py-5 rounded-full bg-primary text-primary-foreground font-black text-xl hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] transition-all animate-glow"
            >
              Book Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="group flex flex-col items-start mb-8 leading-none gap-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tighter text-foreground">zen</span>
                  <span className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600">X</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/70">Automate</span>
                  <span className="h-3 w-[1px] bg-foreground/10"></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/70">Innovate</span>
                  <span className="h-3 w-[1px] bg-foreground/10"></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/70">Elevate</span>
                </div>
              </Link>
              <p className="text-muted-foreground max-w-xs">
                Empowering businesses with intelligent automation solutions for the future.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-primary">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#process" className="hover:text-primary transition-colors">Process</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-primary">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} ZenX Automation. All rights reserved.</p>
            <p className="mt-2 text-xs opacity-50 uppercase tracking-[0.5em]">Automate | Innovate | Elevate</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
