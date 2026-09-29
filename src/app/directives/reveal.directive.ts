import { DestroyRef, Directive, ElementRef, inject, signal } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal-ready',
    '[class.reveal-visible]': 'isVisible()',
  },
})
export class RevealDirective {
  readonly isVisible = signal(false);

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    if (typeof window === 'undefined') {
      this.isVisible.set(true);
      return;
    }

    const reducedMotion =
      typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (typeof IntersectionObserver === 'undefined' || reducedMotion) {
      this.isVisible.set(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) {
          return;
        }

        this.isVisible.set(true);
        observer.disconnect();
      },
      { rootMargin: '0px 0px -12% 0px' },
    );

    observer.observe(this.elementRef.nativeElement);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
