"use client";

import React from "react";
import { GraduationCap, Play, Clock, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const courses = [
    {
        title: "Complete Web Development Bootcamp",
        instructor: "Dr. Angela Yu",
        rating: 4.8,
        students: 45230,
        duration: "52 hours",
        price: 89.99,
        category: "Development",
    },
    {
        title: "Graphic Design Masterclass",
        instructor: "Lindsay Marsh",
        rating: 4.9,
        students: 32150,
        duration: "38 hours",
        price: 79.99,
        category: "Design",
    },
    {
        title: "Digital Marketing Complete Course",
        instructor: "Rob Percival",
        rating: 4.7,
        students: 28940,
        duration: "45 hours",
        price: 94.99,
        category: "Marketing",
    },
];

export function CoursesSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <GraduationCap className="w-6 h-6 text-primary" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                                Learn & Grow
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Featured{" "}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Courses
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Enhance your skills with expert-led courses and stay ahead in your field
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        size="lg"
                        className="hidden md:flex group"
                    >
                        View All Courses
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <Card
                            key={course.title}
                            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="relative h-48 gradient-card flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 text-primary ml-1" />
                                </div>
                                <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                                    {course.category}
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    by {course.instructor}
                                </p>

                                <div className="flex items-center gap-4 mb-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold">{course.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                        <Clock className="w-4 h-4" />
                                        <span>{course.duration}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                    <div>
                                        <p className="text-xs text-muted-foreground">
                                            {course.students.toLocaleString()} students
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-primary">
                                            ${course.price}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="text-center mt-8 md:hidden">
                    <Button
                        variant="outline"
                        size="lg"
                        className="group"
                    >
                        View All Courses
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
