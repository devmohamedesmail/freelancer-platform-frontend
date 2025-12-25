"use client";

import React from "react";
import { ShoppingBag, Code2, Zap, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const tools = [
    {
        name: "VS Code Pro Extensions Pack",
        description: "Essential extensions bundle for professional developers",
        price: 29.99,
        originalPrice: 49.99,
        rating: 4.9,
        sales: 12450,
        category: "IDE Tools",
    },
    {
        name: "API Testing Suite",
        description: "Complete toolkit for API development and testing",
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.8,
        sales: 8920,
        category: "Testing",
    },
    {
        name: "UI Component Library Pro",
        description: "Premium React components for faster development",
        price: 49.99,
        originalPrice: 79.99,
        rating: 5.0,
        sales: 15670,
        category: "UI/UX",
    },
    {
        name: "DevOps Automation Scripts",
        description: "Pre-built scripts for CI/CD and deployment automation",
        price: 34.99,
        originalPrice: 54.99,
        rating: 4.7,
        sales: 6780,
        category: "DevOps",
    },
];

export function DevStoreSection() {
    const {t}=useTranslation();
    return (
        <section className="py-20 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <ShoppingBag className="w-6 h-6 text-primary" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                                {t("store.title")}
                            </span>
                        </div>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            {t("store.description")}
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        size="lg"
                        className="hidden md:flex group"
                    >
                        {t("common.view_all")}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tools.map((tool) => (
                        <Card
                            key={tool.name}
                            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="relative h-40 gradient-card flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Code2 className="w-8 h-8 text-primary" />
                                </div>
                                <div className="absolute top-4 right-4 px-2 py-1 bg-destructive text-destructive-foreground rounded-md text-xs font-bold flex items-center gap-1">
                                    <Tag className="w-3 h-3" />
                                    {Math.round(((tool.originalPrice - tool.price) / tool.originalPrice) * 100)}% OFF
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="mb-2">
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                                        {tool.category}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                                    {tool.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                    {tool.description}
                                </p>

                                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                                    <Zap className="w-4 h-4 text-yellow-500" />
                                    <span>{tool.sales.toLocaleString()} sales</span>
                                </div>

                                <div className="flex items-end justify-between pt-4 border-t border-border">
                                    <div>
                                        <p className="text-xs text-muted-foreground line-through">
                                            ${tool.originalPrice}
                                        </p>
                                        <p className="text-2xl font-bold text-primary">
                                            ${tool.price}
                                        </p>
                                    </div>
                                    <Button size="sm" className="gradient-primary text-white">
                                        Buy Now
                                    </Button>
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
                        Browse All Tools
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
