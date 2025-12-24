export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    bio: string;
    title: string;
    location: string;
    website?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    verified: boolean;
    rating: number;
    totalReviews: number;
    totalStudents: number;
    totalDownloads: number;
    yearsOfExperience: number;
    joinedDate: string;
    skills: Skill[];
    projects: Project[];
    publishedCourses: string[]; // Course IDs
    publishedTools: string[]; // Tool IDs
}

export interface Skill {
    name: string;
    level: number; // 1-100
    category: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

// Mock current user data
export const currentUser: User = {
    id: "user-1",
    name: "Mohamed Esmail",
    email: "mohamed@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mohamed",
    bio: "Full-stack developer and UI/UX enthusiast with 8+ years of experience building scalable web applications. Passionate about teaching and creating developer tools.",
    title: "Senior Full-Stack Developer & Instructor",
    location: "Cairo, Egypt",
    website: "https://mohameddev.com",
    github: "https://github.com/mohameddev",
    linkedin: "https://linkedin.com/in/mohameddev",
    twitter: "https://twitter.com/mohameddev",
    verified: true,
    rating: 4.9,
    totalReviews: 1247,
    totalStudents: 15420,
    totalDownloads: 28900,
    yearsOfExperience: 8,
    joinedDate: "2020-01-15",
    skills: [
        { name: "React", level: 95, category: "Frontend" },
        { name: "Next.js", level: 90, category: "Frontend" },
        { name: "TypeScript", level: 92, category: "Languages" },
        { name: "Node.js", level: 88, category: "Backend" },
        { name: "Python", level: 85, category: "Languages" },
        { name: "PostgreSQL", level: 82, category: "Database" },
        { name: "MongoDB", level: 80, category: "Database" },
        { name: "Docker", level: 78, category: "DevOps" },
        { name: "AWS", level: 75, category: "DevOps" },
        { name: "Figma", level: 88, category: "Design" },
        { name: "UI/UX Design", level: 85, category: "Design" },
        { name: "GraphQL", level: 80, category: "Backend" },
    ],
    projects: [
        {
            id: "proj-1",
            title: "E-Commerce Platform",
            description: "Full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
            technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
            liveUrl: "https://ecommerce-demo.com",
            githubUrl: "https://github.com/mohameddev/ecommerce",
            featured: true
        },
        {
            id: "proj-2",
            title: "AI Content Generator",
            description: "AI-powered content generation tool using GPT-4 for blog posts, social media, and marketing copy.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
            technologies: ["React", "OpenAI API", "Node.js", "MongoDB"],
            liveUrl: "https://ai-content-gen.com",
            githubUrl: "https://github.com/mohameddev/ai-content",
            featured: true
        },
        {
            id: "proj-3",
            title: "Task Management App",
            description: "Collaborative task management with real-time updates, kanban boards, and team analytics.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
            technologies: ["Vue.js", "Firebase", "Vuex", "Chart.js"],
            liveUrl: "https://taskflow-app.com",
            featured: true
        },
        {
            id: "proj-4",
            title: "Developer Portfolio Builder",
            description: "No-code portfolio builder for developers with customizable templates and GitHub integration.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
            technologies: ["Next.js", "Tailwind CSS", "GitHub API", "Vercel"],
            liveUrl: "https://portfolio-builder.dev",
            githubUrl: "https://github.com/mohameddev/portfolio-builder",
            featured: false
        },
        {
            id: "proj-5",
            title: "Real-time Chat Application",
            description: "Scalable chat application with video calls, file sharing, and end-to-end encryption.",
            image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop",
            technologies: ["React", "Socket.io", "WebRTC", "Redis", "Express"],
            githubUrl: "https://github.com/mohameddev/chat-app",
            featured: false
        },
        {
            id: "proj-6",
            title: "Analytics Dashboard",
            description: "Business intelligence dashboard with interactive charts and real-time data visualization.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
            liveUrl: "https://analytics-dash.com",
            featured: false
        }
    ],
    publishedCourses: ["1", "2", "5"], // References to courses from coursesData
    publishedTools: ["1", "3", "9"] // References to tools from storeData
};

export const skillCategories = [
    "Frontend",
    "Backend",
    "Languages",
    "Database",
    "DevOps",
    "Design"
];
