"use client";

import { useState } from "react";
import type { Topic, DecisionNode } from "@/lib/types";

type Step = {
  question: string;
  answer: string;
  nodeId: string;
};

export default function DecisionWizard({ topic }: { topic: Topic }) {
  const [currentId, setCurrentId] = useState<string>(topic.startNodeId);
  const [history, setHistory] = useState<Step[]>([]);

  const current: DecisionNode | undefined = topic.nodes[currentId];

  if (!current) {
    return (
      <p className="text-accent">
        Fehler: Knoten „{currentId}“ wurde nicht gefunden.
      </p>
    );
  }

  const handleAnswer = (label: string, nextId: string) => {
    if (current.type !== "question") return;
    setHistory([
      ...history,
      { question: current.question, answer: label, nodeId: current.id },
    ]);
    setCurrentId(nextId);
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const last = history[history.length - 1];
    setHistory(history.slice(0, -1));
    setCurrentId(last.nodeId);
  };

  const handleRestart = () => {
    setHistory([]);
    setCurrentId(topic.startNodeId);
  };

  return (
    <div className="space-y-8">
      {/* Fortschritt / bisherige Antworten */}
      {history.length > 0 && (
        <div className="rounded-lg border border-ink/10 bg-paper-warm/50 p-5">
          <p className="text-xs uppercase tracking-widest text-ink-muted mb-3">
            Ihre bisherigen Antworten
          </p>
          <ol className="space-y-2 text-sm">
            {history.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-ink-muted shrink-0">{i + 1}.</span>
                <span className="text-ink-soft">
                  {step.question}{" "}
                  <span className="font-semibold text-accent">
                    → {step.answer}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* aktueller Knoten */}
      <div key={current.id} className="fade-in">
        {current.type === "question" ? (
          <QuestionView node={current} onAnswer={handleAnswer} />
        ) : (
          <ResultView node={current} />
        )}
      </div>

      {/* Steuerung */}
      <div className="flex items-center justify-between pt-4 border-t border-ink/10">
        <button
          onClick={handleBack}
          disabled={history.length === 0}
          className="text-sm text-ink-muted hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Eine Frage zurück
        </button>
        <button
          onClick={handleRestart}
          className="text-sm text-ink-muted hover:text-accent transition-colors"
        >
          Neu starten ↻
        </button>
      </div>
    </div>
  );
}

function QuestionView({
  node,
  onAnswer,
}: {
  node: Extract<DecisionNode, { type: "question" }>;
  onAnswer: (label: string, next: string) => void;
}) {
  return (
    <div>
      <h2 className="font-serif text-3xl sm:text-4xl text-ink mb-4 leading-tight">
        {node.question}
      </h2>
      {node.explanation && (
        <p className="text-ink-soft mb-8 leading-relaxed">{node.explanation}</p>
      )}
      <div className="grid gap-3">
        {node.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswer(option.label, option.next)}
            className="group text-left rounded-lg border border-ink/15 bg-white hover:border-accent hover:bg-accent/5 px-5 py-4 transition-all duration-150"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-medium text-ink">{option.label}</span>
              <span className="text-ink-muted group-hover:text-accent transition-colors">
                →
              </span>
            </div>
            {option.hint && (
              <p className="text-sm text-ink-muted mt-1">{option.hint}</p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultView({
  node,
}: {
  node: Extract<DecisionNode, { type: "result" }>;
}) {
  const verdictStyles = {
    positive: "border-emerald-700/30 bg-emerald-50",
    negative: "border-accent/40 bg-accent/5",
    neutral: "border-ink/20 bg-paper-warm",
  };
  const verdictLabels = {
    positive: "Ergebnis",
    negative: "Ergebnis",
    neutral: "Ergebnis",
  };

  return (
    <div
      className={`rounded-xl border-2 p-8 ${verdictStyles[node.verdict]}`}
    >
      <p className="text-xs uppercase tracking-widest text-ink-muted mb-3">
        {verdictLabels[node.verdict]}
      </p>
      <h2 className="font-serif text-3xl sm:text-4xl text-ink mb-4 leading-tight">
        {node.title}
      </h2>
      <p className="text-ink-soft leading-relaxed text-lg">{node.summary}</p>

      {node.details && node.details.length > 0 && (
        <ul className="mt-6 space-y-2 text-ink-soft">
          {node.details.map((d, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-accent shrink-0 mt-1">•</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      )}

      {node.nextSteps && node.nextSteps.length > 0 && (
        <div className="mt-6 pt-6 border-t border-ink/10">
          <p className="text-xs uppercase tracking-widest text-ink-muted mb-3">
            Mögliche nächste Schritte
          </p>
          <ol className="space-y-2 text-ink-soft list-decimal list-inside">
            {node.nextSteps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>
      )}

      {node.legalBasis && (
        <p className="mt-6 text-sm text-ink-muted">
          <span className="font-semibold">Rechtsgrundlage: </span>
          {node.legalBasis}
        </p>
      )}

      <div className="mt-8 rounded-md bg-paper-dark/60 px-4 py-3 text-xs text-ink-soft leading-relaxed">
        <strong>Hinweis:</strong> Diese Einschätzung ist unverbindlich und
        ersetzt keine individuelle Rechtsberatung. Im Zweifel wenden Sie sich
        bitte an eine Rechtsanwältin oder einen Rechtsanwalt.
      </div>
    </div>
  );
}
