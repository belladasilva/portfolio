import {
  AboutData,
  ContactData,
  Experience,
  HeroData,
  HeroCode,
  NavLink,
  Project,
  TechnologyGroup,
  WorkflowStep,
} from '../models/portfolio.models';

const githubUrl = 'https://github.com/belladasilva';

export const navLinks: NavLink[] = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'tecnologias', label: 'Stack' },
];

export const heroData: HeroData = {
  name: 'Isabella Da Silva',
  role: 'Software Engineer • Full Stack Developer',
  summary:
    'Desenvolvo e evoluo aplicações web, trabalhando entre frontend, backend, bancos de dados e resolução de problemas em software real.',
  githubUrl,
  resumeUrl: null,
};

export const heroCode: HeroCode = {
  basedIn: 'São Paulo, BR',
  studiedIn: 'Kingston, Canada',
  enjoys: ['debugging', 'building', 'learning'],
  mindset: 'understand first, then code',
};

export const aboutData: AboutData = {
  headline: 'Gosto de entender o problema antes de mexer no código.',
  paragraphs: [
    'Sou formada em Computer Programming & Analysis pelo St. Lawrence College, em Kingston, Canadá, onde vivi entre 2023 e 2026.',
    'Durante esse período também trabalhei como Junior Software Engineer na Elentra, atuando com software em produção, debugging, SQL, APIs e processos de code review e QA.',
    'Costumo primeiro entender como o sistema funciona, investigar o que está dando errado e só então partir para a solução.',
  ],
  education: {
    credential: 'Advanced Diploma',
    program: 'Computer Programming & Analysis',
    institution: 'St. Lawrence College',
    location: 'Kingston, Ontario, Canadá',
    period: '2023–2026',
  },
};

export const experienceItems: Experience[] = [
  {
    role: 'Junior Software Engineer',
    company: 'Elentra',
    location: 'Kingston, Ontario, Canadá',
    startDate: 'mai/2025',
    endDate: 'abr/2026',
    description:
      'Atuação em uma equipe de desenvolvimento responsável pela manutenção e evolução de software em produção.',
    highlights: [
      'Acompanhamento de bugs e tarefas pelo Jira, investigando problemas reportados em produção com apoio de Sentry, logs, stack traces e consultas SQL.',
      'Manutenção e evolução de funcionalidades em aplicações existentes.',
      'Desenvolvimento e debugging utilizando PHP, JavaScript e SQL em software de produção.',
      'Uso de GitLab com branches, Merge Requests e participação em Code Review.',
      'Participação em testes, fluxos de QA, integrações/APIs e ferramentas de infraestrutura como Google Cloud Platform.',
    ],
    tags: ['PHP', 'JavaScript', 'SQL', 'GitLab', 'Jira', 'Sentry', 'GCP'],
  },
  {
    role: 'Freelance Web Developer',
    type: 'Remoto',
    startDate: 'jan/2025',
    endDate: 'mai/2025',
    description:
      'Desenvolvimento de websites responsivos para pequenos projetos, incluindo implementação de interfaces, funcionalidades em PHP e integração com banco de dados MySQL.',
    highlights: [],
    tags: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
  },
];

export const projectItems: Project[] = [
  {
    title: 'Library Management System',
    description:
      'Sistema desktop de gerenciamento de biblioteca desenvolvido com Java, Swing, JDBC, SQLite e Maven, utilizando o padrão DAO. Inclui gerenciamento de livros e usuários, empréstimos e devoluções, validação de dados e navegação em uma única janela.',
    technologies: ['Java', 'Swing', 'JDBC', 'SQLite', 'Maven', 'DAO'],
    githubUrl: null,
    demoUrl: null,
    image: '/projects/library-management.png',
    imageAlt: 'Tela do Library Management System com catálogo de livros e formulário de detalhes',
    featured: true,
    preview: 'library',
  },
  {
    title: 'Photo Gallery',
    description:
      'Aplicação web para upload, armazenamento e exibição de imagens utilizando PHP e MySQL.',
    technologies: ['PHP', 'MySQL', 'Web'],
    githubUrl: null,
    demoUrl: null,
    image: null,
    imageAlt: 'Visual do projeto Photo Gallery',
    featured: false,
    preview: 'gallery',
  },
  {
    title: 'Product Inventory System',
    description:
      'Sistema de inventário desenvolvido para praticar orientação a objetos, herança e polimorfismo.',
    technologies: ['C++', 'OOP'],
    githubUrl: null,
    demoUrl: null,
    image: null,
    imageAlt: 'Visual do projeto Product Inventory System',
    featured: false,
    preview: 'inventory',
  },
  {
    title: 'Roll-a-Ball Unity Game',
    description:
      'Jogo 3D desenvolvido em Unity no qual o jogador controla uma esfera, coleta objetos e acompanha sua pontuação.',
    technologies: ['C#', 'Unity', '3D'],
    githubUrl: null,
    demoUrl: null,
    image: null,
    imageAlt: 'Visual do projeto Roll-a-Ball Unity Game',
    featured: false,
    preview: 'game',
  },
];

export const workflowSteps: WorkflowStep[] = [
  { title: 'Ticket' },
  { title: 'Reprodução' },
  { title: 'Análise da causa' },
  { title: 'Implementação' },
  { title: 'Merge Request' },
  { title: 'Code Review + QA' },
  { title: 'Merge' },
];

export const technologyGroups: TechnologyGroup[] = [
  {
    title: 'Experiência profissional',
    items: [
      'JavaScript',
      'PHP',
      'SQL',
      'Git',
      'GitLab',
      'Linux',
      'GCP',
      'APIs',
    ],
  },
  {
    title: 'Foco atual',
    items: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'REST', 'JUnit'],
  },
  {
    title: 'Formação & projetos',
    items: ['C++', 'C#', 'React', 'Node.js', 'MySQL', 'MongoDB', 'Unity', 'HTML', 'CSS / SCSS'],
  },
];

export const contactData: ContactData = {
  title: 'Vamos conversar?',
  description:
    'Estou aberta a oportunidades de trabalho e projetos em desenvolvimento de software.',
  email: 'isachristina429@gmail.com',
  githubUrl,
  linkedinUrl: 'https://www.linkedin.com/in/belladasilva',
};

export const sectionText = {
  experience: 'Software em produção, debugging e colaboração com times de engenharia.',
  projects: 'Alguns dos projetos que desenvolvi.',
  workflow: 'Um exemplo do fluxo de trabalho que uso para investigar e corrigir problemas em software de produção.',
  technologies: 'Tecnologias com que já trabalhei e o que estou aprofundando agora.',
};
