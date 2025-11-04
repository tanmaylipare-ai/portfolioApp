import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private heroSVG!: HTMLElement | null;
  private animationFrame: number | null = null;
  private isHovered = false;
  private angle = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Typed.js setup
    new Typed('#typed-text', {
      strings: [
        'Full Stack Developer',
        'Angular Developer',
        'Python Developer',
        'Engineer',
        'Tech Enthusiast'
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1200,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    this.heroSVG = this.el.nativeElement.querySelector('#hero-svg');
    if (this.heroSVG) {
      this.heroSVG.addEventListener('mouseenter', this.startHover.bind(this));
      this.heroSVG.addEventListener('mouseleave', this.stopHover.bind(this));

    }
  }

  private startHover(): void {
    this.isHovered = true;
  }

  private stopHover(): void {
    this.isHovered = false;
  }

  ngOnDestroy(): void {
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    if (this.heroSVG) {
      this.heroSVG.removeEventListener('mouseenter', this.startHover);
      this.heroSVG.removeEventListener('mouseleave', this.stopHover);
    }
  }
}
