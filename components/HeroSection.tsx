"use client";

import React from "react";
import { Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 gradient-primary opacity-5"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                            #1 Freelance Platform
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
                        Find the Perfect{" "}
                        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                            Freelancer
                        </span>
                        <br />
                        for Your Project
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                        Connect with talented professionals from around the world. Get your
                        project done with quality and expertise.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
                        <div className="flex flex-col sm:flex-row gap-3 p-2 bg-background rounded-xl shadow-2xl border border-border">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="What service are you looking for?"
                                    className="pl-12 h-14 border-0 bg-transparent text-base focus-visible:ring-0"
                                />
                            </div>
                            <Button className="h-14 px-8 gradient-primary text-white text-base font-semibold hover:opacity-90 transition-opacity">
                                Search
                            </Button>
                        </div>
                    </div>

                    {/* Popular Searches */}
                    <div className="mt-8 animate-fade-in-up animation-delay-600">
                        <p className="text-sm text-muted-foreground mb-3">Popular:</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {["Logo Design", "WordPress", "AI Development", "Video Editing", "SEO"].map(
                                (tag) => (
                                    <button
                                        key={tag}
                                        className="px-4 py-2 bg-muted hover:bg-primary/10 hover:text-primary rounded-full text-sm transition-all"
                                    >
                                        {tag}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
