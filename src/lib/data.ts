export const YT_CHANNEL = "https://youtube.com/@skills021";

export type Course = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  free: boolean;
  price: number;
  rating: number;
  students: number;
  duration: string;
  level: string;
  gradient: string;
};

export const courses: Course[] = [
  {
    id: "dsa-java",
    title: "DSA with Java",
    description: "Master Data Structures & Algorithms with 200+ solved problems for placements.",
    category: "DSA",
    tags: ["DSA", "Java"],
    free: false,
    price: 1499,
    rating: 4.9,
    students: 4200,
    duration: "48h",
    level: "Intermediate",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "web-bootcamp",
    title: "Web Development Bootcamp",
    description: "HTML, CSS, JavaScript, React & Node.js — build real-world full stack projects.",
    category: "Web Dev",
    tags: ["Web Dev"],
    free: false,
    price: 1999,
    rating: 4.8,
    students: 5600,
    duration: "60h",
    level: "Beginner",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "django-fullstack",
    title: "Django Full Stack",
    description: "Build scalable backends and full stack apps with Python and Django.",
    category: "Django",
    tags: ["Django"],
    free: false,
    price: 1799,
    rating: 4.7,
    students: 2100,
    duration: "40h",
    level: "Intermediate",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "devops-fundamentals",
    title: "DevOps Fundamentals",
    description: "Docker, Kubernetes, CI/CD pipelines and cloud deployment from scratch.",
    category: "DevOps",
    tags: ["DevOps"],
    free: false,
    price: 2299,
    rating: 4.8,
    students: 1800,
    duration: "35h",
    level: "Advanced",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "class10-cs",
    title: "Class 10 Computer Science",
    description: "Complete CBSE Class 10 Computer Science syllabus explained in Hindi.",
    category: "Class 10",
    tags: ["Class 10"],
    free: true,
    price: 0,
    rating: 4.9,
    students: 8900,
    duration: "20h",
    level: "Beginner",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    id: "class12-cs",
    title: "Class 12 CS Board Prep",
    description: "Class 12 Computer Science board exam preparation with PYQs & notes.",
    category: "Class 12",
    tags: ["Class 12"],
    free: false,
    price: 999,
    rating: 4.9,
    students: 6300,
    duration: "30h",
    level: "Intermediate",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    id: "python-beginners",
    title: "Python for Beginners",
    description: "Start coding from zero — Python basics to projects, fully in Hindi.",
    category: "Web Dev",
    tags: ["Web Dev"],
    free: true,
    price: 0,
    rating: 4.8,
    students: 11200,
    duration: "18h",
    level: "Beginner",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "ds-masterclass",
    title: "Data Structures Masterclass",
    description: "Deep dive into trees, graphs, DP and advanced data structures.",
    category: "DSA",
    tags: ["DSA", "Java"],
    free: false,
    price: 1699,
    rating: 4.9,
    students: 3400,
    duration: "44h",
    level: "Advanced",
    gradient: "from-fuchsia-500 to-indigo-600",
  },
];

export const filterTabs = [
  "All", "Free", "Paid", "DSA", "Java", "Web Dev", "DevOps", "Django", "Class 10", "Class 12",
];

export const stats = [
  { label: "Students", value: 10000, suffix: "+" },
  { label: "Courses", value: 50, suffix: "+" },
  { label: "Lectures", value: 200, suffix: "+" },
  { label: "Hackathons", value: 15, suffix: "+" },
];

export const features = [
  { icon: "GraduationCap", title: "Expert Instructors", desc: "Learn from Abhay Gupta and industry mentors." },
  { icon: "Hammer", title: "Project-Based Learning", desc: "Build real projects, not just theory." },
  { icon: "Languages", title: "Hindi + English", desc: "Concepts explained in simple Hindi." },
  { icon: "Binary", title: "DSA Focused", desc: "Crack coding interviews with confidence." },
  { icon: "Briefcase", title: "Placement Ready", desc: "Resume, mock interviews & referrals." },
  { icon: "Radio", title: "Live Doubt Sessions", desc: "Weekly live sessions to clear doubts." },
];

export const testimonials = [
  { name: "Rahul Sharma", college: "IIT Patna", rating: 5, text: "Skills021 ki DSA course se mujhe placement mila. Best content in Hindi!" },
  { name: "Priya Verma", college: "NIT Trichy", rating: 5, text: "Abhay sir explain everything so clearly. Web dev bootcamp is gold." },
  { name: "Aman Singh", college: "DTU Delhi", rating: 5, text: "Project-based learning helped me build a strong portfolio. Highly recommend." },
  { name: "Sneha Patel", college: "VIT Vellore", rating: 4, text: "Django course was super practical. Live doubt sessions are amazing." },
];

export const videos = [
  { title: "Complete DSA Roadmap 2025", views: "120K views", id: "v1" },
  { title: "Build a Full Stack App in 1 Hour", views: "85K views", id: "v2" },
  { title: "DevOps for Beginners (Hindi)", views: "64K views", id: "v3" },
];

export type EventItem = {
  id: string;
  name: string;
  date: string;
  mode: string;
  fee: number;
  prizes: string;
  team: string;
  deadline: string;
  gradient: string;
};

