"use client";
import { ArrowRight } from "lucide-react";
import { CategoryCard } from "../CategoryCard";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import { useCategories } from "@/context/CategoriesProvider";



export function CategoriesSection() {
    const { t } = useTranslation();
    const { categories } = useCategories();

    return (
        <section className="py-20 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('categories.title_part1')} {"  "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {t('categories.title_highlight')}
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('categories.subtitle')}
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {categories && categories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Button
                        variant="outline"
                        size="lg"
                        className="group"
                    >
                        {t('categories.view_all')}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
