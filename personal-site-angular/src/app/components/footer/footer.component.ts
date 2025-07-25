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
      url: 'https://linkedin.com/in/yourprofile',
      icon: 'fab fa-linkedin-in'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'fab fa-github'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: 'fas fa-envelope'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: 'fab fa-twitter'
    }
  ];
}
