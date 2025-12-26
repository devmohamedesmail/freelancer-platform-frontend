import React, { ReactNode } from 'react'
import { Navbar } from '../common/navbar'
import { useTranslation } from 'react-i18next'
import { Footer } from '../common/footer'


interface AuthLayoutProps {
    children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const { t } = useTranslation()
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-1 flex items-center justify-center px-4 py-12 relative overflow-hidden mt-10">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.15),transparent_50%)]" />

                <div className="w-full max-w-md relative z-10">
                    {children}
                </div>
             
            </main>
            <Footer />
        </div>
    )
}
