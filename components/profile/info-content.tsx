import React from 'react'
import { useTranslation } from 'react-i18next'
import {
    User,
    Mail,
    MapPin,
    Briefcase,
    Globe,
    Github,
    Linkedin,
    Twitter,
    Edit,
    BookOpen,
    Package,
    Download,
    Star,
    TrendingUp,
} from "lucide-react";
import { Label } from '@/components//ui/label';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from '@/context/AuthProvider';

interface Props {
    isEditing: boolean
}
export default function InfoContent({ isEditing }: Props) {
    const { t } = useTranslation();
    const { user } = useAuth();
    return (
        <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="gradient-card rounded-2xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    {t("profile.personalInfo")}
                </h3>

                <div className="space-y-4">
                    {/* Name */}
                    <div>
                        <Label>{t('auth.name')}</Label>
                        {isEditing ? (
                            <Input
                                value={user?.username}
                                // onChange={(e) => updateField("name", e.target.value)}
                                className="h-11"
                            />
                        ) : (
                            <p className="text-muted-foreground">{user?.username}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <Label>{t('auth.email')}</Label>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <p className="text-muted-foreground">{user?.email}</p>
                        </div>
                    </div>

                  

                    {/* Bio */}
                    <div>
                     
                        <Label>{t('pofile.bio')}</Label>
                        {isEditing ? (
                            <Textarea
                                value={user?.bio}
                                // onChange={(e) => updateField("bio", e.target.value)}
                                rows={4}
                                className="resize-none"
                            />
                        ) : (
                            <p className="text-muted-foreground">{user?.bio}</p>
                        )}
                    </div>

                    {/* Location */}
                    <div>
                          <Label>{t('pofile.location')}</Label>
                        {isEditing ? (
                            <Input
                                value={user?.country}
                                // onChange={(e) => updateField("location", e.target.value)}
                                className="h-11"
                            />
                        ) : (
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-muted-foreground" />
                                <p className="text-muted-foreground">{user?.country}</p>
                            </div>
                        )}
                    </div>

                    {/* Social Links */}
                  
                </div>
            </div>

            {/* Published Courses */}
           

            {/* Published Tools */}
          
        </div>
    )
}
