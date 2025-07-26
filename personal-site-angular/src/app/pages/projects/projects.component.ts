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
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive personal portfolio website built with Angular. Features professional resume display, project showcase, and cybersecurity-focused content with smooth animations and responsive design.',
      image: 'assets/images/project1.jpg',
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Font Awesome', 'CSS3', 'HTML5'],
      features: [
        'Responsive design for all devices',
        'Professional resume timeline display',
        'Interactive project showcase with filtering',
        'Smooth animations and transitions',
        'Contact form integration and PDF resume download'
      ],
      liveUrl: 'https://legrojon.github.io/personal-site-ng',
      githubUrl: 'https://github.com/LegroJon/personal-site-ng',
      status: 'Completed',
      category: 'Web Application'
    },
    {
      id: 2,
      title: 'Windows STIG Hardening Tool',
      description: 'PowerShell automation script for applying DISA STIG (Security Technical Implementation Guide) configurations to Windows 10 systems using the PowerSTIG module for DoD compliance.',
      image: 'assets/images/project2.jpg',
      technologies: ['PowerShell', 'PowerSTIG', 'Windows 10', 'DISA STIG', 'DoD Standards'],
      features: [
        'Automated STIG configuration application',
        'Windows 10 workstation compliance',
        'PowerSTIG module integration',
        'Security checklist generation',
        'DoD cybersecurity standards enforcement'
      ],
      liveUrl: '',
      githubUrl: 'https://github.com/LegroJon/windows-stig-hardening',
      status: 'Completed',
      category: 'Security Tool'
    },
    {
      id: 3,
      title: 'Nessus Vulnerability Parser',
      description: 'Professional Python tool for parsing Nessus XML vulnerability scan files and exporting data to multiple formats (JSON, CSV, Excel). Features filtering, host analysis, and comprehensive reporting capabilities.',
      image: 'assets/images/project3.jpg',
      technologies: ['Python', 'XML Parsing', 'Pandas', 'CSV', 'JSON', 'Excel Export'],
      features: [
        'Parse Nessus XML (.nessus) files',
        'Export to JSON, CSV, and Excel formats',
        'Filter by severity level and host',
        'Generate host summary reports',
        'Command-line interface for automation',
        'Exclude informational findings option'
      ],
      liveUrl: '',
      githubUrl: 'https://github.com/LegroJon/nessus-parser',
      status: 'Completed',
      category: 'Security Tool'
    },
    {
      id: 4,
      title: 'Data Analyzer & Text Parser',
      description: 'Python-based data analysis tool for extracting, processing, and analyzing structured data from text files using regex patterns. Specializes in parsing tasks and generating CSV reports.',
      image: 'assets/images/project4.jpg',
      technologies: ['Python', 'Regex', 'CSV Processing', 'Data Analysis', 'Text Parsing'],
      features: [
        'Custom regex pattern matching for data extraction',
        'Text file parsing with multiple pattern types',
        'Duplicate removal and data cleaning',
        'CSV export functionality',
        'Interactive command-line interface',
        'Professional data handling and visualization'
      ],
      liveUrl: '',
      githubUrl: 'https://github.com/LegroJon/data_analyzer',
      status: 'Completed',
      category: 'Data Tool'
    }
  ];

  categories = ['All', 'Web Application', 'Security Tool', 'Data Tool'];
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
