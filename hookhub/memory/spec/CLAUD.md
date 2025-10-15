# HookHub - Specification Document

## Project Overview

**HookHub** is a curated discovery platform for open-source Claude Code hooks. It serves as a central hub where developers can browse, explore, and discover powerful hooks created by the community to enhance their Claude Code development workflow.

### Vision
Make Claude Code hooks discoverable and accessible to the entire developer community, fostering collaboration and accelerating adoption of automation, quality checks, and workflow improvements.

### Target Audience
- Developers using Claude Code (claude.ai/code)
- Teams looking to standardize their Claude Code workflows
- Open-source contributors building Claude Code tooling

---

## What are Claude Code Hooks?

Claude Code hooks are **user-defined shell commands** that execute at specific points in Claude Code's lifecycle. They provide deterministic control over Claude Code's behavior, ensuring certain actions always happen rather than relying on the LLM to choose when to run them.

### Hook Event Types
Claude Code provides 9 hook events:

1. **PreToolUse** - Runs before tool calls (can block them)
2. **PostToolUse** - Runs after tool calls complete
3. **UserPromptSubmit** - Runs when user submits a prompt
4. **Notification** - Runs when Claude Code sends notifications
5. **Stop** - Runs when Claude Code finishes responding
6. **SubagentStop** - Runs when subagent tasks complete
7. **PreCompact** - Runs before compact operation
8. **SessionStart** - Runs at session start
9. **SessionEnd** - Runs at session end

### Common Use Cases
- **Automation**: Auto-formatting code (Prettier, gofmt, Black)
- **Code Quality**: Linting, type checking, running tests
- **Notifications**: Slack/Discord alerts, desktop notifications
- **Logging**: Command tracking, compliance auditing
- **Security**: File protection, sensitive data detection
- **Multi-Agent**: Observability and monitoring across agents
- **Testing**: Auto-run tests on code changes
- **Documentation**: Auto-generate docs, update changelogs

---

## MVP Scope

### In Scope (Phase 1)
✅ Display hooks in a responsive grid layout
✅ Show hook metadata (name, description, category, repo link)
✅ Filter hooks by category
✅ Display GitHub stars and author information
✅ Link to source repositories
✅ Mobile-responsive design
✅ Static data approach (no backend required)

### Out of Scope (Future Phases)
❌ Search functionality
❌ User-submitted hooks
❌ Hook ratings/reviews
❌ Detailed hook pages
❌ Installation instructions
❌ Hook analytics/usage stats
❌ User accounts/authentication
❌ API endpoints

---

## Data Model

### Hook Schema

```typescript
interface Hook {
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

type HookCategory =
  | "Automation"
  | "Code Quality"
  | "Notifications"
  | "Logging"
  | "Security"
  | "Multi-Agent"
  | "Testing"
  | "Documentation"
  | "General";

type HookEventType =
  | "PreToolUse"
  | "PostToolUse"
  | "UserPromptSubmit"
  | "Notification"
  | "Stop"
  | "SubagentStop"
  | "PreCompact"
  | "SessionStart"
  | "SessionEnd";
```

---

## User Interface Design

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│ Header                                                   │
│ HookHub Logo | Search (future) | Submit Hook (future)   │
├─────────────────────────────────────────────────────────┤
│ Hero Section                                             │
│ "Discover powerful Claude Code hooks from the community"│
├─────────────────────────────────────────────────────────┤
│ Category Filters (Horizontal Pills)                     │
│ [All] [Automation] [Code Quality] [Notifications] ...   │
├─────────────────────────────────────────────────────────┤
│ Hooks Grid (Responsive)                                  │
│                                                          │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│ │  Hook    │ │  Hook    │ │  Hook    │ │  Hook    │   │
│ │  Card    │ │  Card    │ │  Card    │ │  Card    │   │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘   │
│                                                          │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│ │  Hook    │ │  Hook    │ │  Hook    │ │  Hook    │   │
│ │  Card    │ │  Card    │ │  Card    │ │  Card    │   │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Hook Card Design

Each card displays:
- **Hook Name** (bold, large)
- **Category Badge** (colored pill)
- **Description** (2-3 lines, truncated)
- **Author** (with GitHub icon)
- **GitHub Stars** (⭐ count)
- **Hook Event Types** (small pills/badges)
- **View Repo Button** (links to GitHub)

