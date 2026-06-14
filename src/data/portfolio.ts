export const personalInfo = {
  name: 'Ketaki Bharati',
  title: 'Software Development Engineer',
  tagline: 'High-performance FinTech systems, distributed architectures, and scalable backend solutions',
  email: 'ketakisbharati@gmail.com',
  bio: 'Software Development Engineer focused on high-performance FinTech systems, distributed architectures, and Kafka-based data pipelines. Proven track record building payment processing systems, database failover solutions, and real-time data pipelines with measurable business impact.',
  phone: '+91 8888574391',
  location: 'Pune, India',
  socials: {
    github: 'https://github.com/ketakibharati8',
    linkedin: 'https://linkedin.com/in/ketakibharati',
    gfg: '',
    leetcode: '',
    email: 'mailto:ketakisbharati@gmail.com',
  },
  resumePdfUrl: '',
};

export const experience = [
  {
    id: 1,
    company: 'PayU Payments',
    position: 'Software Development Engineer - I',
    duration: 'Jan 2026 - Present',
    description: 'Building high-performance payment processing systems handling millions of transactions daily. Specializing in Kafka pipelines, 3DS authentication, and card management microservices.',
    highlights: [
      'Re-architected Kafka consumption layer for 32+ topics using PayU\'s kafka-framework, implementing 3-tier exception classification (Ignorable/Permanent/Transient) with DLQ pipeline for Kafka Topic Migration.',
      'Implemented Grid-based 3DS authentication (OTP alternative) for ICICI - delivered GridAuthProcessor, two-tier eligibility, challenge-UI, admin configurations and reporting across 5 microservices.',
      'Built end-to-end GCOT request/response handling, including status and card-state mapping and error paths for invalid PAN, missing cards.',
      'Built SMS ShortCode flow so cardholders can unblock a soft-blocked card by linking mobile number to the bank and triggering unblock through customer-service API.',
      'Led NPCI SecureNxt (3DS 2.0) backend delivery and implemented BIN-level issuer validations - reduced issuer onboarding time by ~40%.',
    ],
    skills: ['Java', 'Spring Boot', 'Kafka', 'Microservices', 'REST APIs', 'Vert.x'],
  },
  {
    id: 2,
    company: 'PayU Payments',
    position: 'Engineering Intern',
    duration: 'June 2025 - Dec 2025',
    description: 'Built and maintained critical payment infrastructure components including database failover systems, CSV bulk upload processing, and admin portal reporting.',
    highlights: [
      'Built dynamic database failover for the ACS datastore layer - implemented configurable primary vs secondary database switching for ACS, driving domain DB sync/failover monitoring from global config.',
      'Implemented CSV bulk upload for ICICI - issuer-facing file uploads for card and customer data, including per bank column layouts from config with row by row validation.',
      'Delivered EMI transaction report, I-view and SI-hub notifications reports on admin portal.',
      'Strengthened validation logic - increased code coverage by ~25% and decreased regression incidents.',
    ],
    skills: ['Java', 'Spring Boot', 'MySQL', 'Jenkins', 'Git', 'REST APIs'],
  },
];

export const education = [
  {
    id: 1,
    institution: 'Vishwakarma Institute of Information Technology (VIIT)',
    field: 'B. Tech. Electronics and Telecommunications Engineering',
    year: '2025',
    details: 'CGPA: 8.93. Focused on backend systems, data structures, algorithms, and electronics engineering.',
  },
];

export const certifications = [
  'Data Structures and Algorithms using Java by Infosys Springboard',
  'Becoming Full Stack Developer by LinkedIn',
  'Oracle SQL Databases',
];

export const skills = [
  { name: 'Java', category: 'Language', proficiency: 90 },
  { name: 'JavaScript', category: 'Language', proficiency: 80 },

  { name: 'Spring Boot', category: 'Backend', proficiency: 90 },
  { name: 'Vert.x', category: 'Backend', proficiency: 80 },
  { name: 'ReactJS', category: 'Frontend', proficiency: 75 },

  { name: 'Kafka', category: 'Streaming', proficiency: 85 },
  { name: 'MySQL', category: 'Database', proficiency: 85 },
  { name: 'SQL', category: 'Database', proficiency: 85 },
  { name: 'MongoDB', category: 'Database', proficiency: 75 },

  { name: 'Git', category: 'Tools', proficiency: 90 },
  { name: 'GitHub', category: 'Tools', proficiency: 90 },
  { name: 'Jenkins', category: 'DevOps', proficiency: 80 },
  { name: 'Postman', category: 'Tools', proficiency: 85 },

  { name: 'JUnit', category: 'Testing', proficiency: 85 },
  { name: 'Mockito', category: 'Testing', proficiency: 80 },

  { name: 'Microservices', category: 'Architecture', proficiency: 85 },
  { name: 'REST APIs', category: 'Architecture', proficiency: 90 },
  { name: 'Data Structures', category: 'Concepts', proficiency: 85 },
  { name: 'OOP', category: 'Concepts', proficiency: 90 },
  { name: 'Multithreading', category: 'Concepts', proficiency: 80 },
  { name: 'Concurrency', category: 'Concepts', proficiency: 80 },
  { name: 'CI/CD', category: 'DevOps', proficiency: 80 },
];

