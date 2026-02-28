import { ResumeData } from "../types/resume";

export const fullstackResume: ResumeData = {
  main: {
    title: "Lakshmi Sanikommu",
    subtitle: "Full Stack Engineer",
    githubUrl: "https://github.com/18121A05L2",
    linkedinUrl: "https://www.linkedin.com/in/lakshmi-reddy-1a355a1a1/",
  },
  expertise: [
    {
      title: "Frontend Development",
      iconType: "react",
      description: "Specialized in creating dynamic and responsive user interfaces using React and Next.js. Experienced with state management, SEO optimization, and implementing micro-frontend architectures.",
      skills: ["React.js", "Javascript", "Next.js", "Redux", "Tailwindcss", "Responsive UI", "SEO", "Micro Frontends"]
    },
    {
      title: "Backend Development",
      iconType: "backend",
      description: "Strong background in designing scalable backend systems and serverless workflows using Node.js, NestJS, and AWS Lambda. Proficient in database management with MongoDB and DynamoDB.",
      skills: ["Node.js", "DynamoDB", "NestJS", "MongoDB", "Express.js", "Rest APIs", "Typescript"]
    },
    {
      title: "DevOps & Automation",
      iconType: "docker",
      description: "Skilled in improving release frequency and reducing manual deployment times through automated CI/CD pipelines using GitHub Actions, Docker, and AWS.",
      skills: ["AWS", "CI/CD pipelines", "Git", "UnitTesting", "Docker","GitHub Actions"]
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Software Engineer",
      company: "DAZN",
      location: "Hyderabad",
      period: "10/2024 - Present",
      description: "Getting familiar with modern frontend architecture concepts like micro-frontends using single-spa for scalable web application development. Architected and built 'Hermes', an internal full-stack tool (React + NestJS) enabling dynamic discount and user access management, reducing rollout time by 99% and cutting manual operations by 80%. Streamlined the development process by implementing CI/CD pipelines, reducing manual deployment time and improving release frequency."
    },
    {
      id: "exp-2",
      role: "Associate Software Engineer",
      company: "DAZN",
      location: "Hyderabad",
      period: "10/2022 - 10/2024",
      description: "Led the redesign of the DAZN Bet integration page (dazn.com/bet), including implementing Single Sign-On (SSO) to seamlessly authenticate users with the external DAZN Bet platform. Built a scalable SEO framework for the DAZN platform, enabling developers to efficiently generate SEO-compliant pages without duplicating effort. Built scalable backend solutions using AWS Lambda, DynamoDB, and S3, enabling efficient serverless workflows and data storage. Specialized in debugging, understanding legacy code, and resolving complex issues by identifying root causes and implementing robust fixes. Developed a web solution specifically designed to be embedded within native Android and iOS apps using WebView, ensuring smooth integration and consistent user experience."
    },
    {
      id: "exp-3",
      role: "Full Stack Developer",
      company: "Aicerts",
      location: "Remote",
      period: "Freelancer",
      type: "Freelancer",
      description: "Contributed to core platform modules such as Dashboard, Designer, Issuance, Credential Management, Integrations, and Email systems across the certification lifecycle. My work has focused on the certification lifecycle, where I developed smart contracts and integrated them across the frontend and backend systems."
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Twitter Clone",
      description: "Developed a full-stack Twitter clone using React.js, Node.js, and MongoDB, featuring core functionalities like tweet creation, timeline display, and user interactions. Implemented a clean component-based architecture on the frontend and built scalable RESTful APIs on the backend.",
      url: "#"
    },
    {
      id: "proj-2",
      title: "Trading Bot",
      description: "Integrated Binance API for automated trading bot operations. Deployed in AWS Lambda.",
      url: "#"
    },
    {
      id: "proj-3",
      title: "Certificates Issuance Platform Workshop",
      description: "3 day workshop project where I designed and implemented a Full Stack Blockchain-based Credential Issuance Platform using Solana.",
      url: "https://frontend-aicerts-solana-project.vercel.app/"
    }
  ]
};
