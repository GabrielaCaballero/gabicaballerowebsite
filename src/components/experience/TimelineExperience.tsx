
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Plane, ChevronDown, MapPin, Briefcase, GraduationCap, Heart, Award, BookOpen, Code, Brain } from "lucide-react";
import { Card } from "../ui/card";

// ─── City Theme Configs ─────────────────────────────────────────
const cityThemes = {
  zurich: {
    flag: "🇨🇭",
    gradient: "from-red-900/30 via-background to-background",
    accent: "text-red-400",
    border: "border-red-400/30 hover:border-red-400/60",
    bg: "bg-red-400/10",
    dot: "bg-red-400",
  },
  london: {
    flag: "🇬🇧",
    gradient: "from-blue-900/30 via-background to-background",
    accent: "text-blue-400",
    border: "border-blue-400/30 hover:border-blue-400/60",
    bg: "bg-blue-400/10",
    dot: "bg-blue-400",
  },
  nyc: {
    flag: "🇺🇸",
    gradient: "from-amber-900/30 via-background to-background",
    accent: "text-amber-400",
    border: "border-amber-400/30 hover:border-amber-400/60",
    bg: "bg-amber-400/10",
    dot: "bg-amber-400",
  },
  cordoba: {
    flag: "🇦🇷",
    gradient: "from-cyan-900/30 via-background to-background",
    accent: "text-cyan-400",
    border: "border-cyan-400/30 hover:border-cyan-400/60",
    bg: "bg-cyan-400/10",
    dot: "bg-cyan-400",
  },
};

type CityKey = keyof typeof cityThemes;

// ─── Data ───────────────────────────────────────────────────────
interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  image?: string;
  blogLink?: string;
}

interface CityEra {
  city: string;
  cityKey: CityKey;
  subtitle: string;
  period: string;
  experiences: ExperienceEntry[];
  education?: { school: string; degree: string; gpa: string; period: string }[];
  volunteering?: { org: string; role?: string; description: string; period: string }[];
  awards?: { title: string; description: string }[];
  humorNote: string;
}

