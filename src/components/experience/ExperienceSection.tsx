import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const experience = [
  {
    company: "Google",
    role: "Product Manager - Youtube Shopping",
    location: "London, UK",
    period: "March 2024 - Ongoing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYff2fMULbIwnZWV-nODY845-MTZci9S81Q&s",
    blogLink: "https://blog.youtube/news-and-events/new-youtube-shopping-features/",
    responsibilities: [
      "Developed scalable, habit-forming shopping experiences integrated into YouTube's watch experience, including creator collections, and persistent entry points for channel stores.",
      "Defined the strategy for channels with stores on Youtube and developed a vision for future plans.",
      "Presented at the VP level outlining a top priority feature roadmap and fostering alignment across various stakeholders including business teams, marketing, and legal.",
      "Collaborated with research teams to establish the AI roadmap.",
    ],
    icon: <Building2 className="w-8 h-8 text-primary" />,
  },
    {
      company: "Google",
      role: "Product Manager - Google Sheets",
      location: "London, UK",
      period: "July 2022 - March 2024",
      image: "/lovable-uploads/c9ac082d-e7ce-463d-9d1f-506e32891bd0.png",
      blogLink: "https://workspaceupdates.googleblog.com/2024/05/tables-in-google-sheets.html",
      responsibilities: [
        "Developed and communicated the vision, strategy, and roadmap to secure buy-in from the director. Prioritized and executed the top-priority project, 'Tables', on Google Sheets, which increase our north-star metric by 5% and has engaged a team of +15 engineers.",
        "Led the execution and defined the beyond-MVP vision, strategy, and prioritization for Sheets Conditional Notifications with +5 engineers, leading to a 90% email open rate and 80% of user satisfaction.",
        "Led the definition, execution, and launch of several feature improvements to Sheets (new keyboard shortcuts, filter improvements, new formulas support, and localization improvements) which were all featured on the Workspace blog.",
        "Led the strategy and roadmap definition for Apps Script, including ideation and prioritization of incorporating Generative AI (GenAI) into the platform.",
      ],
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
    {
      company: "Google",
      role: "Associate Product Manager I - Google Maps",
      location: "New York, USA",
      period: "June 2021 - July 2022",
      image: "https://blog.google/products/maps/gemini-google-maps-navigation-updates/",
      responsibilities: [
        "Launched a Language Picker Promo in Google Maps for all users in India that led to a 12% increase in Indic Languages MAU",
        "Defined, pitched, and launched a new photo carousel in Google Maps that leveraged ML to detect photos of Services “menus” which led to a 20% interaction rate and increased our metrics by 2-5%",
        "Conceptualized 2022 strategy for the Maps Search Content team by aligning engineers and designers in the group and conducting experimentation and user interviews.",
      ],
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
    {
      company: "NYU Furman Center",
      role: "Data Researcher",
      location: "Remote, USA",
      period: "January 2021 - May 2021",
      image: "https://laughingsquid.com/wp-content/uploads/2013/01/NYC-Neighborhood-Map.jpg",
      responsibilities: [
        "Designed and implemented cleaning data processes that joined multiple data sources, simplifying the data analysis process and reducing data process times by 20%",
        "Uncovered essential insights from data using R and data visualization tools that were used in the publication of the State of New York City’s Housing and Neighborhoods in 2020.",
      ],
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
    {
      company: "Google",
      role: "Associate Product Manager Intern",
      location: "Remote, USA",
      period: "May 2020 - August 2020",
      image: "https://storage.googleapis.com/gweb-cloudblog-publish/images/WS-Collab-Blog-Post-V2.3_1.max-2500x2500.jpg",
      responsibilities: [
        "Defined a marketing and gradual rollout plan for Link Previews on the Google Docs Android app. Launched by securing xFN approvals and addressing eng launch blockers",
        "Defined and led the implementation of a mobile feature that increases consistency between web and mobile platforms. Presented demo to broader Editors teams +100 members",
      ],
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
    {
      company: "Globant S.A - Disney Studios",
      role: "Technical Lead",
      location: "Cordoba, Argentina",
      period: "August 2018 - July 2019",
      image: "https://www.wdwinfo.com/wp-content/uploads/2022/09/WDW-Website-Screen.png",
      responsibilities: [
        "Led, organized, and managed a team of 6 developers including having weekly 1:1 meetings and daily status syncs to unblock the team",
        "Designed and implemented new functionalities for the Disney Parks website cart module, the highest usage module for Disney Park tickets sales, including integrating a 3rd party chat into the cart module and allowing users to share their cart items via email or 3rd party social media platform using Java, IntelliJ, and Spring framework",
      ],
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
    {
      company: "Globant S.A - Disney Studios",
      role: "Java Developer",
      location: "Cordoba, Argentina",
      period: "April 2018 - August 2018",
      responsibilities: [
        "Developed new functionalities for the Disney Parks website cart module to simplify a buyer’s cart ID to seamlessly allow buyers to navigate from online to offline purchasing channels.",
        "Designed and implemented an automated cart ID storage and deletion procedure, saving MySql database servers.",
        "Identified and quickly resolved to live daily reported issues of the cart module by analyzing logs, debugging code, and producing JMeter scripts",
      ],
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
    {
      company: "Intel - McAfee",
      role: "Software Developer Intern",
      location: "Cordoba, Argentina",
      period: "November 2016 - November 2017",
      responsibilities: [
        "Designed and developed an internal website in Angular2 and NodeJS. This website serves as a unified resource for monitoring IoT devices and facilitating device usage across 5+ teams",
      ],
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ExperienceSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Experience
      </h2>
      <motion.div className="space-y-8">
        {experience.map((exp) => (
          <motion.div
            key={`${exp.company}-${exp.role}`}
            variants={itemVariants}
            className="p-6 rounded-lg border border-border hover:border-primary transition-all duration-300"
          >
            {exp.image && (
              <div className="mb-6">
                {exp.blogLink ? (
                  <a 
                    href={exp.blogLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:opacity-90 transition-opacity"
                  >
                    <img 
                      src={exp.image} 
                      alt={`${exp.company} project`} 
                      className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"
                    />
                    <p className="text-sm text-primary hover:text-primary/80 underline">
                      Read more about this project
                    </p>
                  </a>
                ) : (
                  <img 
                    src={exp.image} 
                    alt={`${exp.company} project`} 
                    className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"
                  />
                )}
              </div>
            )}
            <div className="flex items-start gap-4">
              {exp.icon}
              <div>
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-primary font-medium">{exp.role}</p>
                <div className="flex flex-wrap gap-2 mt-1 text-sm text-muted-foreground">
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
                <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
