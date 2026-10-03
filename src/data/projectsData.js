export const projectsData = [
  {
    id: 'blood-donation-connect',
    number: '01',
    title: 'Blood Donation Connect',
    category: 'Full-Stack MERN',
    year: '2025',
    tagline: 'Centralized Blood Donation Management & Hospital Donor Dispatch System',
    description: 'A full-stack Blood Donation Management System built using the MERN stack to connect donors with recipients and hospitals through a centralized platform. Engineered complete RESTful CRUD APIs using MVC architecture, cloud MongoDB Atlas storage, and secured JWT authentication.',
    image: '/images/bloodconnect.jpg',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Tailwind CSS', 'Mongoose', 'REST APIs'],
    stats: [
      { label: 'Architecture', value: 'MVC Pattern' },
      { label: 'Security', value: 'JWT Auth' },
      { label: 'Database', value: 'MongoDB Atlas' }
    ],
    highlights: [
      'Built a centralized full-stack MERN application connecting blood donors with recipients during critical emergency windows.',
      'Developed robust RESTful APIs with complete CRUD operations for donor profiles, eligibility, and blood group requests.',
      'Designed scalable backend utilizing MVC architecture for enhanced modularity, security, and maintainability.',
      'Managed cloud database with MongoDB Atlas and Mongoose schemas, rigorously validating and testing endpoints via Thunder Client.'
    ],
    github: 'https://github.com/dikshaverma469/Blood-Donation-Connect-App',
    demo: 'https://github.com/dikshaverma469/Blood-Donation-Connect-App',
    repoName: 'dikshaverma469/Blood-Donation-Connect-App'
  },
  {
    id: 'demand-forecasting-research',
    number: '02',
    title: 'AI Demand Forecasting & Inventory Optimization',
    category: 'Research Project • ML + FastAPI',
    year: '2026',
    tagline: 'Under Dr. Jasdeep Kaur Dhanoa (Ex-HOD, ECE Dept., IGDTUW)',
    description: 'A cutting-edge machine learning research initiative predicting store-level product demand to optimize supply chain inventory. Ingests real US Government open datasets, benchmarks multi-model ensembles (XGBoost, LightGBM, CatBoost, Prophet), and integrates SHAP for explainable AI with a high-throughput FastAPI backend.',
    image: '/images/forecast.jpg',
    tags: ['Python 3.11', 'FastAPI', 'XGBoost', 'LightGBM', 'CatBoost', 'Prophet', 'TensorFlow', 'SHAP', 'Pandas'],
    stats: [
      { label: 'Research Guide', value: 'Dr. J.K. Dhanoa' },
      { label: 'Dataset', value: 'US Gov Data' },
      { label: 'Explainability', value: 'SHAP (XAI)' }
    ],
    highlights: [
      'Conducting research under Dr. Jasdeep Kaur Dhanoa (Ex-HOD, ECE Dept., IGDTUW) on predictive inventory optimization systems.',
      'Trained and benchmarked multiple machine learning models including XGBoost, LightGBM, CatBoost, and Prophet against historical seasonal trends.',
      'Integrated SHAP (SHapley Additive exPlanations) to interpret feature importance and understand individual model predictions.',
      'Engineered a scalable, asynchronous FastAPI backend microservice to deploy models for real-time inference.'
    ],
    github: 'https://github.com/dikshaverma469/demand-forecast-backend',
    demo: 'https://github.com/dikshaverma469/demand-forecast-backend',
    repoName: 'dikshaverma469/demand-forecast-backend'
  },
  {
    id: 'expense-tracker',
    number: '03',
    title: 'Expense Tracker & Financial Analytics',
    category: 'Full-Stack MERN App',
    year: '2024',
    tagline: 'Personal Finance & Real-Time Cash Flow Visualizer with JWT Security',
    description: 'A full-stack MERN financial tracking application designed for real-time balance calculations, automated income vs. expense categorization, and interactive monthly spending trends. Features token-based authentication and a responsive user dashboard.',
    image: '/images/expense_tracker.jpg',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Chart.js', 'CSS3', 'RESTful APIs'],
    stats: [
      { label: 'Balance Engine', value: 'Real-Time' },
      { label: 'User Security', value: 'JWT-Based' },
      { label: 'Visualization', value: 'Dynamic Charts' }
    ],
    highlights: [
      'Built a full-stack MERN application to track income, expenses, and savings with real-time balance computation and persistent storage.',
      'Implemented secure JWT user authentication and personalized dashboards with complete create, read, update, and categorize transactions.',
      'Integrated interactive charts to visualize monthly spending trends, anomalies, and budget progress.',
      'Engineered a fully responsive, mobile-first user interface for seamless multi-device financial management.'
    ],
    github: 'https://github.com/dikshaverma469/Expense-Tracker',
    demo: 'https://github.com/dikshaverma469/Expense-Tracker',
    repoName: 'dikshaverma469/Expense-Tracker'
  },
  {
    id: 'open-source-contributions',
    number: '04',
    title: 'Open Source & Developer Ecosystem',
    category: 'Open Source (GSSoC / OSCG)',
    year: '2026',
    tagline: 'Contributor to GirlScript Summer of Code (GSSoC) & OSCG 2026',
    description: 'Active open-source contributor contributing modular components, bug fixes, and feature enhancements across widely used React, JavaScript, and Web repositories in GSSoC 2026 and OSCG 2026. Backed by 350+ solved DSA challenges across competitive coding platforms.',
    image: '/images/opensource.jpg',
    tags: ['GSSoC 2026', 'OSCG 2026', 'React.js', 'JavaScript', 'Git', 'GitHub', 'DSA (350+ Solved)', 'CodeChef (2★)'],
    stats: [
      { label: 'Programs', value: 'GSSoC & OSCG' },
      { label: 'DSA Solved', value: '350+ Problems' },
      { label: 'CodeChef', value: '2-Star (★)' }
    ],
    highlights: [
      'Selected and actively contributed to GirlScript Summer of Code 2026 and Open Source Community Guild (OSCG 2026).',
      'Collaborated with global open-source maintainers, refining modular UI components in React and optimizing web performance.',
      'Solved 350+ Data Structures & Algorithms problems across LeetCode, GeeksforGeeks, and HackerRank.',
      'Consistent competitive programming performance achieving a 2-Star Rating on CodeChef.'
    ],
    github: 'https://github.com/dikshaverma469',
    demo: 'https://codolio.com/profile/dikshaverma_469',
    repoName: 'dikshaverma469'
  }
];
