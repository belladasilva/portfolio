import { Component, DestroyRef, inject, output, signal } from '@angular/core';

@Component({
  selector: 'app-startup-screen',
  templateUrl: './startup-screen.component.html',
  styleUrl: './startup-screen.component.scss',
})
export class StartupScreenComponent {
  readonly done = output<void>();
  readonly isFinishing = signal(false);

  private readonly destroyRef = inject(DestroyRef);
  private readonly timerIds: number[] = [];

  constructor() {
    this.startAnimation();
  }

  private startAnimation(): void {
    const reducedMotion =
      typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      this.done.emit();
      return;
    }

    this.timerIds.push(
      window.setTimeout(() => {
        this.isFinishing.set(true);
      }, 540),
    );

    this.timerIds.push(
      window.setTimeout(() => {
        this.done.emit();
      }, 680),
    );

    this.destroyRef.onDestroy(() => {
      this.timerIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    });
  }
}
