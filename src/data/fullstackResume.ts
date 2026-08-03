import { ResumeData } from "../types/resume";
import twitterCloneImage from '../assets/images/twitter-clone-new.png';
import tradingBotImage from '../assets/images/trading-bot-new.png';
import certiticateIssuance from '../assets/images/certificate-issuance-new.png';
import vibeCodingImage from '../assets/images/campaings-dashboard-new.png';

export const fullstackResume: ResumeData = {
  main: {
    title: "Lakshmi Sanikommu",
    subtitle: "Software Engineer | Full-Stack (React · .NET · Agentic AI Engineering)",
    githubUrl: "https://github.com/18121A05L2",
    linkedinUrl: "https://www.linkedin.com/in/lakshmi-reddy-1a355a1a1/",
    cyfrinProfile: "https://profiles.cyfrin.io/u/lucky2892000"
  },
  expertise: [
    {
      title: "Frontend Development",
      iconType: "react",
      description: "Specialized in creating dynamic and responsive user interfaces using React and Next.js. Experienced with state management, SEO optimization, and implementing micro-frontend architectures.",
      skills: ["React.js", "Javascript", "Typescript", "Next.js", "Redux", "MobX", "Responsive UI", "SEO", "Micro Frontends"]
    },
    {
      title: "Backend Development",
      iconType: "backend",
      description: "Strong background in designing scalable backend systems and RESTful APIs using ASP.NET Core, C#, and Node.js. Proficient in database management with SQL Server, Entity Framework Core, MongoDB, and DynamoDB.",
      skills: ["ASP.NET Core", "C#", "Node.js", "SQL Server", "Entity Framework", "DynamoDB", "MongoDB", "Express.js", "NestJS", "REST APIs"]
    },
    {
      title: "Cloud & Agentic AI",
      iconType: "docker",
      description: "Skilled in cloud infrastructure with AWS, CI/CD pipelines, and applying agentic AI-assisted development workflows (Claude Code, GitHub Copilot, Antigravity) to accelerate delivery and raise code quality.",
      skills: ["AWS", "CI/CD Pipelines", "Docker", "Git", "Claude Code", "GitHub Copilot", "Antigravity", "AI Agents"]
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Software Engineer",
      company: "DAZN",
      location: "Hyderabad",
      period: "10/2024 - Present",
      description: "Developed and maintained RESTful APIs using ASP.NET Core and C#, improving backend performance with Entity Framework Core and SQL Server. Designed and built a custom Watch Next recommendation API using .NET (C#) to support integration across platforms. Enhanced a React and TypeScript-based micro-frontend architecture using single-spa, serving as the application's entry point. Applied agentic AI-assisted engineering workflows (GitHub Copilot, Claude Code) to reduce boilerplate, accelerate delivery, and maintain code quality. Contributed to performance optimization and new-user acquisition features for high-traffic events."
    },
    {
      id: "exp-2",
      role: "Associate Software Engineer",
      company: "DAZN",
      location: "Hyderabad",
      period: "10/2022 - 10/2024",
      description: "Built a scalable, reusable SEO framework and serverless backend solutions on AWS Lambda, DynamoDB, and S3. Contributed to full-stack web applications using ASP.NET Core, C#, React, and TypeScript. Led the redesign of the DAZN Bet integration page and implemented Single Sign-On (SSO) for seamless authentication. Diagnosed and resolved complex production issues and developed a WebView-based solution embedded in native apps. Participated in platform integration for major strategic content acquisitions like the NFL launch."
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Twitter Clone",
      description: "Built a full-stack Twitter clone (React, Node.js, MongoDB) with a component-based frontend and scalable RESTful APIs for tweet creation, timeline feed, and user interactions.",
      imageUrl: twitterCloneImage,
      website: "https://twitter-clone-app-frontend.vercel.app/",
      githubUrl: "https://github.com/18121A05L2/Twitter-Clone-App"
    },
    {
      id: "proj-2",
      title: "Automated Trading Bot",
      description: "Built a Node.js automated trading bot integrated with the Binance API for algorithmic trade execution, deployed on AWS Lambda for scalable, cost-efficient serverless execution.",
      imageUrl: tradingBotImage,
      githubUrl: "https://github.com/18121A05L2/ProjectB-37"
    },
    {
      id: "proj-3",
      title: "Blockchain Certificate Issuance Platform Workshop",
      description: "3 day workshop project where I designed and implemented a Full Stack Blockchain-based Credential Issuance Platform using Solana.",
      imageUrl: certiticateIssuance,
      website: "https://frontend-aicerts-solana-project.vercel.app/",
      githubUrl: "https://github.com/18121A05L2/aicerts-solana-project"
    },
    {
      id: "proj-4",
      title: "Vibe Coding Project",
      description: "An assessment project built like a workshop using Vibe Coding techniques.",
      imageUrl: vibeCodingImage,
      githubUrl: "https://github.com/18121A05L2/AMGO_Games",
      website: "https://amgo-games-lac.vercel.app/"
    }
  ]
};
