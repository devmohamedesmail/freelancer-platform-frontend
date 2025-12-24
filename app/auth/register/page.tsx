"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    User,
    Briefcase,
    MapPin,
    Github,
    Chrome,
    ArrowRight,
    ArrowLeft,
    Check,
    Sparkles
} from "lucide-react";

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    title: string;
    location: string;
    acceptTerms: boolean;
}

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        title: "",
        location: "",
        acceptTerms: false,
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const totalSteps = 2;

    const updateField = (field: keyof FormData, value: string | boolean) => {
        setFormData({ ...formData, [field]: value });
        if (errors[field]) {
            setErrors({ ...errors, [field]: undefined });
        }
    };

    const validateStep1 = () => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors: Partial<FormData> = {};

        if (!formData.title) newErrors.title = "Professional title is required";
        if (!formData.location) newErrors.location = "Location is required";
        if (!formData.acceptTerms) newErrors.acceptTerms = "You must accept the terms";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (step === 1 && validateStep1()) {
            setStep(2);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateStep2()) {
            console.log("Register:", formData);
            alert("Registration successful! (Demo)");
        }
    };

    const handleSocialRegister = (provider: string) => {
        console.log(`Register with ${provider}`);
        alert(`Register with ${provider} (Demo)`);
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-1 flex items-center justify-center px-4 py-12 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.15),transparent_50%)]" />

                <div className="w-full max-w-md relative z-10">
                    {/* Header */}
                    <div className="text-center mb-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Join Our Community</span>
                        </div>
                        <h1 className="text-4xl font-bold mb-2">
                            Create Your{" "}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Account
                            </span>
                        </h1>
                        <p className="text-muted-foreground">
                            Start your journey to becoming a top freelancer
                        </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mb-8 animate-fade-in-up animation-delay-200">
                        <div className="flex items-center justify-between mb-2">
                            {[1, 2].map((s) => (
                                <div key={s} className="flex items-center flex-1">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${s < step
                                                ? "bg-primary text-primary-foreground"
                                                : s === step
                                                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                                                    : "bg-muted text-muted-foreground"
                                            }`}
                                    >
                                        {s < step ? <Check className="w-5 h-5" /> : s}
                                    </div>
                                    {s < totalSteps && (
                                        <div
                                            className={`flex-1 h-1 mx-2 rounded-full transition-all ${s < step ? "bg-primary" : "bg-muted"
                                                }`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Account Info</span>
                            <span>Professional Details</span>
                        </div>
                    </div>

                    {/* Register Card */}
                    <div className="glass-effect rounded-2xl p-8 border border-border animate-fade-in-up animation-delay-400">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Step 1: Account Information */}
                            {step === 1 && (
                                <div className="space-y-6 animate-fade-in">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => updateField("name", e.target.value)}
                                                className={`pl-12 h-12 ${errors.name ? "border-red-500" : ""}`}
                                            />
                                        </div>
                                        {errors.name && (
                                            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                value={formData.email}
                                                onChange={(e) => updateField("email", e.target.value)}
                                                className={`pl-12 h-12 ${errors.email ? "border-red-500" : ""}`}
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium mb-2">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                value={formData.password}
                                                onChange={(e) => updateField("password", e.target.value)}
                                                className={`pl-12 pr-12 h-12 ${errors.password ? "border-red-500" : ""
                                                    }`}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="w-5 h-5" />
                                                ) : (
                                                    <Eye className="w-5 h-5" />
                                                )}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                                        )}
                                    </div>

                                    {/* Confirm Password */}
                                    <div>
                                        <label
                                            htmlFor="confirmPassword"
                                            className="block text-sm font-medium mb-2"
                                        >
                                            Confirm Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <Input
                                                id="confirmPassword"
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                value={formData.confirmPassword}
                                                onChange={(e) =>
                                                    updateField("confirmPassword", e.target.value)
                                                }
                                                className={`pl-12 pr-12 h-12 ${errors.confirmPassword ? "border-red-500" : ""
                                                    }`}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOff className="w-5 h-5" />
                                                ) : (
                                                    <Eye className="w-5 h-5" />
                                                )}
                                            </button>
                                        </div>
                                        {errors.confirmPassword && (
                                            <p className="text-sm text-red-500 mt-1">
                                                {errors.confirmPassword}
                                            </p>
                                        )}
                                    </div>

                                    <Button
                                        type="button"
                                        onClick={handleNext}
                                        className="w-full h-12 text-base gap-2"
                                    >
                                        Continue
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </div>
                            )}

                            {/* Step 2: Professional Details */}
                            {step === 2 && (
                                <div className="space-y-6 animate-fade-in">
                                    {/* Professional Title */}
                                    <div>
                                        <label htmlFor="title" className="block text-sm font-medium mb-2">
                                            Professional Title
                                        </label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <Input
                                                id="title"
                                                type="text"
                                                placeholder="Full-Stack Developer"
                                                value={formData.title}
                                                onChange={(e) => updateField("title", e.target.value)}
                                                className={`pl-12 h-12 ${errors.title ? "border-red-500" : ""}`}
                                            />
                                        </div>
                                        {errors.title && (
                                            <p className="text-sm text-red-500 mt-1">{errors.title}</p>
                                        )}
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <label htmlFor="location" className="block text-sm font-medium mb-2">
                                            Location
                                        </label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <Input
                                                id="location"
                                                type="text"
                                                placeholder="Cairo, Egypt"
                                                value={formData.location}
                                                onChange={(e) => updateField("location", e.target.value)}
                                                className={`pl-12 h-12 ${errors.location ? "border-red-500" : ""
                                                    }`}
                                            />
                                        </div>
                                        {errors.location && (
                                            <p className="text-sm text-red-500 mt-1">{errors.location}</p>
                                        )}
                                    </div>

                                    {/* Terms & Conditions */}
                                    <div className="flex items-start gap-3">
                                        <Checkbox
                                            id="terms"
                                            checked={formData.acceptTerms}
                                            onCheckedChange={(checked) =>
                                                updateField("acceptTerms", checked as boolean)
                                            }
                                            className={errors.acceptTerms ? "border-red-500" : ""}
                                        />
                                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                                            I agree to the{" "}
                                            <Link href="/terms" className="text-primary hover:underline">
                                                Terms of Service
                                            </Link>{" "}
                                            and{" "}
                                            <Link href="/privacy" className="text-primary hover:underline">
                                                Privacy Policy
                                            </Link>
                                        </label>
                                    </div>
                                    {errors.acceptTerms && (
                                        <p className="text-sm text-red-500 -mt-4">{errors.acceptTerms}</p>
                                    )}

                                    <div className="flex gap-3">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setStep(1)}
                                            className="flex-1 h-12 gap-2"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                            Back
                                        </Button>
                                        <Button type="submit" className="flex-1 h-12 gap-2">
                                            Create Account
                                            <Check className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </form>

                        {step === 1 && (
                            <>
                                {/* Divider */}
                                <div className="relative my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-border"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-background text-muted-foreground">
                                            Or register with
                                        </span>
                                    </div>
                                </div>

                                {/* Social Register */}
                                <div className="grid grid-cols-2 gap-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => handleSocialRegister("Google")}
                                        className="h-12 gap-2"
                                    >
                                        <Chrome className="w-5 h-5" />
                                        Google
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => handleSocialRegister("GitHub")}
                                        className="h-12 gap-2"
                                    >
                                        <Github className="w-5 h-5" />
                                        GitHub
                                    </Button>
                                </div>
                            </>
                        )}

                        {/* Sign In Link */}
                        <p className="text-center text-sm text-muted-foreground mt-6">
                            Already have an account?{" "}
                            <Link href="/auth/login" className="text-primary font-medium hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
