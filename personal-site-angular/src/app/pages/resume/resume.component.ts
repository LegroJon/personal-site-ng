import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  
  experiences = [
    {
      title: 'Software Design Engineer I',
      company: 'Cole Engineering Services, Inc.',
      period: 'May 2025 - Present',
      description: 'Perform vulnerability assessments and security compliance checks while managing enterprise software deployment and collaborating with cybersecurity teams.',
      achievements: [
        'Conduct vulnerability assessments using Nessus and STIGViewer ensuring DoD cybersecurity standards',
        'Deploy and manage software packages across enterprise using PDQ Deploy and PDQ Inventory',
        'Collaborate with software and cybersecurity teams to integrate secure coding practices'
      ],
      technologies: ['Nessus', 'STIGViewer', 'PDQ Deploy', 'PDQ Inventory', 'DoD Standards']
    },
    {
      title: 'Systems Engineer Intern',
      company: 'Cole Engineering Services, Inc.',
      period: 'May 2024 - May 2025',
      description: 'Assisted in design, implementation, and testing of system architecture for Synthetic Training Environment (STE) Live Training Environment (LTE).',
      achievements: [
        'Designed and implemented system architecture for military training environments',
        'Managed project tasks using Jira and maintained documentation in Confluence',
        'Conducted system performance evaluations and generated reliability reports'
      ],
      technologies: ['Jira', 'Confluence', 'System Architecture', 'STE/LTE', 'Performance Testing']
    },
    {
      title: 'Freelance Web and IT Specialist',
      company: 'Christian Tutors of America',
      period: 'Nov 2024 - Jan 2025',
      description: 'Recovered website access and facilitated complete hosting migration while optimizing site functionality.',
      achievements: [
        'Successfully recovered administrative credentials and restored website functionality',
        'Facilitated website migration to new hosting with full administrative control transfer',
        'Optimized website content and improved user experience'
      ],
      technologies: ['cPanel', 'phpMyAdmin', 'Web Migration', 'Database Management', 'Content Optimization']
    },
    {
      title: 'Medical Technician',
      company: 'United States Air Force',
      period: 'Nov 2009 - Aug 2015',
      description: 'Provided critical care in Neuro ICU, supported surgical teams, and maintained mission-critical medical equipment during deployment.',
      achievements: [
        'Provided critical care in Neuro ICU and supported surgical teams as Wound & Ostomy Technician',
        'Ensured HIPAA compliance across all clinical operations',
        'Maintained mission-critical medical equipment during deployment to Afghanistan'
      ],
      technologies: ['Medical Equipment', 'HIPAA Compliance', 'Critical Care', 'Military Operations']
    }
  ];

  education = [
    {
      degree: 'Bachelor of Science in Software Development',
      school: 'Southern New Hampshire University',
      period: '2020 - 2023',
      description: 'Focused on software engineering principles, cybersecurity, and modern development practices.',
      achievements: [
        'Graduated with expertise in multiple programming languages',
        'Completed cybersecurity specialization coursework',
        'Developed full-stack applications as capstone projects'
      ]
    },
    {
      degree: 'Cyber Security Certificate',
      school: 'Professional Development',
      period: '2023 - 2024',
      description: 'Advanced cybersecurity training focused on vulnerability assessment and DoD compliance.',
      achievements: [
        'Specialized in DoD cybersecurity standards and STIG implementation',
        'Trained in advanced penetration testing methodologies',
        'Obtained security clearance eligibility'
      ]
    }
  ];

  certifications = [
    {
      name: 'Security Clearance (Secret)',
      issuer: 'Department of Defense',
      date: '2024',
      icon: 'fas fa-shield-alt'
    },
    {
      name: 'DoD 8570 IAT Level II Eligible',
      issuer: 'Department of Defense',
      date: '2024',
      icon: 'fas fa-certificate'
    },
    {
      name: 'Vulnerability Assessment Certified',
      issuer: 'Professional Training',
      date: '2024',
      icon: 'fas fa-search'
    },
    {
      name: 'STIG Implementation Specialist',
      issuer: 'DoD Standards',
      date: '2024',
      icon: 'fas fa-cog'
    }
  ];

  skills = [
    {
      category: 'Frontend',
      items: ['Angular', 'React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'SASS/SCSS', 'Bootstrap']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'Python', 'Django', 'PHP', 'Laravel', 'RESTful APIs', 'GraphQL']
    },
    {
      category: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'DynamoDB']
    },
    {
      category: 'DevOps & Tools',
      items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Jenkins', 'Nginx', 'Linux']
    }
  ];

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'assets/docs/resume.pdf';
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  }
}
