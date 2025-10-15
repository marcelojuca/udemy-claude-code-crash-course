export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold font-sans">
              <span className="text-white">Hook</span>
              <span className="text-blue-200">Hub</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <a
              href="https://docs.claude.com/en/docs/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors text-sm font-medium font-sans"
            >
              Claude Code Docs
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
