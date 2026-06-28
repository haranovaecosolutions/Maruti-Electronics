import {
  BadgeCheck,
  Cable,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Flame,
  Gauge,
  HardHat,
  Lightbulb,
  ScanLine,
  ShieldCheck,
  SlidersHorizontal,
  Sun,
  TowerControl,
  Wrench,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  tower: TowerControl,
  zap: Zap,
  panel: SlidersHorizontal,
  generator: Gauge,
  light: Lightbulb,
  solar: Sun,
  approval: ClipboardCheck,
  cable: Cable,
  check: CheckCircle2,
  camera: Camera,
  fire: Flame,
  shield: ShieldCheck,
  scan: ScanLine,
  tools: Wrench,
};

type Props = {
  service: {
    title: string;
    category: string;
    description: string;
    points: string[];
    icon: string;
  };
};

export default function ServiceCard({ service }: Props) {
  const Icon = iconMap[service.icon] || BadgeCheck;

  return (
    <article className="service-card">
      <div className="service-icon">
        <Icon size={28} />
      </div>
      <span>{service.category}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>
        {service.points.map((point) => (
          <li key={point}>
            <HardHat size={15} />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}