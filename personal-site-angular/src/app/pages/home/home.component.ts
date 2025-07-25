import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  skills = [
    { name: 'Cybersecurity', level: 90, icon: 'fas fa-shield-alt' },
    { name: 'C Programming', level: 85, icon: 'fas fa-code' },
    { name: 'Java', level: 80, icon: 'fab fa-java' },
    { name: 'Python', level: 85, icon: 'fab fa-python' },
    { name: 'SQL', level: 80, icon: 'fas fa-database' },
    { name: 'PowerShell', level: 75, icon: 'fas fa-terminal' }
  ];

  achievements = [
    {
      number: '2+',
      label: 'Years Experience',
      icon: 'fas fa-calendar-alt'
    },
    {
      number: '5+',
      label: 'Projects Completed',
      icon: 'fas fa-project-diagram'
    },
    {
      number: 'Secret',
      label: 'Security Clearance',
      icon: 'fas fa-shield-alt'
    },
    {
      number: '100%',
      label: 'Mission Success',
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
