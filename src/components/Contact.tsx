import { useToast } from "@/components/ui/use-toast";
import {
  Mail,
  Phone,
  Linkedin,
  Youtube,
  Instagram,
  Send,
  Users,
  ExternalLink,
  BookOpen,
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

  const channels = [
    {
      icon: <Mail className="w-7 h-7" />,
      label: "COPY EMAIL",
      action: () => handleCopy("lmgabrielac@gmail.com", "Email"),
    },
    {
      icon: <Phone className="w-7 h-7" />,
      label: "COPY PHONE",
      action: () => handleCopy("+4407599623358", "Phone"),
    },
    {
      icon: <Linkedin className="w-7 h-7" />,
      label: "LINKEDIN",
      url: "https://www.linkedin.com/in/gabrielacaballero/",
    },
    {
      icon: <Youtube className="w-7 h-7" />,
      label: "YOUTUBE",
      url: "https://www.youtube.com/channel/UCnZPgwSbAoaFxDB_sAUzv8A",
    },
    {
      icon: <Instagram className="w-7 h-7" />,
      label: "INSTAGRAM",
      url: "https://www.instagram.com/gabrielacaballer/",
    },
    {
      icon: <BookOpen className="w-7 h-7" />,
      label: "SUBSTACK",
      url: "https://substack.com/@gabycaballero",
    },
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 animate-fade-in">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Hero icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/30">
            <Send className="w-9 h-9 text-primary-foreground" />
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-foreground mb-6">
            CONNECT.
          </h1>
          <p className="text-muted-foreground text-lg italic">
            "Let's build the future of human-AI collaboration."
          </p>
        </motion.div>

        {/* Channel grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-20 mt-12"
        >
          {channels.map((ch) => {
            const inner = (
              <>
                <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                  {ch.icon}
                </div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  {ch.label}
                </p>
              </>
            );

            if (ch.url) {
              return (
                <a
                  key={ch.label}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card/50 border border-border p-8 rounded-2xl hover:border-primary/40 hover:scale-105 transition-all text-center min-w-[150px] group"
                >
                  {inner}
                </a>
              );
            }
            return (
              <button
                key={ch.label}
                onClick={ch.action}
                className="bg-card/50 border border-border p-8 rounded-2xl hover:border-primary/40 hover:scale-105 transition-all text-center min-w-[150px] group"
              >
                {inner}
              </button>
            );
          })}
        </motion.div>

        {/* Feedback Hub */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="bg-card/50 border border-border rounded-3xl p-10 text-center max-w-lg hover:border-primary/40 transition-all">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3 uppercase tracking-wide">
              Feedback Hub
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Please share <strong>anonymous feedback</strong> to help me grow
              as a professional and a person!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdkVZ6rZoK6ei7lGyiYfolt8a017QfhMtpWhAuKDVLrMeQs1w/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-sm hover:bg-primary/90 transition-all uppercase tracking-widest"
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
