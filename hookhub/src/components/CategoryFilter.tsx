"use client";

import { HookCategory } from "@/types/hook";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories: (HookCategory | "All")[] = [
  "All",
  "Automation",
  "Code Quality",
  "Notifications",
  "Logging",
  "Security",
  "Multi-Agent",
  "Testing",
  "Documentation",
  "General",
];

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 font-sans ${
            selectedCategory === category
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
