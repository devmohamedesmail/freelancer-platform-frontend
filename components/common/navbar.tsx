"use client";
import { useState, useEffect } from "react";
import { Menu, X, Globe, User, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import Logo from "./logo";
import DestopNavigation from "./destop-navigation";
import { useRouter } from "next/navigation";
import MenuMobile from "./menu-mobile";
import { useAuth } from "@/context/AuthProvider";
import toast from 'react-hot-toast';



export function Navbar() {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const router = useRouter();
    const { user, logout } = useAuth()



    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark");
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "ar" : "en";
        i18n.changeLanguage(newLang);
        document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', newLang);
    };

    const currentLanguage = i18n.language === "ar" ? "AR" : "EN";



    const handle_logout = () => {
        try {
            logout();
            toast.success(t('auth.logout_success'),{
                duration:3000,
                position: 'top-center',
               
            });
            router.push("/")
        } catch (error) {
            toast.error(t('auth.logout_success'),{
                duration:3000,
                position: 'top-center',
             
            });
        }
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect shadow-lg" : "bg-background/80 backdrop-blur-sm"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Logo />
                    <DestopNavigation />

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-2">
                        {/* Language Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleLanguage}
                            className="hidden sm:flex"
                        >
                            <Globe className="w-5 h-5" />
                            <span className="ml-1 text-xs font-semibold">{currentLanguage}</span>
                        </Button>

                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="hidden sm:flex"
                        >
                            {theme === "light" ? (
                                <Moon className="w-5 h-5" />
                            ) : (
                                <Sun className="w-5 h-5" />
                            )}
                        </Button>

                        {/* Account */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <User className="w-5 h-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">


                                {user ? (
                                    <>
                                        <DropdownMenuItem onClick={() => router.push('/auth/profile')}>{t('auth.profile')}</DropdownMenuItem>
                                        <DropdownMenuItem>{t('auth.settings')}</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handle_logout()}>{t('auth.logout')}</DropdownMenuItem>
                                    </>
                                ) : (
                                    <>
                                        <DropdownMenuItem onClick={() => router.push('/auth/login')}>{t('auth.login')}</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => router.push('/auth/register')}>{t('auth.register')}</DropdownMenuItem></>
                                )}


                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </Button>
                    </div>
                </div>


                <MenuMobile
                    isMobileMenuOpen={isMobileMenuOpen}
                    toggleLanguage={toggleLanguage}
                    currentLanguage={currentLanguage}
                    toggleTheme={toggleTheme}
                    theme={theme}


                />


            </div>
        </nav>
    );
}
