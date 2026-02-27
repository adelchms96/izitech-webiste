import { Link, Outlet } from "react-router";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-20 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-foreground no-underline"
          >
            <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
              <img
                src="/icon.png"
                alt="IZITech"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden sm:inline">IZITech</span>
          </Link>
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-6 text-sm font-medium"
          >
            <a
              href="#apps"
              className="text-muted-foreground no-underline transition-colors hover:text-foreground"
            >
              Tools
            </a>
            <a
              href="#values"
              className="text-muted-foreground no-underline transition-colors hover:text-foreground"
            >
              Values
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Easy Tech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-muted-foreground no-underline transition-colors hover:text-foreground"
            >
              Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
