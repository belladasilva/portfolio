import { Component, DestroyRef, afterNextRender, inject, input, signal } from '@angular/core';
import { NavLink } from '../../models/portfolio.models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly links = input.required<NavLink[]>();
  readonly activeSectionId = signal('inicio');

  private readonly destroyRef = inject(DestroyRef);
  private navigationTargetId: string | null = null;

  protected onNavigate(sectionId: string): void {
    this.navigationTargetId = sectionId;
    this.activeSectionId.set(sectionId);
  }

  constructor() {
    afterNextRender(() => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
      const navbar = document.querySelector<HTMLElement>('.nav-wrap');
      let frameId: number | null = null;

      const updateActiveSection = () => {
        frameId = null;
        if (this.navigationTargetId !== null) {
          return;
        }

        const navBottom = navbar?.getBoundingClientRect().bottom ?? 0;
        const focus = navBottom + (window.innerHeight - navBottom) * 0.3;
        const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
        let current: HTMLElement | undefined;

        for (const section of sections) {
          if (section.getBoundingClientRect().top > focus) {
            break;
          }
          current = section;
        }

        this.activeSectionId.set(atBottom ? 'contato' : current?.id ?? 'inicio');
      };

      const requestActiveUpdate = () => {
        if (frameId === null) {
          frameId = window.requestAnimationFrame(updateActiveSection);
        }
      };

      const releaseNavigationTarget = () => {
        this.navigationTargetId = null;
        requestActiveUpdate();
      };

      const onKeyDown = (event: KeyboardEvent) => {
        if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) {
          releaseNavigationTarget();
        }
      };

      const onResize = () => {
        this.navigationTargetId = null;
        requestActiveUpdate();
      };

      window.addEventListener('scroll', requestActiveUpdate, { passive: true });
      window.addEventListener('resize', onResize);
      window.addEventListener('wheel', releaseNavigationTarget, { passive: true });
      window.addEventListener('touchstart', releaseNavigationTarget, { passive: true });
      window.addEventListener('keydown', onKeyDown);
      requestActiveUpdate();

      const initialHash = window.location.hash.slice(1);
      const initialTarget = document.getElementById(initialHash);
      if (initialTarget) {
        this.onNavigate(initialHash);
        initialTarget.scrollIntoView();
      }

      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', requestActiveUpdate);
        window.removeEventListener('resize', onResize);
        window.removeEventListener('wheel', releaseNavigationTarget);
        window.removeEventListener('touchstart', releaseNavigationTarget);
        window.removeEventListener('keydown', onKeyDown);
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId);
        }
      });
    });
  }
}
