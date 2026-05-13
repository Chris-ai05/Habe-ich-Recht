import type { Topic } from "@/lib/types";

// Vereinfachter Entscheidungsbaum zum Widerrufsrecht bei Verbraucherverträgen.
// Bewusst didaktisch gehalten – das ist die Vorlage, an der man sieht, wie weitere Bäume aufgebaut werden.

export const widerrufsrecht: Topic = {
  slug: "widerrufsrecht",
  title: "Widerrufsrecht",
  shortDescription:
    "Können Sie einen Vertrag noch widerrufen? Klären Sie es in wenigen Minuten.",
  longDescription:
    "Ob beim Online-Kauf, an der Haustür oder im Fitnessstudio – das Widerrufsrecht gilt nicht immer. Dieser Wegweiser hilft Ihnen einzuschätzen, ob Sie noch widerrufen können und worauf zu achten ist.",
  category: "Verbraucherrecht",
  estimatedMinutes: 3,
  available: true,
  startNodeId: "q-contract",
  nodes: {
    "q-contract": {
      type: "question",
      id: "q-contract",
      question: "Haben Sie überhaupt einen Vertrag geschlossen?",
      explanation:
        "Ein Vertrag entsteht durch Angebot und Annahme. Schon eine Online-Bestellung mit Bestellbestätigung reicht in der Regel aus.",
      options: [
        { label: "Ja", next: "q-consumer" },
        {
          label: "Nein, nur angefragt / unverbindlich",
          next: "r-no-contract",
          hint: "Ohne Vertrag gibt es nichts zu widerrufen.",
        },
        { label: "Bin mir nicht sicher", next: "q-consumer" },
      ],
    },
    "q-consumer": {
      type: "question",
      id: "q-consumer",
      question:
        "Haben Sie den Vertrag als Verbraucher:in (privat) geschlossen?",
      explanation:
        "Das Widerrufsrecht schützt grundsätzlich nur Verbraucher:innen, also Privatpersonen – nicht Geschäftskund:innen.",
      options: [
        { label: "Ja, privat", next: "q-channel" },
        { label: "Nein, gewerblich / für die Firma", next: "r-not-consumer" },
      ],
    },
    "q-channel": {
      type: "question",
      id: "q-channel",
      question: "Wie wurde der Vertrag geschlossen?",
      explanation:
        "Das Widerrufsrecht gilt vor allem bei Fernabsatz- und außerhalb von Geschäftsräumen geschlossenen Verträgen.",
      options: [
        { label: "Online (Shop, E-Mail, App)", next: "q-goodtype" },
        { label: "Telefonisch", next: "q-goodtype" },
        {
          label: "An der Haustür / auf einer Veranstaltung",
          next: "q-goodtype",
        },
        {
          label: "Im Ladengeschäft vor Ort",
          next: "r-store",
        },
      ],
    },
    "q-goodtype": {
      type: "question",
      id: "q-goodtype",
      question: "Worum geht es bei dem Vertrag?",
      explanation:
        "Bestimmte Vertragstypen sind vom Widerrufsrecht ausgenommen.",
      options: [
        { label: "Normale Ware (z. B. Kleidung, Elektronik)", next: "q-time" },
        { label: "Digitale Inhalte / Streaming / Software", next: "q-digital" },
        {
          label: "Schnell verderbliche Ware (z. B. Lebensmittel)",
          next: "r-perishable",
        },
        {
          label: "Individuell angefertigte / personalisierte Ware",
          next: "r-custom",
        },
        { label: "Hygieneartikel mit geöffneter Versiegelung", next: "r-hygiene" },
        { label: "Reise- oder Beförderungsleistung mit festem Termin", next: "r-travel" },
      ],
    },
    "q-digital": {
      type: "question",
      id: "q-digital",
      question: "Haben Sie der sofortigen Ausführung ausdrücklich zugestimmt?",
      explanation:
        "Bei digitalen Inhalten erlischt das Widerrufsrecht, wenn Sie ausdrücklich zugestimmt haben, dass mit der Ausführung vor Ablauf der Widerrufsfrist begonnen wird – und Sie dies bestätigt haben.",
      options: [
        { label: "Ja, ich habe ausdrücklich zugestimmt", next: "r-digital-lost" },
        { label: "Nein bzw. weiß nicht", next: "q-time" },
      ],
    },
    "q-time": {
      type: "question",
      id: "q-time",
      question: "Wann wurde der Vertrag geschlossen bzw. die Ware geliefert?",
      explanation:
        "Die Widerrufsfrist beträgt grundsätzlich 14 Tage. Sie beginnt bei Waren mit Erhalt, bei Dienstleistungen mit Vertragsschluss.",
      options: [
        { label: "Innerhalb der letzten 14 Tage", next: "q-instruction" },
        { label: "Vor mehr als 14 Tagen, aber innerhalb eines Jahres", next: "q-instruction-late" },
        { label: "Vor mehr als einem Jahr und 14 Tagen", next: "r-too-late" },
      ],
    },
    "q-instruction": {
      type: "question",
      id: "q-instruction",
      question: "Wurden Sie ordnungsgemäß über Ihr Widerrufsrecht belehrt?",
      explanation:
        "Eine korrekte Widerrufsbelehrung ist in der Regel im Vertrag, in der Bestellbestätigung oder in den AGB enthalten.",
      options: [
        { label: "Ja", next: "r-can-withdraw" },
        { label: "Nein / unsicher", next: "r-can-withdraw-extended" },
      ],
    },
    "q-instruction-late": {
      type: "question",
      id: "q-instruction-late",
      question: "Wurden Sie über Ihr Widerrufsrecht belehrt?",
      explanation:
        "Ohne ordnungsgemäße Belehrung verlängert sich die Frist um bis zu zwölf Monate.",
      options: [
        { label: "Ja, ordnungsgemäß belehrt", next: "r-too-late" },
        { label: "Nein bzw. unsicher", next: "r-can-withdraw-extended" },
      ],
    },
    // ---------- Ergebnisse ----------
    "r-no-contract": {
      type: "result",
      id: "r-no-contract",
      title: "Es liegt vermutlich kein Vertrag vor.",
      verdict: "neutral",
      summary:
        "Ohne wirksamen Vertragsschluss gibt es keinen Vertrag, der widerrufen werden müsste.",
      details: [
        "Eine bloße Anfrage oder ein unverbindliches Angebot stellt keinen Vertrag dar.",
        "Erst durch Annahme (z. B. Bestellbestätigung des Anbieters) kommt ein Vertrag zustande.",
      ],
      nextSteps: [
        "Falls Sie unsicher sind: Korrespondenz und etwaige Bestätigungen prüfen.",
      ],
    },
    "r-not-consumer": {
      type: "result",
      id: "r-not-consumer",
      title: "Kein Widerrufsrecht – kein Verbrauchervertrag.",
      verdict: "negative",
      summary:
        "Das gesetzliche Widerrufsrecht schützt nur Verbraucher:innen. Bei gewerblichen Verträgen besteht es grundsätzlich nicht.",
      details: [
        "Möglich ist ein vertraglich vereinbartes Rückgaberecht – ein Blick in die AGB lohnt sich.",
        "Bei Mängeln bestehen unabhängig davon Gewährleistungsrechte.",
      ],
      legalBasis: "§ 13 BGB (Verbraucherbegriff)",
    },
    "r-store": {
      type: "result",
      id: "r-store",
      title: "Kein gesetzliches Widerrufsrecht.",
      verdict: "negative",
      summary:
        "Käufe im stationären Ladengeschäft unterliegen grundsätzlich keinem Widerrufsrecht.",
      details: [
        "Viele Händler gewähren freiwillig ein Rückgaberecht – ein Blick auf den Kassenbon oder die Geschäftsbedingungen lohnt sich.",
        "Bei Mängeln greifen unabhängig davon die gesetzlichen Gewährleistungsrechte.",
      ],
    },
    "r-perishable": {
      type: "result",
      id: "r-perishable",
      title: "Widerruf ausgeschlossen – schnell verderbliche Ware.",
      verdict: "negative",
      summary:
        "Bei schnell verderblicher Ware (z. B. frische Lebensmittel) besteht kein Widerrufsrecht.",
      legalBasis: "§ 312g Abs. 2 Nr. 2 BGB",
    },
    "r-custom": {
      type: "result",
      id: "r-custom",
      title: "Widerruf in der Regel ausgeschlossen.",
      verdict: "negative",
      summary:
        "Bei individuell angefertigter oder personalisierter Ware besteht grundsätzlich kein Widerrufsrecht.",
      details: [
        "Maßgeblich ist, ob die Ware nach Ihren persönlichen Vorgaben gefertigt oder eindeutig auf Sie zugeschnitten wurde.",
        "Standardware mit kleiner Beschriftung kann im Einzelfall anders zu bewerten sein.",
      ],
      legalBasis: "§ 312g Abs. 2 Nr. 1 BGB",
    },
    "r-hygiene": {
      type: "result",
      id: "r-hygiene",
      title: "Widerruf ausgeschlossen – Hygieneartikel.",
      verdict: "negative",
      summary:
        "Bei Hygieneartikeln (z. B. Kosmetik, Unterwäsche), deren Versiegelung geöffnet wurde, ist der Widerruf ausgeschlossen.",
      legalBasis: "§ 312g Abs. 2 Nr. 3 BGB",
    },
    "r-travel": {
      type: "result",
      id: "r-travel",
      title: "Kein Widerrufsrecht bei Reise-/Beförderungsleistungen.",
      verdict: "negative",
      summary:
        "Reise- und Beförderungsleistungen mit konkretem Termin sind vom Widerrufsrecht ausgenommen.",
      details: [
        "Es können jedoch Rechte aus dem Reiserecht oder der Fluggastrechte-Verordnung bestehen.",
      ],
      legalBasis: "§ 312g Abs. 2 Nr. 9 BGB",
    },
    "r-digital-lost": {
      type: "result",
      id: "r-digital-lost",
      title: "Widerrufsrecht erloschen.",
      verdict: "negative",
      summary:
        "Durch Ihre ausdrückliche Zustimmung zur sofortigen Ausführung ist das Widerrufsrecht bei digitalen Inhalten in der Regel erloschen.",
      legalBasis: "§ 356 Abs. 5 BGB",
    },
    "r-too-late": {
      type: "result",
      id: "r-too-late",
      title: "Widerrufsfrist abgelaufen.",
      verdict: "negative",
      summary:
        "Nach ordnungsgemäßer Belehrung beträgt die Widerrufsfrist 14 Tage. Diese ist im vorliegenden Fall verstrichen.",
      details: [
        "Bei mangelhafter Ware bestehen weiterhin Gewährleistungsrechte (2 Jahre).",
        "Prüfen Sie, ob der Anbieter ein freiwilliges Rückgaberecht gewährt.",
      ],
      legalBasis: "§ 355 Abs. 2 BGB",
    },
    "r-can-withdraw": {
      type: "result",
      id: "r-can-withdraw",
      title: "Sie können den Vertrag widerrufen.",
      verdict: "positive",
      summary:
        "Nach den Angaben spricht vieles dafür, dass Ihnen ein Widerrufsrecht zusteht.",
      details: [
        "Der Widerruf ist ohne Angabe von Gründen möglich.",
        "Er muss eindeutig erklärt werden (E-Mail, Brief oder Widerrufsformular).",
        "Eine Rücksendung der Ware folgt nach dem Widerruf.",
      ],
      legalBasis: "§§ 312g, 355 BGB",
      nextSteps: [
        "Widerruf schriftlich erklären (Beweissicherung: Einschreiben oder Lesebestätigung).",
        "Frist von 14 Tagen einhalten – maßgeblich ist der rechtzeitige Versand der Erklärung.",
        "Ware innerhalb von 14 Tagen nach Erklärung zurücksenden.",
      ],
    },
    "r-can-withdraw-extended": {
      type: "result",
      id: "r-can-withdraw-extended",
      title: "Verlängerte Widerrufsfrist – Widerruf vermutlich möglich.",
      verdict: "positive",
      summary:
        "Ohne ordnungsgemäße Belehrung verlängert sich die Frist um bis zu zwölf Monate. Ein Widerruf erscheint daher möglich.",
      details: [
        "Die verlängerte Frist endet spätestens 12 Monate und 14 Tage nach Vertragsschluss bzw. Erhalt der Ware.",
        "Eine fehlerhafte Belehrung muss nicht zwingend offensichtlich sein – im Zweifel rechtlich prüfen lassen.",
      ],
      legalBasis: "§ 356 Abs. 3 BGB",
      nextSteps: [
        "Widerrufsbelehrung im Vertrag bzw. in den AGB prüfen (oder prüfen lassen).",
        "Widerruf zeitnah erklären, um keine weiteren Fristen zu riskieren.",
      ],
    },
  },
};
