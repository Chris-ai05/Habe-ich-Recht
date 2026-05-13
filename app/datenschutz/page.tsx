export default function DatenschutzPage() {
  return (
    <article className="container-narrow py-16">
      <h1 className="font-serif text-4xl text-ink mb-8">Datenschutzerklärung</h1>
      <div className="text-ink-soft space-y-4 leading-relaxed">
        <p className="bg-paper-warm border border-accent/30 rounded p-4 text-sm">
          <strong>Hinweis:</strong> Bitte ersetzen Sie diesen Platzhalter durch
          eine vollständige, an Ihren tatsächlichen Verarbeitungsvorgängen
          ausgerichtete Datenschutzerklärung. Vorlagen finden Sie z. B. bei den
          Landesdatenschutzbehörden.
        </p>
        <p>
          Diese Anwendung verarbeitet standardmäßig keine personenbezogenen
          Daten. Alle Antworten im Entscheidungsbaum verbleiben lokal in Ihrem
          Browser und werden nicht an den Server übertragen.
        </p>
        <p>
          Beim Aufruf der Seite verarbeitet der Hosting-Anbieter (Vercel Inc.)
          technisch notwendige Server-Log-Daten. Näheres entnehmen Sie der
          Datenschutzerklärung des Anbieters.
        </p>
      </div>
    </article>
  );
}
