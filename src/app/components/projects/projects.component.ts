import { Component } from '@angular/core';
import { ProjectCardComponent } from "./project-card/project-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
 projects = [
    {
      title: 'Restaurant Management App',
      description: 'Full-stack restaurant app using Angular + FastAPI + PostgreSQL',
      image: 'assets/restaurant.jpg',
      github: '#',
      live: '#'
    },
    {
      title: 'Gym Tracker',
      description: 'Workout tracker with routines, sets, and progress graphs',
      image: 'assets/gym.jpeg',
      github: '#',
      live: '#'
    },
    // {
    //   title: 'Portfolio Website',
    //   description: 'My personal portfolio built with Angular and Tailwind',
    //   image: 'assets/images/portfolio.jpg',
    //   github: '#',
    //   live: '#'
    // }
  ];
}