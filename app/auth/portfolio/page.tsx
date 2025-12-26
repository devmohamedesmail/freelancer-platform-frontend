"use client";

import React from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Star,
    MapPin,
    Calendar,
    TrendingUp,
    Download,
    BookOpen,
    Package,
    Code,
    ExternalLink,
    Github,
    Globe,
    Linkedin,
    Twitter,
    Award,
    Users,
    Sparkles,
    CheckCircle2
} from "lucide-react";
import { currentUser, skillCategories } from "@/lib/userData";
import { coursesData } from "@/lib/coursesData";
import { storeProducts } from "@/lib/storeData";

export default function PortfolioPage() {
   
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            

            <Footer />
        </div>
    );
}
