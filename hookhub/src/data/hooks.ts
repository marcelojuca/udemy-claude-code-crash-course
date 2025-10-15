import { Hook } from "@/types/hook";

export const hooks: Hook[] = [
  {
    id: "multi-agent-observability",
    name: "Multi-Agent Observability",
    description: "Real-time monitoring for Claude Code agents through simple hook event tracking. Visualize agent workflows, debug issues, and track performance.",
    category: "Multi-Agent",
    repoUrl: "https://github.com/disler/claude-code-hooks-multi-agent-observability",
    author: "disler",
    githubStars: 45,
    hookTypes: ["PreToolUse", "PostToolUse", "Stop"],
    tags: ["monitoring", "debugging", "visualization"]
  },
  {
    id: "code-quality-enforcer",
    name: "Code Quality Enforcer",
    description: "Comprehensive hooks to enforce clean code practices with automatic validation and quality checks using Python-based lightweight system.",
    category: "Code Quality",
    repoUrl: "https://github.com/decider/claude-hooks",
    author: "decider",
    githubStars: 32,
    hookTypes: ["PostToolUse", "PreToolUse"],
    tags: ["validation", "quality", "python"]
  },
  {
    id: "auto-format-guard",
    name: "Auto-Format Guard",
    description: "Automatically format code with Prettier, gofmt, or Black before commits. Ensures consistent code style across your entire project.",
    category: "Automation",
    repoUrl: "https://github.com/EvanL1/claude-code-hooks",
    author: "EvanL1",
    githubStars: 28,
    hookTypes: ["PostToolUse"],
    tags: ["formatting", "prettier", "automation"]
  },
  {
    id: "claudekit-toolkit",
    name: "ClaudeKit Toolkit",
    description: "Complete CLI toolkit with auto-save checkpointing, code quality hooks, specification generation, and 20+ specialized subagents.",
    category: "General",
    repoUrl: "https://github.com/carlrannaberg/claudekit",
    author: "carlrannaberg",
    githubStars: 67,
    hookTypes: ["SessionEnd", "Stop", "PreToolUse"],
    tags: ["cli", "toolkit", "subagents"]
  },
  {
    id: "hooks-mastery-guide",
    name: "Hooks Mastery Guide",
    description: "Comprehensive guide to mastering Claude Code hooks with all 8 lifecycle events captured with their JSON payloads and usage examples.",
    category: "Documentation",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    author: "disler",
    githubStars: 89,
    hookTypes: ["PreToolUse", "PostToolUse", "UserPromptSubmit", "Notification", "Stop", "SubagentStop", "PreCompact", "SessionStart", "SessionEnd"],
    tags: ["guide", "documentation", "examples"]
  },
  {
    id: "typescript-hooks",
    name: "TypeScript Hooks",
    description: "TypeScript-powered hook system with full type safety, auto-completion, and access to strongly-typed payloads for safer hook development.",
    category: "Automation",
    repoUrl: "https://github.com/johnlindquist/claude-hooks",
    author: "johnlindquist",
    githubStars: 54,
    hookTypes: ["PreToolUse", "PostToolUse", "UserPromptSubmit"],
    tags: ["typescript", "type-safety", "developer-experience"]
  },
  {
    id: "git-commit-guardian",
    name: "Git Commit Guardian",
    description: "Prevent accidental commits to main/master branches, scan for secrets, and enforce commit message conventions automatically.",
    category: "Security",
    repoUrl: "https://github.com/EvanL1/claude-code-hooks",
    author: "EvanL1",
    githubStars: 28,
    hookTypes: ["PreToolUse"],
    tags: ["git", "security", "secrets-scanning"]
  },
  {
    id: "slack-notifier",
    name: "Slack Notifier",
    description: "Send Slack notifications when Claude Code completes tasks, encounters errors, or requires user input. Stay informed on long-running operations.",
    category: "Notifications",
    repoUrl: "https://github.com/community/slack-notifier-hook",
    author: "Community",
    githubStars: 15,
    hookTypes: ["Stop", "SessionEnd"],
    tags: ["slack", "notifications", "alerts"]
  },
  {
    id: "test-runner-hook",
    name: "Test Runner Hook",
    description: "Automatically run test suites after code changes to catch regressions early. Supports Jest, Pytest, Go test, and more.",
    category: "Testing",
    repoUrl: "https://github.com/community/test-runner-hook",
    author: "Community",
    githubStars: 22,
    hookTypes: ["PostToolUse"],
    tags: ["testing", "jest", "pytest"]
  },
  {
    id: "command-logger",
    name: "Command Logger",
    description: "Track and log all Claude Code commands for compliance, debugging, and workflow analysis. Export logs to JSON or CSV.",
    category: "Logging",
    repoUrl: "https://github.com/community/command-logger-hook",
    author: "Community",
    githubStars: 18,
    hookTypes: ["PreToolUse", "PostToolUse"],
    tags: ["logging", "compliance", "debugging"]
  },
  {
    id: "file-protection",
    name: "File Protection",
    description: "Block modifications to production files, sensitive directories, or configuration files. Prevent accidental changes to critical code.",
    category: "Security",
    repoUrl: "https://github.com/decider/claude-hooks",
    author: "decider",
    githubStars: 32,
    hookTypes: ["PreToolUse"],
    tags: ["security", "file-protection", "safety"]
  },
  {
    id: "custom-notifications",
    name: "Custom Notifications",
    description: "Desktop notifications for key events with customizable sounds and messages. Never miss important Claude Code updates.",
    category: "Notifications",
    repoUrl: "https://github.com/EvanL1/claude-code-hooks",
    author: "EvanL1",
    githubStars: 28,
    hookTypes: ["Notification", "Stop"],
    tags: ["notifications", "desktop", "alerts"]
  }
];
