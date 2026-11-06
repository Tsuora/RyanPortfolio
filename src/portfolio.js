// Portfolio content. Theme colors live in _globalColor.scss.
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {animated: true};

const greeting = {
  username: "Ryan Cabaruvias",
  title: "Hello, I'm Ryan",
  professionalTitle: "IT Applications Analyst",
  specialization: "Enterprise Systems & Integration",
  subTitle:
    "IT Applications Analyst with 12 years of combined IT and software development experience, including 7+ years supporting municipal enterprise systems. Experienced in production troubleshooting, application administration, ERP support, systems integration, vendor coordination, and workflow automation.",
  supportingText:
    "Additional experience developing, maintaining, and deploying business applications using C#/.NET, React, SQL, PowerShell, and modern web technologies.",
  experienceSummary: [
    {value: "12 years", label: "Combined IT & development experience"},
    {value: "7+ years", label: "Municipal enterprise systems"}
  ],
  resumeLink:
    "https://docs.google.com/document/d/1fIZk1iPLO9GD3zbKy_I3WHG4A7WDOk4D/edit?usp=sharing&ouid=103770961544756556105&rtpof=true&sd=true",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Tsuora",
  linkedin: "https://www.linkedin.com/in/ryan-cabaruvias-94060985/",
  gmail: "ryan.cabaruvias@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Do",
  expertiseTitle: "Core Expertise",
  subTitle:
    "ENTERPRISE APPLICATION SUPPORT, SYSTEMS INTEGRATION, AND TECHNICAL PROBLEM-SOLVING",
  skills: [
    {
      title: "Enterprise Application Support",
      expertise: "SYSTEM RELIABILITY",
      icon: "fas fa-server",
      description:
        "Support business-critical applications, investigate production incidents, administer application access and configurations, and coordinate testing and upgrades."
    },
    {
      title: "Systems Integration & Automation",
      expertise: "WORKFLOW EFFICIENCY",
      icon: "fas fa-network-wired",
      description:
        "Connect enterprise systems and improve business workflows using SQL, PowerShell, REST APIs, stored procedures, and custom applications."
    },
    {
      title: "Stakeholder & Vendor Collaboration",
      expertise: "CROSS-FUNCTIONAL DELIVERY",
      icon: "fas fa-users",
      description:
        "Work with business departments, IT teams, and software vendors to investigate issues, gather requirements, coordinate resolutions, document procedures, and train users."
    },
    {
      title: "Application Development & Maintenance",
      expertise: "TECHNICAL IMPLEMENTATION",
      icon: "fas fa-code",
      description:
        "Develop, enhance, test, deploy, and maintain business applications using C#/.NET, React, SQL Server, PostgreSQL, and related technologies."
    }
  ],
  display: true
};

const enterpriseHighlights = {
  title: "Enterprise IT & Technical Highlights",
  subtitle:
    "Selected accomplishments in enterprise application support, systems integration, automation, and business application development.",
  highlights: [
    {
      title: "Munis ERP / Active Directory Automation",
      organization: "City of Newport Beach",
      businessNeed:
        "Keep employee information synchronized between Munis ERP and Active Directory.",
      solution:
        "Implemented automated synchronization using PowerShell, SQL stored procedures, and SQL Server Agent.",
      result: {
        prefix: "Accurately synchronized ",
        emphasis: "100%",
        suffix: " of employee records."
      },
      skills: ["Munis ERP", "Active Directory", "SQL Server", "PowerShell"]
    },
    {
      title: "Enterprise Application Support & Incident Resolution",
      organization: "City of Newport Beach",
      businessNeed:
        "Maintain reliable operation of business-critical applications supporting municipal departments.",
      solution:
        "Investigated production incidents, resolved access and configuration issues, coordinated vendor support, and documented recurring solutions.",
      result: {
        prefix: "Consistently resolved ",
        emphasis: "the most tickets",
        suffix: " within the IT Applications division."
      },
      skills: [
        "Application Support",
        "SysAid",
        "Vendor Coordination"
      ]
    },
    {
      title: "NeoDX Business Application Platform",
      organization: "NeoDX",
      businessNeed:
        "Provide a digital ordering system to support dental milling operations and streamline order management.",
      solution:
        "Gathered business requirements and developed a production e-commerce platform with configurable order intake, role-based access, internal administration tools, Stripe Connect payments, and automated order updates.",
      result: {
        prefix: "Delivered an ",
        emphasis: "integrated production ordering platform",
        suffix: " supporting order intake, administration, and payments."
      },
      skills: ["ASP.NET Core", "React/Next.js", "PostgreSQL", "Stripe Connect"]
    },
    {
      title: "E-Commerce Data Automation",
      organization: "Gachadiction",
      businessNeed:
        "Efficiently monitor large product datasets and support e-commerce sourcing operations.",
      solution:
        "Developed Python scraping and ingestion pipelines to collect and process product information, store structured data in PostgreSQL, and support internal business workflows.",
      result: {
        prefix: "Automated data collection and monitoring for ",
        emphasis: "500,000+ products",
        suffix: "."
      },
      skills: ["Python", "PostgreSQL", "Data Ingestion", "Automation"]
    }
  ],
  display: true
};