### Responsive Breakpoints
- **Mobile** (< 768px): 1 column
- **Tablet** (768px - 1024px): 2 columns
- **Desktop** (> 1024px): 3-4 columns

### Color Scheme (Tailwind v4)
- **Primary**: Blue/Purple gradient for headers
- **Category Colors**:
  - Automation: Blue
  - Code Quality: Green
  - Notifications: Yellow/Orange
  - Logging: Gray
  - Security: Red
  - Multi-Agent: Purple
  - Testing: Teal
  - Documentation: Indigo

---

## Technical Architecture

### Tech Stack
- **Framework**: Next.js 15.5.5 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel (recommended)

### Project Structure

```
hookhub/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page (hooks grid)
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── HookCard.tsx        # Individual hook card
│   │   ├── HookGrid.tsx        # Grid container
│   │   ├── CategoryFilter.tsx  # Category filter pills
│   │   └── Header.tsx          # Site header
│   ├── data/
│   │   └── hooks.ts            # Static hooks data
│   └── types/
│       └── hook.ts             # TypeScript interfaces
└── public/
    └── images/                 # Logos, icons
```

### Implementation Approach

#### Phase 1: Static Data
- Store hooks in a TypeScript file (`src/data/hooks.ts`)
- No database or backend required
- Easy to deploy on Vercel/Netlify
- Version controlled with Git

#### Component Strategy
- **Server Components**: Default for all components (Next.js 15)
- **Client Components**: Only for interactive filters (`"use client"`)
- **Static Generation**: Pre-render at build time for fast performance

#### Filtering Logic
```typescript
// Client-side filtering for category
const [selectedCategory, setSelectedCategory] = useState<string>("All");

const filteredHooks = selectedCategory === "All"
  ? hooks
  : hooks.filter(hook => hook.category === selectedCategory);
```

---

## Initial Dataset

### Curated Hooks (Seed Data)

Based on research of popular GitHub repositories, here are 12 hooks to seed HookHub:

1. **Multi-Agent Observability**
   - Author: disler
   - Repo: claude-code-hooks-multi-agent-observability
   - Category: Multi-Agent
   - Description: Real-time monitoring for Claude Code agents through simple hook event tracking. Visualize agent workflows, debug issues, and track performance.
   - Hook Types: PreToolUse, PostToolUse, Stop

2. **Code Quality Enforcer**
   - Author: decider
   - Repo: claude-hooks
   - Category: Code Quality
   - Description: Comprehensive hooks to enforce clean code practices with automatic validation and quality checks using Python-based lightweight system.
   - Hook Types: PostToolUse, PreToolUse

3. **Auto-Format Guard**
   - Author: EvanL1
   - Repo: claude-code-hooks
   - Category: Automation
   - Description: Automatically format code with Prettier, gofmt, or Black before commits. Ensures consistent code style across your entire project.
   - Hook Types: PostToolUse

4. **ClaudeKit Toolkit**
   - Author: carlrannaberg
   - Repo: claudekit
   - Category: General
   - Description: Complete CLI toolkit with auto-save checkpointing, code quality hooks, specification generation, and 20+ specialized subagents.
   - Hook Types: SessionEnd, Stop, PreToolUse

5. **Hooks Mastery Guide**
   - Author: disler
   - Repo: claude-code-hooks-mastery
   - Category: Documentation
   - Description: Comprehensive guide to mastering Claude Code hooks with all 8 lifecycle events captured with their JSON payloads and usage examples.
   - Hook Types: All events

6. **TypeScript Hooks**
   - Author: johnlindquist
   - Repo: claude-hooks
   - Category: Automation
   - Description: TypeScript-powered hook system with full type safety, auto-completion, and access to strongly-typed payloads for safer hook development.
   - Hook Types: PreToolUse, PostToolUse, UserPromptSubmit

7. **Git Commit Guardian**
   - Author: EvanL1
   - Repo: claude-code-hooks
   - Category: Security
   - Description: Prevent accidental commits to main/master branches, scan for secrets, and enforce commit message conventions automatically.
   - Hook Types: PreToolUse

8. **Slack Notifier**
   - Author: Community
   - Repo: TBD
   - Category: Notifications
   - Description: Send Slack notifications when Claude Code completes tasks, encounters errors, or requires user input. Stay informed on long-running operations.
   - Hook Types: Stop, SessionEnd

9. **Test Runner Hook**
   - Author: Community
   - Repo: TBD
   - Category: Testing
   - Description: Automatically run test suites after code changes to catch regressions early. Supports Jest, Pytest, Go test, and more.
   - Hook Types: PostToolUse

