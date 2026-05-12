import type { ReactNode } from "react";

export const palette = {
  emerald: { bg: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-900", chip: "bg-emerald-100 text-emerald-700" },
  indigo: { bg: "bg-indigo-50", border: "border-indigo-300", text: "text-indigo-900", chip: "bg-indigo-100 text-indigo-700" },
  green: { bg: "bg-green-50", border: "border-green-300", text: "text-green-900", chip: "bg-green-100 text-green-700" },
  orange: { bg: "bg-orange-50", border: "border-orange-300", text: "text-orange-900", chip: "bg-orange-100 text-orange-700" },
  gray: { bg: "bg-gray-50", border: "border-gray-300", text: "text-gray-900", chip: "bg-gray-200 text-gray-800" },
  amber: { bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-900", chip: "bg-amber-100 text-amber-800" },
  rose: { bg: "bg-rose-50", border: "border-rose-300", text: "text-rose-900", chip: "bg-rose-100 text-rose-700" },
  sky: { bg: "bg-sky-50", border: "border-sky-300", text: "text-sky-900", chip: "bg-sky-100 text-sky-700" },
} as const;

export type PaletteKey = keyof typeof palette;

interface DiagramFrameProps {
  caption?: string;
  children: ReactNode;
  className?: string;
}

export function DiagramFrame({ caption, children, className = "" }: DiagramFrameProps) {
  return (
    <figure className={`my-4 sm:my-6 ${className}`}>
      <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 overflow-x-auto">
        {children}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs sm:text-sm text-gray-500 text-center italic">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

interface NodeBoxProps {
  label: string;
  sublabel?: string;
  color?: PaletteKey;
  size?: "sm" | "md" | "lg";
  dashed?: boolean;
}

export function NodeBox({ label, sublabel, color = "gray", size = "md", dashed = false }: NodeBoxProps) {
  const p = palette[color];
  const sizeClass =
    size === "sm"
      ? "px-3 py-2 text-xs sm:text-sm min-w-[120px]"
      : size === "lg"
      ? "px-4 py-3 text-sm sm:text-base min-w-[180px]"
      : "px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm min-w-[140px]";

  return (
    <div
      className={`${p.bg} ${p.border} ${p.text} ${sizeClass} ${dashed ? "border-dashed" : "border-solid"} border-2 rounded-lg font-semibold text-center shadow-sm`}
    >
      <div>{label}</div>
      {sublabel ? <div className="text-xs font-normal opacity-75 mt-0.5">{sublabel}</div> : null}
    </div>
  );
}

interface ArrowProps {
  label?: string;
  direction?: "down" | "right";
  variant?: "solid" | "dashed";
}

export function Arrow({ label, direction = "down", variant = "solid" }: ArrowProps) {
  if (direction === "right") {
    return (
      <div className="flex flex-col items-center px-2 sm:px-3 self-center">
        {label ? (
          <span className="text-[10px] sm:text-xs font-medium text-gray-500 mb-1 whitespace-nowrap">
            {label}
          </span>
        ) : null}
        <svg width="40" height="12" viewBox="0 0 40 12" className="text-gray-400">
          <line
            x1="0"
            y1="6"
            x2="32"
            y2="6"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={variant === "dashed" ? "4 3" : undefined}
          />
          <path d="M 28 2 L 36 6 L 28 10 Z" fill="currentColor" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex items-center py-1 sm:py-2 self-center">
      <svg width="12" height="32" viewBox="0 0 12 32" className="text-gray-400">
        <line
          x1="6"
          y1="0"
          x2="6"
          y2="24"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={variant === "dashed" ? "4 3" : undefined}
        />
        <path d="M 2 20 L 6 28 L 10 20 Z" fill="currentColor" />
      </svg>
      {label ? (
        <span className="text-[10px] sm:text-xs font-medium text-gray-500 ml-2 whitespace-nowrap">
          {label}
        </span>
      ) : null}
    </div>
  );
}

interface PipelineProps {
  children: ReactNode;
  className?: string;
}

export function Pipeline({ children, className = "" }: PipelineProps) {
  return (
    <div className={`flex flex-col items-center w-full max-w-2xl mx-auto ${className}`}>
      {children}
    </div>
  );
}

interface BranchProps {
  children: ReactNode;
  className?: string;
}

export function Branch({ children, className = "" }: BranchProps) {
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full ${className}`}>
      {children}
    </div>
  );
}
