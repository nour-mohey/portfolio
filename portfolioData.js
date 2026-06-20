// ──────────────────────────────────────────────────────────────
// All editable content for the portfolio lives in this file.
// Swap text, links, and numbers here — no need to touch components.
// ──────────────────────────────────────────────────────────────

export const profile = {
  name: "Nour Mohey",
  title: "Software Engineer",
  tagline: "Aspiring Software Engineer focused on Full-Stack Development, Problem Solving, and Continuous Learning",
  location: "Cairo, Egypt",
  email: "nourmohey81@gmail.com",
  phone: "+20 1011043681",
  cvUrl: "/Nour Mohey Mostafa.pdf",
  social: {
    github: "https://github.com/nour-mohey",
    linkedin: "https://www.linkedin.com/in/nour-mohey-9a7362312/ ",
    email: "nourmohey81@gmail.com",
  },
};

export const about = {
  bio: [
    "I am a Computer Science student at Misr International University (MIU), specializing in Software Development, with a strong passion for building innovative and user-centered software solutions. Throughout my academic journey, I have developed a solid foundation in programming, software engineering, and problem-solving through both coursework and hands-on projects.",
    "My technical background includes experience with Java, Python, C++, C#, SQL, and PHP, along with modern web technologies such as HTML, CSS, JavaScript, React, Node.js, Laravel, Spring Boot, and .NET. I have also worked with databases including MySQL and MongoDB and use tools such as Git and VS Code in my development workflow.",
    "During my studies, I have gained knowledge in Data Structures, Algorithms, Object-Oriented Programming, Web Development, Software Engineering, Artificial Intelligence, Human-Computer Interaction, Computer Networks, Business Intelligence, System Analysis and Design, Software Project Management, and Software Testing. I have further strengthened my understanding of software quality through the ISTQB Foundation Level certification",
    "I enjoy transforming ideas into practical applications and have worked on several projects, including a Recipe Website, a Real Estate Management Platform, a Task Management System, a Clothes Management System, and a Personal Portfolio Website. These projects allowed me to apply concepts such as full-stack development, MVC architecture, authentication and authorization, database design, responsive user interfaces, software documentation, and collaborative development practices.",
    "Beyond technical skills, I value teamwork, communication, adaptability, and continuous learning. I actively seek opportunities to expand my knowledge, tackle new challenges, and contribute to meaningful projects that create real-world impact. My goal is to grow as a software engineer while developing solutions that are efficient, scalable, and user-focused."
  ],

  education: {
    degree: "B.Sc. in Computer Science",
    school: "MIU, Faculty of Computer Science",
    period: "2023 — 2027",
  },

};

// ── Skills (category → list of {name, level, percentage, icon}) ──────────────────
export const skillCategories = [
  {
    key: "languages",
    title: "Programming Languages",
    skills: [
      { name: "Java", level: "Advanced", percentage: 85, icon: "Java" },
      { name: "Python", level: "Intermediate", percentage: 75, icon: "Python" },
      { name: "JavaScript", level: "Advanced", percentage: 80, icon: "Javascript" },
      { name: "C++", level: "Intermediate", percentage: 70, icon: "Cplusplus" },
      { name: "C#", level: "Intermediate", percentage: 65, icon: "Csharp" },
      { name: "PHP", level: "Intermediate", percentage: 70, icon: "Php" },
      { name: "SQL", level: "Advanced", percentage: 80, icon: "Sql" }
    ]
  },
  {
    key: "frameworks",
    title: "Technologies & Frameworks",
    skills: [
      { name: "HTML", level: "Advanced", percentage: 90, icon: "Html" },
      { name: "CSS", level: "Advanced", percentage: 85, icon: "Css" },
      { name: "React", level: "Advanced", percentage: 80, icon: "React" },
      { name: "Node.js", level: "Intermediate", percentage: 75, icon: "Nodedotjs" },
      { name: "Laravel", level: "Intermediate", percentage: 70, icon: "Laravel" },
      { name: "Spring Boot", level: "Advanced", percentage: 80, icon: "Springboot" },
      { name: ".NET", level: "Intermediate", percentage: 65, icon: "Dotnet" },
      { name: "Bootstrap", level: "Advanced", percentage: 85, icon: "Bootstrap" },
      { name: "Jira", level: "Advanced", percentage: 95, icon: "Jira" }
    ]
  },
  {
    key: "databases",
    title: "Databases",
    skills: [
      { name: "MySQL", level: "Advanced", percentage: 80, icon: "Mysql" },
      { name: "MongoDB", level: "Intermediate", percentage: 70, icon: "Mongodb" }
    ]
  },
  {
    key: "tools",
    title: "Development Tools & IDEs",
    skills: [
      { name: "Git", level: "Advanced", percentage: 85, icon: "Git" },
      { name: "Docker", level: "Intermediate", percentage: 70, icon: "Docker" },
      { name: "Figma", level: "Intermediate", percentage: 65, icon: "Figma" },
      { name: "Visual Studio Code", level: "Advanced", percentage: 90, icon: "Visualstudiocode" },
      { name: "IntelliJ IDEA", level: "Advanced", percentage: 85, icon: "Intellijidea" },
      { name: "NetBeans", level: "Intermediate", percentage: 70, icon: "Apachenetbeans" }
    ]
  }
];

export const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Software Engineering",
  "Web Development",
  "Computer Networks",
  "Artificial Intelligence",
  "Human-Computer Interaction (HCI)",
  "System Analysis & Design",
  "Software Project Management",
  "Business Intelligence",
  "Principles of Software Engineering",

];

