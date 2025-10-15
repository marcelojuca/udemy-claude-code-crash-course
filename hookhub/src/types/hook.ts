export type HookCategory =
  | "Automation"
  | "Code Quality"
  | "Notifications"
  | "Logging"
  | "Security"
  | "Multi-Agent"
  | "Testing"
  | "Documentation"
  | "General";

export type HookEventType =
  | "PreToolUse"
  | "PostToolUse"
  | "UserPromptSubmit"
  | "Notification"
  | "Stop"
  | "SubagentStop"
  | "PreCompact"
  | "SessionStart"
  | "SessionEnd";

export interface Hook {
  id: string;                    // Unique identifier (slug)
  name: string;                  // Hook name (e.g., "Multi-Agent Observability")
  description: string;           // Brief description (1-2 sentences)
  category: HookCategory;        // Primary category
  repoUrl: string;              // GitHub repository URL
  author: string;               // GitHub username
  githubStars?: number;         // Star count (optional)
  hookTypes: HookEventType[];   // Which hook events it uses
  tags?: string[];              // Additional tags for future search
}
