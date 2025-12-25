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
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import Logo from "./logo";
import DestopNavigation from "./destop-navigation";
import { useRouter } from "next/navigation";
import MenuMobile from "./menu-mobile";

const categories = [
    {
        name: "navbar.categories_list.graphics_design",
        subcategories: [
            "navbar.subcategories.logo_design",
            "navbar.subcategories.brand_style_guides",
            "navbar.subcategories.game_design",
            "navbar.subcategories.graphics_streamers",
            "navbar.subcategories.business_cards",
            "navbar.subcategories.illustration",
            "navbar.subcategories.pattern_design"
        ]
    },
    {
        name: "navbar.categories_list.programming_tech",
        subcategories: [
            "navbar.subcategories.website_development",
            "navbar.subcategories.mobile_apps",
            "navbar.subcategories.desktop_applications",
            "navbar.subcategories.game_development",
            "navbar.subcategories.ai_development",
            "navbar.subcategories.blockchain",
            "navbar.subcategories.cybersecurity"
        ]
    },
    {
        name: "navbar.categories_list.digital_marketing",
        subcategories: [
            "navbar.subcategories.social_media_marketing",
            "navbar.subcategories.seo",
            "navbar.subcategories.content_marketing",
            "navbar.subcategories.video_marketing",
            "navbar.subcategories.email_marketing",
            "navbar.subcategories.influencer_marketing",
            "navbar.subcategories.community_management"
        ]
    },
    {
        name: "navbar.categories_list.video_animation",
        subcategories: [
            "navbar.subcategories.video_editing",
            "navbar.subcategories.animation",
            "navbar.subcategories.whiteboard_explainers",
            "navbar.subcategories.video_ads",
            "navbar.subcategories.lyric_videos",
            "navbar.subcategories.subtitles_captions"
        ]
    },
    {
        name: "navbar.categories_list.writing_translation",
        subcategories: [
            "navbar.subcategories.articles_blogs",
            "navbar.subcategories.translation",
            "navbar.subcategories.proofreading_editing",
            "navbar.subcategories.resume_writing",
            "navbar.subcategories.technical_writing",
            "navbar.subcategories.creative_writing",
            "navbar.subcategories.grant_writing"
        ]
    },
    {
        name: "navbar.categories_list.music_audio",
        subcategories: [
            "navbar.subcategories.music_production",
            "navbar.subcategories.voice_over",
            "navbar.subcategories.audio_editing",
            "navbar.subcategories.sound_design",
            "navbar.subcategories.podcast_editing",
            "navbar.subcategories.audio_ads",
            "navbar.subcategories.mixing_mastering"
        ]
    },
    {
        name: "navbar.categories_list.business",
        subcategories: [
            "navbar.subcategories.virtual_assistant",
            "navbar.subcategories.market_research",
            "navbar.subcategories.business_plans",
            "navbar.subcategories.legal_consulting",
            "navbar.subcategories.financial_consulting",
            "navbar.subcategories.presentations",
            "navbar.subcategories.data_entry"
        ]
    },
    {
        name: "navbar.categories_list.ai_services",
        subcategories: [
            "navbar.subcategories.ai_applications",
            "navbar.subcategories.ai_chatbot",
            "navbar.subcategories.ai_content",
            "navbar.subcategories.ai_image_generation",
            "navbar.subcategories.ai_video",
            "navbar.subcategories.ai_music_audio",
            "navbar.subcategories.ai_data_analysis"
        ]
    }
];

export function Navbar() {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const router = useRouter();

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
        const newLang = i18n.language === "en" ? "ar" : "en";
        i18n.changeLanguage(newLang);
        document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', newLang);
    };

    const currentLanguage = i18n.language === "ar" ? "AR" : "EN";

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect shadow-lg" : "bg-background/80 backdrop-blur-sm"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <DestopNavigation />

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
                            <span className="ml-1 text-xs font-semibold">{currentLanguage}</span>
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
                                <DropdownMenuItem onClick={() => router.push('/auth/login')}>{t('auth.login')}</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => router.push('/auth/register')}>{t('auth.register')}</DropdownMenuItem>
                                <DropdownMenuItem>{t('auth.profile')}</DropdownMenuItem>
                                <DropdownMenuItem>{t('auth.settings')}</DropdownMenuItem>
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


                <MenuMobile
                    isMobileMenuOpen={isMobileMenuOpen}
                    toggleLanguage={toggleLanguage}
                    currentLanguage={currentLanguage}
                    toggleTheme={toggleTheme}
                    theme={theme}
                   
                    
                />

              
            </div>
        </nav>
    );
}
