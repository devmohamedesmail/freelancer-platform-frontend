"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface Category {
    name_ar: string;
    name_en: string;
    icon: string;

}

interface CategoryCardProps {
    category: Category;
}

export function CategoryCard({ category }:CategoryCardProps) {
    const {t,i18n}=useTranslation()
    return (
        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
            <CardContent className="p-6">
                <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
                    
                >
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                   
                    {i18n.language==='ar' ? category.name_ar : category.name_en}
                </h3>
              
            </CardContent>
        </Card>
    );
}
