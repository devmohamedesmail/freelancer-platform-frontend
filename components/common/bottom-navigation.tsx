'use client'
import Link from 'next/link'
import React from 'react'
import { Home, User, GraduationCap, Hammer } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/context/AuthProvider';


const NavItem = ({ href, icon: Icon, title }: { href?: string, icon?: React.ElementType, title?: string }) => {
    return (
        <Link href={href || '#'}>
            <div className="flex flex-col items-center">
                {Icon && <Icon className='text-white w-6 h-6' />}
                <p className='text-white text-sm'>{title}</p>
            </div>
        </Link>
    )
}

interface User{
    name:string
}
export default function BottomNavigation() {
    const { t } = useTranslation()
    const { user } = useAuth();
    return (
        <div className='fixed bottom-0 right-0 left-0 bg-gradient-to-r from-blue-500 to-green-900  py-3 px-5 block md:hidden z-50'>
            <div className='flex flex-row justify-between items-center'>
                <NavItem
                    icon={Home}
                    href='/' title={t('common.home')} />
                <NavItem
                    icon={User}
                    href={user ? '/auth/profile' : "/auth/login"} title={t('common.account')} />
                <NavItem
                    icon={GraduationCap}
                    href='/courses' title={t('common.courses')} />
                <NavItem
                    icon={Hammer}
                    href='/store' title={t('common.store')} />


            </div>

        </div>
    )
}
