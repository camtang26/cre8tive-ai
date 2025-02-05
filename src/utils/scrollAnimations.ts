class ScrollAnimator {
  private observer: IntersectionObserver;
  private threshold: number = 0.1;

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersect(entries),
      {
        root: null,
        rootMargin: '50px',
        threshold: this.threshold
      }
    );
  }

  private handleIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !this.isExcluded(entry.target)) {
        const element = entry.target;
        const delay = element.getAttribute('data-delay');
        
        if (delay) {
          (element as HTMLElement).style.setProperty('--delay', `${delay}s`);
        }
        
        element.classList.add('animate');
        this.observer.unobserve(element);
        
        // Log for debugging
        console.log('Element animated:', element);
      }
    });
  }

  private isExcluded(element: Element): boolean {
    return element.closest('.navbar, .hero') !== null;
  }

  public init() {
    document.querySelectorAll('.fade-in').forEach(element => {
      this.observer.observe(element);
    });
    console.log('ScrollAnimator initialized');
  }
}

export const scrollAnimator = new ScrollAnimator();