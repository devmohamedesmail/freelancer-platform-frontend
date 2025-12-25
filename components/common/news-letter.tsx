"use client";

import React from "react";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useTranslation } from "react-i18next";

export default function NewsLetter() {
    const {t}=useTranslation()
  return (
     <div className="border-b border-border">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">
                               
                                {t('newsletter.title')}
                            </h3>
                            <p className="text-muted-foreground">
                                {t('newsletter.description')}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder={t("newsletter.enter_email")}
                                className="flex-1"
                            />
                            <Button className="gradient-primary text-white px-6">
                                {t('newsletter.button')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
  )
}
