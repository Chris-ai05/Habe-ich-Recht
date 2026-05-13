// Typdefinition eines Entscheidungsbaums.
// Jeder Baum ist eine Sammlung von "Nodes" (Knoten).
// Ein Knoten ist entweder eine FRAGE (mit Antwortoptionen, die zum nächsten Knoten führen)
// oder ein ERGEBNIS (rechtliche Ersteinschätzung).

export type AnswerOption = {
  label: string;
  next: string; // ID des nächsten Knotens
  hint?: string; // optionaler Erklärtext zur Antwort
};

export type QuestionNode = {
  type: "question";
  id: string;
  question: string;
  explanation?: string; // optionaler Hinweistext unter der Frage
  options: AnswerOption[];
};

export type ResultNode = {
  type: "result";
  id: string;
  title: string;
  verdict: "positive" | "negative" | "neutral"; // beeinflusst die Farbgebung
  summary: string;
  details?: string[]; // Bulletpoints mit weiteren Hinweisen
  legalBasis?: string; // z.B. "§§ 312g, 355 BGB"
  nextSteps?: string[]; // Handlungsempfehlungen
};

export type DecisionNode = QuestionNode | ResultNode;

export type Topic = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category:
    | "Verbraucherrecht"
    | "Mietrecht"
    | "Arbeitsrecht"
    | "Verkehrsrecht"
    | "Reiserecht"
    | "Sonstiges";
  estimatedMinutes: number;
  startNodeId: string;
  nodes: Record<string, DecisionNode>;
  available: boolean; // false = "demnächst verfügbar"
};
