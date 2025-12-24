"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState(currentUser);

    const handleSave = () => {
        console.log("Saving user data:", userData);
        setIsEditing(false);
        alert("Profile updated successfully! (Demo)");
    };

    const handleCancel = () => {
        setUserData(currentUser);
        setIsEditing(false);
    };

    const updateField = (field: string, value: string) => {
        setUserData({ ...userData, [field]: value });
    };

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
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-bold mb-2">My Profile</h1>
                            <p className="text-muted-foreground">
                                Manage your account information and published content
                            </p>
                        </div>
                        {!isEditing ? (
                            <Button onClick={() => setIsEditing(true)} className="gap-2">
                                <Edit className="w-4 h-4" />
                                Edit Profile
                            </Button>
                        ) : (
                            <div className="flex gap-3">
                                <Button variant="outline" onClick={handleCancel} className="gap-2">
                                    <X className="w-4 h-4" />
                                    Cancel
                                </Button>
                                <Button onClick={handleSave} className="gap-2">
                                    <Save className="w-4 h-4" />
                                    Save Changes
                                </Button>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Personal Info */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Avatar Card */}
                            <div className="gradient-card rounded-2xl p-6 border border-border">
                                <div className="text-center">
                                    <div className="relative inline-block mb-4">
                                        <img
                                            src={userData.avatar}
                                            alt={userData.name}
                                            className="w-32 h-32 rounded-full border-4 border-primary/20"
                                        />
                                        {isEditing && (
                                            <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                                                <Camera className="w-5 h-5" />
                                            </button>
                                        )}
                                        {userData.verified && (
                                            <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                                                <Star className="w-4 h-4 fill-current" />
                                            </div>
                                        )}
                                    </div>
                                    <h2 className="text-2xl font-bold mb-1">{userData.name}</h2>
                                    <p className="text-muted-foreground mb-4">{userData.title}</p>
                                    {userData.verified && (
                                        <Badge className="mb-4">
                                            <Star className="w-3 h-3 mr-1 fill-current" />
                                            Verified Creator
                                        </Badge>
                                    )}
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">
                                            {userData.totalStudents.toLocaleString()}
                                        </div>
                                        <div className="text-xs text-muted-foreground">Students</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">
                                            {userData.totalDownloads.toLocaleString()}
                                        </div>
                                        <div className="text-xs text-muted-foreground">Downloads</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">
                                            {userData.rating}
                                        </div>
                                        <div className="text-xs text-muted-foreground">Rating</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">
                                            {userData.yearsOfExperience}+
                                        </div>
                                        <div className="text-xs text-muted-foreground">Years Exp</div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="gradient-card rounded-2xl p-6 border border-border">
                                <h3 className="font-semibold mb-4 flex items-center gap-2">
                                    <Settings className="w-5 h-5" />
                                    Quick Actions
                                </h3>
                                <div className="space-y-2">
                                    <Button variant="outline" className="w-full justify-start gap-2">
                                        <Eye className="w-4 h-4" />
                                        View Public Portfolio
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start gap-2">
                                        <Settings className="w-4 h-4" />
                                        Account Settings
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Editable Info & Content */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Personal Information */}
                            <div className="gradient-card rounded-2xl p-6 border border-border">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    Personal Information
                                </h3>

                                <div className="space-y-4">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Full Name
                                        </label>
                                        {isEditing ? (
                                            <Input
                                                value={userData.name}
                                                onChange={(e) => updateField("name", e.target.value)}
                                                className="h-11"
                                            />
                                        ) : (
                                            <p className="text-muted-foreground">{userData.name}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Email Address
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-muted-foreground" />
                                            <p className="text-muted-foreground">{userData.email}</p>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Professional Title
                                        </label>
                                        {isEditing ? (
                                            <Input
                                                value={userData.title}
                                                onChange={(e) => updateField("title", e.target.value)}
                                                className="h-11"
                                            />
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4 text-muted-foreground" />
                                                <p className="text-muted-foreground">{userData.title}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Bio */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Bio</label>
                                        {isEditing ? (
                                            <Textarea
                                                value={userData.bio}
                                                onChange={(e) => updateField("bio", e.target.value)}
                                                rows={4}
                                                className="resize-none"
                                            />
                                        ) : (
                                            <p className="text-muted-foreground">{userData.bio}</p>
                                        )}
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Location
                                        </label>
                                        {isEditing ? (
                                            <Input
                                                value={userData.location}
                                                onChange={(e) => updateField("location", e.target.value)}
                                                className="h-11"
                                            />
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-muted-foreground" />
                                                <p className="text-muted-foreground">{userData.location}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Social Links */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Website
                                            </label>
                                            {isEditing ? (
                                                <Input
                                                    value={userData.website || ""}
                                                    onChange={(e) => updateField("website", e.target.value)}
                                                    placeholder="https://yourwebsite.com"
                                                    className="h-11"
                                                />
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    <Globe className="w-4 h-4 text-muted-foreground" />
                                                    <a
                                                        href={userData.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:underline"
                                                    >
                                                        {userData.website}
                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                GitHub
                                            </label>
                                            {isEditing ? (
                                                <Input
                                                    value={userData.github || ""}
                                                    onChange={(e) => updateField("github", e.target.value)}
                                                    placeholder="https://github.com/username"
                                                    className="h-11"
                                                />
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    <Github className="w-4 h-4 text-muted-foreground" />
                                                    <a
                                                        href={userData.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:underline"
                                                    >
                                                        GitHub
                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                LinkedIn
                                            </label>
                                            {isEditing ? (
                                                <Input
                                                    value={userData.linkedin || ""}
                                                    onChange={(e) => updateField("linkedin", e.target.value)}
                                                    placeholder="https://linkedin.com/in/username"
                                                    className="h-11"
                                                />
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    <Linkedin className="w-4 h-4 text-muted-foreground" />
                                                    <a
                                                        href={userData.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:underline"
                                                    >
                                                        LinkedIn
                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Twitter
                                            </label>
                                            {isEditing ? (
                                                <Input
                                                    value={userData.twitter || ""}
                                                    onChange={(e) => updateField("twitter", e.target.value)}
                                                    placeholder="https://twitter.com/username"
                                                    className="h-11"
                                                />
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    <Twitter className="w-4 h-4 text-muted-foreground" />
                                                    <a
                                                        href={userData.twitter}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:underline"
                                                    >
                                                        Twitter
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Published Courses */}
                            <div className="gradient-card rounded-2xl p-6 border border-border">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5" />
                                    Published Courses ({publishedCourses.length})
                                </h3>

                                <div className="space-y-4">
                                    {publishedCourses.map((course) => (
                                        <div
                                            key={course.id}
                                            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 transition-all"
                                        >
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-20 h-20 rounded-lg object-cover"
                                            />
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1">{course.title}</h4>
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        {course.rating}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <TrendingUp className="w-4 h-4" />
                                                        {course.students.toLocaleString()} students
                                                    </div>
                                                    <div className="font-semibold text-primary">
                                                        ${course.price}
                                                    </div>
                                                </div>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                <Edit className="w-4 h-4 mr-2" />
                                                Edit
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Published Tools */}
                            <div className="gradient-card rounded-2xl p-6 border border-border">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Package className="w-5 h-5" />
                                    Published Tools ({publishedTools.length})
                                </h3>

                                <div className="space-y-4">
                                    {publishedTools.map((tool) => (
                                        <div
                                            key={tool.id}
                                            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 transition-all"
                                        >
                                            <img
                                                src={tool.image}
                                                alt={tool.name}
                                                className="w-20 h-20 rounded-lg object-cover"
                                            />
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1">{tool.name}</h4>
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        {tool.rating}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Download className="w-4 h-4" />
                                                        {tool.downloads.toLocaleString()} downloads
                                                    </div>
                                                    <div className="font-semibold text-primary">
                                                        ${tool.price}
                                                    </div>
                                                </div>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                <Edit className="w-4 h-4 mr-2" />
                                                Edit
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
