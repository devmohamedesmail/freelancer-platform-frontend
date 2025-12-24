"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
    name: string;
    icon: LucideIcon;
    jobCount: number;
    color: string;
}

export function CategoryCard({ name, icon: Icon, jobCount, color }: CategoryCardProps) {
    return (
        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
            <CardContent className="p-6">
                <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
                    style={{
                        background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
                    }}
                >
                    <Icon className="w-7 h-7" style={{ color }} />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {name}
                </h3>
                <p className="text-sm text-muted-foreground">
                    {jobCount.toLocaleString()} services available
                </p>
            </CardContent>
        </Card>
    );
}
