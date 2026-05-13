import Link from "next/link";
import { topics } from "@/data/topics";
import type { Topic } from "@/lib/types";

export default function HomePage() {
  // Themen nach Kategorie gruppieren
  const grouped = topics.reduce<Record<string, Topic[]>>((acc, topic) => {
    (acc[topic.category] ||= []).push(topic);
    return acc;
  }, {});

  return (
    <>
      {/* Hero */}
      <section className="container-wide pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-6">
            Recht. Verständlich.
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl leading-[1.05] text-ink mb-8">
            Eine erste Einschätzung.
            <br />
            <em className="text-accent">Bevor</em> Sie zur Anwältin gehen.
          </h1>
          <p className="text-xl text-ink-soft leading-relaxed max-w-2xl">
            Wählen Sie ein Thema, beantworten Sie ein paar gezielte Fragen und
            erhalten Sie in wenigen Minuten eine erste Orientierung zu Ihrer
            Rechtsfrage – kostenlos, anonym und nachvollziehbar.
          </p>
        </div>
      </section>

      {/* Themen */}
      <section className="container-wide pb-24">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="mb-16">
            <div className="flex items-baseline justify-between mb-6 border-b border-ink/10 pb-3">
              <h2 className="font-serif text-2xl text-ink">{category}</h2>
              <span className="text-xs text-ink-muted uppercase tracking-widest">
                {items.length}{" "}
                {items.length === 1 ? "Wegweiser" : "Wegweiser"}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((topic) => (
                <TopicCard key={topic.slug} topic={topic} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function TopicCard({ topic }: { topic: Topic }) {
  if (!topic.available) {
    return (
      <div className="rounded-lg border border-ink/10 bg-paper-warm/40 p-6 opacity-60 cursor-not-allowed">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif text-xl text-ink">{topic.title}</h3>
          <span className="text-[10px] uppercase tracking-widest text-ink-muted bg-paper-dark px-2 py-1 rounded">
            bald
          </span>
        </div>
        <p className="text-sm text-ink-muted leading-relaxed">
          {topic.shortDescription}
        </p>
      </div>
    );
  }

  return (
    <Link
      href={`/themen/${topic.slug}`}
      className="group rounded-lg border border-ink/15 bg-white hover:border-accent hover:shadow-md p-6 transition-all duration-200 block"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-serif text-xl text-ink group-hover:text-accent transition-colors">
          {topic.title}
        </h3>
        <span className="text-ink-muted group-hover:text-accent transition-colors text-xl leading-none">
          →
        </span>
      </div>
      <p className="text-sm text-ink-soft leading-relaxed mb-4">
        {topic.shortDescription}
      </p>
      <p className="text-xs text-ink-muted">
        ca. {topic.estimatedMinutes} Min.
      </p>
    </Link>
  );
}
