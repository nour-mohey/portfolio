// ──────────────────────────────────────────────────────────────
// All editable content for the portfolio lives in this file.
// Swap text, links, and numbers here — no need to touch components.
// ──────────────────────────────────────────────────────────────

import { Link } from "lucide-react";

export const profile = {
  name: "Nour Mohey",
  title: "Software Engineer",
  tagline: "Aspiring Software Engineer focused on Full-Stack Development, Problem Solving, and Continuous Learning",
  location: "Cairo, Egypt",
  email: "nourmohey81@gmail.com",
  phone: "+20 1011043681",
  cvUrl: "CV/Nour_Mohey Mostafa.pdf",
  social: {
    github: "https://github.com/nour-mohey",
    linkedin: "https://www.linkedin.com/in/nour-mohey-9a7362312/ ",
    email: "nourmohey81@gmail.com",
  },
};

export const about = {
  bio: [
    "I'm Senior Computer Science student at Misr International University (MIU), specializing in Software Development, with a strong passion for building innovative and user-centered software solutions. Throughout my academic journey, I have developed a solid foundation in programming, software engineering, and problem-solving through both coursework and hands-on projects.",
    "My technical background includes experience with Java, Python, C++, SQL, and PHP, along with modern web technologies such as HTML, CSS, JavaScript, React, Node.js, Laravel, Spring Boot, and .NET. I have also worked with databases including MySQL and MongoDB and use tools such as Git and VS Code in my development workflow.",
    "During my studies, I have gained knowledge in Data Structures, Algorithms, Object-Oriented Programming, Web Development, Software Engineering, Artificial Intelligence, Human-Computer Interaction, Computer Networks, Business Intelligence, System Analysis and Design, Software Project Management, and Software Testing. I have further strengthened my understanding of software quality through the ISTQB Foundation Level certification",
    "I enjoy transforming ideas into practical applications and have worked on several projects, including a Recipe Website, a Real Estate Management Platform, a Task Management System, a Clothes Management System, and a Personal Portfolio Website. These projects allowed me to apply concepts such as full-stack development, MVC architecture, authentication and authorization, database design, responsive user interfaces, software documentation, and collaborative development practices.",
    "Beyond technical skills, I value teamwork, communication, adaptability, and continuous learning. I actively seek opportunities to expand my knowledge, tackle new challenges, and contribute to meaningful projects that create real-world impact. My goal is to grow as a software engineer while developing solutions that are efficient, scalable, and user-focused."
  ],

  Education: {
    degree: "B.Sc. in Computer Science",
    school: "MIU, Faculty of Computer Science",
    majoredin: " Software Engineering ",
    period: "2023 — 2027",

  },

  Extracircullaractivities: [
    "participate ECPC competetion",
    "ACPC joined as a media member",
    "MSPTechMIU joined a software developer member",

  ],
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
    problem: [
      "Managing tasks across individuals and teams can become challenging when information is scattered across different platforms.",
      "Users often struggle to track task priorities, deadlines, and progress, leading to missed deadlines and reduced productivity.",
      "Existing solutions may also be overly complex for small teams or personal use."
    ],
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
    title: "El-Kayan — Real estate website",
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
    id: "habit-tracker",
    title: "Habit Tracker",
    github: "https://github.com/YoussefDiaa19/Habit-Flow.git",
    livedemo: "habitsfloww.vercel.app/",
    summary:
      "A productivity-focused habit tracking application designed to help users build positive routines, monitor progress, and achieve personal goals through an intuitive and engaging user experience.",

    tags: [
      "React",
      "JavaScript",
      "Project Management",
      "UI/UX",
      "Agile"
    ],

    problem: [
      "Many people struggle to maintain consistency when developing new habits and tracking personal goals.",
      "Traditional habit-tracking methods often lack visualization and motivation mechanisms.",
      "Users need a simple and engaging platform that makes progress tracking easier and more rewarding."
    ],

    architecture:
      "Developed as a React-based single-page application (SPA) with a component-based architecture, enabling reusable UI components, efficient state management, and a responsive user experience.",

    solution:
      "Provides users with an organized platform to create habits, monitor daily progress, track streaks, and visualize achievements through an intuitive and interactive interface.",

    features: [
      "Habit creation and management",
      "Daily progress tracking",
      "Habit streak monitoring",
      "Goal setting and achievement tracking",
      "Interactive dashboard",
      "Progress visualization",
      "Responsive user interface",
      "Component-based React architecture",
      "User-friendly experience",
      "Personal productivity enhancement"
    ]
  },
  {
    id: "rental-equipment",
    title: "Aجarly -Rental Equipment System",

    summary:
      "A web-based equipment rental management system designed to streamline equipment reservations, inventory tracking, maintenance scheduling, and rental operations for customers and administrators.",

    tags: [
      "System Analysis",
      "UML",
      "Requirements Engineering",
      "Use Cases",
      "Project Documentation",
      "prototype figma",
      "waterfall"
    ],

    problem: [
      "Equipment rental businesses often rely on manual processes that make tracking equipment availability and reservations difficult.",
      "Customers may face delays when checking equipment availability or making reservations.",
      "Managing maintenance schedules, rental history, and overdue returns can become inefficient as inventory grows."
    ],

    architecture:
      "Designed using a layered business information system architecture consisting of presentation, business logic, and data management layers. The system was modeled using UML diagrams including use cases, activity diagrams,,gantt chart, class diagrams, and ER diagrams.",

    solution:
      "Provides a centralized platform for managing rental equipment inventory, reservations, customer information, maintenance records, and return processing. The system improves operational efficiency, minimizes scheduling conflicts, and enhances customer service.",

    features: [
      "Equipment inventory management",
      "Equipment availability tracking",
      "Online reservation and booking management",
      "Customer registration and account management",
      "Rental contract and transaction management",
      "Equipment return processing",
      "Overdue rental monitoring and penalty calculation",
      "Maintenance scheduling and tracking",
      "Administrative dashboard and reporting",
      "Role-based access control"
    ]
  },
  {
    id: "IRecipe",
    title: "IRecipe — Recipe website",
    summary:
      "A full-stack recipe management platform that allows users to discover, search, categorize, and share recipes through an interactive and responsive web interface.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "MongoDB", "Node.js", "Express.js"],
    github: "https://github.com/fatmagamal5/IRecipe.git",
    architecture:
      "Built using a client-server architecture with a responsive frontend developed using HTML, CSS, JavaScript, and Bootstrap, a Node.js and Express.js backend handling application logic, and MongoDB for storing recipes, categories, and user data.",
    features: [
      "Browse and view recipes with detailed information",
      "Advanced recipe search functionality",
      "Category-based recipe filtering",
      "User recipe creation and management",
      "Responsive design for desktop and mobile devices",
      "Dynamic content rendering from the database",
      "Recipe management and database integration",
      "Fast and efficient data retrieval",
      "Clean and organized recipe categorization",
      "Interactive and user-friendly interface"
    ]
  },

  {
    id: "machine learning",
    title: "Chronic kidney disease- prediction ",
    tags: ["python", "Numpy", "Metplotip", "pandas"],
    github: "https://github.com/nour-mohey/chronic-kidney-diseases.git",
    summary:
      "A machine learning healthcare application that predicts Chronic Kidney Disease using patient medical data through data preprocessing, feature engineering, and predictive modeling techniques.",
    architecture: "A machine learning model for predicting chronic kidney disease using various medical features and patient data, demonstrating data preprocessing, model training, and performance evaluation techniques.",
    features: [
      "Data preprocessing and cleaning",
      "Handling missing values and outliers",
      "Feature selection and analysis",
      "Model training and evaluation",
      "Disease risk prediction based on patient data",
      "Performance comparison between multiple ML algorithms",
      "Accuracy, precision, recall, and F1-score evaluation",
      "Data visualization and insights generation",
    ]
  },

  {
    id: "Tree",
    title: "Splay-Tree Implementation",
    summary: "project focused on implementing a self-adjusting Splay Tree to optimize data access operations. The project demonstrates advanced tree manipulation techniques and highlights how frequently accessed elements can be moved closer to the root to improve overall performance.",
    tags: ["C++", "visualizor", "graphiz"],
    github: "https://github.com/nour-mohey/Splay-Tree.git",
    architecture: "Built using an object-oriented architecture where tree nodes and tree operations are encapsulated into separate classes, enabling efficient implementation of splaying, rotations, insertion, deletion, and search algorithms.",
    features: [
      "Insert new nodes into the tree",
      "Delete existing nodes",
      "Search for specific elements",
      "Automatic splaying after access operations",
      "Zig, Zig-Zig, and Zig-Zag rotations",
      "Self-adjusting tree structure",
      "Efficient management of frequently accessed data",
      "Visualization of tree operations and structure",
      "Performance analysis of tree operations"
    ],
    algorithmsconcepts: [
      "Splay Tree Data Structure",
      "Binary Search Tree Operations",
      "Tree Rotations",
      "Amortized Analysis",
      "Object-Oriented Programming",
      "Recursion and Tree Traversal Algorithms"
    ]
  },



  {
    id: "algorithms",
    title: "Ribbon cutting",

    summary:
      "Implemented divide-and-conquer algorithms and analyzed their time complexity using recurrence relations and the Master Theorem.",
    github: "https://github.com/nour-mohey/Ribbon-Cutting.git",
    tags: [
      "C++",
      "Algorithms",
      "Dynamic Programming",
    ],

    architecture:
      "Built using a divide-and-conquer approach to achieve logarithmic time complexity for computationally intensive operations.",

    features: [
      "Fast Exponentiation implementation",
      "Peak Element Finding algorithm",
      "O(log n) time complexity",
      "Recursive problem decomposition",
      "Complexity analysis using Master Theorem",
      "Algorithm documentation using LaTeX"
    ]
  },

  {
    id: "network",
    title: "Enterprise Network Infrastructure",
    summary:
      "Designed and configured a scalable enterprise network supporting secure communication, routing, and automated IP management across multiple departments.",

    tags: [
      "Cisco Packet Tracer",
      "VLAN",
      "OSPFv2",
      "EIGRP",
      "DHCP",
      "NAT",
      "VPN"
    ],

    architecture:
      "Designed using a hierarchical enterprise network architecture with segmented VLANs, dynamic routing protocols, DHCP services, NAT translation, and VPN connectivity for secure communication.",

    features: [
      "VLAN segmentation for network isolation",
      "OSPFv2 dynamic routing configuration",
      "EIGRP route propagation",
      "DHCP automated IP assignment",
      "NAT implementation for internet access",
      "VPN secure remote connectivity",
      "Network topology documentation",
      "Connectivity testing and troubleshooting"
    ]
  },

  {
    id: "Clothes",
    title: "Clothes management system",
    summary: "A clothes management system for managing clothes.",
    tags: ["java", "javaFX"],
    architecture:
      "A desktop-based Clothes Management System developed to streamline inventory management, clothing categorization, and sales tracking. The project applies Object-Oriented Programming principles to create a scalable and maintainable solution for managing clothing items and improving inventory organization.",
    features: [
      "Add, update, and remove clothing items",
      "Organize products into categories",
      "Inventory tracking and stock management",
      "Sales recording and monitoring",
      "Search and filter clothing items",
      "User-friendly desktop interface",
      "Data validation and error handling",
      "Modular and scalable OOP-based design",
      "Efficient inventory organization and management",
      "Improved workflow for product tracking",
    ],
    OOPconceptsapplied: [
      "Encapsulation for secure data management",
      "Inheritance to extend and reuse functionality",
      "Polymorphism for flexible object behavior",
      "Abstraction to simplify system complexity",
      "Class-based design for maintainable code structure"
    ]
  },

  {
    id: "virtual-drawing",
    title: "Virtual Drawing Studio",

    summary:
      "An AI-powered virtual drawing application that enables users to create digital artwork using hand gestures instead of traditional input devices. The system combines computer vision, gesture recognition, and real-time canvas rendering to provide an intuitive touchless drawing experience.",

    tags: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "PyQt5",
      "Computer Vision",
      "Gesture Recognition",
      "NumPy"
    ],

    github: "https://github.com/RADWAQNSUA/HCI-project.git",

    problem: [
      "Traditional drawing applications depend on physical input devices such as a mouse, stylus, or touchscreen.",
      "Touchless interaction systems require accurate hand tracking and reliable gesture recognition to provide a natural user experience.",
      "Hand movement noise and unstable tracking can negatively affect drawing precision and usability."
    ],

    architecture:
      "Built using a modular computer vision architecture where MediaPipe performs real-time hand tracking and gesture detection, while OpenCV manages video processing, canvas rendering, and user interaction through live camera input.",
    solution:
      "Provides a touchless digital drawing environment where users can control drawing tools through hand gestures. The system applies gesture smoothing, adaptive thresholds, and real-time tracking techniques to improve accuracy and create a seamless drawing experience.",

    features: [
      "Real-time hand tracking using MediaPipe",
      "Gesture-based drawing and interaction",
      "Virtual canvas for digital sketching",
      "Brush and eraser tools",
      "Shape drawing support",
      "Undo and redo functionality",
      "Copy, cut, and paste operations",
      "Gesture calibration system",
      "Kalman-filter-based motion smoothing",
      "Adaptive gesture recognition thresholds",
      "Interactive PyQt5 desktop interface",
      "Performance optimization for real-time processing",
      "Canvas export and auto-save support",
      "Multi-hand detection and tracking"
    ]
  }


];



// ── Certifications ───────────────────────────────────────────────
export const certifications = [
  {
    name: "ISTQB fundmental level V4.0 course",
    provider: "MIU",
    date: "2026",
    skills: ["SDLC", "Requirements", "Testing"],
    Link: "../certificates/ISTQB.jpeg"
  },

  {
    name: "Building AI for developers course",
    provider: "ITI MASR Edition",
    date: "2026",
    skills: ["AI", "prompt engineering"],
    Link: "../certificates/ITI.jpeg"
  },
  {
    name: "Project management fundamentals course",
    provider: "IBM",
    date: "2026",
    skills: ["project management"],
    Link: "../certificates/IBM.jpeg"
  }

];

// ── Achievements ─────────────────────────────────────────────────
export const achievements = [
  {},

];

export const languages = [];
export const technologies = [];
