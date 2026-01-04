import stockImage from "@assets/stock_images/industrial_robotic_a_ef02b53c.jpg";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Bot, Zap, BrainCircuit, ChevronRight, CheckCircle2, ArrowRight, Stethoscope, Store, Settings2, Building2, ShoppingBag, HelpCircle } from "lucide-react";
import BotpressChat from "@/components/BotpressChat";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <BotpressChat />
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
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-[0_0_40px_rgba(186,255,255,0.4)] transition-all duration-300 animate-glow"
                >
                  Book Free Demo
                </a>
                <a 
                  href="#pricing"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group glass-panel"
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
              { title: "Clinics & Hospitals", icon: Stethoscope, color: "text-blue-400" },
              { title: "Local Businesses", icon: Store, color: "text-emerald-400" },
              { title: "Service Centers", icon: Settings2, color: "text-orange-400" },
              { title: "Agencies", icon: Building2, color: "text-purple-400" },
              { title: "E-commerce", icon: ShoppingBag, color: "text-pink-400" }
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
                <p className="text-sm text-muted-foreground italic font-medium">“Automate inquiries & capture leads 24/7”</p>
              </motion.div>
            ))}
          </div>
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
      <section className="py-24 bg-black/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Bot size={120} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 italic text-glow">See how it works</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the power of ZenX automation. Our live demo bot is waiting to show you its capabilities.
            </p>
            <div className="flex flex-col items-center gap-4">
              <p className="text-primary font-bold animate-pulse uppercase tracking-widest text-sm">
                👉 Try asking for a demo
              </p>
              <button 
                onClick={() => {
                  if (window.botpress && window.botpress.open) {
                    window.botpress.open();
                  }
                }}
                className="px-10 py-5 rounded-full bg-primary text-primary-foreground font-black text-xl hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] transition-all animate-glow"
              >
                Launch Live Chat
              </button>
            </div>
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
