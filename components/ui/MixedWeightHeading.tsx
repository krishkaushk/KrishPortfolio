interface HeadingPart {
  text: string;
  emphasis?: boolean;
}

interface MixedWeightHeadingProps {
  parts: HeadingPart[];
  as?: "h1" | "h2" | "h3";
  className?: string;
}

// Renders a heading where emphasized words are bold and the rest is light
// weight, in one line — e.g. "the **application** process".
export default function MixedWeightHeading({ parts, as = "h2", className = "" }: MixedWeightHeadingProps) {
  const Tag = as;
  return (
    <Tag className={`font-grotesk leading-tight ${className}`}>
      {parts.map((part, i) => (
        <span key={i} className={part.emphasis ? "font-bold" : "font-light"}>
          {part.text}
        </span>
      ))}
    </Tag>
  );
}
