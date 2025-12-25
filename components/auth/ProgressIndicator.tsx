import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ProgressIndicator() {
    const { t } = useTranslation()
    return (
        <div className="mb-8 animate-fade-in-up animation-delay-200">
            <div className="flex items-center justify-between mb-2">
                {[1, 2].map((s) => (
                    <div key={s} className="flex items-center flex-1">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${s < step
                                ? "bg-primary text-primary-foreground"
                                : s === step
                                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                                    : "bg-muted text-muted-foreground"
                                }`}
                        >
                            {s < step ? <Check className="w-5 h-5" /> : s}
                        </div>
                        {s < totalSteps && (
                            <div
                                className={`flex-1 h-1 mx-2 rounded-full transition-all ${s < step ? "bg-primary" : "bg-muted"
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
                <span>{t('auth.account_info')}</span>
                <span>{t('auth.professional_destails')}</span>
            </div>
        </div>
    )
}
