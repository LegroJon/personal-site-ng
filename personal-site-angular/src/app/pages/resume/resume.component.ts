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
      description: 'Conducts vulnerability scans and compliance audits using Nessus and STIGViewer to ensure alignment with Department of Defense (DoD) cybersecurity standards.',
      achievements: [
        'Conducts vulnerability scans and compliance audits using Nessus and STIGViewer ensuring DoD cybersecurity standards',
        'Manages enterprise-wide software updates using PDQ Deploy and monitors system configurations with PDQ Inventory',
        'Collaborates with software and cybersecurity teams to implement secure development practices and validate software patches'
      ],
      technologies: ['Nessus', 'STIGViewer', 'PDQ Deploy', 'PDQ Inventory', 'DoD Standards']
    },
    {
      title: 'Systems Engineer Intern',
      company: 'Cole Engineering Services, Inc.',
      period: 'May 2024 - May 2025',
      description: 'Supported the development and testing of the system architecture for the Synthetic Training Environment (STE) Live Training Environment (LTE).',
      achievements: [
        'Supported the development and testing of system architecture for STE Live Training Environment',
        'Gathered and documented system requirements in coordination with stakeholders for mission-critical solutions',
        'Used Jira for task management and Confluence for maintaining technical documentation',
        'Conducted system performance evaluations and authored technical reports to drive reliability improvements'
      ],
      technologies: ['Jira', 'Confluence', 'System Architecture', 'STE/LTE', 'Performance Testing']
    },
    {
      title: 'Freelance Web & IT Specialist',
      company: 'Christian Tutors of America',
      period: 'Nov 2024 - Jan 2025',
      description: 'Recovered full access to client\'s website by conducting targeted social engineering and restored website backend functionality.',
      achievements: [
        'Recovered full access to client\'s website by conducting targeted social engineering',
        'Restored website backend functionality via cPanel, phpMyAdmin, and direct database recovery',
        'Migrated the website to a new host, giving full administrative control to the client',
        'Revised and optimized website content for improved performance and user experience'
      ],
      technologies: ['cPanel', 'phpMyAdmin', 'Web Migration', 'Database Management', 'Content Optimization']
    },
    {
      title: 'Medical Technician',
      company: 'United States Air Force',
      period: 'Nov 2009 - Aug 2015',
      description: 'Delivered critical care in the Neuro ICU, supported surgical procedures as a Wound & Ostomy Technician, and maintained patient privacy in compliance with HIPAA.',
      achievements: [
        'Delivered critical care in the Neuro ICU and supported surgical procedures as Wound & Ostomy Technician',
        'Operated and maintained mission-critical medical systems during deployment',
        'Coordinated patient transport and treatment logistics during deployment to Afghanistan',
        'Maintained HIPAA compliance across all clinical operations and adapted rapidly to field conditions'
      ],
      technologies: ['Medical Equipment', 'HIPAA Compliance', 'Critical Care', 'Military Operations']
    }
  ];

  education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Embry-Riddle Aeronautical University',
      period: 'Aug 2020 - May 2025',
      description: 'Comprehensive computer science education focused on software development, systems programming, and cybersecurity.',
      achievements: [
        'Graduated with expertise in multiple programming languages including C, Java, and Python',
        'Completed advanced coursework in cybersecurity and systems engineering',
        'Developed full-stack applications and system-level programming projects'
      ]
    },
    {
      degree: 'Bachelor of Arts in Russian, East European & Eurasian Studies',
      school: 'University of Kansas',
      period: 'Aug 2018 - May 2020',
      description: 'Interdisciplinary studies focusing on Russian language, culture, and regional geopolitics.',
      achievements: [
        'Developed advanced language skills and cultural understanding',
        'Studied regional politics and international relations',
        'Enhanced analytical and research capabilities'
      ]
    }
  ];

  certifications = [
    {
      name: 'Security Clearance (Secret)',
      issuer: 'Department of Defense',
      date: 'Active',
      icon: 'fas fa-shield-alt'
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: 'May 2025',
      icon: 'fas fa-certificate'
    }
  ];

  skills = [
    {
      category: 'Security & Compliance',
      items: ['Nessus', 'STIGViewer', 'PDQ Deploy', 'PDQ Inventory', 'DoD Standards', 'HIPAA Compliance']
    },
    {
      category: 'Programming Languages',
      items: ['C', 'Java', 'SQL', 'PHP', 'Python', 'PowerShell', 'Bash']
    },
    {
      category: 'Web & Admin Tools',
      items: ['cPanel', 'phpMyAdmin', 'GitHub', 'VS Code', 'VirtualBox', 'VMware']
    },
    {
      category: 'Collaboration & Documentation',
      items: ['Jira', 'Confluence', 'Microsoft Office', 'Technical Writing', 'Project Management']
    }
  ];

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'assets/docs/resume.pdf';
    link.download = 'Jonathan_Legro_Resume.pdf';
    link.click();
  }
}
