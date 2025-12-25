import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Logo() {
    const { t } = useTranslation();
    return (
        <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
                {/* <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">F</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t('navbar.brand')}
                </span> */}
                LOGO
            </Link>
        </div>
    )
}
