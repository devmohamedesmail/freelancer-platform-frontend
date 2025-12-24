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
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const footerLinks = {
    categories: [
        "Graphics & Design",
        "Programming & Tech",
        "Digital Marketing",
        "Video & Animation",
        "Writing & Translation",
    ],
    about: [
        "About Us",
        "Careers",
        "Press & News",
        "Partnerships",
        "Privacy Policy",
        "Terms of Service",
    ],
    support: [
        "Help & Support",
        "Trust & Safety",
        "Selling on FreelanceHub",
        "Buying on FreelanceHub",
        "Community",
    ],
    community: [
        "Events",
        "Blog",
        "Forum",
        "Affiliates",
        "Invite a Friend",
    ],
};

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t border-border">
            {/* Newsletter Section */}
            <div className="border-b border-border">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">
                                Subscribe to Our Newsletter
                            </h3>
                            <p className="text-muted-foreground">
                                Get the latest updates, tips, and exclusive offers delivered to your inbox
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1"
                            />
                            <Button className="gradient-primary text-white px-6">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">F</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                FreelanceHub
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            The world's leading freelance marketplace connecting talented professionals with amazing opportunities.
                        </p>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="icon" className="hover:text-primary">
                                <Facebook className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-primary">
                                <Twitter className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-primary">
                                <Instagram className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-primary">
                                <Linkedin className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-primary">
                                <Youtube className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2">
                            {footerLinks.categories.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h4 className="font-semibold mb-4">About</h4>
                        <ul className="space-y-2">
                            {footerLinks.about.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h4 className="font-semibold mb-4">Community</h4>
                        <ul className="space-y-2">
                            {footerLinks.community.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-border pt-8 mb-8">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Mail className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Email</p>
                                <p className="text-sm font-medium">support@freelancehub.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Phone</p>
                                <p className="text-sm font-medium">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Location</p>
                                <p className="text-sm font-medium">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © 2024 FreelanceHub. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