// Categorized experience replaces subjective proficiency percentages.
const techStack = {
  title: "Technical Skills",
  subtitle:
    "Technical experience spanning enterprise application support, systems integration, database management, workflow automation, and software development.",
  experience: [
    {
      Stack: "Enterprise Applications & IT Operations",
      skills: [
        "Munis ERP",
        "Symphony Integrated Library System",
        "Bibliotheca",
        "Laserfiche",
        "EnerGov",
        "Application Administration",
        "Incident Troubleshooting",
        "Application Security & Access Management",
        "Application Upgrades",
        "User Acceptance Testing",
        "Vendor Coordination",
        "Requirements Gathering",
        "Technical Documentation",
        "User Training"
      ]
    },
    {
      Stack: "Systems Integration & Databases",
      skills: [
        "SQL Server / T-SQL",
        "PostgreSQL",
        "Oracle Database",
        "PowerShell",
        "SQL Server Agent",
        "Stored Procedures",
        "REST APIs",
        "Active Directory Integration",
        "Data Migration",
        "Workflow Automation",
        "SSRS",
        "Crystal Reports"
      ]
    },
    {
      Stack: "Software Development",
      skills: [
        "C# / .NET / ASP.NET Core",
        "JavaScript / TypeScript",
        "React / Next.js",
        "Python",
        "HTML / CSS",
        "Java",
        "ASP.NET MVC"
      ]
    },
    {
      Stack: "Technical Tools & Deployment",
      skills: [
        "Git / GitHub",
        "GitHub Projects",
        "Docker",
        "GitHub Actions",
        "SysAid",
        "Jira",
        "Visual Studio / VS Code",
        "xUnit / Vitest / Playwright",
        "SVN / TeamSite"
      ]
    }
  ],
  display: true
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full-Stack Engineer",
      company: "NeoDX",
      companylogo: require("./assets/images/neodxLogoOld.png"),
      date: "November 2024 – Present",
      descBullets: [
        "Gather requirements directly from business owners, translate operational workflows into application features, present updates, and train users.",
        "Develop and maintain an e-commerce platform using ASP.NET Core, React/Next.js, and PostgreSQL, including configurable ordering workflows, REST APIs, and administrative and order management tools.",
        "Implement role-based access controls governing application functionality and order access.",
        "Track tasks, enhancements, and feature requests using GitHub Projects.",
        "Integrate Stripe Connect payments and webhook-driven order processing.",
        "Implement application security improvements, testing, and production deployments using Docker and GitHub Actions."
      ]
    },
    {
      role: "Software Developer",
      company: "Gachadiction",
      companylogo: require("./assets/images/gachadictionLogo.png"),
      logoVariant: "padded",
      date: "November 2022 – November 2024",
      descBullets: [
        "Designed and deployed an e-commerce application using React and a C# REST API backend.",
        "Developed Python web-scraping and ingestion pipelines monitoring 500,000+ products, storing and processing large datasets in PostgreSQL.",
        "Created internal automation and application tools to support business operations, independently solving application and data integration problems."
      ]
    },
    {
      role: "IT Applications Analyst",
      company: "City of Newport Beach",
      companylogo: require("./assets/images/newportLogo.png"),
      date: "May 2015 – November 2022",
      descBullets: [
        "Supported Munis ERP, Symphony ILS, Bibliotheca, Laserfiche, Quest, and internal business applications; investigated production incidents, configuration errors, and user access issues.",
        "Consistently resolved the highest number of tickets in the IT Applications division using SysAid and documented recurring solutions in an internal knowledge base.",
        "Worked with Finance, HR, Library, Recreation, and other departments to gather requirements; coordinated vendor support cases and multi-party troubleshooting with Munis, Symphony, and Bibliotheca.",
        "Administered Munis ERP security roles, application access, and workflow configurations.",
        "Led cross-department coordination for a major Munis ERP version upgrade, including stakeholder meetings and preproduction user testing; prepared documentation and independently delivered hands-on ERP training.",
        "Implemented Munis ERP / Active Directory employee synchronization with PowerShell, SQL stored procedures, and SQL Server Agent, accurately updating 100% of employee records.",
        "Independently developed, tested, deployed, and maintained an ASP.NET MVC 5 recreation scheduling application replacing a paid system and supporting 500+ classes annually. Maintained Quest and developed EnerGov API integrations automating customer and license creation.",
        "Configured Laserfiche retention rules for automated document disposition and implemented application security improvements following an external assessment. Tested application changes in nonproduction before manually deploying approved updates.",
        "Cleaned and migrated 99% of legacy records from Oracle Database to SQL Server during replacement of a municipal ticketing system."
      ]
    },
    {
      role: "Software Developer",
      company: "Hitachi Consulting – Toyota Motor Sales",
      companylogo: require("./assets/images/hitachiLogo.png"),
      logoVariant: "round",
      date: "March 2014 – April 2015",
      descBullets: [
        "Developed frontend administrative tools using JavaScript, HTML, and jQuery.",
        "Enhanced APIs supporting a vehicle configurator using Java, JavaScript, and MySQL.",
        "Used SVN and TeamSite for source control and deployments, and participated in Agile Scrum development with multiple engineering teams."
      ]
    }
  ]
};

