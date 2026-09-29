import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { projectItems } from './data/portfolio.data';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, ProjectsSectionComponent],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render hero heading', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Isabella Da Silva');
    expect(compiled.querySelector('.hero .role')?.textContent).toBe('Software Engineer • Full Stack Developer');
    expect(compiled.querySelector('.hero .summary')?.textContent).toContain('bancos de dados');
    expect(compiled.querySelector('.hero .eyebrow')).toBeNull();
    expect(compiled.querySelector('.hero .focus')).toBeNull();
    expect(compiled.querySelector('.hero .status')).toBeNull();
    expect(compiled.querySelector('.workspace-body')?.textContent).toContain('understand first, then code');
    expect(compiled.querySelector('.workspace-top')?.textContent).toContain('isabella.ts');
  });

  it('should render the simplified navigation and footer', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const navigation = compiled.querySelector('nav[aria-label="Navegação principal"]');

    expect(navigation?.textContent).toContain('Sobre');
    expect(navigation?.textContent).toContain('Experiência');
    expect(navigation?.textContent).not.toContain('Processo');
    expect(navigation?.textContent).toContain('Stack');
    expect(compiled.querySelector('.brand')?.textContent).toBe('isabella.dev');
    expect(compiled.querySelector('.nav-cta')?.getAttribute('href')).toBe('#contato');
    expect(compiled.querySelector('footer')?.textContent?.trim()).toBe('© 2026 Isabella Da Silva · São Paulo, Brasil');
    expect(compiled.querySelector('footer')?.textContent).not.toContain('GitHub');
  });

  it('should show the updated education and contact details', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.about .meta')?.textContent).toContain('Advanced Diploma');
    expect(compiled.querySelector('.about h2')?.textContent).toBe('Gosto de entender o problema antes de mexer no código.');
    expect(compiled.querySelector('.about .text p:last-child')?.textContent).toBe(
      'Costumo primeiro entender como o sistema funciona, investigar o que está dando errado e só então partir para a solução.',
    );
    expect(compiled.querySelector('.about .meta')?.textContent).toContain('Kingston, Ontario, Canadá');
    expect(compiled.querySelector('.about .meta')?.textContent).not.toContain('Português e Inglês');
    expect(compiled.querySelector('.technologies h2')?.textContent).toBe('Stack');
    expect(compiled.querySelector('.technologies .intro')?.textContent).toBe(
      'Tecnologias com que já trabalhei e o que estou aprofundando agora.',
    );
    expect(compiled.querySelector('.contact h2')?.textContent).toBe('Vamos conversar?');
    expect(compiled.querySelector('.contact .description')?.textContent).toBe(
      'Estou aberta a oportunidades de trabalho e projetos em desenvolvimento de software.',
    );
    expect(compiled.querySelector('.contact a[href^="mailto:"]')?.textContent).toBe('Enviar e-mail');
    expect(compiled.querySelector('.contact a[href^="mailto:"]')?.getAttribute('href')).toBe('mailto:isachristina429@gmail.com');
    expect(compiled.querySelector('.contact button')).toBeNull();
  });

  it('should show project previews without links for missing URLs', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const projects = compiled.querySelectorAll('.project-card');

    expect(projects).toHaveLength(4);
    expect(compiled.querySelector('.projects .head p')?.textContent).toBe('Alguns dos projetos que desenvolvi.');
    expect(Array.from(projects, (project) => project.querySelector('h3')?.textContent)).toEqual([
      'Library Management System',
      'Photo Gallery',
      'Product Inventory System',
      'Roll-a-Ball Unity Game',
    ]);
    expect(projects[0]?.querySelector('img')?.getAttribute('src')).toBe('/projects/library-management.png');
    expect(projects[0]?.querySelector('img')?.getAttribute('alt')).toBe(
      'Tela do Library Management System com catálogo de livros e formulário de detalhes',
    );
    expect(projects[0]?.querySelector('.content p')?.textContent).toBe(
      'Sistema desktop de gerenciamento de biblioteca desenvolvido com Java, Swing, JDBC, SQLite e Maven, utilizando o padrão DAO. Inclui gerenciamento de livros e usuários, empréstimos e devoluções, validação de dados e navegação em uma única janela.',
    );
    expect(Array.from(projects[0]?.querySelectorAll('.tags span') ?? [], (tag) => tag.textContent)).toEqual([
      'Java', 'Swing', 'JDBC', 'SQLite', 'Maven', 'DAO',
    ]);
    expect(projects[1]?.querySelector('.gallery-preview')).not.toBeNull();
    expect(projects[0]?.classList.contains('featured')).toBe(true);
    expect(projects[2]?.classList.contains('balanced-row')).toBe(true);
    expect(projects[3]?.classList.contains('balanced-row')).toBe(true);
    expect(Array.from(projects, (project) => project.querySelector('app-project-preview') !== null)).toEqual([
      false, true, true, true,
    ]);
    expect(compiled.querySelector('.project-card .status')).toBeNull();
    expect(compiled.querySelectorAll('.project-card img')).toHaveLength(1);
    expect(projects[0]?.querySelector('.actions a')).toBeNull();
    expect(projects[3]?.querySelector('.actions a')).toBeNull();
    expect(compiled.querySelector('.all-projects')?.getAttribute('href')).toBe('https://github.com/belladasilva');
  });

  it('should replace only the selected fallback when an image is configured', async () => {
    const fixture = TestBed.createComponent(ProjectsSectionComponent);
    fixture.componentRef.setInput('projects', [
      { ...projectItems[0], image: '/favicon.svg' },
      ...projectItems.slice(1),
    ]);
    fixture.componentRef.setInput('githubUrl', 'https://github.com/belladasilva');
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const projects = compiled.querySelectorAll('.project-card');
    const image = projects[0]?.querySelector('img');

    expect(image?.getAttribute('src')).toBe('/favicon.svg');
    expect(image?.getAttribute('alt')).toBe(projectItems[0].imageAlt);
    expect(projects[0]?.querySelector('app-project-preview')).toBeNull();
    expect(projects[1]?.querySelector('.gallery-preview')).not.toBeNull();
  });

  it('should use the regular grid when a fifth project is added', async () => {
    const fixture = TestBed.createComponent(ProjectsSectionComponent);
    fixture.componentRef.setInput('projects', [
      ...projectItems,
      { ...projectItems[0], title: 'Test Project', featured: false, image: null },
    ]);
    fixture.componentRef.setInput('githubUrl', 'https://github.com/belladasilva');
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.project-card')).toHaveLength(5);
    expect(compiled.querySelector('.balanced-row')).toBeNull();
  });

  it('should present the corrected experience and engineering flow', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const experiences = compiled.querySelectorAll('.timeline-item');
    const elentraHighlights = experiences[0]?.querySelectorAll('.highlights li');
    const elentraTags = experiences[0]?.querySelectorAll('.tags span');
    const freelanceTags = experiences[1]?.querySelectorAll('.tags span');

    expect(elentraHighlights).toHaveLength(5);
    expect(elentraHighlights?.[0]?.textContent).toContain('Acompanhamento de bugs e tarefas pelo Jira');
    expect(Array.from(elentraTags ?? [], (tag) => tag.textContent)).toEqual([
      'PHP', 'JavaScript', 'SQL', 'GitLab', 'Jira', 'Sentry', 'GCP',
    ]);
    expect(experiences[1]?.querySelector('.highlights')).toBeNull();
    expect(experiences[1]?.querySelector('.description')?.textContent).toBe(
      'Desenvolvimento de websites responsivos para pequenos projetos, incluindo implementação de interfaces, funcionalidades em PHP e integração com banco de dados MySQL.',
    );
    expect(Array.from(freelanceTags ?? [], (tag) => tag.textContent)).toEqual([
      'PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS',
    ]);

    const workflow = compiled.querySelector('#processo');
    expect(workflow?.querySelector('h2')?.textContent).toBe('Do bug ao merge.');
    expect(workflow?.querySelector('.intro')?.textContent).toBe(
      'Um exemplo do fluxo de trabalho que uso para investigar e corrigir problemas em software de produção.',
    );
    expect(Array.from(workflow?.querySelectorAll('.step span') ?? [], (step) => step.textContent)).toEqual([
      'Ticket', 'Reprodução', 'Análise da causa', 'Implementação', 'Merge Request', 'Code Review + QA', 'Merge',
    ]);
  });
});
