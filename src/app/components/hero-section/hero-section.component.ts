import { Component, DestroyRef, computed, inject, input, signal } from '@angular/core';
import { HeroCode, HeroData } from '../../models/portfolio.models';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-hero-section',
  imports: [RevealDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  readonly hero = input.required<HeroData>();
  readonly code = input.required<HeroCode>();
  readonly rotateX = signal('0deg');
  readonly rotateY = signal('0deg');

  readonly hasResume = computed(() => {
    const resumeUrl = this.hero().resumeUrl;
    if (!resumeUrl) {
      return false;
    }

    if (resumeUrl.startsWith('/') && !resumeUrl.startsWith('//')) {
      return true;
    }

    try {
      return ['http:', 'https:'].includes(new URL(resumeUrl).protocol);
    } catch {
      return false;
    }
  });

  private readonly destroyRef = inject(DestroyRef);
  private frameId: number | null = null;
  private latestPointer: { hero: HTMLElement; clientX: number; clientY: number } | null = null;

  constructor() {
    this.destroyRef.onDestroy(() => {
      if (this.frameId !== null) {
        window.cancelAnimationFrame(this.frameId);
      }
    });
  }

  protected onPointerMove(event: PointerEvent): void {
    const hero = event.currentTarget;
    if (
      !(hero instanceof HTMLElement) ||
      event.pointerType === 'touch' ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    this.latestPointer = { hero, clientX: event.clientX, clientY: event.clientY };
    if (this.frameId !== null) {
      return;
    }

    this.frameId = window.requestAnimationFrame(() => {
      this.frameId = null;
      const pointer = this.latestPointer;
      if (!pointer) {
        return;
      }

      const rect = pointer.hero.getBoundingClientRect();
      pointer.hero.style.setProperty('--glow-x', `${pointer.clientX - rect.left}px`);
      pointer.hero.style.setProperty('--glow-y', `${pointer.clientY - rect.top}px`);
      pointer.hero.style.setProperty('--glow-opacity', '1');

      const xRatio = pointer.clientX / window.innerWidth;
      const yRatio = pointer.clientY / window.innerHeight;
      this.rotateX.set(`${((0.5 - yRatio) * 4).toFixed(2)}deg`);
      this.rotateY.set(`${((xRatio - 0.5) * 5).toFixed(2)}deg`);
    });
  }

  protected onPointerLeave(event: PointerEvent): void {
    const hero = event.currentTarget;
    if (hero instanceof HTMLElement) {
      hero.style.setProperty('--glow-opacity', '0');
    }

    this.latestPointer = null;
    if (this.frameId !== null) {
      window.cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  }
}
