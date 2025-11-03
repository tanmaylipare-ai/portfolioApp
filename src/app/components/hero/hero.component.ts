import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit{
 ngAfterViewInit(): void {
    const options = {
      strings: [
        'Full Stack Developer',
        'Angular Developer',
        'Python Developer',
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1200,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };

    new Typed('#typed-text', options);
  }
}