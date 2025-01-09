import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, Linkedin, Youtube, Instagram } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Contact from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;
    
    window.location.href = `mailto:lmgabrielac@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} has been copied to clipboard.`,
    });
  };

  return (
    <section className="min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            
            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <button
                onClick={() => copyToClipboard("+4407599623358", "Phone number")}
                className="hover:text-primary transition-colors"
              >
                +4407599623358
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <button
                onClick={() => copyToClipboard("lmgabrielac@gmail.com", "Email")}
                className="hover:text-primary transition-colors"
              >
                lmgabrielac@gmail.com
              </button>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5" />
              <a
                href="https://www.linkedin.com/in/gabrielacaballero/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                in/gabrielacaballero
              </a>
            </div>

            {/* YouTube */}
            <div className="flex items-center gap-3">
              <Youtube className="h-5 w-5" />
              <a
                href="https://www.youtube.com/channel/UCnZPgwSbAoaFxDB_sAUzv8A"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @lmgabrielac
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3">
              <Instagram className="h-5 w-5" />
              <a
                href="https://www.instagram.com/gabrielacaballer/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                gabrielacaballer
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input 
                  id="name" 
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  required 
                  className="min-h-[150px]" 
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;