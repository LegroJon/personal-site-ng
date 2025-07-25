import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  
  experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead development of enterprise web applications using Angular, Node.js, and cloud technologies. Mentor junior developers and collaborate with cross-functional teams.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led team of 5 developers on major product redesign',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['Angular', 'Node.js', 'AWS', 'Docker', 'MongoDB']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      period: '2021 - 2022',
      description: 'Developed responsive web applications and interactive user interfaces for various clients in different industries.',
      achievements: [
        'Built 15+ responsive websites with 98% client satisfaction',
        'Reduced page load times by 50% through optimization',
        'Collaborated with design team to improve UX/UI standards'
      ],
      technologies: ['React', 'Vue.js', 'JavaScript', 'SASS', 'WordPress']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      period: '2020 - 2021',
      description: 'Assisted in developing web applications and learned modern development practices in an agile environment.',
      achievements: [
        'Contributed to 3 major product releases',
        'Implemented automated testing increasing code coverage by 30%',
        'Participated in code reviews and team knowledge sharing'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'Git']
    }
  ];

  education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'University of Technology',
      period: '2018 - 2020',
      description: 'Specialized in software engineering and web technologies. Graduated with honors.',
      achievements: [
        'GPA: 3.8/4.0',
        'Research in web performance optimization',
        'Teaching assistant for web development courses'
      ]
    },
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'State University',
      period: '2014 - 2018',
      description: 'Foundation in computer science, programming, and system design.',
      achievements: [
        'Dean\'s List for 6 semesters',
        'President of Computer Science Club',
        'Organized tech workshops and coding competitions'
      ]
    }
  ];

  certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: 'fab fa-aws'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      icon: 'fab fa-google'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'CNCF',
      date: '2022',
      icon: 'fas fa-certificate'
    },
    {
      name: 'Angular Certified Developer',
      issuer: 'Angular',
      date: '2021',
      icon: 'fab fa-angular'
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
