interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignmentClass = align === "center" ? "text-center" : "text-left";
  const dotAlignment = align === "center" ? "justify-center" : "justify-start";
  const subtitleWidthClass = align === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-10 sm:mb-14 md:mb-16 ${alignmentClass}`}>
      {eyebrow ? (
        <div className={`flex items-center ${dotAlignment} space-x-3 mb-4 sm:mb-6`}>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm font-semibold tracking-widest uppercase text-green-600">
            {eyebrow}
          </span>
          <div className="w-8 h-1 bg-green-500 rounded-full"></div>
        </div>
      ) : null}

      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
        {title}
      </h2>

      {subtitle ? (
        <p className={`text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl ${subtitleWidthClass}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
