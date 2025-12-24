"use client";

import React from "react";
import {
    Code2,
    Palette,
    Video,
    PenTool,
    Megaphone,
    Music,
    BarChart3,
    Sparkles,
    ArrowRight,
} from "lucide-react";
import { CategoryCard } from "./CategoryCard";
import { Button } from "./ui/button";

const categories = [
    { name: "Graphics & Design", icon: Palette, jobCount: 12500, color: "#8B5CF6" },
    { name: "Programming & Tech", icon: Code2, jobCount: 18200, color: "#3B82F6" },
    { name: "Digital Marketing", icon: Megaphone, jobCount: 9800, color: "#EF4444" },
    { name: "Video & Animation", icon: Video, jobCount: 7600, color: "#F59E0B" },
    { name: "Writing & Translation", icon: PenTool, jobCount: 11300, color: "#10B981" },
    { name: "Music & Audio", icon: Music, jobCount: 5400, color: "#EC4899" },
    { name: "Business", icon: BarChart3, jobCount: 8900, color: "#6366F1" },
    { name: "AI Services", icon: Sparkles, jobCount: 15700, color: "#14B8A6" },
];

export function CategoriesSection() {
    return (
        <section className="py-20 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Explore by{" "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Category
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Browse through our diverse range of services and find the perfect
                        match for your needs
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {categories.map((category) => (
                        <CategoryCard key={category.name} {...category} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Button
                        variant="outline"
                        size="lg"
                        className="group"
                    >
                        View All Categories
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
