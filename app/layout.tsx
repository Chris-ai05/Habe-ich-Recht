import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rechts-Wegweiser – erste Einschätzung in Minuten",
  description:
    "Ein digitaler Wegweiser durch alltägliche Rechtsfragen. Keine Beratung – aber Orientierung.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter+Tight:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-ink/10">
            <div className="container-wide py-6 flex items-center justify-between">
              <a href="/" className="flex items-baseline gap-2">
                <span className="font-serif text-2xl font-semibold text-ink">
                  Rechts<span className="text-accent">·</span>Wegweiser
                </span>
              </a>
              <nav className="hidden sm:flex gap-8 text-sm text-ink-soft">
                <a href="/" className="hover:text-accent transition-colors">
                  Themen
                </a>
                <a href="/ueber" className="hover:text-accent transition-colors">
                  Über das Projekt
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-ink/10 mt-24">
            <div className="container-wide py-10 text-sm text-ink-muted">
              <p className="mb-2 font-semibold text-ink-soft">
                Wichtiger Hinweis
              </p>
              <p className="max-w-3xl leading-relaxed">
                Dieser Wegweiser bietet eine unverbindliche Orientierung und
                ersetzt keine individuelle Rechtsberatung. Die Antworten stellen
                keine Rechtsdienstleistung im Sinne des
                Rechtsdienstleistungsgesetzes dar. Wenden Sie sich bei
                konkreten Fragen an eine Rechtsanwältin oder einen Rechtsanwalt.
              </p>
              <p className="mt-6 text-xs">
                © {new Date().getFullYear()} Rechts-Wegweiser ·{" "}
                <a href="/impressum" className="hover:text-accent">
                  Impressum
                </a>{" "}
                ·{" "}
                <a href="/datenschutz" className="hover:text-accent">
                  Datenschutz
                </a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
