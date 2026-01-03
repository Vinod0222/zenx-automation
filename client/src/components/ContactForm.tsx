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
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      businessType: "",
      message: ""
    }
  });

  function onSubmit(data: InsertInquiry) {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  }

  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
      <h3 className="text-2xl font-bold font-heading mb-6">Book a Free Demo</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-black/20 border-white/10 focus:border-primary/50 h-12"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="john@company.com" 
                      className="bg-black/20 border-white/10 focus:border-primary/50 h-12"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Business Type</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g. E-commerce" 
                      className="bg-black/20 border-white/10 focus:border-primary/50 h-12"
                      value={field.value || ''}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">How can we help?</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your automation needs..." 
                    className="bg-black/20 border-white/10 focus:border-primary/50 min-h-[120px] resize-none"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Inquiry"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
