"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { EnhancedCourseCard } from "@/components/EnhancedCourseCard";
import { CourseFilters } from "@/components/CourseFilters";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Search,
    SlidersHorizontal,
    GraduationCap,
    TrendingUp,
    DollarSign,
    Star,
    BookOpen,
} from "lucide-react";
import { coursesData, Course } from "@/lib/coursesData";

type SortOption = "popular" | "newest" | "price-low" | "price-high" | "rating";

export default function CoursesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Courses");
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [selectedRating, setSelectedRating] = useState(0);
    const [selectedLevel, setSelectedLevel] = useState("All Levels");
    const [sortBy, setSortBy] = useState<SortOption>("popular");
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    // Filter and sort courses
    const filteredCourses = useMemo(() => {
        let filtered = coursesData.filter((course) => {
            // Search filter
            const matchesSearch =
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.tags.some((tag) =>
                    tag.toLowerCase().includes(searchQuery.toLowerCase())
                );

            // Category filter
            const matchesCategory =
                selectedCategory === "All Courses" ||
                course.category === selectedCategory;

            // Price filter
            const matchesPrice =
                course.price >= priceRange[0] && course.price <= priceRange[1];

            // Rating filter
            const matchesRating = course.rating >= selectedRating;

            // Level filter
            const matchesLevel =
                selectedLevel === "All Levels" || course.level === selectedLevel;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesPrice &&
                matchesRating &&
                matchesLevel
            );
        });

        // Sort courses
        switch (sortBy) {
            case "popular":
                filtered.sort((a, b) => b.students - a.students);
                break;
            case "newest":
                filtered.sort(
                    (a, b) =>
                        new Date(b.lastUpdated).getTime() -
                        new Date(a.lastUpdated).getTime()
                );
                break;
            case "price-low":
                filtered.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                filtered.sort((a, b) => b.price - a.price);
                break;
            case "rating":
                filtered.sort((a, b) => b.rating - a.rating);
                break;
        }

        return filtered;
    }, [
        searchQuery,
        selectedCategory,
        priceRange,
        selectedRating,
        selectedLevel,
        sortBy,
    ]);

    const handleClearFilters = () => {
        setSelectedCategory("All Courses");
        setPriceRange([0, 200]);
        setSelectedRating(0);
        setSelectedLevel("All Levels");
        setSearchQuery("");
    };

    const activeFiltersCount = [
        selectedCategory !== "All Courses",
        priceRange[0] !== 0 || priceRange[1] !== 200,
        selectedRating !== 0,
        selectedLevel !== "All Levels",
    ].filter(Boolean).length;

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-12 px-4 bg-muted/30 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <GraduationCap className="w-8 h-8 text-primary" />
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Explore{" "}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Courses
                            </span>
                        </h1>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                        Learn new skills with expert-led courses. Filter by category, price,
                        and rating to find the perfect course for you.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search for courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 h-14 text-base"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex gap-8">
                        {/* Desktop Filters Sidebar */}
                        <aside className="hidden lg:block w-72 flex-shrink-0">
                            <div className="sticky top-24">
                                <CourseFilters
                                    selectedCategory={selectedCategory}
                                    onCategoryChange={setSelectedCategory}
                                    priceRange={priceRange}
                                    onPriceRangeChange={setPriceRange}
                                    selectedRating={selectedRating}
                                    onRatingChange={setSelectedRating}
                                    selectedLevel={selectedLevel}
                                    onLevelChange={setSelectedLevel}
                                    onClearFilters={handleClearFilters}
                                />
                            </div>
                        </aside>

                        {/* Courses Grid */}
                        <div className="flex-1">
                            {/* Toolbar */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <p className="text-muted-foreground">
                                        <span className="font-semibold text-foreground">
                                            {filteredCourses.length}
                                        </span>{" "}
                                        courses found
                                    </p>
                                    {activeFiltersCount > 0 && (
                                        <Badge variant="secondary">
                                            {activeFiltersCount} filter{activeFiltersCount > 1 ? "s" : ""}{" "}
                                            active
                                        </Badge>
                                    )}
                                </div>

                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    {/* Mobile Filter Button */}
                                    <Button
                                        variant="outline"
                                        className="lg:hidden flex-1 sm:flex-none"
                                        onClick={() => setShowMobileFilters(true)}
                                    >
                                        <SlidersHorizontal className="w-4 h-4 mr-2" />
                                        Filters
                                        {activeFiltersCount > 0 && (
                                            <Badge className="ml-2" variant="secondary">
                                                {activeFiltersCount}
                                            </Badge>
                                        )}
                                    </Button>

                                    {/* Sort Dropdown */}
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                                        className="px-4 py-2 border border-border rounded-md bg-background text-sm flex-1 sm:flex-none"
                                    >
                                        <option value="popular">Most Popular</option>
                                        <option value="newest">Newest</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="rating">Highest Rated</option>
                                    </select>
                                </div>
                            </div>

                            {/* Courses Grid */}
                            {filteredCourses.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {filteredCourses.map((course) => (
                                        <EnhancedCourseCard key={course.id} course={course} />
                                    ))}
                                </div>
                            ) : (
                                // Empty State
                                <div className="text-center py-20">
                                    <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                                        <BookOpen className="w-10 h-10 text-muted-foreground" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Try adjusting your filters or search query
                                    </p>
                                    <Button onClick={handleClearFilters} variant="outline">
                                        Clear All Filters
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* Mobile Filters Drawer */}
            {showMobileFilters && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        onClick={() => setShowMobileFilters(false)}
                    />
                    <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background shadow-2xl overflow-y-auto">
                        <CourseFilters
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                            priceRange={priceRange}
                            onPriceRangeChange={setPriceRange}
                            selectedRating={selectedRating}
                            onRatingChange={setSelectedRating}
                            selectedLevel={selectedLevel}
                            onLevelChange={setSelectedLevel}
                            onClearFilters={handleClearFilters}
                            isMobile
                            onClose={() => setShowMobileFilters(false)}
                        />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
