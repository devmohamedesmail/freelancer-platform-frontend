"use client";

import React from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { courseCategories } from "@/lib/coursesData";

interface CourseFiltersProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    priceRange: number[];
    onPriceRangeChange: (range: number[]) => void;
    selectedRating: number;
    onRatingChange: (rating: number) => void;
    selectedLevel: string;
    onLevelChange: (level: string) => void;
    onClearFilters: () => void;
    isMobile?: boolean;
    onClose?: () => void;
}

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const ratings = [4.5, 4.0, 3.5, 3.0];

export function CourseFilters({
    selectedCategory,
    onCategoryChange,
    priceRange,
    onPriceRangeChange,
    selectedRating,
    onRatingChange,
    selectedLevel,
    onLevelChange,
    onClearFilters,
    isMobile = false,
    onClose,
}: CourseFiltersProps) {
    return (
        <div className={`${isMobile ? "p-6" : ""}`}>
            {/* Mobile Header */}
            {isMobile && (
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <SlidersHorizontal className="w-5 h-5" />
                        <h2 className="text-xl font-bold">Filters</h2>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="w-5 h-5" />
                    </Button>
                </div>
            )}

            {/* Clear Filters */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Filter By
                </h3>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClearFilters}
                    className="text-xs"
                >
                    Clear All
                </Button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
                <h4 className="font-semibold mb-3">Category</h4>
                <div className="space-y-2">
                    {courseCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-all ${selectedCategory === category
                                    ? "bg-primary text-primary-foreground font-medium"
                                    : "hover:bg-muted"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-8">
                <h4 className="font-semibold mb-3">Price Range</h4>
                <div className="px-2">
                    <Slider
                        min={0}
                        max={200}
                        step={10}
                        value={priceRange}
                        onValueChange={onPriceRangeChange}
                        className="mb-4"
                    />
                    <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">${priceRange[0]}</span>
                        <span className="text-muted-foreground">to</span>
                        <span className="font-medium">${priceRange[1]}</span>
                    </div>
                </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-8">
                <h4 className="font-semibold mb-3">Minimum Rating</h4>
                <div className="space-y-2">
                    {ratings.map((rating) => (
                        <button
                            key={rating}
                            onClick={() => onRatingChange(rating)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center gap-2 ${selectedRating === rating
                                    ? "bg-primary text-primary-foreground font-medium"
                                    : "hover:bg-muted"
                                }`}
                        >
                            <span className="text-yellow-400">★</span>
                            <span>{rating.toFixed(1)} & up</span>
                        </button>
                    ))}
                    <button
                        onClick={() => onRatingChange(0)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all ${selectedRating === 0
                                ? "bg-primary text-primary-foreground font-medium"
                                : "hover:bg-muted"
                            }`}
                    >
                        All Ratings
                    </button>
                </div>
            </div>

            {/* Level Filter */}
            <div className="mb-8">
                <h4 className="font-semibold mb-3">Level</h4>
                <div className="space-y-2">
                    {levels.map((level) => (
                        <button
                            key={level}
                            onClick={() => onLevelChange(level)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-all ${selectedLevel === level
                                    ? "bg-primary text-primary-foreground font-medium"
                                    : "hover:bg-muted"
                                }`}
                        >
                            {level}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile Apply Button */}
            {isMobile && (
                <Button
                    className="w-full gradient-primary text-white"
                    size="lg"
                    onClick={onClose}
                >
                    Apply Filters
                </Button>
            )}
        </div>
    );
}
