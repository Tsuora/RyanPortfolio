/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ryan Cabaruvias",
  title: "Hello, I'm Ryan",
  subTitle: emoji(
    "Full-Stack Engineer with 12 years of experience building web applications, APIs, and enterprise systems across e-commerce and municipal environments using ASP.NET Core, React/Redux, Next.js, PostgreSQL, and modern deployment workflows."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1fIZk1iPLO9GD3zbKy_I3WHG4A7WDOk4D/edit?usp=sharing&ouid=103770961544756556105&rtpof=true&sd=true",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Tsuora",
  linkedin: "https://www.linkedin.com/in/ryan-cabaruvias-94060985/",
  gmail: "ryan.cabaruvias@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK ENGINEER FOCUSED ON MODERN WEB APPLICATIONS, APIs, AND PRODUCTION DELIVERY",
  skills: [
    emoji(
      "⚡ Build full-stack platforms with ASP.NET Core, React/Redux, Next.js, and PostgreSQL"
    ),
    emoji(
      "⚡ Design REST APIs, authentication flows, Stripe integrations, webhooks, and admin tooling"
    ),
    emoji(
      "⚡ Deploy production applications with Docker, GitHub Actions, Fly.io, and automated testing"
    )
  ],

  softwareSkills: [
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "ASP.NET Core",
      fontAwesomeClassname: "far fa-file-code"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "Redux Toolkit",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "SQL Server",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "xUnit",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "Vitest",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "Playwright",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "Stripe",
      fontAwesomeClassname: "fas fa-credit-card"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cal Poly Pomona",
      logo: require("./assets/images/cppLogo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "Graduation: December 2013",
      desc: "Minor: Computer Science",
      descBullets: [
        "Academic Honors: Dean's List"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend / APIs",
      progressPercentage: "90%"
    },
    {
      Stack: "Databases / DevOps / Testing",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full-Stack Engineer",
      company: "NeoDX",
      companylogo: require("./assets/images/neodxLogo.png"), // update path if needed
      date: "2024 – Present",
      desc: "Production e-commerce platform for dental milling and design",
      descBullets: [
        "Architected and built the company’s first production e-commerce platform using ASP.NET Core, React/Redux, Material UI, and PostgreSQL.",
        "Designed REST APIs, structured ordering workflows, dynamic intake forms, and internal admin tooling for catalog and order operations.",
        "Implemented Stripe Connect payment flows, webhook handling, and order status workflows for platform-based payment processing.",
        "Deployed a Next.js storefront integrated with the .NET API to improve SEO, crawlability, and public-site discoverability.",
        "Established automated testing with xUnit, Vitest, React Testing Library, and Playwright, and deployed through Docker and GitHub Actions."
      ]
    },
    {
      role: "Software Developer",
      company: "Gachadiction",
      companylogo: require("./assets/images/gachadictionLogo.png"), // update path if needed
      date: "2022 – 2025",
      desc: "Direct-to-consumer e-commerce platform and internal tooling",
      descBullets: [
        "Designed and deployed a responsive e-commerce platform using a React frontend and C# REST API backend.",
        "Built Python scraping pipelines monitoring 500,000+ products and automating large-scale product ingestion into PostgreSQL databases.",
        "Developed internal tools to support product research and streamline sourcing operations."
      ]
    },
    {
      role: "IT Applications Analyst",
      company: "City of Newport Beach",
      companylogo: require("./assets/images/newportLogo.png"),
      date: "2015 – 2022",
      desc: "Municipal application development, integrations, reporting, and enterprise support",
      descBullets: [
        "Developed ASP.NET reservation and scheduling applications used city-wide for internal events and recreation programs.",
        "Built EnerGov permitting integrations and ASP.NET modules to automate customer and business license workflows.",
        "Migrated legacy enterprise data into SQL Server and cleaned/imported 99% of records during replacement of a legacy ticketing system.",
        "Implemented employee synchronization between Munis ERP and Active Directory using PowerShell and SQL stored procedures.",
        "Produced SSRS, Crystal Reports, and Excel reporting while supporting ERP, library, and custom application operations across departments."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Stand Alone Projects",
  projects: [
    {
      projectName: "Webscrapers",
      projectDesc: "Scrapy spiders and ingestion tooling for large-scale product monitoring.",
      projectBullets: [
        "Built with Python and Scrapy.",
        "Designed to collect, normalize, and update large product datasets efficiently.",
        "Stores and updates data in a database to improve scraping efficiency and downstream processing.",
        "Supports proxy usage and parameterized calls for more reliable scraping workflows."
      ]
    },
    {
      projectName: "Community Data Lookup Bot",
      projectDesc: "Bot and data tooling for community lookup and automation workflows.",
      projectBullets: [
        "Built with Node.js and PostgreSQL.",
        "Rebuilt and expanded a community bot originally developed by another maintainer.",
        "Maintained and updated records as new game content released.",
        "Used across multiple Discord communities."
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "1-xxx-xxx-xxxx",
  email_address: "ryan.cabaruvias@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
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
