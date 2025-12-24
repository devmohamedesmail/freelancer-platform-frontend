"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Download,
  Star,
  ShoppingCart,
  TrendingUp,
  Package,
  Palette,
  Filter,
  X,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Zap,
  Heart,
  Eye
} from "lucide-react";
import { storeProducts, categories, productTypes, StoreProduct } from "@/lib/storeData";

type SortOption = "popular" | "newest" | "price-low" | "price-high" | "rating";

export default function StorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedType, setSelectedType] = useState("All Types");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = storeProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All Products" ||
        product.category === selectedCategory;

      const matchesType =
        selectedType === "All Types" ||
        (selectedType === "Tools" && product.type === "tool") ||
        (selectedType === "Themes" && product.type === "theme");

      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      const matchesRating = product.rating >= selectedRating;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType &&
        matchesPrice &&
        matchesRating
      );
    });

    // Sort products
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => b.downloads - a.downloads);
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
  }, [searchQuery, selectedCategory, selectedType, priceRange, selectedRating, sortBy]);

  const handleClearFilters = () => {
    setSelectedCategory("All Products");
    setSelectedType("All Types");
    setPriceRange([0, 100]);
    setSelectedRating(0);
    setSearchQuery("");
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const handleDownload = (product: StoreProduct) => {
    // Simulate download
    console.log(`Downloading ${product.name}...`);
    alert(`Starting download of ${product.name} v${product.version}`);
  };

  const activeFiltersCount = [
    selectedCategory !== "All Products",
    selectedType !== "All Types",
    priceRange[0] !== 0 || priceRange[1] !== 100,
    selectedRating !== 0,
  ].filter(Boolean).length;

  const featuredProducts = storeProducts.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.1),transparent_50%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Developer Marketplace
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Premium Tools & Themes
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover handcrafted developer tools and stunning themes to supercharge
              your workflow and elevate your coding experience.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  type="search"
                  placeholder="Search for tools, themes, or features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 pr-6 h-16 text-lg border-2 focus:border-primary shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
            {[
              { label: "Products", value: storeProducts.length, icon: Package },
              { label: "Downloads", value: "250K+", icon: Download },
              { label: "Developers", value: "50K+", icon: TrendingUp },
              { label: "Avg Rating", value: "4.8", icon: Star },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Featured This Week</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative gradient-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-2xl overflow-hidden"
                >
                  {product.isNew && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      NEW
                    </Badge>
                  )}
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      ${product.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            {/* Filters Sidebar - Desktop */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24 glass-effect rounded-2xl p-6 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filters
                  </h3>
                  {activeFiltersCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClearFilters}
                      className="text-xs"
                    >
                      Clear All
                    </Button>
                  )}
                </div>

                {/* Product Type */}
                <div className="mb-6">
                  <label className="text-sm font-semibold mb-3 block">
                    Product Type
                  </label>
                  <div className="space-y-2">
                    {productTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${selectedType === type
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted"
                          }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div className="mb-6">
                  <label className="text-sm font-semibold mb-3 block">
                    Category
                  </label>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm ${selectedCategory === category
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted"
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="text-sm font-semibold mb-3 block">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full accent-primary"
                  />
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <label className="text-sm font-semibold mb-3 block">
                    Minimum Rating
                  </label>
                  <div className="space-y-2">
                    {[0, 3, 4, 4.5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setSelectedRating(rating)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 ${selectedRating === rating
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                          }`}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {rating === 0 ? "All Ratings" : `${rating}+ Stars`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground text-lg">
                      {filteredProducts.length}
                    </span>{" "}
                    products found
                  </p>
                  {activeFiltersCount > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {activeFiltersCount} filter{activeFiltersCount > 1 ? "s" : ""}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {/* Mobile Filter Button */}
                  <Button
                    variant="outline"
                    className="lg:hidden flex-1 sm:flex-none"
                    onClick={() => setShowFilters(true)}
                  >
                    <Filter className="w-4 h-4 mr-2" />
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
                    className="px-4 py-2.5 border-2 border-border rounded-lg bg-background text-sm flex-1 sm:flex-none hover:border-primary transition-colors"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group gradient-card rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-2xl overflow-hidden flex flex-col"
                    >
                      {/* Product Image */}
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          {product.isNew && (
                            <Badge className="bg-accent text-accent-foreground">
                              NEW
                            </Badge>
                          )}
                          {product.type === "tool" ? (
                            <Badge className="bg-primary/90 text-primary-foreground">
                              <Package className="w-3 h-3 mr-1" />
                              Tool
                            </Badge>
                          ) : (
                            <Badge className="bg-purple-500/90 text-white">
                              <Palette className="w-3 h-3 mr-1" />
                              Theme
                            </Badge>
                          )}
                        </div>
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                        >
                          <Heart
                            className={`w-5 h-5 ${favorites.has(product.id)
                                ? "fill-red-500 text-red-500"
                                : "text-foreground"
                              }`}
                          />
                        </button>
                      </div>

                      {/* Product Info */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Author */}
                        <div className="flex items-center gap-2 mb-3">
                          <img
                            src={product.author.avatar}
                            alt={product.author.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-sm text-muted-foreground">
                            {product.author.name}
                          </span>
                          {product.author.verified && (
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                          {product.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.tags.slice(0, 3).map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">
                              {product.rating}
                            </span>
                            <span className="text-muted-foreground">
                              ({product.reviews})
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Download className="w-4 h-4" />
                            <span>
                              {product.downloads.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Price and Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through mr-2">
                                ${product.originalPrice}
                              </span>
                            )}
                            <span className="text-2xl font-bold text-primary">
                              ${product.price}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            {product.demoUrl && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-1"
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                            )}
                            <Button
                              onClick={() => handleDownload(product)}
                              size="sm"
                              className="gap-2"
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Empty State
                <div className="text-center py-20">
                  <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <Package className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">No products found</h3>
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
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowFilters(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background shadow-2xl overflow-y-auto border-l border-border">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Same filter content as desktop */}
              <div className="space-y-6">
                {/* Product Type */}
                <div>
                  <label className="text-sm font-semibold mb-3 block">
                    Product Type
                  </label>
                  <div className="space-y-2">
                    {productTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${selectedType === type
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted"
                          }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-semibold mb-3 block">
                    Category
                  </label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm ${selectedCategory === category
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted"
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-semibold mb-3 block">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full accent-primary"
                  />
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="text-sm font-semibold mb-3 block">
                    Minimum Rating
                  </label>
                  <div className="space-y-2">
                    {[0, 3, 4, 4.5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setSelectedRating(rating)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 ${selectedRating === rating
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                          }`}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {rating === 0 ? "All Ratings" : `${rating}+ Stars`}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={handleClearFilters}
                  >
                    Clear All
                  </Button>
                  <Button
                    className="flex-1"
                    onClick={() => setShowFilters(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
