# Rechts-Wegweiser

Ein digitaler Wegweiser durch alltägliche Rechtsfragen. Nutzer:innen wählen ein Themenfeld (z. B. Widerrufsrecht) und werden durch aufeinander aufbauende Fragen zu einer ersten rechtlichen Einschätzung geführt.

> ⚠️ Keine Rechtsberatung. Das Projekt liefert eine allgemeine Orientierung und ersetzt keine individuelle anwaltliche Beratung.

## Tech-Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Lokal starten

```bash
npm install
npm run dev
```

Anschließend erreichbar unter [http://localhost:3000](http://localhost:3000).

## Auf GitHub und Vercel deployen

1. Auf GitHub ein neues, leeres Repository anlegen (z. B. `rechts-wegweiser`).
2. Lokal im Projektordner:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<dein-user>/rechts-wegweiser.git
   git push -u origin main
   ```
3. Bei [vercel.com](https://vercel.com) einloggen, „Add New Project“ auswählen und das GitHub-Repository importieren. Vercel erkennt Next.js automatisch – einfach mit den Standardeinstellungen deployen.

## Neues Thema hinzufügen

1. Datei unter `data/<thema>.ts` anlegen (Vorlage: `data/widerrufsrecht.ts`).
2. Den Entscheidungsbaum als `Topic` exportieren (siehe Typen in `lib/types.ts`).
3. In `data/topics.ts` importieren und im `topics`-Array eintragen (oder den Platzhalter ersetzen).

Ein Knoten ist entweder eine **Frage** (mit Antwortoptionen, die auf weitere Knoten verweisen) oder ein **Ergebnis** (Einschätzung mit Zusammenfassung, Rechtsgrundlage, nächsten Schritten).

## Vor dem öffentlichen Betrieb beachten

- `app/impressum/page.tsx` mit echten Pflichtangaben füllen.
- `app/datenschutz/page.tsx` an die tatsächliche Verarbeitung anpassen.
- Die juristischen Inhalte in `data/widerrufsrecht.ts` (und weiteren Bäumen) durch eine fachkundige Person prüfen lassen.

## Projektstruktur

```
app/
  layout.tsx              Globales Layout (Header, Footer, Schriften)
  page.tsx                Startseite mit Themenübersicht
  themen/[slug]/page.tsx  Dynamische Themen-Seite
  ueber/                  Über das Projekt
  impressum/              Impressum (Platzhalter)
  datenschutz/            Datenschutzerklärung (Platzhalter)
components/
  DecisionWizard.tsx      Spielt einen Entscheidungsbaum interaktiv ab
data/
  topics.ts               Zentrale Themenliste
  widerrufsrecht.ts       Beispielbaum
lib/
  types.ts                Typdefinitionen für Bäume
```
