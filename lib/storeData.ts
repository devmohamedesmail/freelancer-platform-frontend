export type ProductType = "tool" | "theme";

export interface StoreProduct {
    id: string;
    name: string;
    description: string;
    type: ProductType;
    category: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    downloads: number;
    version: string;
    lastUpdated: string;
    image: string;
    tags: string[];
    features: string[];
    compatibility: string[];
    author: {
        name: string;
        avatar: string;
        verified: boolean;
    };
    demoUrl?: string;
    isFeatured?: boolean;
    isNew?: boolean;
}

export const storeProducts: StoreProduct[] = [
    // Featured Tools
    {
        id: "1",
        name: "DevFlow Pro",
        description: "Complete development workflow automation tool with AI-powered code suggestions and real-time collaboration features.",
        type: "tool",
        category: "Development Tools",
        price: 49,
        originalPrice: 99,
        rating: 4.9,
        reviews: 1247,
        downloads: 15420,
        version: "3.2.1",
        lastUpdated: "2025-12-20",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        tags: ["AI", "Automation", "Productivity", "Collaboration"],
        features: [
            "AI-powered code completion",
            "Real-time collaboration",
            "Automated testing suite",
            "Git integration",
            "Cloud sync"
        ],
        compatibility: ["VS Code", "JetBrains", "Sublime Text"],
        author: {
            name: "TechFlow Studios",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=techflow",
            verified: true
        },
        demoUrl: "https://demo.devflow.pro",
        isFeatured: true,
        isNew: true
    },
    {
        id: "2",
        name: "API Master",
        description: "Advanced API testing and documentation tool with automated testing, mock servers, and beautiful documentation generation.",
        type: "tool",
        category: "Development Tools",
        price: 39,
        rating: 4.8,
        reviews: 892,
        downloads: 12350,
        version: "2.5.0",
        lastUpdated: "2025-12-18",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        tags: ["API", "Testing", "Documentation", "REST"],
        features: [
            "Automated API testing",
            "Mock server creation",
            "Auto-generated docs",
            "Request collections",
            "Environment variables"
        ],
        compatibility: ["Windows", "macOS", "Linux"],
        author: {
            name: "API Tools Inc",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=apitools",
            verified: true
        },
        isFeatured: true
    },
    {
        id: "3",
        name: "CodeSnap",
        description: "Beautiful code screenshot generator with syntax highlighting, custom themes, and social media optimization.",
        type: "tool",
        category: "Design Tools",
        price: 19,
        rating: 4.7,
        reviews: 2341,
        downloads: 28900,
        version: "1.8.2",
        lastUpdated: "2025-12-22",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop",
        tags: ["Screenshots", "Design", "Social Media", "Themes"],
        features: [
            "50+ syntax themes",
            "Custom backgrounds",
            "Gradient overlays",
            "Export to PNG/SVG",
            "Social media presets"
        ],
        compatibility: ["Web", "Desktop App"],
        author: {
            name: "SnapDev",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=snapdev",
            verified: true
        },
        demoUrl: "https://codesnap.dev",
        isNew: true
    },
    {
        id: "4",
        name: "DB Visualizer Pro",
        description: "Powerful database visualization and management tool with ER diagrams, query builder, and data migration features.",
        type: "tool",
        category: "Database Tools",
        price: 59,
        originalPrice: 89,
        rating: 4.9,
        reviews: 756,
        downloads: 9870,
        version: "4.1.0",
        lastUpdated: "2025-12-15",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop",
        tags: ["Database", "SQL", "Visualization", "Migration"],
        features: [
            "ER diagram generation",
            "Visual query builder",
            "Data migration tools",
            "Multi-database support",
            "Export to multiple formats"
        ],
        compatibility: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        author: {
            name: "DataViz Labs",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dataviz",
            verified: true
        },
        isFeatured: true
    },

    // Premium Themes
    {
        id: "5",
        name: "NeonDark Pro",
        description: "Stunning dark theme with vibrant neon accents, perfect for long coding sessions. Supports 20+ languages.",
        type: "theme",
        category: "Editor Themes",
        price: 15,
        rating: 4.8,
        reviews: 3421,
        downloads: 45200,
        version: "2.3.0",
        lastUpdated: "2025-12-21",
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=600&fit=crop",
        tags: ["Dark Theme", "Neon", "Syntax Highlighting"],
        features: [
            "20+ language support",
            "Customizable accents",
            "Low eye strain",
            "Icon theme included",
            "Regular updates"
        ],
        compatibility: ["VS Code", "Atom", "Sublime Text"],
        author: {
            name: "ThemeForge",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=themeforge",
            verified: true
        },
        isFeatured: true,
        isNew: true
    },
    {
        id: "6",
        name: "MinimalLight",
        description: "Clean and minimal light theme designed for maximum readability and reduced visual clutter.",
        type: "theme",
        category: "Editor Themes",
        price: 12,
        rating: 4.6,
        reviews: 1876,
        downloads: 32100,
        version: "1.9.1",
        lastUpdated: "2025-12-19",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
        tags: ["Light Theme", "Minimal", "Clean"],
        features: [
            "Soft color palette",
            "High contrast mode",
            "Markdown optimized",
            "UI theme included",
            "Accessibility focused"
        ],
        compatibility: ["VS Code", "JetBrains IDEs"],
        author: {
            name: "CleanCode Themes",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=cleancode",
            verified: true
        }
    },
    {
        id: "7",
        name: "CyberPunk 2077",
        description: "Futuristic cyberpunk-inspired theme with electric blues, hot pinks, and neon yellows.",
        type: "theme",
        category: "Editor Themes",
        price: 18,
        rating: 4.9,
        reviews: 2987,
        downloads: 38500,
        version: "3.0.2",
        lastUpdated: "2025-12-23",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
        tags: ["Cyberpunk", "Neon", "Futuristic", "Dark"],
        features: [
            "Animated backgrounds",
            "Custom font ligatures",
            "Glitch effects",
            "Terminal theme",
            "Sound pack included"
        ],
        compatibility: ["VS Code", "Hyper Terminal"],
        author: {
            name: "NightCity Dev",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nightcity",
            verified: true
        },
        isFeatured: true,
        isNew: true
    },
    {
        id: "8",
        name: "Nature Zen",
        description: "Calming nature-inspired theme with earthy tones and soft greens for a peaceful coding experience.",
        type: "theme",
        category: "Editor Themes",
        price: 14,
        rating: 4.7,
        reviews: 1543,
        downloads: 21400,
        version: "1.5.0",
        lastUpdated: "2025-12-17",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        tags: ["Nature", "Calm", "Green", "Light"],
        features: [
            "Eye-friendly colors",
            "Nature sounds integration",
            "Focus mode",
            "Pomodoro timer theme",
            "Seasonal variants"
        ],
        compatibility: ["VS Code", "Atom"],
        author: {
            name: "ZenDev",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zendev",
            verified: false
        }
    },

    // More Development Tools
    {
        id: "9",
        name: "GitFlow Manager",
        description: "Streamline your Git workflow with visual branch management, conflict resolution, and team collaboration.",
        type: "tool",
        category: "Development Tools",
        price: 29,
        rating: 4.8,
        reviews: 1123,
        downloads: 14200,
        version: "2.1.3",
        lastUpdated: "2025-12-20",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
        tags: ["Git", "Version Control", "Collaboration"],
        features: [
            "Visual branch manager",
            "Conflict resolver",
            "Code review tools",
            "Team analytics",
            "Custom workflows"
        ],
        compatibility: ["Windows", "macOS", "Linux"],
        author: {
            name: "FlowDev Tools",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=flowdev",
            verified: true
        }
    },
    {
        id: "10",
        name: "Performance Analyzer",
        description: "Deep performance profiling and optimization tool for web applications with real-time monitoring.",
        type: "tool",
        category: "Performance Tools",
        price: 45,
        originalPrice: 79,
        rating: 4.9,
        reviews: 687,
        downloads: 8900,
        version: "3.4.1",
        lastUpdated: "2025-12-22",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        tags: ["Performance", "Profiling", "Optimization", "Monitoring"],
        features: [
            "Real-time monitoring",
            "Memory leak detection",
            "Bundle analysis",
            "Performance reports",
            "Optimization suggestions"
        ],
        compatibility: ["React", "Vue", "Angular", "Vanilla JS"],
        author: {
            name: "SpeedLabs",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=speedlabs",
            verified: true
        },
        isFeatured: true
    },
    {
        id: "11",
        name: "Component Library Builder",
        description: "Build, document, and share your component library with automatic documentation and live playground.",
        type: "tool",
        category: "Design Tools",
        price: 35,
        rating: 4.7,
        reviews: 934,
        downloads: 11200,
        version: "1.7.0",
        lastUpdated: "2025-12-16",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
        tags: ["Components", "Documentation", "Design System"],
        features: [
            "Auto-generated docs",
            "Live component playground",
            "Version control",
            "Export to npm",
            "Team collaboration"
        ],
        compatibility: ["React", "Vue", "Svelte", "Web Components"],
        author: {
            name: "ComponentCraft",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=componentcraft",
            verified: true
        }
    },
    {
        id: "12",
        name: "Docker Dashboard Pro",
        description: "Comprehensive Docker container management with visual monitoring, logs, and resource optimization.",
        type: "tool",
        category: "DevOps Tools",
        price: 42,
        rating: 4.8,
        reviews: 823,
        downloads: 10500,
        version: "2.8.0",
        lastUpdated: "2025-12-21",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop",
        tags: ["Docker", "Containers", "DevOps", "Monitoring"],
        features: [
            "Container monitoring",
            "Resource optimization",
            "Log aggregation",
            "Network visualization",
            "Compose file editor"
        ],
        compatibility: ["Docker", "Kubernetes", "Docker Swarm"],
        author: {
            name: "ContainerOps",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=containerops",
            verified: true
        }
    },

    // Additional Themes
    {
        id: "13",
        name: "Dracula Pro+",
        description: "Enhanced version of the popular Dracula theme with additional color variants and customization options.",
        type: "theme",
        category: "Editor Themes",
        price: 16,
        rating: 4.9,
        reviews: 4521,
        downloads: 52300,
        version: "4.2.0",
        lastUpdated: "2025-12-24",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop",
        tags: ["Dark Theme", "Popular", "Customizable"],
        features: [
            "5 color variants",
            "Italic support",
            "Custom UI elements",
            "Terminal themes",
            "Wallpaper pack"
        ],
        compatibility: ["VS Code", "JetBrains", "Sublime", "Vim"],
        author: {
            name: "Dracula Team",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dracula",
            verified: true
        },
        isFeatured: true
    },
    {
        id: "14",
        name: "Ocean Breeze",
        description: "Refreshing blue-themed design inspired by ocean waves, perfect for frontend developers.",
        type: "theme",
        category: "Editor Themes",
        price: 13,
        rating: 4.6,
        reviews: 1234,
        downloads: 18700,
        version: "1.4.2",
        lastUpdated: "2025-12-18",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
        tags: ["Blue", "Ocean", "Calm", "Light"],
        features: [
            "Ocean-inspired palette",
            "CSS/HTML optimized",
            "Gradient accents",
            "Icon pack",
            "Animated transitions"
        ],
        compatibility: ["VS Code", "Atom"],
        author: {
            name: "OceanThemes",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ocean",
            verified: false
        }
    },
    {
        id: "15",
        name: "Sunset Coder",
        description: "Warm sunset colors that reduce eye strain during evening coding sessions.",
        type: "theme",
        category: "Editor Themes",
        price: 14,
        rating: 4.7,
        reviews: 1876,
        downloads: 24500,
        version: "2.1.0",
        lastUpdated: "2025-12-19",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop",
        tags: ["Warm", "Sunset", "Evening", "Dark"],
        features: [
            "Warm color palette",
            "Blue light reduction",
            "Time-based switching",
            "Focus mode",
            "Distraction-free UI"
        ],
        compatibility: ["VS Code", "Sublime Text"],
        author: {
            name: "SunsetDev",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sunset",
            verified: true
        },
        isNew: true
    }
];

export const categories = [
    "All Products",
    "Development Tools",
    "Design Tools",
    "Database Tools",
    "Performance Tools",
    "DevOps Tools",
    "Editor Themes"
];

export const productTypes = ["All Types", "Tools", "Themes"];
