export interface NavLink {
  id: string;
  label: string;
}

export interface HeroData {
  name: string;
  role: string;
  summary: string;
  githubUrl: string;
  resumeUrl: string | null;
}

export interface HeroCode {
  basedIn: string;
  studiedIn: string;
  enjoys: string[];
  mindset: string;
}

export interface AboutData {
  headline: string;
  paragraphs: string[];
  education: {
    credential: string;
    program: string;
    institution: string;
    location: string;
    period: string;
  };
}

export interface Experience {
  role: string;
  company?: string;
  location?: string;
  type?: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export type ProjectPreviewKind = 'library' | 'gallery' | 'inventory' | 'game';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  image: string | null;
  imageAlt: string;
  featured: boolean;
  preview: ProjectPreviewKind;
}

export interface WorkflowStep {
  title: string;
}

export interface TechnologyGroup {
  title: string;
  items: string[];
}

export interface ContactData {
  title: string;
  description: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}