const bigProjects = {
  title: "Technical Projects & Automation",
  subtitle:
    "Additional technical work in data ingestion, database integration, and maintaining operational tools.",
  projects: [
    {
      projectName: "Webscrapers",
      projectDesc:
        "Python and Scrapy ingestion tools for large-scale product monitoring and database updates.",
      projectBullets: [
        "Collect, normalize, and update large product datasets for downstream processing.",
        "Store and update records in a database to improve scraping efficiency and support data workflows.",
        "Support proxies and parameterized calls for more reliable scraping workflows."
      ]
    },
    {
      projectName: "Discord Data Lookup Bot",
      projectDesc:
        "A Node.js and PostgreSQL chat bot supporting data lookup and role assignment across multiple Discord communities.",
      projectBullets: [
        "Rebuilt and expanded a community bot originally developed by another maintainer.",
        "Integrated PostgreSQL records with community lookup functionality.",
        "Maintained the application and updated records as new game content was released."
      ]
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "California State Polytechnic University, Pomona",
      logo: require("./assets/images/cppLogo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "Graduation: December 2013",
      desc: "Minor in Computer Science",
      descBullets: ["Dean's List"]
    }
  ]
};

const contactInfo = {
  title: "Let's Connect",
  subtitle:
    "Open to opportunities in enterprise application support, application administration, systems integration, and business systems analysis.",
  email_address: "ryan.cabaruvias@gmail.com"
};

// Keep disabled template exports compatible with their optional components,
// without retaining third-party accomplishments, articles, or social profiles.
const openSource = {showGithubProfile: "false", display: false};
const achievementSection = {
  title: "Achievements",
  subtitle: "",
  achievementsCards: [],
  display: false
};
const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};
const talkSection = {title: "Talks", subtitle: "", talks: [], display: false};
const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};
const twitterDetails = {userName: "", display: false};
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  enterpriseHighlights,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
