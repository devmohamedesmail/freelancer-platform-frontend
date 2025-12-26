"use client";
import { Search, ShoppingBag, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import { useCategories } from "@/context/CategoriesProvider";
import i18n from "@/lib/i18n";





export default function DestopNavigation() {
    const { t } = useTranslation();
    const { categories } = useCategories()
    return (
        <div className="hidden lg:flex items-center space-x-6">
            {/* Categories Dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1">
                        {t('navbar.categories')}
                        <ChevronDown className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 max-h-[500px] overflow-y-auto">
                    {categories && categories.map((category) => (
                        <DropdownMenuSub key={category.name_en}>
                            <DropdownMenuSubTrigger>
                                {i18n.language === 'ar' ? category.name_ar : category.name_en}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="w-48">
                                {category?.subcategories?.map((sub) => (
                                    <DropdownMenuItem key={sub.id}>
                                        {i18n.language === 'ar' ? sub.name_ar : sub.name_en}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Bar */}
            <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder={t('navbar.search_placeholder')}
                    className="pl-10 pr-4"
                />
            </div>

            {/* Courses */}
            <Link href={'/courses'} className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                {t('navbar.courses')}
            </Link>

            {/* Store */}
            <Link href={'/store'} className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                {t('navbar.dev_store')}
            </Link>
        </div>
    )
}
