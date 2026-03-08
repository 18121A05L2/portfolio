import { ResumeData } from "../types/resume";
import twitterCloneImage from '../assets/images/twitter-clone.png';
import tradingBotImage from '../assets/images/trading-bot.png';
import certiticateIssuance from '../assets/images/certificate-issuance.png';
import vibeCodingImage from '../assets/images/campaings-dashboard.png';

export const blockchainResume: ResumeData = {
  main: {
    title: "Lakshmi Sanikommu",
    subtitle: "Blockchain Developer",
    githubUrl: "https://github.com/18121A05L2",
    linkedinUrl: "https://www.linkedin.com/in/lakshmi-reddy-1a355a1a1/",
    cyfrinProfile: "https://profiles.cyfrin.io/u/lucky2892000"
  },
  expertise: [
    {
      title: "Blockchain Development",
      iconType: "ethereum",
      description: "Professional experience building scalable decentralized applications (dApps), creating smart contracts with Solidity, and interacting with various blockchains like Ethereum, Solana, and Hyperledger Fabric.",
      skills: [
        "Blockchain", "Solidity", "Foundry", "Smart Contracts", "Hardhat",
        "Ethers", "Wagmi", "EVM", "Web3", "Rust (beginner)",
        "Huff (beginner)", "Dapps", "Hyperledger Fabric", "Zero-Knowledge Proofs", "Solana", "Viem", "Openzeppelin", "Rust"
      ]
    },
    {
      title: "Full Stack Web Development",
      iconType: "react",
      description: "Proficient in building end-to-end web applications with React, Next.js, and Node.js. Experienced in designing responsive user interfaces and robust RESTful APIs.",
      skills: ["React.js", "Javascript", "Next.js", "Redux", "Tailwindcss", "Responsive UI", "SEO", "Micro Frontends", "Node.js", "DynamoDB", "NestJS", "MongoDB", "Express.js", "Rest APIs", "Typescript"]
    },
    {
      title: "DevOps & Automation",
      iconType: "docker",
      description: "Adept at streamlining development workflows by setting up CI/CD pipelines, containerizing applications with Docker, and managing cloud infrastructure on AWS.",
      skills: ["AWS", "CI/CD pipelines", "Git", "UnitTesting", "Docker", "GitHub Actions"]
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Full Stack Blockchain Developer",
      company: "Aicerts",
      location: "Remote",
      period: "02/2025 - 02/2026",
      type: "Freelancer",
      description: "Most of my work has focused on the certification lifecycle, where I developed smart contracts and integrated them across the frontend and backend systems. Certificates will be issued across multiple blockchains, including Polygon, Optimism, Solana, and Hyperledger Fabric. Actively contributed to core platform modules such as Dashboard, Designer, Issuance, Credential Management, Integrations, and Email systems across the certification lifecycle."
    },
    {
      id: "exp-2",
      role: "Blockchain Developer",
      company: "Self Projects",
      location: "Home",
      period: "06/2023 - Present",
      description: "Built and deployed ERC-20 tokens and ERC-721 tokens, along with an integrated NFT marketplace. Integrated Chainlink oracles, Alchemy, Infura, and Binance API to power Web3 applications with real-time data and blockchain connectivity. Performed smart contract audits, optimized gas usage, and enforced security best practices across Solidity codebases. After studying Tornado Cash, I developed a ZKMixer implementation leveraging Aztec's zero-knowledge proving."
    },
    {
      id: "exp-3",
      role: "Software Engineer",
      company: "DAZN",
      location: "Hyderabad",
      period: "10/2022 - Present",
      description: "Led the redesign of the DAZN Bet integration page (dazn.com/bet), including implementing Single Sign-On (SSO) to seamlessly authenticate users with the external DAZN Bet platform. Built a scalable SEO framework for the DAZN platform, enabling developers to efficiently generate SEO-compliant pages without duplicating effort. Built scalable backend solutions using AWS Lambda, DynamoDB, and S3, enabling efficient serverless workflows and data storage. Specialized in debugging, understanding legacy code, and resolving complex issues by identifying root causes and implementing robust fixes."
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Twitter Clone",
      description: "Developed a full-stack Twitter clone using React.js, Node.js, and MongoDB, featuring core functionalities like tweet creation, timeline display, and user interactions. Implemented a clean component-based architecture on the frontend and built scalable RESTful APIs on the backend.",
      imageUrl: twitterCloneImage,
      website: "https://twitter-clone-app-frontend.vercel.app/",
      githubUrl: "https://github.com/18121A05L2/Twitter-Clone-App"
    },
    {
      id: "proj-2",
      title: "Trading Bot",
      description: "Integrated Binance API for automated trading bot operations. Deployed in AWS Lambda.",
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
