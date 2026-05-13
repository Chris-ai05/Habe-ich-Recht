import type { Topic } from "@/lib/types";
import { widerrufsrecht } from "@/data/widerrufsrecht";

// Platzhalter-Themen, die noch nicht ausgearbeitet sind.
// Sobald ein Entscheidungsbaum vorliegt, einfach `available: true` setzen
// und nodes/startNodeId ergänzen.
const placeholder = (
  slug: string,
  title: string,
  shortDescription: string,
  category: Topic["category"],
  estimatedMinutes = 3,
): Topic => ({
  slug,
  title,
  shortDescription,
  longDescription: shortDescription,
  category,
  estimatedMinutes,
  available: false,
  startNodeId: "",
  nodes: {},
});

export const topics: Topic[] = [
  widerrufsrecht,
  placeholder(
    "mangelhafte-ware",
    "Mangelhafte Ware",
    "Was tun, wenn die gekaufte Ware Mängel hat? Klären Sie Ihre Gewährleistungsrechte.",
    "Verbraucherrecht",
  ),
  placeholder(
    "mietminderung",
    "Mietminderung",
    "Schimmel, defekte Heizung, Lärm – wann darf die Miete gemindert werden?",
    "Mietrecht",
  ),
  placeholder(
    "kuendigung-wohnung",
    "Kündigung der Wohnung",
    "Ordentlich, fristlos, Eigenbedarf – welche Kündigungsarten gibt es und was gilt?",
    "Mietrecht",
  ),
  placeholder(
    "abmahnung-job",
    "Abmahnung im Job",
    "Sie haben eine Abmahnung erhalten – ist sie rechtmäßig? Wie reagieren?",
    "Arbeitsrecht",
  ),
  placeholder(
    "kuendigungsschutz",
    "Kündigung des Arbeitsverhältnisses",
    "Greift der Kündigungsschutz? Welche Fristen sind zu beachten?",
    "Arbeitsrecht",
  ),
  placeholder(
    "bussgeldbescheid",
    "Bußgeldbescheid",
    "Einspruch sinnvoll? Welche Fristen laufen und welche Folgen drohen?",
    "Verkehrsrecht",
  ),
  placeholder(
    "flugverspaetung",
    "Flugverspätung & -ausfall",
    "Welche Entschädigung steht Ihnen nach der EU-Fluggastrechte-Verordnung zu?",
    "Reiserecht",
  ),
  placeholder(
    "reisemangel",
    "Reisemangel",
    "Hotel ungleich Beschreibung, ausgefallener Ausflug – Minderung und Schadensersatz.",
    "Reiserecht",
  ),
  placeholder(
    "inkasso-forderung",
    "Inkasso-Forderung",
    "Eine Inkasso-Mahnung liegt im Briefkasten. Ist sie berechtigt? Wie reagieren?",
    "Verbraucherrecht",
  ),
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}
