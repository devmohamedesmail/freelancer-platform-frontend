import React from 'react'
import { useTranslation } from 'react-i18next'
import { Sparkles } from "lucide-react";

export default function RegisterHeader() {
    const { t } = useTranslation()
    return (
        <div className="text-center mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                    {t('auth.join-our-community')}
                </span>
            </div>
            <h1 className="text-4xl font-bold mb-2">
                {t('auth.create-your-account')}
            </h1>
            <p className="text-muted-foreground">

                {t('auth.register_description')}
            </p>
        </div>
    )
}
