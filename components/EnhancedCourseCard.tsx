"use client";

import React from "react";
import { Star, Clock, Users, Play, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Course } from "@/lib/coursesData";

interface EnhancedCourseCardProps {
    course: Course;
}

export function EnhancedCourseCard({ course }: EnhancedCourseCardProps) {
    const discount = course.originalPrice
        ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
        : 0;

    return (
        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
            {/* Thumbnail */}
            <div className="relative h-48 gradient-card flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative w-20 h-20 rounded-full bg-background/90 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                    <Play className="w-10 h-10 text-primary ml-1" />
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {course.bestseller && (
                        <Badge className="bg-yellow-500 text-white border-0 shadow-lg">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Bestseller
                        </Badge>
                    )}
                    {course.featured && (
                        <Badge className="bg-purple-500 text-white border-0 shadow-lg">
                            <Award className="w-3 h-3 mr-1" />
                            Featured
                        </Badge>
                    )}
                </div>

                {/* Discount Badge */}
                {discount > 0 && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-destructive text-destructive-foreground rounded-lg text-sm font-bold shadow-lg">
                        {discount}% OFF
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {course.category}
                    </Badge>
                </div>
            </div>

            {/* Content */}
            <CardContent className="p-5 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors min-h-[3.5rem]">
                    {course.title}
                </h3>

                {/* Instructor */}
                <p className="text-sm text-muted-foreground mb-3">by {course.instructor}</p>

                {/* Rating & Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{course.rating.toFixed(1)}</span>
                        <span className="text-muted-foreground">
                            ({course.reviewCount.toLocaleString()})
                        </span>
                    </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {course.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-end justify-between pt-4 border-t border-border mt-auto">
                    <div>
                        {course.originalPrice && (
                            <p className="text-sm text-muted-foreground line-through">
                                ${course.originalPrice}
                            </p>
                        )}
                        <p className="text-2xl font-bold text-primary">${course.price}</p>
                    </div>
                    <Button className="gradient-primary text-white hover:opacity-90">
                        Enroll Now
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
