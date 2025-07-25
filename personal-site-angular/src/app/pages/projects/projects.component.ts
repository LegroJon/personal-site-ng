import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
  projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Angular and Node.js, featuring user authentication, payment processing, and inventory management.',
      image: 'assets/images/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
      features: [
        'User authentication and authorization',
        'Shopping cart and checkout process',
        'Payment integration with Stripe',
        'Admin dashboard for inventory management',
        'Responsive design for all devices'
      ],
      liveUrl: 'https://ecommerce-demo.example.com',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      status: 'Completed',
      category: 'Web Application'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced filtering options.',
      image: 'assets/images/project2.jpg',
      technologies: ['React', 'Express.js', 'Socket.io', 'PostgreSQL', 'Redux'],
      features: [
        'Real-time collaboration with Socket.io',
        'Drag and drop task management',
        'Team invitation and role management',
        'Advanced filtering and search',
        'File attachments and comments'
      ],
      liveUrl: 'https://taskmanager-demo.example.com',
      githubUrl: 'https://github.com/yourusername/task-manager',
      status: 'Completed',
      category: 'Web Application'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions, forecasts, and interactive maps using multiple weather APIs.',
      image: 'assets/images/project3.jpg',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Mapbox', 'SCSS'],
      features: [
        'Current weather and 7-day forecast',
        'Interactive weather maps',
        'Location search and geolocation',
        'Weather charts and visualizations',
        'Dark/light theme toggle'
      ],
      liveUrl: 'https://weather-dashboard.example.com',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      status: 'Completed',
      category: 'Web Application'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'This responsive portfolio website built with Angular, showcasing projects, skills, and professional experience.',
      image: 'assets/images/project4.jpg',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap', 'GitHub Pages'],
      features: [
        'Responsive design',
        'Smooth animations and transitions',
        'SEO optimized',
        'Contact form integration',
        'PDF resume download'
      ],
      liveUrl: 'https://yourname.github.io/portfolio',
      githubUrl: 'https://github.com/yourusername/portfolio',
      status: 'Completed',
      category: 'Portfolio'
    },
    {
      id: 5,
      title: 'API Documentation Tool',
      description: 'A tool for generating beautiful API documentation from OpenAPI specifications with interactive testing capabilities.',
      image: 'assets/images/project5.jpg',
      technologies: ['Angular', 'OpenAPI', 'Swagger', 'Material Design', 'Docker'],
      features: [
        'Auto-generated documentation from OpenAPI specs',
        'Interactive API testing interface',
        'Code examples in multiple languages',
        'Authentication testing',
        'Export to PDF and HTML'
      ],
      liveUrl: 'https://api-docs-tool.example.com',
      githubUrl: 'https://github.com/yourusername/api-docs-tool',
      status: 'In Progress',
      category: 'Developer Tool'
    },
    {
      id: 6,
      title: 'Mobile Fitness App',
      description: 'A cross-platform mobile application for fitness tracking, workout planning, and progress monitoring.',
      image: 'assets/images/project6.jpg',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Charts'],
      features: [
        'Workout tracking and planning',
        'Progress charts and analytics',
        'Social features and challenges',
        'Nutrition tracking',
        'Offline functionality'
      ],
      liveUrl: '',
      githubUrl: 'https://github.com/yourusername/fitness-app',
      status: 'In Progress',
      category: 'Mobile App'
    }
  ];

  categories = ['All', 'Web Application', 'Mobile App', 'Developer Tool', 'Portfolio'];
  selectedCategory = 'All';
  filteredProjects = this.projects;

  filterProjects(category: string): void {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  openLink(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
