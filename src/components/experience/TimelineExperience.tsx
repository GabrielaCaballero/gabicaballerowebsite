import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Plane,
  Rocket,
  Youtube,
  FileSpreadsheet,
  MapPin,
  GraduationCap,
  ExternalLink,
  Camera,
} from "lucide-react";

// --- DATA ---
const TIMELINE_DATA = [
  {
    id: "zurich",
    location: "🇨🇭 Zurich, Switzerland",
    period: "March 2024 – Present",
    role: "Product Manager - YouTube Shopping",
    color: "from-red-600 to-rose-500",
    iconName: "youtube" as const,
    summary:
      "Spearheading SVC v6 and PDM v9 models. Boosting detection coverage and launching Timed Experiences.",
    bgImage:
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80&w=1200",
    achievements: [
      "Drove SVC v6 strategy: +13% expansion of shopping corpus.",
      "Led PDM v9 launch: Increased coverage to 35.5% at 85% precision.",
      "Launched Timestamps v2: ML-powered auto-timestamps.",
      "Interactive TV Shopping: +6000% lift in clicks.",
    ],
    humor:
      "Living in Zurich has made her appreciate nature more—she actually takes pictures of cows and flowers now! She spends her time running, exploring the mountains, swimming in the lake during summer, and indulging in plenty of local cheese and chocolate.",
    projects: [
      {
        name: "SVC v6 & PDM v9 Strategy",
        details:
          "Spearheaded strategy for YouTube's most complex classification systems. Navigated trade-offs to expand shopping corpus by +13% and increased coverage to 35.5% by retraining with 30x more videos.",
      },
      {
        name: "Timed Shopping Experiences",
        details:
          "Launched the Shopping Timely Shelf on mobile (44.4% dismissal reduction) and a first-of-its-kind timed experience on TV, driving a massive +6000% lift in engagement.",
      },
      {
        name: "ML Roadmap: Timestamps v2",
        details:
          "Presented strategy for auto-timestamps to VPs. Increased product tag adoption from 4% to 10%+, resulting in a +5.14% lift in offer clicks.",
      },
    ],
    press: [
      {
        title: "TechCrunch: Diversifying Creator Revenue",
        url: "https://techcrunch.com/2026/02/10/youtubers-arent-relying-on-ad-revenue-anymore-heres-how-some-are-diversifying/",
      },
      {
        title: "YouTube: Improving Product UX",
        url: "https://www.youtube.com/watch?v=MrXoR7Tw_i8",
      },
      {
        title: "TechCrunch: Auto-Timestamps Launch",
        url: "https://techcrunch.com/2025/09/16/youtube-unveils-new-ways-for-creators-to-earn-with-brand-deals-youtube-shopping-program/",
      },
    ],
    lifePhotos: [
      "/lovable-uploads/zurich-hiking.jpg",
      "/lovable-uploads/zurich-cows.jpg",
      "/lovable-uploads/zurich-team.jpg",
    ],
  },
  {
    id: "london",
    location: "🇬🇧 London, UK",
    period: "July 2022 – March 2024",
    role: "Product Manager - Google Sheets",
    color: "from-emerald-600 to-green-500",
    iconName: "sheets" as const,
    summary:
      "0-to-1 initiatives for AI-powered data management in Google Sheets.",
    bgImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200",
    achievements: [
      "Led 'Tables' end-to-end: 5% lift in north-star metrics.",
      "Conditional Notifications: 80% user satisfaction rate.",
      "Apps Script Roadmap: Integrated Generative AI.",
    ],
    humor:
      "As a Harry Potter fan, she fell in love with London life—West End shows, Italian pasta, and running through the parks. She especially enjoyed \"smelly pubs\" with excellent beer and the heavenly cream the British put on their scones during tea time.",
    projects: [
      {
        name: "Tables in Google Sheets",
        details:
          "Led the end-to-end product development of 'Tables' from concept to launch. Managed a team of 15+ engineers using a hypothesis-driven approach, resulting in a 5% increase in the north-star metric.",
      },
      {
        name: "Conditional Notifications",
        details:
          "Defined the strategy and led execution for Sheets Conditional Notifications. Achieved a 90% email open rate and 80% user satisfaction rating.",
      },
      {
        name: "Apps Script & GenAI",
        details:
          "Led the strategy and roadmap definition for Apps Script, focusing on incorporating Generative AI (GenAI) into the automation platform.",
      },
    ],
    press: [
      {
        title: "The Verge: Conditional Notifications",
        url: "https://www.theverge.com/2024/6/5/24172291/google-sheets-workspace-conditional-notifications-microsoft-excel-airtable",
      },
      {
        title: "Ben L Collins: Tables in Google Sheets",
        url: "https://www.benlcollins.com/spreadsheets/tables-in-google-sheets/",
      },
    ],
    lifePhotos: [
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600",
    ],
  },
  {
    id: "nyc",
    location: "🇺🇸 New York City, USA",
    period: "Aug 2019 – Oct 2022",
    role: "APM @ Google Maps & NYU Scholar",
    color: "from-orange-600 to-amber-500",
    iconName: "map" as const,
    summary:
      "Launched ML photo carousels for menu detection and celebrated a Masters Milestone.",
    bgImage:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200",
    achievements: [
      "ML Photo Carousel: 20% interaction rate.",
      "Street View 15th: 6M+ opt-ins.",
      "MS in Management of Tech: 3.9 GPA at NYU.",
      "Data Researcher @ Furman Center: Reduced processing times by 20%.",
    ],
    humor:
      "Gabriela initially found NYC as tough as a stale dollar slice. As a Gossip Girl fan, she eventually learned to love the city, realizing that \"XOXO\" actually stands for \"Exhausted On X-mas, Okay?\" She made it home, trading skyscraper sightseeing for the real local sport: extreme rat-watching.",
    projects: [
      {
        name: "Maps Visual Search",
        details:
          "Launched a Language Picker Promo in India (+12% MAU) and a new ML photo carousel for Services 'menus' that achieved a 20% interaction rate and 2-5% lift in core metrics.",
      },
      {
        name: "Street View 15th Anniversary",
        details:
          "Defined requirements and launched a product experience resulting in 6M+ opt-ins and 16M+ virtual trips taken.",
      },
      {
        name: "NYU Housing Research",
        details:
          "Conducted research for the 'State of NYC Housing' report. Implemented data cleaning processes that reduced processing times by 20%.",
      },
      {
        name: "Research Innovation Award",
        details:
          "Won the MoT Capstone award for a vision computing project using AI to count street traffic. Led 4 Design for America social projects.",
      },
    ],
    press: [
      {
        title: "Visual Search Launch",
        url: "https://blog.gaganghotra.com/seo/google-maps-discover-through-photos-new-feature/",
      },
      {
        title: "TechCrunch: Street View Anniversary",
        url: "https://techcrunch.com/2022/05/24/google-maps-street-view-celebrates-15-years-with-historical-imagery-on-mobile-new-camera-and-more/",
      },
    ],
    lifePhotos: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?auto=format&fit=crop&q=80&w=600",
    ],
  },
  {
    id: "cordoba",
    location: "🇦🇷 Cordoba, Argentina",
    period: "Foundations",
    role: "Systems Engineer & Fulbright Scholar",
    color: "from-blue-600 to-sky-500",
    iconName: "graduation" as const,
    summary:
      "Winning the Fulbright scholarship and technical leadership at Disney Parks.",
    bgImage:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&q=80&w=1200",
    achievements: [
      "Fulbright Scholar: Selected nationwide.",
      "Disney Parks Tech Lead: Managed team of 6.",
      "BS in Systems Engineering: 9.22/10 GPA.",
      "Girls Who Code: Taught 15 young women.",
    ],
    humor:
      "Dressed as the Android mascot for graduation. Loved summer river trips and a good fernet.",
    projects: [
      {
        name: "Tech Lead @ Disney Parks (Globant)",
        details:
          "Managed team of 6 developers. Designed and implemented chat integration and cart sharing modules for high-usage Disney modules using Java and Spring.",
      },
      {
        name: "Internal IoT @ Intel McAfee",
        details:
          "Developed internal website in Angular for monitoring IoT devices across 5+ teams.",
      },
      {
        name: "Lead Instructor @ Girls Who Code",
        details:
          "Taught basic coding principles to young women. Freshman student mentor at UTN.",
      },
    ],
    lifePhotos: [
      "https://images.unsplash.com/photo-1590059516316-2da909249704?auto=format&fit=crop&q=80&w=600",
    ],
  },
];

