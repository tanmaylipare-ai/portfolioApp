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
     title: 'Job application tracker',
     description: 'A full-stack job application tracking system built with Next.js, featuring a Kanban board interface for managing your job search.',
     image: 'assets/Job_board.jpeg',
     github: 'https://github.com/tanmaylipare-ai/job-application-tracker',
     live: 'https://job-application-tracker-tan-ai.vercel.app/'
   },
   {
     title: 'Gym Tracker',
     description: 'Workout tracker with routines, sets, and progress graphs',
     image: 'assets/gym.jpeg',
     github: 'https://github.com/tanmaylipare-ai/gym_tracking_frontend',
     live: ''
   },
    {
     title: 'Rate limiting in ASP.NETCore',
     description: 'Rate Limiting in ASP.NET Core (.NET 10). This project implements all four built-in algorithms: Fixed Window, Sliding Window, Token Bucket, Concurrency Limiter',
     image: 'assets/Job_board.jpeg',
     github: 'https://github.com/tanmaylipare-ai/dotnet_rate_limiting.git',
     live: 'https://rate-limiting-aspnet-core.onrender.com/scalar/v1'
   },
    {
      title: 'Restaurant Management App',
      description: 'Full-stack restaurant app using Angular + FastAPI + PostgreSQL',
      image: 'assets/restaurant.jpg',
      github: '',
      live: ''
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