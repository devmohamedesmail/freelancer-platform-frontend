"use client";

import React from "react";
import {
    CheckCircle2,
    Shield,
    Clock,
    DollarSign,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const features = [
    {
        icon: CheckCircle2,
        title: "Quality Guaranteed",
        description: "All freelancers are vetted and verified for quality work",
        color: "#10B981",
    },
    {
        icon: Shield,
        title: "Secure Payments",
        description: "Your money is safe with our escrow payment system",
        color: "#3B82F6",
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Get help anytime with our dedicated support team",
        color: "#F59E0B",
    },
    {
        icon: DollarSign,
        title: "Best Value",
        description: "Competitive pricing with no hidden fees",
        color: "#8B5CF6",
    },
];

export function ForClientsSection() {
    return (
        <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">For Clients</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Why Choose{" "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            FreelanceHub
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get your projects done efficiently with our platform's unique advantages
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {features.map((feature) => (
                        <Card
                            key={feature.title}
                            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <CardContent className="p-6">
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}40 100%)`,
                                    }}
                                >
                                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="glass-effect rounded-2xl p-8 md:p-12 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Start Your Project?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied clients who have found the perfect
                        freelancers for their projects
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="gradient-primary text-white text-base px-8">
                            Post a Project
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-base px-8">
                            Browse Freelancers
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