export const softSkills = [
  {
    title: "Problem Solving",
    description: "Analyzing complex challenges, debugging issues, and designing optimized algorithms.",
    icon: "problem"
  },
  {
    title: "Team Collaboration",
    description: "Working efficiently in cross-functional teams, peer reviews, and pair programming.",
    icon: "team"
  },
  {
    title: "Communication",
    description: "Articulating technical design concepts, writing clear documentation, and presenting solutions.",
    icon: "communication"
  },
  {
    title: "Adaptability",
    description: "Quickly learning new stacks, adjusting to project requirements, and adopting agile changes.",
    icon: "adaptability"
  },
  {
    title: "Time Management",
    description: "Prioritizing tasks, meeting sprint deadlines, and managing features end-to-end.",
    icon: "time"
  },
  {
    title: "Continuous Learning",
    description: "Keeping up with new frameworks, reading technical blogs, and pursuing certificates.",
    icon: "learning"
  }
];

// ── Projects ─────────────────────────────────────────────────────
export const projects = [
  {
    id: "taskflow",
    title: "TaskFlow — Task management system",
    summary:
      "A task-scheduling platform that lets teams queue, prioritize, and monitor background jobs across multiple workers in real time.",
    tags: ["java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com/Ahmedlasheenn/TaskFlow.git",
    problem: "Managing tasks across individuals and teams can become challenging when information is scattered across different platforms. Users often struggle to track task priorities, deadlines, and progress, leading to missed deadlines and reduced productivity. Existing solutions may also be overly complex for small teams or personal use.",
    architecture: "Built using a client-server architecture with React for the frontend, Spring Boot for RESTful APIs and business logic, and a database layer for secure task and user data management.",
    patterns: "Strategy pattern , Observer pattern , Factory pattern.",
    solution: "enables users to create, organize, prioritize, and track tasks efficiently through a modern and intuitive interface. The system provides secure multi-user access, real-time task updates, and a centralized dashboard that improves visibility and collaboration.",
    features: [
      "User authentication and secure access",
      "Create, edit, delete, and manage tasks",
      "Task prioritization and status tracking",
      "Integrated calendar for scheduling tasks and tracking deadlines",
      "Progress monitoring through an interactive dashboard",
      "Responsive and user-friendly interface",
      "Multi-user collaboration support",
      "Real-time frontend-backend integration",
      "Efficient task organization and workflow management"
    ]
  },
  {
    id: "El-Kayan",
    title: "Kayan — Real estate website",
    summary:
      "A real estate platform for buying, selling, and renting properties.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "php", "Larvel", "MySQL", "Docker"],
    github: "https://github.com/pola-raouf/ecommerce-real-estate.git",
    architecture:
      "Developed using an MVC architecture with Laravel and PHP for backend services, MySQL for data persistence, and a service-oriented approach to separate business logic, ensuring scalability, maintainability, and secure data management",
    features: [
      "Secure user authentication and authorization",
      "Role-based access control for different user types",
      "Property listing and management",
      "Automated email notifications",
      "Interactive dashboards and analytics",
      "Data validation and error handling",
      "Activity logging and monitoring",
      "Responsive and user-friendly interface",
      "Database-driven property search and management",
      "UML-based system design and documentation",
    ],
  },
  {
    id: "IRecipe",
    title: "IRecipe — recipe website",
    summary:
      "A recipe website for sharing recipes.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "MongoDB", "Node.js", "Express.js"],
    github: "https://github.com/nour-mohey/IRecipe-.git",
    architecture:
      "Layered architecture: Spring Boot REST API with a service layer over a MySQL database, Firebase Cloud Messaging for push notifications, React SPA frontend.",
    patterns: "DTO pattern for API boundaries, Singleton for the notification dispatcher.",
    responsibilities: [
      "Built the event CRUD API and RSVP system",
      "Integrated Firebase push notifications by interest tag",
      "Implemented the club-admin dashboard",
    ],
    features: [
      "Interest-based event recommendations",
      "RSVP tracking with capacity limits",
      "Admin dashboard for club organizers",
    ],
  },
];



// ── Certifications ───────────────────────────────────────────────
export const certifications = [
  {
    name: "Software Engineering Fundamentals",
    provider: "Coursera — University of Alberta",
    date: "2023",
    link: "https://coursera.org",
    skills: ["SDLC", "Requirements", "Testing"],
  },
  {
    name: "Spring Boot Development",
    provider: "Udemy",
    date: "2024",
    link: "https://udemy.com",
    skills: ["Spring Boot", "JPA", "REST APIs"],
  },
  {
    name: "React — The Complete Guide",
    provider: "Udemy",
    date: "2023",
    link: "https://udemy.com",
    skills: ["React", "Hooks", "State Management"],
  },
  {
    name: "Project Management Basics",
    provider: "Google (Coursera)",
    date: "2024",
    link: "https://coursera.org",
    skills: ["Agile", "Scrum", "Planning"],
  },
  {
    name: "Database Design & Modeling",
    provider: "Coursera",
    date: "2023",
    link: "https://coursera.org",
    skills: ["ER Modeling", "Normalization", "SQL"],
  },
  {
    name: "System Analysis and Design",
    provider: "Cairo University (coursework)",
    date: "2023",
    link: "#",
    skills: ["UML", "Architecture", "Requirements"],
  },
  {
    name: "Business Intelligence Fundamentals",
    provider: "Coursera — IBM",
    date: "2024",
    link: "https://coursera.org",
    skills: ["Data Analysis", "Dashboards", "SQL"],
  },
];

// ── Achievements ─────────────────────────────────────────────────
export const achievements = [
  {},

];

export const languages = [];
export const technologies = [];
