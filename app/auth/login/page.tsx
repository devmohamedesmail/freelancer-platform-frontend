"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    Github,
    Chrome,
    ArrowRight,
    Sparkles,
    Shield
} from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const validateForm = () => {
        const newErrors: { email?: string; password?: string } = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Login:", { email, password, rememberMe });
            alert("Login successful! (Demo)");
        }
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`Login with ${provider}`);
        alert(`Login with ${provider} (Demo)`);
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
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Secure Login</span>
                        </div>
                        <h1 className="text-4xl font-bold mb-2">
                            Welcome <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Back</span>
                        </h1>
                        <p className="text-muted-foreground">
                            Sign in to access your dashboard and continue learning
                        </p>
                    </div>

                    {/* Login Card */}
                    <div className="glass-effect rounded-2xl p-8 border border-border animate-fade-in-up animation-delay-200">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Field */}
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
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (errors.email) setErrors({ ...errors, email: undefined });
                                        }}
                                        className={`pl-12 h-12 ${errors.email ? "border-red-500" : ""}`}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Password Field */}
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
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            if (errors.password) setErrors({ ...errors, password: undefined });
                                        }}
                                        className={`pl-12 pr-12 h-12 ${errors.password ? "border-red-500" : ""}`}
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

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="remember"
                                        checked={rememberMe}
                                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                                    />
                                    <label
                                        htmlFor="remember"
                                        className="text-sm text-muted-foreground cursor-pointer"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    href="/auth/forgot-password"
                                    className="text-sm text-primary hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <Button type="submit" className="w-full h-12 text-base gap-2" size="lg">
                                Sign In
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-background text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => handleSocialLogin("Google")}
                                className="h-12 gap-2"
                            >
                                <Chrome className="w-5 h-5" />
                                Google
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => handleSocialLogin("GitHub")}
                                className="h-12 gap-2"
                            >
                                <Github className="w-5 h-5" />
                                GitHub
                            </Button>
                        </div>

                        {/* Sign Up Link */}
                        <p className="text-center text-sm text-muted-foreground mt-6">
                            Don't have an account?{" "}
                            <Link href="/auth/register" className="text-primary font-medium hover:underline">
                                Sign up for free
                            </Link>
                        </p>
                    </div>

                    {/* Features */}
                    <div className="mt-8 grid grid-cols-3 gap-4 animate-fade-in-up animation-delay-400">
                        {[
                            { icon: Sparkles, text: "Premium Content" },
                            { icon: Shield, text: "Secure & Safe" },
                            { icon: ArrowRight, text: "Quick Access" },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="text-center p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                            >
                                <feature.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                                <p className="text-xs text-muted-foreground">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
