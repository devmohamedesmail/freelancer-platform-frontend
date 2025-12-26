import Image from 'next/image'
import React from 'react'
import {
    Camera,
    Star,
    Eye,
    Settings,
    User
} from "lucide-react";
import { useAuth } from '@/context/AuthProvider';
import { Button } from '@/components/ui/button';
interface Props {
    isEditing: boolean
}
export default function PersonalInfo({ isEditing }: Props) {
    const { user } = useAuth();
    console.log("PersonalInfo",user);
    return (
        <div className="lg:col-span-1 space-y-6">
            {/* Avatar Card */}
            <div className="gradient-card rounded-2xl p-6 border border-border">
                <div className="text-center">
                    <div className="relative inline-block mb-4">

                        {user?.avatar ? (
                            <Image
                                src={user?.avatar}
                                alt="camera"
                            />
                        ) : (<>
                            <User className='w-20' />
                        </>)}
                        {isEditing && (
                            <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                                <Camera className="w-5 h-5" />
                            </button>
                        )}
                        {/* {user?.verified && (
                            <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                                <Star className="w-4 h-4 fill-current" />
                            </div>
                        )} */}
                    </div>
                    <h2 className="text-2xl font-bold mb-1">{user?.username}</h2>
                    {/* <p className="text-muted-foreground mb-4">{userData.title}</p> */}



                    {/* {userData.verified && (
                        <Badge className="mb-4">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Verified Creator
                        </Badge>
                    )} */}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                    <div className="text-center">
                        {/* <div className="text-2xl font-bold text-primary">
                            {userData.totalStudents.toLocaleString()}
                        </div> */}
                        <div className="text-xs text-muted-foreground">Students</div>
                    </div>
                    <div className="text-center">
                        {/* <div className="text-2xl font-bold text-primary">
                            {userData.totalDownloads.toLocaleString()}
                        </div> */}
                        <div className="text-xs text-muted-foreground">Downloads</div>
                    </div>
                    <div className="text-center">
                        {/* <div className="text-2xl font-bold text-primary">
                            {userData.rating}
                        </div> */}
                        <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div className="text-center">
                        {/* <div className="text-2xl font-bold text-primary">
                            {userData.yearsOfExperience}+
                        </div> */}
                        <div className="text-xs text-muted-foreground">Years Exp</div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="gradient-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Quick Actions
                </h3>
                <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start gap-2">
                        <Eye className="w-4 h-4" />
                        View Public Portfolio
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                        <Settings className="w-4 h-4" />
                        Account Settings
                    </Button>
                </div>
            </div>
        </div>
    )
}
