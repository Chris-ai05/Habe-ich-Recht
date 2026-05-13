export default function UeberPage() {
  return (
    <article className="container-narrow py-16">
      <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-ink mb-6">
        Über das Projekt
      </h1>
      <div className="prose prose-lg text-ink-soft space-y-5 leading-relaxed">
        <p>
          Der Rechts-Wegweiser möchte Menschen ohne juristische Vorbildung dabei
          helfen, sich in alltäglichen Rechtsfragen erst einmal zu orientieren –
          bevor sie eine Anwaltskanzlei aufsuchen oder über teure Schritte
          entscheiden.
        </p>
        <p>
          Jedes Thema ist als Entscheidungsbaum aufgebaut: Sie beantworten
          mehrere kurze Fragen und erhalten am Ende eine nachvollziehbare
          Einschätzung mit Hinweisen auf die einschlägigen Rechtsgrundlagen und
          mögliche nächste Schritte.
        </p>
        <p>
          <strong>Was dieser Wegweiser nicht ist:</strong> Eine
          Rechtsberatung. Die Antworten sind allgemein gehalten und können den
          konkreten Einzelfall nicht ersetzen. Bei wirklich wichtigen
          Entscheidungen wenden Sie sich bitte an eine zugelassene
          Rechtsanwältin oder einen zugelassenen Rechtsanwalt.
        </p>
      </div>
    </article>
  );
}
