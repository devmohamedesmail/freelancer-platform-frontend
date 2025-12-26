import React from 'react'
import { Search, Menu, X, Globe, User, Moon, Sun, ShoppingBag, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCategories } from "@/context/CategoriesProvider";
import { useTranslation } from 'react-i18next';


interface Porps {
    isMobileMenuOpen: boolean,
    toggleLanguage: () => void,
    currentLanguage: string,
    toggleTheme: () => void,
    theme: string,
}


export default function MenuMobile({
    isMobileMenuOpen,
    toggleLanguage,
    currentLanguage,
    toggleTheme,
    theme,

}: Porps) {
    const { categories } = useCategories()
    const { t } = useTranslation()
    return (
        <div>

            {isMobileMenuOpen && (
                <div className="lg:hidden py-4 border-t border-border">
                    <div className="space-y-4">
                        {/* Mobile Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder={t('navbar.search_placeholder')}
                                className="pl-10 pr-4 w-full"
                            />
                        </div>

                        {/* Mobile Categories */}
                        <div className="space-y-2">
                            <p className="font-semibold text-sm text-muted-foreground px-2">{t('navbar.categories')}</p>
                            {categories.map((category) => (
                                <details key={category.name_ar} className="group">
                                    <summary className="cursor-pointer px-2 py-2 hover:bg-accent rounded-md list-none flex items-center justify-between">
                                        <span>{t(category.name_ar)}</span>
                                        <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="pl-4 mt-1 space-y-1">
                                        {category.subcategories?.map((sub) => (
                                            <a
                                                key={sub.id}
                                                href="#"
                                                className="block px-2 py-1.5 text-sm hover:bg-accent rounded-md"
                                            >
                                                {t(sub.name_ar)}
                                            </a>
                                        ))}
                                    </div>
                                </details>
                            ))}
                        </div>

                        {/* Mobile Links */}
                        <div className="space-y-2 pt-2 border-t border-border">
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <GraduationCap className="w-4 h-4" />
                                {t('navbar.courses')}
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <ShoppingBag className="w-4 h-4" />
                                {t('navbar.dev_store')}
                            </Button>

                            <div className="flex gap-2 pt-2">
                                <Button
                                    variant="outline"
                                    className="flex-1"
                                    onClick={toggleLanguage}
                                >
                                    <Globe className="w-4 h-4 mr-2" />
                                    {currentLanguage}
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex-1"
                                    onClick={toggleTheme}
                                >
                                    {theme === "light" ? (
                                        <Moon className="w-4 h-4 mr-2" />
                                    ) : (
                                        <Sun className="w-4 h-4 mr-2" />
                                    )}
                                    {t('navbar.theme')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}
