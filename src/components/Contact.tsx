import { useToast } from "@/components/ui/use-toast";
import {
  Mail,
  Phone,
  Linkedin,
  Youtube,
  Instagram,
  Newspaper,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard.`,
    });
  };

  const socials = [
    {
      icon: <Linkedin className="w-8 h-8" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gabrielacaballero/",
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCnZPgwSbAoaFxDB_sAUzv8A",
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      name: "Instagram",
      url: "https://www.instagram.com/gabrielacaballer/",
    },
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 animate-fade-in">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Connect.
          </h1>
          <p className="text-muted-foreground text-lg">
            "Let's build the future of human-AI collaboration."
          </p>
        </motion.div>

        {/* Copy buttons + Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button
            onClick={() => handleCopy("lmgabrielac@gmail.com", "Email")}
            className="bg-card/50 border border-border p-8 rounded-[40px] hover:scale-105 transition-all text-center min-w-[180px] group shadow-xl hover:border-primary/40"
          >
            <Mail className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-xs text-muted-foreground">Copy Email</p>
          </button>
          <button
            onClick={() => handleCopy("+4407599623358", "Phone")}
            className="bg-card/50 border border-border p-8 rounded-[40px] hover:scale-105 transition-all text-center min-w-[180px] group shadow-xl hover:border-primary/40"
          >
            <Phone className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-xs text-muted-foreground">Copy Phone</p>
          </button>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/50 border border-border p-8 rounded-[40px] hover:scale-105 transition-all text-center min-w-[180px] group shadow-xl hover:border-primary/40"
            >
              <div className="text-primary mx-auto mb-2 flex justify-center group-hover:scale-110 transition-transform">
                {social.icon}
              </div>
              <p className="text-xs text-muted-foreground">{social.name}</p>
            </a>
          ))}
        </motion.div>

        {/* Feedback Hub */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="bg-card/50 border border-border rounded-3xl p-8 text-center max-w-md hover:border-primary/40 transition-all">
            <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Feedback Hub</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Please share <strong>anonymous feedback</strong> to help me grow
              as a professional and a person!
            </p>
            <a
              href="https://substack.com/@gabycaballero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-sm hover:bg-primary/90 transition-all"
            >
              SHARE FEEDBACK
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
