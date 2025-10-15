"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import HookGrid from "@/components/HookGrid";
import { hooks } from "@/data/hooks";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredHooks = selectedCategory === "All"
    ? hooks
    : hooks.filter(hook => hook.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
            Discover Powerful Claude Code Hooks
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">
            Browse curated hooks from the community to enhance your Claude Code development workflow with automation, quality checks, and more.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 font-sans">
            Showing {filteredHooks.length} {filteredHooks.length === 1 ? 'hook' : 'hooks'}
          </p>
        </div>

        {/* Hooks Grid */}
        <section>
          <HookGrid hooks={filteredHooks} />
        </section>

        {/* Empty State */}
        {filteredHooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg font-sans">
              No hooks found in this category.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400 text-sm font-sans">
            <p className="mb-2">
              HookHub - A curated discovery platform for Claude Code hooks
            </p>
            <p>
              Built with Next.js 15, TypeScript, and Tailwind CSS v4
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