export const upcomingEvents: EventItem[] = [
  { id: "h1", name: "Skills021 CodeSprint", date: "15 Jul 2025", mode: "Online", fee: 0, prizes: "₹50,000 Pool", team: "1-4", deadline: "10 Jul", gradient: "from-blue-500 to-indigo-600" },
  { id: "h2", name: "DSA Battle Royale", date: "28 Jul 2025", mode: "Online", fee: 199, prizes: "₹25,000 + Goodies", team: "Solo", deadline: "24 Jul", gradient: "from-amber-500 to-orange-600" },
  { id: "h3", name: "Hack The Stack", date: "12 Aug 2025", mode: "Offline · Delhi", fee: 499, prizes: "₹1,00,000 Pool", team: "2-4", deadline: "5 Aug", gradient: "from-emerald-500 to-teal-600" },
];

export const pastEvents = [
  { id: "p1", name: "Winter Hack 2024", participants: "1,200+", winner: "Team CodeStorm", prize: "₹40,000" },
  { id: "p2", name: "AI Build Day", participants: "800+", winner: "Team NeuralNet", prize: "₹30,000" },
  { id: "p3", name: "Open Source Jam", participants: "600+", winner: "Team Committers", prize: "₹20,000" },
];

export const roadmaps = [
  { id: "frontend", title: "Frontend Developer", icon: "Monitor", steps: ["HTML & CSS Fundamentals", "JavaScript Deep Dive", "React + State Management", "TypeScript & Tooling", "Performance & Testing", "Build 3 Portfolio Projects"] },
  { id: "backend", title: "Backend Developer", icon: "Server", steps: ["Programming Basics (Java/Python)", "Databases & SQL", "REST APIs & Auth", "System Design Basics", "Caching & Queues", "Deploy a Production API"] },
  { id: "fullstack", title: "Full Stack", icon: "Layers", steps: ["Frontend Foundations", "Backend Foundations", "Connect Frontend + Backend", "Authentication & Payments", "DevOps Basics", "Capstone Project"] },
  { id: "dsa", title: "DSA / CP", icon: "Binary", steps: ["Time Complexity", "Arrays, Strings, Hashing", "Trees & Graphs", "Dynamic Programming", "Contest Practice", "Solve 300+ Problems"] },
  { id: "devops", title: "DevOps Engineer", icon: "Cog", steps: ["Linux & Networking", "Git & CI/CD", "Docker & Containers", "Kubernetes", "Cloud (AWS/GCP)", "Monitoring & IaC"] },
];

export const jobs = [
  { id: "j1", role: "Frontend Intern", company: "TechNova", location: "Remote", stipend: "₹20,000/mo", skills: ["React", "Tailwind"] },
  { id: "j2", role: "Backend Developer", company: "ByteForge", location: "Bengaluru", stipend: "₹8 LPA", skills: ["Java", "Spring"] },
  { id: "j3", role: "Full Stack Intern", company: "Cloudly", location: "Remote", stipend: "₹25,000/mo", skills: ["Django", "React"] },
  { id: "j4", role: "DevOps Engineer", company: "InfraPro", location: "Hyderabad", stipend: "₹12 LPA", skills: ["Docker", "K8s", "AWS"] },
  { id: "j5", role: "SDE Intern", company: "Algorithmix", location: "Pune", stipend: "₹30,000/mo", skills: ["DSA", "C++"] },
];

export const interviews = [
  { title: "DSA Interview", desc: "Top patterns & 50 must-do problems.", icon: "Binary" },
  { title: "System Design", desc: "Scalability, databases & trade-offs.", icon: "Network" },
  { title: "HR Round", desc: "Behavioral questions & STAR method.", icon: "Users" },
  { title: "Java Interview", desc: "Core Java, OOP & concurrency.", icon: "Coffee" },
];

export const placements = [
  { name: "Vikash Kumar", company: "Amazon", package: "₹28 LPA" },
  { name: "Anjali Gupta", company: "Microsoft", package: "₹32 LPA" },
  { name: "Rohit Mehta", company: "Flipkart", package: "₹24 LPA" },
];

export type Lecture = {
  id: string; title: string; subject: string; duration: string; premium: boolean;
};

export const lectures: Lecture[] = [
  { id: "l1", title: "Introduction to Arrays", subject: "DSA", duration: "24:10", premium: false },
  { id: "l2", title: "Linked Lists Explained", subject: "DSA", duration: "31:45", premium: true },
  { id: "l3", title: "Java OOP Concepts", subject: "Java", duration: "42:00", premium: false },
  { id: "l4", title: "Exception Handling in Java", subject: "Java", duration: "28:30", premium: true },
  { id: "l5", title: "Flexbox & Grid", subject: "Web Dev", duration: "35:20", premium: false },
  { id: "l6", title: "React Hooks Deep Dive", subject: "Web Dev", duration: "48:15", premium: true },
  { id: "l7", title: "Django Models & ORM", subject: "Django", duration: "39:00", premium: true },
  { id: "l8", title: "Docker Basics", subject: "DevOps", duration: "26:40", premium: true },
  { id: "l9", title: "Class 10 Boolean Logic", subject: "Class 10", duration: "18:05", premium: false },
  { id: "l10", title: "Class 12 SQL Queries", subject: "Class 12", duration: "33:50", premium: false },
];

export const lectureSubjects = ["All", "DSA", "Java", "Web Dev", "Django", "DevOps", "Class 10", "Class 12"];

export const notes = [
  { id: "n1", title: "DSA Cheat Sheet", subject: "DSA", pages: 24, premium: false },
  { id: "n2", title: "Java Complete Notes", subject: "Java", pages: 86, premium: true },
  { id: "n3", title: "Django Notes", subject: "Django", pages: 54, premium: true },
  { id: "n4", title: "HTML/CSS Reference", subject: "Web Dev", pages: 32, premium: false },
  { id: "n5", title: "Class 12 CS Important Questions", subject: "Class 12", pages: 40, premium: false },
];
