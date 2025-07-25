import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  skills = [
    { name: 'Angular', level: 90, icon: 'fab fa-angular' },
    { name: 'TypeScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'HTML/CSS', level: 95, icon: 'fab fa-html5' },
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
    { name: 'Python', level: 75, icon: 'fab fa-python' },
    { name: 'Git', level: 85, icon: 'fab fa-git-alt' }
  ];

  achievements = [
    {
      number: '3+',
      label: 'Years Experience',
      icon: 'fas fa-calendar-alt'
    },
    {
      number: '15+',
      label: 'Projects Completed',
      icon: 'fas fa-project-diagram'
    },
    {
      number: '50+',
      label: 'Happy Clients',
      icon: 'fas fa-users'
    },
    {
      number: '100%',
      label: 'Success Rate',
      icon: 'fas fa-chart-line'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Animate skill bars on component load
    setTimeout(() => {
      this.animateSkillBars();
    }, 500);
  }

  private animateSkillBars(): void {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        const progressBar = bar.querySelector('.progress-fill') as HTMLElement;
        if (progressBar) {
          progressBar.style.width = this.skills[index].level + '%';
        }
      }, index * 200);
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
