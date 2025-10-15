import { Hook } from "@/types/hook";

interface HookCardProps {
  hook: Hook;
}

const categoryColors: Record<string, string> = {
  "Automation": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Code Quality": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Notifications": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "Logging": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  "Security": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Multi-Agent": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Testing": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  "Documentation": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  "General": "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200",
};

export default function HookCard({ hook }: HookCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col h-full border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-sans">
          {hook.name}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2 ${categoryColors[hook.category]}`}>
          {hook.category}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow font-sans">
        {hook.description}
      </p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-1.5">
          {hook.hookTypes.map((type) => (
            <span
              key={type}
              className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-mono"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-1 font-sans">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            {hook.author}
          </span>
          {hook.githubStars && (
            <span className="flex items-center gap-1 font-sans">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {hook.githubStars}
            </span>
          )}
        </div>

        <a
          href={hook.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-sans"
        >
          View Repo
        </a>
      </div>
    </article>
  );
}
