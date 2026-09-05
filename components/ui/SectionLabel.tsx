interface SectionLabelProps {
  index: string;
  label: string;
}

export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <p className="font-mono text-highlight text-xs tracking-[0.2em] uppercase shrink-0">
        {index} — {label}
      </p>
      <div className="flex-1 h-px" style={{ background: "var(--border-color)" }} />
    </div>
  );
}
