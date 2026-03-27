"use client";

import { motion } from "framer-motion";

interface CTAButtonProps {
  href: string;
  label: string;
  variant: "primary" | "outline";
  external?: boolean;
  download?: boolean | string;
  icon?: React.ReactNode;
}

export default function CTAButton({
  href,
  label,
  variant,
  external = false,
  download = false,
  icon,
}: CTAButtonProps) {
  const base =
    "btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-inter text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent";

  const styles =
    variant === "primary"
      ? "bg-accent text-accent-inv hover:opacity-80"
      : "border border-border text-text-secondary hover:border-text-secondary hover:text-text-primary";

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download || undefined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles}`}
    >
      {icon && <span className="flex-shrink-0 opacity-70">{icon}</span>}
      {label}
    </motion.a>
  );
}
