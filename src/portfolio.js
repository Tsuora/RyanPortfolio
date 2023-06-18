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
  title: "Hello everyone, I'm Ryan",
  subTitle: emoji(
    "A .Net Full Stack Software Developer with experience in building Web and Mobile friendly applications with C#, JavaScript / Reactjs / Nodejs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
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
  subTitle: "FULL STACK DEVELOPER WITH A PASSION FOR LEARNING NEW TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop ASP.Net Web Applications utilizing MVC"
    ),
    emoji("⚡ Mobile Friendly React Applications with C# Rest APi"),
    emoji(
      "⚡ Powershell and SQL Stored Procedures for 3rd party integration"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "ASP.Net",
      fontAwesomeClassname: "far fa-file-code"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Agile, Kanban",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Business Owner",
    //   company: "GachaDiction",
    //   companylogo: require("./assets/images/newportLogo.png"),
    //   date: "March 2023 – Present",
    //   desc: "Anime Merchandise E-Commerce Store",
    //   descBullets: [
    //     "Sole developer that built Class and Camp Scheduling Application in ASP.MVC for Recreation Department to replace paid 3rd party application for employee and public use.",
    //     "Built Reservation Application in ASP.Net for internal events. Utilized by every department for major city-wide events as well as departmental events year-round.",
    //     "Used Energov Permiting System REST API to build Asp.Net modules for automating Customer and Business License creation in Energov and Quest application for legacy and new Permits. 99% of legacy records cleaned and imported with all new permits utilizing new automation.",
    //     "Integrated Munis Enterprise Resource Planning system with Active Directory to automatically sync Employee Data using Powershell and SQL Stored Procedures. 100% of existing employee records updated with all new employees using process when they are set up as new hires.",
    //     "Performed Data Migration from Informix SQL Server to Microsoft Server as part of a software replacement for old ticketing system."
    //   ]
    // },
    {
      role: "IT Analyst",
      company: "City of Newport Beach",
      companylogo: require("./assets/images/newportLogo.png"),
      date: "May 2015 – November 2022",
      desc: "ASP.Net Application Developer and IT Support specialist",
      descBullets: [
        "Sole developer that built Class and Camp Scheduling Application in ASP.MVC for Recreation Department to replace paid 3rd party application for employee and public use.",
        "Built Reservation Application in ASP.Net for internal events. Utilized by every department for major city-wide events as well as departmental events year-round.",
        "Used Energov Permiting System REST API to build Asp.Net modules for automating Customer and Business License creation in Energov and Quest application for legacy and new Permits. 99% of legacy records cleaned and imported with all new permits utilizing new automation.",
        "Integrated Munis Enterprise Resource Planning system with Active Directory to automatically sync Employee Data using Powershell and SQL Stored Procedures. 100% of existing employee records updated with all new employees using process when they are set up as new hires.",
        "Performed Data Migration from Informix SQL Server to Microsoft Server as part of a software replacement for old ticketing system."
      ]
    },
    {
      role: "Software Developer",
      company: "Hitachi Consulting",
      companylogo: require("./assets/images/hitachiLogo.jpg"),
      date: "May 2017 – May 2018",
      desc: "Java API and Front End Developer",
      descBullets: [
        "Developed Customer Intake forms and fixed bugs on existing intake forms through Javascript/HTML.",
        "Added functionality to Car Configurator APIs using Java, Javascript, HTML, JQuery, and MySQL.",
        "Managed source code through SVN, CVS version control systems, and deployed version up-dates to server through TeamSite.",
        "Completed tasks in a Scrum/Kanban style development cycle over sprints."
      ]
    },
    {
      role: "Intern and Cyber Security Team Leader",
      company: "Guiang Corporation",
      companylogo: require("./assets/images/securityLogo.jpg"),
      date: "September 2012 – March 2013",
      desc: "Application Developer and Team Leader",
      descBullets: [
        "Coordinated and instructed Cyber Security Team on java projects. Formed 10-week plan for team efficiency and organization.",
        "Worked in team to develop Java app for PHP injection in Jpg Image"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Stand Alone Projects",
  // subtitle: "Stand Alone Projects",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Gachadiction",
      projectDesc: "Demo E-Commerce Site built to test direct sales.",
      projectBullets: [
        "Built with React front end and C# Rest API.",
        "Mobile Friendly utilizing MUI Responsive UI.",
        "Deployed using Github Actions and Docker",
        "To view use guest login: guestuser pass: Dem0Pa$$"
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gachadiction.fly.dev/"
        }
        //  you can add extra buttons here.
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "1+949-822-1809",
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
