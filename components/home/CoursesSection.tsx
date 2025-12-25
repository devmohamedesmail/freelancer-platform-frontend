"use client";

import React from "react";
import { GraduationCap, Play, Clock, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

const courses = [
    {
        title: "Complete Web Development Bootcamp",
        instructor: "Dr. Angela Yu",
        rating: 4.8,
        students: 45230,
        duration: "52 hours",
        price: 89.99,
        category: "courses.category.development",
    },
    {
        title: "Graphic Design Masterclass",
        instructor: "Lindsay Marsh",
        rating: 4.9,
        students: 32150,
        duration: "38 hours",
        price: 79.99,
        category: "courses.category.design",
    },
    {
        title: "Digital Marketing Complete Course",
        instructor: "Rob Percival",
        rating: 4.7,
        students: 28940,
        duration: "45 hours",
        price: 94.99,
        category: "courses.category.marketing",
    },
];

export function CoursesSection() {
    const { t } = useTranslation();

    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <GraduationCap className="w-6 h-6 text-primary" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                                {t('courses.badge')}
                            </span>
                        </div>
                        
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            {t('courses.subtitle')}
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        size="lg"
                        className="hidden md:flex group"
                    >
                        {t('courses.view_all')}
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
                                    {t(course.category)}
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {t('courses.by')} {course.instructor}
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
                                            {course.students.toLocaleString()} {t('courses.students')}
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
                        {t('courses.view_all')}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
