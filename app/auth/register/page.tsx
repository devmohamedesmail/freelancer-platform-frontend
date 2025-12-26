"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    User,
    ArrowRight,} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "@/context/AuthProvider";
import RegisterHeader from "@/components/auth/register-header";
import AuthLayout from "@/components/layouts/auth-layout";
import toast from "react-hot-toast";


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

            const result = await register({
                username: values.name,
                email: values.email,
                password: values.password,
            });

            if(result){
                toast.success(t('auth.register_success'),{
                    duration:3000,
                    position:'top-center'
                });
            }else{
                toast.error(t('auth.register_failed'),{
                    duration:3000,
                    position:'top-center'
                });
            }

        }
    })





    return (
        <AuthLayout>
            {/* Header */}
            <RegisterHeader />

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



                {/* Sign In Link */}
                <p className="text-center text-sm text-muted-foreground mt-6">

                    {t('auth.already-have-account')}
                    <Link href="/auth/login" className="text-primary font-medium hover:underline">
                        {t('auth.login')}
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
}