10. **Command Logger**
    - Author: Community
    - Repo: TBD
    - Category: Logging
    - Description: Track and log all Claude Code commands for compliance, debugging, and workflow analysis. Export logs to JSON or CSV.
    - Hook Types: PreToolUse, PostToolUse

11. **File Protection**
    - Author: decider
    - Repo: claude-hooks
    - Category: Security
    - Description: Block modifications to production files, sensitive directories, or configuration files. Prevent accidental changes to critical code.
    - Hook Types: PreToolUse

12. **Custom Notifications**
    - Author: EvanL1
    - Repo: claude-code-hooks
    - Category: Notifications
    - Description: Desktop notifications for key events with customizable sounds and messages. Never miss important Claude Code updates.
    - Hook Types: Notification, Stop

---

## Implementation Checklist

### Phase 1: Core Display (MVP)
- [ ] Set up data structure (`types/hook.ts`)
- [ ] Create seed data file (`data/hooks.ts`) with 12 hooks
- [ ] Build `HookCard` component
- [ ] Build `HookGrid` component
- [ ] Build `CategoryFilter` component
- [ ] Build `Header` component
- [ ] Update homepage (`app/page.tsx`) with grid layout
- [ ] Add category filtering logic
- [ ] Style with Tailwind CSS v4
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Deploy to Vercel

### Phase 2: Enhancements (Future)
- [ ] Add search functionality
- [ ] Implement detailed hook pages (`/hooks/[id]`)
- [ ] Add "Submit Hook" form
- [ ] Integrate GitHub API for live star counts
- [ ] Add sorting options (stars, recent, alphabetical)
- [ ] Implement tags/multi-category filtering
- [ ] Add hook installation instructions
- [ ] Create API endpoints for future integrations

---

## Future Enhancements

### Phase 2: Search & Discovery
- Full-text search across names, descriptions, and tags
- Advanced filters (hook event types, programming language)
- Sort by stars, recent updates, or alphabetically

### Phase 3: Community Features
- User-submitted hooks with moderation
- Upvotes/ratings system
- Comments and discussions
- User profiles for hook authors

### Phase 4: Advanced Features
- Detailed hook pages with README rendering
- Installation wizard with copy-paste configs
- Hook collections/playlists
- Integration with Claude Code settings
- Analytics dashboard (trending hooks, usage stats)

### Phase 5: API & Ecosystem
- Public API for hook discovery
- VS Code extension integration
- Webhook notifications for new hooks
- GitHub Actions for auto-importing hooks

---

## Success Metrics (MVP)

### Primary Metrics
- Number of hooks displayed: **12+**
- Page load time: **< 1 second**
- Mobile responsiveness: **100% functional**

### User Experience Goals
- Users can browse all hooks within 30 seconds
- Category filtering works instantly (< 100ms)
- All external links open correctly to GitHub repos
- Design is visually appealing and professional

### Technical Goals
- Lighthouse score: **90+** (Performance, Accessibility, SEO)
- Zero console errors
- TypeScript strict mode with no type errors
- Responsive on devices from 320px to 2560px wide

---

## Design Guidelines

### Typography
- **Headings**: Geist Sans (font-weight: 600-700)
- **Body**: Geist Sans (font-weight: 400)
- **Code/Mono**: Geist Mono

### Spacing
- Use Tailwind spacing scale (4px base)
- Consistent padding/margin across components
- Generous whitespace for readability

### Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML (`<header>`, `<main>`, `<article>`)
- Proper ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratio ≥ 4.5:1

### Dark Mode
- Support dark mode via Tailwind's `dark:` classes
- Respect system preference (prefers-color-scheme)
- Smooth transitions between modes

---

## Repository & Community

### Open Source
- License: MIT
- Repository: TBD (GitHub)
- Contributions welcome (PRs, issues, hook submissions)

### Documentation
- README with setup instructions
- Contributing guidelines
- Hook submission template
- Code of conduct

---

## Conclusion

HookHub MVP focuses on delivering a beautiful, functional discovery platform for Claude Code hooks. By starting with a static, display-only approach, we can launch quickly and iterate based on community feedback. The goal is to become the go-to resource for Claude Code hook discovery, driving adoption and collaboration across the developer community.

**Next Steps**: Begin implementation with Phase 1 checklist, starting with data structures and core components.
