import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LoginHeader() {
    const { t } = useTranslation()
    return (
        <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-4xl font-bold mb-2">
                {t('auth.welcome_back')}
            </h1>
            <p className="text-muted-foreground">
                {t('auth.login_to_continue')}
            </p>
        </div>
    )
}
