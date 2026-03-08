export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  website?: string;
  githubUrl: string;
  imageUrl: string;
}

export interface SkillCategory {
  title: string;
  iconType: "react" | "ethereum" | "docker" | "backend";
  description: string;
  skills: string[];
}

export interface MainData {
  title: string;
  subtitle: string;
  githubUrl: string;
  linkedinUrl: string;
  cyfrinProfile?: string;
}

export interface ResumeData {
  main: MainData;
  expertise: SkillCategory[];
  experience: Experience[];
  projects: ProjectData[];
}
