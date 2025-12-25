"use client";

import React from "react";
import { Star, ArrowRight, TrendingUp } from "lucide-react";
import { FreelancerCard } from "../FreelancerCard";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

const topFreelancers = [
    {
        name: "Sarah Johnson",
        title: "Full Stack Developer",
        rating: 4.9,
        reviews: 287,
        location: "United States",
        hourlyRate: 85,
        completedJobs: 342,
        skills: ["React", "Node.js", "TypeScript", "MongoDB"],
        avatar: "/avatars/sarah.jpg",
    },
    {
        name: "Ahmed Hassan",
        title: "UI/UX Designer",
        rating: 5.0,
        reviews: 195,
        location: "Egypt",
        hourlyRate: 65,
        completedJobs: 256,
        skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
        avatar: "/avatars/ahmed.jpg",
    },
    {
        name: "Maria Garcia",
        title: "Content Writer & SEO Specialist",
        rating: 4.8,
        reviews: 412,
        location: "Spain",
        hourlyRate: 45,
        completedJobs: 589,
        skills: ["SEO", "Content Writing", "Copywriting", "Research"],
        avatar: "/avatars/maria.jpg",
    },
    {
        name: "David Chen",
        title: "Video Editor & Motion Graphics",
        rating: 4.9,
        reviews: 324,
        location: "Canada",
        hourlyRate: 75,
        completedJobs: 421,
        skills: ["After Effects", "Premiere Pro", "DaVinci Resolve", "3D Animation"],
        avatar: "/avatars/david.jpg",
    },
];

export function TopFreelancersSection() {
    const { t } = useTranslation();

    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-6 h-6 text-primary" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                                {t('top_freelancers.badge')}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            {/* {t('top_freelancers.title_part1')}{" "} */}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {t('top_freelancers.title_highlight')}
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            {t('top_freelancers.subtitle')}
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        size="lg"
                        className="hidden md:flex group"
                    >
                        {t('top_freelancers.view_all')}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                {/* Freelancers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topFreelancers.map((freelancer) => (
                        <FreelancerCard key={freelancer.name} {...freelancer} />
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="text-center mt-8 md:hidden">
                    <Button
                        variant="outline"
                        size="lg"
                        className="group"
                    >
                        {t('top_freelancers.view_all_freelancers')}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
