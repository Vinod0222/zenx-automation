import stockImage from "@assets/stock_images/industrial_robotic_a_ef02b53c.jpg";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { ContactForm } from "@/components/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Zap, BrainCircuit, ChevronRight, CheckCircle2, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import BotpressChat from "@/components/BotpressChat";

declare global {
  interface Window {
    botpress: any;
  }
}

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <AnimatePresence>
        {showChat && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-[500px] h-[600px] bg-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setShowChat(false)}
                className="absolute top-4 right-4 z-[110] p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <X size={20} />
              </button>
              <BotpressChat />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6 backdrop-blur-sm">
                Next Gen AI Automation
              </span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6 leading-[1.1]">
                Automate Smarter. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-glow">
                  Scale Faster.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Transform your business with AI-powered chatbots and custom automation solutions. Reduce costs and increase efficiency overnight.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300"
                >
                  Get a Free Demo
                </a>
                <a 
                  href="#pricing"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  View Pricing
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
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

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We build intelligent systems that work 24/7 so you don't have to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="AI Chatbots"
              description="Website & WhatsApp chatbots. Lead qualification & customer support with 24/7 automated responses."
              icon={Bot}
              delay={0.1}
            />
            <ServiceCard 
              title="Workflow Automation"
              description="CRM, Google Sheets, Email & API integrations. Automated lead routing & follow-ups for reduced manual work."
              icon={Zap}
              delay={0.2}
            />
            <ServiceCard 
              title="AI Assistants"
              description="Sales, booking & customer engagement bots. Business-specific training for scalable and secure deployments."
              icon={BrainCircuit}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">How We Work</h2>
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
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full" />
              {/* Abstract tech visualization */}
              <img 
                src={stockImage} 
                alt="AI Process Visualization" 
                className="rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Simple Pricing</h2>
            <p className="text-muted-foreground">Choose the plan that fits your scaling needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              title="Basic"
              price="₹29,999"
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
              price="₹49,999"
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
              <p className="text-xl text-muted-foreground mb-8">
                Book a free consultation today. We'll analyze your business and show you exactly where you can save time and money.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="text-primary" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="text-primary" />
                  <span>No technical knowledge required</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="text-primary" />
                  <span>ROI within 30 days</span>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Bot />
                  </div>
                  <div>
                    <div className="font-bold">Chat with ZenX Bot</div>
                    <div className="text-sm text-muted-foreground">Always online</div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  Try our demo bot to see how we can handle customer inquiries automatically.
                </div>
                <button 
                  onClick={() => setShowChat(true)}
                  className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Start Chat <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <ContactForm />
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
                  <span className="text-4xl font-bold tracking-tighter text-white">zen</span>
                  <span className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600">X</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/90">Automate</span>
                  <span className="h-3 w-[1px] bg-white/20"></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/90">Innovate</span>
                  <span className="h-3 w-[1px] bg-white/20"></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/90">Elevate</span>
                </div>
              </Link>
              <p className="text-muted-foreground max-w-xs">
                Empowering businesses with intelligent automation solutions for the future.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary">Services</a></li>
                <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
                <li><a href="#process" className="hover:text-primary">Process</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary">Twitter</a></li>
                <li><a href="#" className="hover:text-primary">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} ZenX Automation. All rights reserved.</p>
            <p className="mt-2 text-xs opacity-50">Automate | Innovate | Elevate</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