const getIcon = (name: string) => {
  switch (name) {
    case "youtube":
      return <Youtube className="w-5 h-5" />;
    case "sheets":
      return <FileSpreadsheet className="w-5 h-5" />;
    case "map":
      return <MapPin className="w-5 h-5" />;
    case "graduation":
      return <GraduationCap className="w-5 h-5" />;
    default:
      return null;
  }
};

// --- Scroll Plane ---
function ScrollPlane({ scrollYProgress }: { scrollYProgress: any }) {
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "90%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 5, -3, 5, 0]);

  return (
    <motion.div
      className="fixed left-6 z-40 hidden lg:flex items-center justify-center"
      style={{ top: y }}
    >
      <motion.div
        style={{ rotate }}
        className="bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/30 shadow-lg shadow-primary/10"
      >
        <Plane className="w-6 h-6 text-primary rotate-90" />
      </motion.div>
    </motion.div>
  );
}

// --- Main Component ---
export default function TimelineExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [diveDeeperId, setDiveDeeperId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Auto-close dive deeper when section scrolls out of view
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = rect.height - viewportHeight;
      const currentScroll = -rect.top;
      const progress = Math.min(
        Math.max(currentScroll / totalScrollable, 0),
        1
      );
      setScrollProgress(progress);

      // Auto-close dive deeper if expanded section is no longer visible
      if (diveDeeperId && sectionRefs.current[diveDeeperId]) {
        const sectionRect = sectionRefs.current[diveDeeperId]!.getBoundingClientRect();
        if (sectionRect.bottom < -100 || sectionRect.top > viewportHeight + 100) {
          setDiveDeeperId(null);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [diveDeeperId]);

  const travelerIcon = useMemo(() => {
    if (scrollProgress < 0.05) return <Rocket className="w-5 h-5 text-primary" />;
    return <Plane className="w-5 h-5 text-primary rotate-90" />;
  }, [scrollProgress]);

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-16">
      <ScrollPlane scrollYProgress={scrollYProgress} />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-4">
            The Flight Path
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From Córdoba to Zurich — a product manager's path through four
            cities, driven by curiosity, data, and a love for building.
          </p>
        </motion.div>

        {/* Scroll Progress Bar */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
          <div className="w-1 h-48 bg-border rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-secondary rounded-full"
              style={{ height: `${scrollProgress * 100}%` }}
            />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `${scrollProgress * 100}%` }}
            >
              {travelerIcon}
            </motion.div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-16 relative">
          {TIMELINE_DATA.map((era, idx) => {
            const totalItems = TIMELINE_DATA.length;
            const threshold = idx / (totalItems - 1);
            const isActive =
              (idx === 0 && scrollProgress < 0.15) ||
              (idx === totalItems - 1 && scrollProgress > 0.85) ||
              Math.abs(scrollProgress - threshold) < 0.15;

            return (
              <motion.section
                key={era.id}
                ref={(el) => { sectionRefs.current[era.id] = el; }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative"
              >
                <div
                  className={`p-6 md:p-10 rounded-3xl border-2 relative overflow-hidden transition-all duration-700 ${
                    isActive
                      ? "border-primary shadow-xl shadow-primary/10"
                      : "border-border/50"
                  }`}
                >
                  {/* Background image — visible when active */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      isActive ? "opacity-40" : "opacity-5"
                    }`}
                    style={{
                      backgroundImage: `url(${era.bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  {/* Gradient overlay for readability */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40 transition-opacity duration-700 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`} />
                  {/* Fallback bg when not active */}
                  <div className={`absolute inset-0 bg-card/50 backdrop-blur-sm transition-opacity duration-700 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${era.color} flex items-center justify-center text-white shadow-lg transition-transform duration-500 ${isActive ? "scale-110" : ""}`}
                        >
                          {getIcon(era.iconName)}
                        </div>
                        <div>
                          <p className="text-xs text-primary font-mono uppercase tracking-widest">
                            {era.period}
                          </p>
                          <h2 className="text-xl font-bold">{era.role}</h2>
                          <p className="text-sm text-muted-foreground">
                            {era.location}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          setDiveDeeperId(diveDeeperId === era.id ? null : era.id)
                        }
                        className={`px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${
                          diveDeeperId === era.id
                            ? "bg-primary text-primary-foreground shadow-lg"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        {diveDeeperId === era.id ? "CLOSE" : "DIVE DEEPER"}
                      </button>
                    </div>

                    {/* Content grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                      <div className="md:col-span-2">
                        <p className="text-muted-foreground mb-4">{era.summary}</p>
                        <div className="space-y-2">
                          {era.achievements.map((item, i) => (
                            <p key={i} className="text-sm text-muted-foreground">
                              • {item}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className={`rounded-2xl p-4 border transition-all duration-500 ${
                        isActive ? "bg-card/60 border-primary/20 backdrop-blur-md" : "bg-muted/30 border-border"
                      }`}>
                        <p className="text-xs text-primary uppercase tracking-widest mb-2 font-mono">
                          Personal Side
                        </p>
                        <p className="text-sm italic text-muted-foreground">
                          "{era.humor}"
                        </p>
                      </div>
                    </div>

                    {/* Dive Deeper */}
                    {diveDeeperId === era.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-border pt-6 mt-4 space-y-8"
                      >
                        <div>
                          <h3 className="text-lg font-bold mb-4 text-primary">Strategic Deep Dive</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {era.projects.map((proj) => (
                              <div key={proj.name} className="bg-muted/20 rounded-2xl p-5 border border-border">
                                <h4 className="font-bold text-sm mb-2">{proj.name}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">{proj.details}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        {era.press && (
                          <div>
                            <h3 className="text-lg font-bold mb-4 text-primary">Public Recognition</h3>
                            <div className="space-y-2">
                              {era.press.map((p, i) => (
                                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-muted/20 border border-border hover:border-primary/40 transition-all group">
                                  <span className="text-sm">{p.title}</span>
                                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                        {era.lifePhotos && (
                          <div>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-primary">
                              <Camera className="w-5 h-5" /> Life Highlights
                            </h3>
                            <div className="flex gap-4 overflow-x-auto pb-2">
                              {era.lifePhotos.map((img, i) => (
                                <div key={i} className="w-48 h-32 rounded-2xl overflow-hidden shrink-0 border border-border">
                                  <img src={img} alt={`${era.location} life`} className={`w-full h-full object-cover ${i === 0 && era.id === 'zurich' ? 'object-top' : 'object-center'}`} onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=400"; }} />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