const eras: CityEra[] = [
  {
    city: "Zurich",
    cityKey: "zurich",
    subtitle: "Today & Ongoing",
    period: "March 2024 – Present",
    experiences: [
      {
        company: "Google",
        role: "Product Manager – YouTube Shopping",
        period: "March 2024 – Ongoing",
        image: "/lovable-uploads/605a5fb1-446b-466d-a323-3c351699a5e1.png",
        blogLink: "https://blog.youtube/news-and-events/new-youtube-shopping-features/",
        responsibilities: [
          "Spearheaded the strategy for YouTube's most complex content classification systems: drove SVC v6 launch (expanding shopping corpus by +13%) and PDM v9 (increasing product detection from 11.4% to 35.5% at 85% precision).",
          "Pioneered new interactive shopping experiences: launched Shopping Timely Shelf on mobile (44.4% reduction in CTA dismissals, +1.6% high-quality clicks) and Timed Shopping on YouTube Living Room (+6000% lift in clicks).",
          "Presented and drove the \"Timestamps v2\" roadmap to VPs, launching auto-timestamps that increased timestamped product tags from 4% to over 10% (+5.14% increase in offer clicks).",
        ],
      },
    ],
    humorNote: "Living in Zurich has made her appreciate nature more—she actually takes pictures of cows and flowers now! She spends her time running, exploring the mountains, swimming in the lake during summer, and indulging in plenty of local cheese and chocolate. 🧀🍫",
  },
  {
    city: "London",
    cityKey: "london",
    subtitle: "The AI Transformation",
    period: "July 2022 – March 2024",
    experiences: [
      {
        company: "Google",
        role: "Product Manager – Google Sheets",
        period: "July 2022 – March 2024",
        image: "/lovable-uploads/c9ac082d-e7ce-463d-9d1f-506e32891bd0.png",
        blogLink: "https://workspaceupdates.googleblog.com/2024/05/tables-in-google-sheets.html",
        responsibilities: [
          "Led end-to-end product development of \"Tables\" in Google Sheets, from concept to launch, resulting in a 5% increase in the north-star metric with a team of 15+ engineers.",
          "Led Conditional Notifications strategy achieving 90% email open rate and 80% user satisfaction.",
          "Led the Apps Script roadmap definition, including ideation and prioritization of incorporating Generative AI (GenAI) into the platform.",
        ],
      },
    ],
    humorNote: "As a Harry Potter fan, she fell in love with London life—West End shows, Italian pasta, and running through the parks. She especially enjoyed \"smelly pubs\" with excellent beer and the heavenly cream the British put on their scones during tea time. 🫖",
  },
  {
    city: "New York City",
    cityKey: "nyc",
    subtitle: "Maps & Academia",
    period: "Aug 2019 – Oct 2022",
    experiences: [
      {
        company: "Google",
        role: "Associate Product Manager I – Google Maps",
        period: "June 2021 – July 2022",
        image: "/lovable-uploads/bf0bd1f0-0363-43ec-8e2b-586c9e163efe.png",
        blogLink: "https://blog.google/products/maps/gemini-google-maps-navigation-updates/",
        responsibilities: [
          "Launched a Language Picker Promo for all users in India, increasing Indic Languages MAU by 12%.",
          "Defined, pitched, and launched a ML-powered photo carousel for \"menus\" with 20% interaction rate, increasing metrics by 2-5%.",
          "Launched a Street View anniversary experience resulting in 6M+ opt-ins, 16M+ trips taken, and viral social sharing.",
        ],
      },
      {
        company: "NYU Furman Center",
        role: "Data Researcher (part-time)",
        period: "January 2021 – May 2021",
        responsibilities: [
          "Conducted data-driven research informing the \"State of NYC's Housing and Neighborhoods in 2020\" report.",
          "Designed data cleaning processes joining multiple sources, reducing data process times by 20%.",
        ],
      },
      {
        company: "Google",
        role: "Associate Product Manager Intern",
        period: "May 2020 – August 2020",
        responsibilities: [
          "Defined a marketing and gradual rollout plan for Link Previews on Google Docs Android app.",
          "Defined and led the implementation of a mobile feature increasing consistency between web and mobile platforms.",
        ],
      },
    ],
    education: [
      {
        school: "New York University",
        degree: "MS in Management of Technology and Innovation (MoT)",
        gpa: "3.9 GPA",
        period: "August 2019 – May 2021",
      },
    ],
    volunteering: [
      {
        org: "NYU Design for America",
        description: "Led 4 different projects in partnership with organizations to solve social and global issues.",
        period: "March 2019 – December 2020",
      },
    ],
    awards: [
      {
        title: "Research Innovation Award",
        description: "MoT Capstone Project — most innovative student-led research using computer vision to help NYC DoT detect and count street traffic, competing against 25 projects.",
      },
    ],
    humorNote: "Gabriela initially found NYC as tough as a stale dollar slice. As a Gossip Girl fan, she eventually learned to love the city, realizing that \"XOXO\" actually stands for \"Exhausted On X-mas, Okay?\" She made it home, trading skyscraper sightseeing for the real local sport: extreme rat-watching. 🐀",
  },
  {
    city: "Córdoba",
    cityKey: "cordoba",
    subtitle: "The Foundations",
    period: "2016 – 2019",
    experiences: [
      {
        company: "Globant S.A – Disney Studios",
        role: "Technical Lead (part-time)",
        period: "August 2018 – July 2019",
        responsibilities: [
          "Led a team of 6 developers with weekly 1:1s and daily syncs for the Disney Parks website cart module.",
          "Designed and implemented cart sharing via email and social media, plus 3rd-party chat integration.",
        ],
      },
      {
        company: "Globant S.A – Disney Studios",
        role: "Java Developer (part-time)",
        period: "April 2018 – August 2018",
        responsibilities: [
          "Developed functionalities simplifying cart ID for seamless online-to-offline purchasing.",
          "Designed automated cart ID storage and deletion procedures, optimizing MySQL servers.",
        ],
      },
      {
        company: "Intel – McAfee",
        role: "Software Developer Intern",
        period: "November 2016 – November 2017",
        responsibilities: [
          "Designed and developed an Angular2/NodeJS internal website for monitoring IoT devices across 5+ teams.",
        ],
      },
    ],
    education: [
      {
        school: "Universidad Tecnológica Nacional",
        degree: "BS in Systems Engineering",
        gpa: "9.22/10 GPA",
        period: "March 2013 – December 2017",
      },
    ],
    volunteering: [
      {
        org: "Girls Who Code",
        role: "Lead Instructor and Mentor",
        description: "Taught coding principles and software engineering fundamentals to 15 young women.",
        period: "April 2018 – ongoing",
      },
    ],
    awards: [
      {
        title: "Fulbright Scholar",
        description: "One of 10 grantees selected among 360 candidates by the Argentinian Fulbright Commission.",
      },
      {
        title: "National Bicentennial Scholarship",
        description: "Awarded by the Argentine government to students with the best GPAs nationwide.",
      },
    ],
    humorNote: "She loved summer river trips with friends and family, and of course, a good fernet. She famously dressed as the Android mascot for her graduation! 🤖🧉",
  },
];

