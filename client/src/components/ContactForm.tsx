import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  return (
    <div className="p-1 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden h-[800px] w-full relative">
      <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-0">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSe_9L4M6_qW9_hD6W6H6X9X9X9X9X9X9X9X9X9X9X9X9X9X9/viewform?embedded=true" 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        marginHeight={0} 
        marginWidth={0}
        className="relative z-10 rounded-2xl grayscale invert contrast-125 opacity-90 hover:opacity-100 transition-opacity"
        title="Contact Form"
      >
        Loading…
      </iframe>
    </div>
  );
}
