"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { useAuth } from "@/context/AuthProvider";
import AuthLayout from "@/components/layouts/auth-layout";
import LoginHeader from "@/components/auth/login-header";
import { Label } from "@/components/ui/label";
import SocialLogin from "@/components/auth/social-login";
import toast from 'react-hot-toast';

export default function LoginPage() {
    const { t } = useTranslation()
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const { login } = useAuth()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            const result = await login({ identifier: values.email, password: values.password })
            if (result) {
                toast.success(t('auth.login_success', {
                    duration: 5000,
                    position: 'top-center',

                }))
            } else {
                toast.error(t('auth.login_failed', {
                    duration: 5000,
                    position: 'top-center',

                }))
            }
        },
    })

    return (
        <AuthLayout>
            <LoginHeader />
            <div className="glass-effect rounded-2xl p-8 border border-border animate-fade-in-up animation-delay-200">
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <Label>{t('auth.email')}</Label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className={`pl-12 h-12 `}
                            />
                        </div>

                    </div>

                    {/* Password Field */}
                    <div>
                        <Label> {t('auth.password')}</Label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                className={`pl-12 pr-12 h-12 `}
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
                                {t('auth.remember_me')}
                            </label>
                        </div>
                        <Link
                            href="/auth/forgot-password"
                            className="text-sm text-primary hover:underline"
                        >
                            {t('auth.forget_password')}
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit"
                        disabled={formik.isSubmitting}
                        className="w-full h-12 text-base gap-2" size="lg">
                        {t('auth.login')}
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                </form>



                {/* Social Login */}
                <SocialLogin />


                {/* Sign Up Link */}
                <p className="text-center text-sm text-muted-foreground mt-6">
                    {t('auth.dont_have_account')}
                    <Link href="/auth/register" className="text-primary font-medium hover:underline">
                        {t('auth.create_account')}
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
}