// ─── Skills Section Data ────────────────────────────────────────
const skills = {
  "AI/ML": ["Machine Learning Fundamentals", "GenAI & Representation Learning", "TensorFlow", "Computer Vision"],
  "Programming": ["Java", "SQL", "R", "Angular", "NodeJS"],
  "Data & Analytics": ["Tableau", "Power BI", "Data Visualization"],
  "Leadership": ["Strategic Planning", "Cross-functional Collaboration", "Communication", "Negotiation"],
};

const coursework = ["Oxford ML: Machine learning fundamentals, GenAI and Representation Learning"];

// ─── Plane Component ────────────────────────────────────────────
function ScrollPlane({ scrollYProgress }: { scrollYProgress: any }) {
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 5, -3, 5, 0]);

  return (
    <motion.div
      className="fixed left-8 z-40 hidden lg:flex items-center justify-center"
      style={{ top: y }}
    >
      <motion.div
        style={{ rotate }}
        className="bg-pink-500/20 backdrop-blur-sm rounded-full p-3 border border-pink-500/30 shadow-lg shadow-pink-500/10"
      >
        <Plane className="w-6 h-6 text-pink-400 rotate-90" />
      </motion.div>
    </motion.div>
  );
}

// ─── City Section Component ─────────────────────────────────────
function CitySection({ era, index }: { era: CityEra; index: number }) {
  const theme = cityThemes[era.cityKey];
  const ref = useRef<HTMLDivElement>(null);
  const [expandedExp, setExpandedExp] = useState<string | null>(null);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* City gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${theme.gradient} rounded-3xl -z-10`} />

      <div className="p-6 md:p-10 space-y-8">
        {/* City Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="flex items-center gap-4"
        >
          <span className="text-5xl">{theme.flag}</span>
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme.accent}`}>
              {era.city}
            </h2>
            <p className="text-muted-foreground text-lg">
              {era.subtitle} <span className="text-sm">({era.period})</span>
            </p>
          </div>
        </motion.div>

        {/* Timeline line */}
        <div className="relative pl-6 md:pl-10 space-y-6">
          <div className={`absolute left-2 md:left-4 top-0 bottom-0 w-0.5 ${theme.dot} opacity-30`} />

          {/* Experience Entries */}
          {era.experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-4 md:-left-6 top-2 w-3 h-3 rounded-full ${theme.dot} ring-4 ring-background`} />

              <Card className={`p-5 ${theme.border} transition-all duration-300 bg-card/50 backdrop-blur-sm`}>
                {exp.image && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    {exp.blogLink ? (
                      <a href={exp.blogLink} target="_blank" rel="noopener noreferrer" className="block group">
                        <img
                          src={exp.image}
                          alt={`${exp.company} project`}
                          className="w-full h-44 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                        />
                        <p className={`text-sm ${theme.accent} mt-2 underline`}>Read more about this project →</p>
                      </a>
                    ) : (
                      <img src={exp.image} alt={`${exp.company} project`} className="w-full h-44 object-cover rounded-lg" />
                    )}
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Briefcase className={`w-5 h-5 mt-1 shrink-0 ${theme.accent}`} />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <p className={`${theme.accent} font-medium text-sm`}>{exp.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>

                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {exp.responsibilities.map((r, ri) => (
                        <li key={ri} className="flex gap-2">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${theme.dot}`} />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          {/* Education */}
          {era.education?.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className={`absolute -left-4 md:-left-6 top-2 w-3 h-3 rounded-full ${theme.dot} ring-4 ring-background`} />
              <Card className={`p-5 ${theme.border} transition-all duration-300 bg-card/50 backdrop-blur-sm`}>
                <div className="flex items-start gap-3">
                  <GraduationCap className={`w-5 h-5 mt-1 shrink-0 ${theme.accent}`} />
                  <div>
                    <h3 className="text-lg font-semibold">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground mt-1">{edu.period} • {edu.gpa}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          {/* Volunteering */}
          {era.volunteering?.map((vol) => (
            <motion.div
              key={vol.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className={`absolute -left-4 md:-left-6 top-2 w-3 h-3 rounded-full ${theme.dot} ring-4 ring-background`} />
              <Card className={`p-5 ${theme.border} transition-all duration-300 bg-card/50 backdrop-blur-sm`}>
                <div className="flex items-start gap-3">
                  <Heart className={`w-5 h-5 mt-1 shrink-0 ${theme.accent}`} />
                  <div>
                    <h3 className="text-lg font-semibold">{vol.org}</h3>
                    {vol.role && <p className={`text-sm ${theme.accent} font-medium`}>{vol.role}</p>}
                    <p className="text-sm text-muted-foreground mt-1">{vol.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{vol.period}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          {/* Awards */}
          {era.awards?.map((award) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className={`absolute -left-4 md:-left-6 top-2 w-3 h-3 rounded-full ${theme.dot} ring-4 ring-background`} />
              <Card className={`p-5 ${theme.border} transition-all duration-300 bg-card/50 backdrop-blur-sm`}>
                <div className="flex items-start gap-3">
                  <Award className={`w-5 h-5 mt-1 shrink-0 ${theme.accent}`} />
                  <div>
                    <h3 className="text-lg font-semibold">{award.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{award.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Humor Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`${theme.bg} rounded-xl p-5 border ${theme.border}`}
        >
          <p className="text-sm italic text-muted-foreground leading-relaxed">
            💬 {era.humorNote}
          </p>
        </motion.div>

        {/* Dive Deeper Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: 3 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full ${theme.bg} ${theme.accent} border ${theme.border} text-sm font-medium transition-all`}
          >
            <span>🤿 Dive Deeper</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ─── Main Component ─────────────────────────────────────────────
export default function TimelineExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const isMobile = useIsMobile();

  return (
    <div ref={containerRef} className={`min-h-screen ${isMobile ? "pt-20" : "pt-24"} pb-16`}>
      <ScrollPlane scrollYProgress={scrollYProgress} />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-primary to-pink-300 bg-clip-text text-transparent mb-4">
            The Journey
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From Córdoba to Zurich — a product manager's path through four cities, driven by curiosity, data, and a love for building.
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-6"
          >
            <Plane className="w-8 h-8 text-pink-400 mx-auto rotate-180" />
          </motion.div>
        </motion.div>

        {/* City Eras */}
        <div className="space-y-20">
          {eras.map((era, index) => (
            <CitySection key={era.cityKey} era={era} index={index} />
          ))}
        </div>

        {/* Skills & Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 space-y-8"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-pink-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="p-5 border-border hover:border-primary/40 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  {category === "AI/ML" && <Brain className="w-4 h-4 text-primary" />}
                  {category === "Programming" && <Code className="w-4 h-4 text-primary" />}
                  {category === "Data & Analytics" && <BookOpen className="w-4 h-4 text-primary" />}
                  {category === "Leadership" && <Award className="w-4 h-4 text-primary" />}
                  <h3 className="font-semibold text-sm">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Relevant Coursework */}
          <Card className="p-5 border-border hover:border-primary/40 transition-all duration-300 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-sm">Relevant Coursework</h3>
            </div>
            {coursework.map((c) => (
              <p key={c} className="text-sm text-muted-foreground">{c}</p>
            ))}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
