import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None  // ✅ add this
})
export class HeaderComponent implements OnInit {
  isDarkMode = false;
  activeSection = 'hero';
  showSocials = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    // if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
      // document.body.classList.add('dark');
    // }
  }

toggleTheme() {
  this.isDarkMode = !this.isDarkMode;
  localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', this.isDarkMode);
}

toggleSocialMenu() {
  this.showSocials = !this.showSocials;
}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['hero', 'about', 'experience', 'education', 'projects', 'contact'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          this.activeSection = id;
          break;
        }
      }
    }
  }
scrollNav(direction: 'left' | 'right') {
  const nav = document.getElementById('scrolling-nav');
  if (nav) nav.scrollBy({ left: direction === 'left' ? -120 : 120, behavior: 'smooth' });
}
checkNavScroll() {
  const nav = document.getElementById('scrolling-nav');
  if (!nav) return;

  const leftIndicator = document.getElementById('nav-left-indicator');
  const rightIndicator = document.getElementById('nav-right-indicator');

  if (leftIndicator) leftIndicator.style.opacity = nav.scrollLeft > 10 ? "1" : "0.3";
  if (rightIndicator)
    rightIndicator.style.opacity = nav.scrollLeft + nav.clientWidth < nav.scrollWidth - 10 ? "1" : "0.3";
}

ngAfterViewInit() {
  this.checkNavScroll(); // run once on load
}
}
