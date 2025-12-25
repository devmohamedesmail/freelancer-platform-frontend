"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    User,
    Github,
    Chrome,
    ArrowRight,
    Check,
    Sparkles
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "@/context/AuthProvider";


export default function RegisterPage() {
    const { t } = useTranslation()
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const { register } = useAuth();




    const totalSteps = 2;


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, t('auth.name_min_length'))
                .required(t('auth.name_required')),

            email: Yup.string()
                .email(t('auth.email_invalid'))
                .required(t('auth.email_required')),

            password: Yup.string()
                .min(8, t('auth.password_min_length'))
                .required(t('auth.password_required')),
        }),
        onSubmit: async (values) => {
            console.log("values", values.name, values.email, values.password);
            const result = await register({
                username: values.name,
                email: values.email,
                password: values.password,
            });
            
        }
    })





    const handleSocialRegister = (provider: string) => {
        console.log(`Register with ${provider}`);
        alert(`Register with ${provider} (Demo)`);
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-1 flex items-center justify-center px-4 py-12 relative overflow-hidden mt-10">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.15),transparent_50%)]" />

                <div className="w-full max-w-md relative z-10">
                    {/* Header */}
                    <div className="text-center mb-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                {t('auth.join-our-community')}
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold mb-2">
                            {t('auth.create-your-account')}
                        </h1>
                        <p className="text-muted-foreground">

                            {t('auth.register_description')}
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
                        <form className="space-y-6" onSubmit={formik.handleSubmit}>
                            <div className="space-y-6 animate-fade-in">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        {t('auth.full-name')}
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            className={`pl-12 h-12 ${formik.touched.name && formik.errors.name ? "border-red-500" : ""
                                                }`}
                                        />
                                    </div>
                                    {formik.touched.name && formik.errors.name && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {formik.errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        {t('auth.email')}
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            className={`pl-12 h-12 ${formik.touched.email && formik.errors.email ? "border-red-500" : ""
                                                }`}
                                        />
                                    </div>
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {formik.errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium mb-2">
                                        {t('auth.password')}
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            className={`pl-12 pr-12 h-12 ${formik.touched.password && formik.errors.password
                                                ? "border-red-500"
                                                : ""
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
                                    {formik.touched.password && formik.errors.password && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {formik.errors.password}
                                        </p>
                                    )}
                                </div>




                                <Button
                                    type="submit"
                                    disabled={formik.isSubmitting}
                                  
                                    className="w-full h-12 text-base gap-2"
                                >
                                    {t('auth.create_account')}
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </div>
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
                                            {t('or')}
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
                                        {t('auth.google')}
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => handleSocialRegister("GitHub")}
                                        className="h-12 gap-2"
                                    >
                                        <Github className="w-5 h-5" />
                                        {t('auth.github')}
                                    </Button>
                                </div>
                            </>
                        )}

                        {/* Sign In Link */}
                        <p className="text-center text-sm text-muted-foreground mt-6">

                            {t('auth.already-have-account')}
                            <Link href="/auth/login" className="text-primary font-medium hover:underline">
                                {t('auth.login')}
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
