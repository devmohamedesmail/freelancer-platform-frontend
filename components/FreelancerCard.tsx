"use client";

import React from "react";
import { Star, MapPin, Briefcase, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface FreelancerCardProps {
    name: string;
    title: string;
    rating: number;
    reviews: number;
    location: string;
    hourlyRate: number;
    completedJobs: number;
    skills: string[];
    avatar: string;
}

export function FreelancerCard({
    name,
    title,
    rating,
    reviews,
    location,
    hourlyRate,
    completedJobs,
    skills,
    avatar,
}: FreelancerCardProps) {
    const {t}=useTranslation()
    return (
        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="gradient-card p-6">
                <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                            <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                                {name.charAt(0)}
                            </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg truncate group-hover:text-primary transition-colors">
                            {name}
                        </h3>
                        <p className="text-sm text-muted-foreground truncate">{title}</p>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-2">
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold text-sm">{rating.toFixed(1)}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                                ({reviews} reviews)
                            </span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            <span className="text-xs">{location}</span>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <div>
                            <p className="text-xs text-muted-foreground">Completed</p>
                            <p className="font-semibold text-sm">{completedJobs} jobs</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <div>
                            <p className="text-xs text-muted-foreground">Hourly Rate</p>
                            <p className="font-semibold text-sm">${hourlyRate}/hr</p>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                        {skills.slice(0, 3).map((skill) => (
                            <span
                                key={skill}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                        {skills.length > 3 && (
                            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                                +{skills.length - 3}
                            </span>
                        )}
                    </div>
                </div>

                {/* Action Button */}
                <Button className="w-full mt-4 gradient-primary text-white hover:opacity-90 transition-opacity">
                    {t('common.view_profile')}
                </Button>
            </div>
        </Card>
    );
}
