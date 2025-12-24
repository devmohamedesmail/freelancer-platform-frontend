"use client";

import React, { useState, useEffect } from "react";
import { Search, Menu, X, Globe, User, Moon, Sun, ShoppingBag, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
    {
        name: "Graphics & Design",
        subcategories: ["Logo Design", "Brand Style Guides", "Game Design", "Graphics for Streamers", "Business Cards & Stationery", "Illustration", "Pattern Design"]
    },
    {
        name: "Programming & Tech",
        subcategories: ["Website Development", "Mobile Apps", "Desktop Applications", "Game Development", "AI Development", "Blockchain & Cryptocurrency", "Cybersecurity"]
    },
    {
        name: "Digital Marketing",
        subcategories: ["Social Media Marketing", "SEO", "Content Marketing", "Video Marketing", "Email Marketing", "Influencer Marketing", "Community Management"]
    },
    {
        name: "Video & Animation",
        subcategories: ["Video Editing", "Animation", "Whiteboard & Animated Explainers", "Video Ads & Commercials", "Lyric & Music Videos", "Subtitles & Captions"]
    },
    {
        name: "Writing & Translation",
        subcategories: ["Articles & Blog Posts", "Translation", "Proofreading & Editing", "Resume Writing", "Technical Writing", "Creative Writing", "Grant Writing"]
    },
    {
        name: "Music & Audio",
        subcategories: ["Music Production", "Voice Over", "Audio Editing", "Sound Design", "Podcast Editing", "Audio Ads Production", "Mixing & Mastering"]
    },
    {
        name: "Business",
        subcategories: ["Virtual Assistant", "Market Research", "Business Plans", "Legal Consulting", "Financial Consulting", "Presentations", "Data Entry"]
    },
    {
        name: "AI Services",
        subcategories: ["AI Applications", "AI Chatbot", "AI Content", "AI Image Generation", "AI Video", "AI Music & Audio", "AI Data Analysis"]
    }
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [language, setLanguage] = useState("EN");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark");
    };

    const toggleLanguage = () => {
        setLanguage(language === "EN" ? "AR" : "EN");
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect shadow-lg" : "bg-background/80 backdrop-blur-sm"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">F</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                FreelanceHub
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {/* Categories Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-1">
                                    Categories
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 max-h-[500px] overflow-y-auto">
                                {categories.map((category) => (
                                    <DropdownMenuSub key={category.name}>
                                        <DropdownMenuSubTrigger>
                                            {category.name}
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuSubContent className="w-48">
                                            {category.subcategories.map((sub) => (
                                                <DropdownMenuItem key={sub}>
                                                    {sub}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuSubContent>
                                    </DropdownMenuSub>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Search Bar */}
                        <div className="relative w-96">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search for services..."
                                className="pl-10 pr-4"
                            />
                        </div>

                        {/* Courses */}
                        <Button variant="ghost" className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4" />
                            Courses
                        </Button>

                        {/* Store */}
                        <Button variant="ghost" className="flex items-center gap-2">
                            <ShoppingBag className="w-4 h-4" />
                            Dev Store
                        </Button>
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-2">
                        {/* Language Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleLanguage}
                            className="hidden sm:flex"
                        >
                            <Globe className="w-5 h-5" />
                            <span className="ml-1 text-xs font-semibold">{language}</span>
                        </Button>

                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="hidden sm:flex"
                        >
                            {theme === "light" ? (
                                <Moon className="w-5 h-5" />
                            ) : (
                                <Sun className="w-5 h-5" />
                            )}
                        </Button>

                        {/* Account */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <User className="w-5 h-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem>Sign In</DropdownMenuItem>
                                <DropdownMenuItem>Sign Up</DropdownMenuItem>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-border">
                        <div className="space-y-4">
                            {/* Mobile Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search for services..."
                                    className="pl-10 pr-4 w-full"
                                />
                            </div>

                            {/* Mobile Categories */}
                            <div className="space-y-2">
                                <p className="font-semibold text-sm text-muted-foreground px-2">Categories</p>
                                {categories.map((category) => (
                                    <details key={category.name} className="group">
                                        <summary className="cursor-pointer px-2 py-2 hover:bg-accent rounded-md list-none flex items-center justify-between">
                                            <span>{category.name}</span>
                                            <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <div className="pl-4 mt-1 space-y-1">
                                            {category.subcategories.map((sub) => (
                                                <a
                                                    key={sub}
                                                    href="#"
                                                    className="block px-2 py-1.5 text-sm hover:bg-accent rounded-md"
                                                >
                                                    {sub}
                                                </a>
                                            ))}
                                        </div>
                                    </details>
                                ))}
                            </div>

                            {/* Mobile Links */}
                            <div className="space-y-2 pt-2 border-t border-border">
                                <Button variant="ghost" className="w-full justify-start gap-2">
                                    <GraduationCap className="w-4 h-4" />
                                    Courses
                                </Button>
                                <Button variant="ghost" className="w-full justify-start gap-2">
                                    <ShoppingBag className="w-4 h-4" />
                                    Dev Store
                                </Button>
                                <div className="flex gap-2 pt-2">
                                    <Button
                                        variant="outline"
                                        className="flex-1"
                                        onClick={toggleLanguage}
                                    >
                                        <Globe className="w-4 h-4 mr-2" />
                                        {language}
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="flex-1"
                                        onClick={toggleTheme}
                                    >
                                        {theme === "light" ? (
                                            <Moon className="w-4 h-4 mr-2" />
                                        ) : (
                                            <Sun className="w-4 h-4 mr-2" />
                                        )}
                                        Theme
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
