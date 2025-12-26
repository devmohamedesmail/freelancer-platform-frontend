'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import i18n from "@/lib/i18n";
import AuthProvider from "@/context/AuthProvider";
import CategoriesProvider from "@/context/CategoriesProvider";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [language, setLanguage] = useState('ar');
  const [direction, setDirection] = useState('rtl');

  useEffect(() => {
    // Initialize i18n
    const currentLang = i18n.language || 'ar';
    setLanguage(currentLang);
    setDirection(currentLang === 'ar' ? 'rtl' : 'ltr');

    // Listen for language changes
    const handleLanguageChange = (lng: string) => {
      setLanguage(lng);
      setDirection(lng === 'ar' ? 'rtl' : 'ltr');
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <html lang={language} dir={direction}>
      <head>
        <title>FreelanceHub - Find Top Freelancers & Services</title>
        <meta name="description" content="Connect with talented freelancers worldwide. Browse categories, hire experts, learn new skills with courses, and access premium developer tools." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CategoriesProvider>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </CategoriesProvider>

      </body>
    </html>
  );
}
