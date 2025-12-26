"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
    User,
    Mail,
    MapPin,
    Briefcase,
    Globe,
    Github,
    Linkedin,
    Twitter,
    Edit,
    Save,
    X,
    Camera,
    BookOpen,
    Package,
    Download,
    Star,
    TrendingUp,
    Eye,
    Settings
} from "lucide-react";
import { currentUser } from "@/lib/userData";
import { coursesData } from "@/lib/coursesData";
import { storeProducts } from "@/lib/storeData";
import { useTranslation } from "react-i18next";
import ProfileHeader from "@/components/profile/profile-header";
import PersonalInfo from "@/components/profile/personal-info";
import InfoContent from "@/components/profile/info-content";

export default function ProfilePage() {
    const { t } = useTranslation()
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState(currentUser);



    const handleCancel = () => {
        setUserData(currentUser);
        setIsEditing(false);
    };

    // const updateField = (field: string, value: string) => {
    //     setUserData({ ...userData, [field]: value });
    // };

    // Get published courses and tools
    const publishedCourses = coursesData.filter((course) =>
        userData.publishedCourses.includes(course.id)
    );
    const publishedTools = storeProducts.filter((tool) =>
        userData.publishedTools.includes(tool.id)
    );

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-1 py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <ProfileHeader
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                        handleCancel={handleCancel}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Personal Info */}
                        <PersonalInfo
                            isEditing={isEditing}

                        />

                        {/* Right Column - Editable Info & Content */}
                        <InfoContent isEditing={isEditing} />
                       
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
