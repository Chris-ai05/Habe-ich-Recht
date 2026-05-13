import Link from "next/link";
import { notFound } from "next/navigation";
import { topics, getTopic } from "@/data/topics";
import DecisionWizard from "@/components/DecisionWizard";

export function generateStaticParams() {
  return topics.filter((t) => t.available).map((t) => ({ slug: t.slug }));
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = getTopic(params.slug);
  if (!topic || !topic.available) notFound();

  return (
    <article className="container-narrow py-16">
      <Link
        href="/"
        className="text-sm text-ink-muted hover:text-accent transition-colors mb-8 inline-block"
      >
        ← Alle Themen
      </Link>

      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
          {topic.category}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-ink mb-4">
          {topic.title}
        </h1>
        <p className="text-lg text-ink-soft leading-relaxed">
          {topic.longDescription}
        </p>
      </header>

      <DecisionWizard topic={topic} />
    </article>
  );
}
