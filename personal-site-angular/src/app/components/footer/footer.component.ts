import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jonathanlegro',
      icon: 'fab fa-linkedin-in'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/jonathanlegro',
      icon: 'fab fa-github'
    },
    {
      name: 'Email',
      url: 'mailto:jonathan.legro@email.com',
      icon: 'fas fa-envelope'
    }
  ];
}
