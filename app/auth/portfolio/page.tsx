"use client";

import React from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Star,
    MapPin,
    Calendar,
    TrendingUp,
    Download,
    BookOpen,
    Package,
    Code,
    ExternalLink,
    Github,
    Globe,
    Linkedin,
    Twitter,
    Award,
    Users,
    Sparkles,
    CheckCircle2
} from "lucide-react";
import { currentUser, skillCategories } from "@/lib/userData";
import { coursesData } from "@/lib/coursesData";
import { storeProducts } from "@/lib/storeData";

export default function PortfolioPage() {
    const publishedCourses = coursesData.filter((course) =>
        currentUser.publishedCourses.includes(course.id)
    );
    const publishedTools = storeProducts.filter((tool) =>
        currentUser.publishedTools.includes(tool.id)
    );

    const featuredProjects = currentUser.projects.filter((p) => p.featured);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-24 pb-16 px-4 overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.2),transparent_50%)]" />

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            {/* Avatar */}
                            <div className="relative">
                                <img
                                    src={currentUser.avatar}
                                    alt={currentUser.name}
                                    className="w-40 h-40 rounded-full border-4 border-primary/20 shadow-2xl"
                                />
                                {currentUser.verified && (
                                    <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                                    <h1 className="text-4xl md:text-5xl font-bold">
                                        {currentUser.name}
                                    </h1>
                                    {currentUser.verified && (
                                        <Badge className="gap-1">
                                            <Star className="w-3 h-3 fill-current" />
                                            Verified
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-xl text-muted-foreground mb-4">
                                    {currentUser.title}
                                </p>
                                <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start text-sm text-muted-foreground mb-6">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        {currentUser.location}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Joined{" "}
                                        {new Date(currentUser.joinedDate).toLocaleDateString("en-US", {
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Award className="w-4 h-4" />
                                        {currentUser.yearsOfExperience}+ Years Experience
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex gap-3 justify-center md:justify-start">
                                    {currentUser.website && (
                                        <Button variant="outline" size="sm" asChild>
                                            <a
                                                href={currentUser.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Globe className="w-4 h-4" />
                                            </a>
                                        </Button>
                                    )}
                                    {currentUser.github && (
                                        <Button variant="outline" size="sm" asChild>
                                            <a
                                                href={currentUser.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        </Button>
                                    )}
                                    {currentUser.linkedin && (
                                        <Button variant="outline" size="sm" asChild>
                                            <a
                                                href={currentUser.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        </Button>
                                    )}
                                    {currentUser.twitter && (
                                        <Button variant="outline" size="sm" asChild>
                                            <a
                                                href={currentUser.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Twitter className="w-4 h-4" />
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                {
                                    icon: Star,
                                    label: "Rating",
                                    value: currentUser.rating,
                                    subtext: `${currentUser.totalReviews.toLocaleString()} reviews`,
                                },
                                {
                                    icon: Users,
                                    label: "Students",
                                    value: currentUser.totalStudents.toLocaleString(),
                                    subtext: "Total enrolled",
                                },
                                {
                                    icon: Download,
                                    label: "Downloads",
                                    value: currentUser.totalDownloads.toLocaleString(),
                                    subtext: "Tools & themes",
                                },
                                {
                                    icon: BookOpen,
                                    label: "Courses",
                                    value: publishedCourses.length,
                                    subtext: "Published",
                                },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform"
                                >
                                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-sm font-medium mb-1">{stat.label}</div>
                                    <div className="text-xs text-muted-foreground">{stat.subtext}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-12 px-4 bg-muted/30">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">About Me</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {currentUser.bio}
                        </p>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Code className="w-6 h-6 text-primary" />
                            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
                        </div>

                        <div className="space-y-8">
                            {skillCategories.map((category) => {
                                const categorySkills = currentUser.skills.filter(
                                    (s) => s.category === category
                                );
                                if (categorySkills.length === 0) return null;

                                return (
                                    <div key={category}>
                                        <h3 className="text-xl font-semibold mb-4">{category}</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {categorySkills.map((skill) => (
                                                <div
                                                    key={skill.name}
                                                    className="gradient-card rounded-xl p-4 border border-border"
                                                >
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="font-medium">{skill.name}</span>
                                                        <span className="text-sm text-primary font-semibold">
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                                                            style={{ width: `${skill.level}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-12 px-4 bg-muted/30">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Sparkles className="w-6 h-6 text-primary" />
                            <h2 className="text-3xl font-bold">Featured Projects</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group gradient-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl"
                                >
                                    <div className="aspect-video overflow-hidden bg-muted">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.slice(0, 3).map((tech) => (
                                                <Badge key={tech} variant="secondary" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            {project.liveUrl && (
                                                <Button variant="outline" size="sm" asChild className="flex-1">
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        Live
                                                    </a>
                                                </Button>
                                            )}
                                            {project.githubUrl && (
                                                <Button variant="outline" size="sm" asChild className="flex-1">
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Github className="w-4 h-4 mr-2" />
                                                        Code
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* All Projects Button */}
                        {currentUser.projects.length > featuredProjects.length && (
                            <div className="text-center mt-8">
                                <Button variant="outline" size="lg">
                                    View All {currentUser.projects.length} Projects
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Courses Section */}
                <section className="py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <BookOpen className="w-6 h-6 text-primary" />
                            <h2 className="text-3xl font-bold">Published Courses</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {publishedCourses.map((course) => (
                                <div
                                    key={course.id}
                                    className="group gradient-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl"
                                >
                                    <div className="aspect-video overflow-hidden bg-muted">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <Badge className="mb-3">{course.category}</Badge>
                                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {course.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm mb-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                <span className="font-semibold">{course.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-muted-foreground">
                                                <Users className="w-4 h-4" />
                                                {course.students.toLocaleString()}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-bold text-primary">
                                                ${course.price}
                                            </span>
                                            <Button size="sm">View Course</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tools Section */}
                <section className="py-12 px-4 bg-muted/30">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Package className="w-6 h-6 text-primary" />
                            <h2 className="text-3xl font-bold">Developer Tools & Themes</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {publishedTools.map((tool) => (
                                <div
                                    key={tool.id}
                                    className="group gradient-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl"
                                >
                                    <div className="aspect-video overflow-hidden bg-muted">
                                        <img
                                            src={tool.image}
                                            alt={tool.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <Badge className="mb-3">{tool.type === "tool" ? "Tool" : "Theme"}</Badge>
                                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {tool.name}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm mb-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                <span className="font-semibold">{tool.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-muted-foreground">
                                                <Download className="w-4 h-4" />
                                                {tool.downloads.toLocaleString()}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-bold text-primary">
                                                ${tool.price}
                                            </span>
                                            <Button size="sm">
                                                <Download className="w-4 h-4 mr-2" />
                                                Download
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
