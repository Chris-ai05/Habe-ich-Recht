export default function ImpressumPage() {
  return (
    <article className="container-narrow py-16">
      <h1 className="font-serif text-4xl text-ink mb-8">Impressum</h1>
      <div className="text-ink-soft space-y-4 leading-relaxed">
        <p className="bg-paper-warm border border-accent/30 rounded p-4 text-sm">
          <strong>Hinweis:</strong> Bitte ersetzen Sie diesen Platzhalter durch
          Ihre vollständigen Pflichtangaben gemäß § 5 DDG (vormals TMG).
        </p>
        <h2 className="font-serif text-xl text-ink pt-4">
          Angaben gemäß § 5 DDG
        </h2>
        <p>
          [Vor- und Nachname]
          <br />
          [Straße und Hausnummer]
          <br />
          [PLZ und Ort]
        </p>
        <h2 className="font-serif text-xl text-ink pt-4">Kontakt</h2>
        <p>
          E-Mail: [E-Mail-Adresse]
        </p>
        <h2 className="font-serif text-xl text-ink pt-4">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p>[Vor- und Nachname, Anschrift wie oben]</p>
      </div>
    </article>
  );
}
