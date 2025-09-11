import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, User, MessageSquare, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! We'll get back to you soon.",
      duration: 5000,
    });
    
    // Reset form after success animation
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSuccess(false);
    }, 2000);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-orbitron font-black text-4xl md:text-5xl mb-6 text-neon">
            GET UPDATES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay connected with the latest news, updates, and exclusive content from Neon Arcade
          </p>
        </div>
        
        <div className="glass-card p-8 md:p-12 tilt-3d">
          {isSuccess ? (
            <div className="text-center py-12 success-pulse">
              <CheckCircle className="w-16 h-16 text-neon-green mx-auto mb-6" />
              <h3 className="font-orbitron font-bold text-2xl text-neon-green mb-4">
                Message Sent Successfully!
              </h3>
              <p className="text-muted-foreground">
                Thank you for reaching out! We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <User className="w-4 h-4 text-neon-blue" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="Enter your name"
                    aria-describedby="name-help"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Mail className="w-4 h-4 text-neon-pink" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="Enter your email"
                    aria-describedby="email-help"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <MessageSquare className="w-4 h-4 text-neon-cyan" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-input w-full resize-none"
                  placeholder="Tell us what you're interested in..."
                  aria-describedby="message-help"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-magnetic w-full font-orbitron font-bold"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2" />
                    SENDING...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 w-5 h-5" />
                    SEND MESSAGE
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;