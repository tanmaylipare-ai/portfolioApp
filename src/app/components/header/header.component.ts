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
}