export const projects = [
  {
    id: 1,
    title: 'Map My Ganapati',
    tagline: 'City-scale festival navigation app managing 5,000+ concurrent users',
    description: `Map My Ganapati is a Next.js-based web application that enables devotees to discover, navigate to, and share information about 150+ Ganpati pandals with precise locations, aarti timings, and photos. Achieved 99.9% uptime and managed 5,000+ concurrent users during peak festival hours.`,
    technologies: ['Next.js', 'Firebase', 'Leaflet.js', 'OpenStreetMap', 'AWS CloudFormation', 'Vercel'],
    category: 'Full Stack',
    tags: ['geolocation', 'real-time', 'scalability', 'cost-optimized'],
    liveUrl: 'https://mapmyganpati.vercel.app/',
    repoUrl: '',
    imageUrl: '/projects/map-my-ganapati.png',
    highlights: [
      'Managed 5,000+ concurrent users during peak festival hours with 99.9% uptime',
      'Configured IaC using AWS CloudFormation for scalable, reliable deployment',
      'Deployed frontend on Vercel and backend on Firebase, achieving 100% cost savings vs. Google Maps API',
      'Implemented precise geolocation mapping and real-time aarti timing updates',
    ],
    metrics: {
      uptime: '99.9%',
      concurrentUsers: '5,000+',
      costReduction: '100%',
    },
    architecture: {
      frontend: 'Next.js with Tailwind CSS for responsive mobile-first design',
      mapping: 'Leaflet.js with OpenStreetMap for lightweight geolocation',
      backend: 'Firebase for serverless real-time database and hosting',
      deployment: 'Infrastructure as Code via AWS CloudFormation, Vercel CDN',
    },
  },
  {
    id: 2,
    title: 'AirStack',
    tagline: 'Airline reservation system with Java and in-memory data structures',
    description: `AirStack is a Java-based Airline Reservation System implementing OOP principles and in-memory data structures for efficient flight search, seat allocation, and booking management with thread-safe concurrency.`,
    technologies: ['Java', 'OOP', 'Multithreading', 'HashMap', 'Concurrency', 'JUnit'],
    category: 'Backend',
    tags: ['concurrency', 'performance', 'data-structures'],
    liveUrl: 'https://airstack-lzua.onrender.com/',
    repoUrl: 'https://github.com/ketakibharati8/airstack',
    imageUrl: '/projects/skylink.png',
    highlights: [
      'Engineered a Java-based Airline Reservation System implementing OOP principles and in-memory data structures for efficient flight search, seat allocation, and booking management.',
      'Designed safe seat booking using synchronized access and concurrent queues, eliminating race conditions and preventing double bookings across 100+ parallel transactions.',
      'Optimized data lookups through HashMap caching, achieving O(1) retrieval time and reducing average booking latency by 80% compared to naive list traversal.',
    ],
    metrics: {
      parallelTransactions: '100+',
      latencyReduction: '80%',
      lookupComplexity: 'O(1)',
    },
    architecture: {
      language: 'Java with OOP principles',
      concurrency: 'Synchronized blocks and concurrent queues for race-condition prevention',
      design: 'In-memory data structures, HashMap caching, layered architecture',
    },
  },
];

export const achievements = [
  'Re-architected Kafka consumption layer for 32+ topics with 3-tier exception classification and DLQ pipeline',
  'Grid-based 3DS authentication for ICICI - delivered across 5 microservices with two-tier eligibility',
  'Led NPCI SecureNxt (3DS 2.0) backend delivery, reducing issuer onboarding time by ~40%',
  'Built dynamic database failover for ACS datastore layer with configurable primary/secondary switching',
  'Increased code coverage by ~25% and decreased regression incidents through strengthened validation logic',
  'Built city-scale festival navigation app managing 5,000+ concurrent users with 99.9% uptime',
  'Achieved 100% cost savings vs. Google Maps API through Firebase and Vercel deployment',
  'Vice President, NSS VIIT: Built web app in 48 hours engaging 3,500+ users, increased blood donation count by 25%',
];

export const languages = ['English', 'Hindi', 'Marathi'];
