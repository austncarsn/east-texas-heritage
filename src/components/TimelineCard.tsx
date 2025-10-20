import {
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronUp,
  Tag,
} from "lucide-react";
import { useState } from "react";

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  period:
    | "indigenous"
    | "settlement"
    | "civil-war"
    | "reconstruction"
    | "modern";
  image?: string;
  tags?: string[];
  expandedContent?: string;
  onReadMore?: () => void;
  isLoading?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

export function TimelineCard({
  year,
  title,
  description,
  period,
  image,
  tags = [],
  expandedContent,
  onReadMore,
  isLoading = false,
  isSelected = false,
  onClick,
}: TimelineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const periodConfig: Record<
    string,
    {
      bg: string;
      text: string;
      border: string;
      shadow: string;
      gradient: string;
    }
  > = {
    indigenous: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
      shadow: "shadow-amber-500/10",
      gradient: "from-amber-400 to-orange-500",
    },
    settlement: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      shadow: "shadow-blue-500/10",
      gradient: "from-blue-400 to-indigo-500",
    },
    "civil-war": {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
      shadow: "shadow-red-500/10",
      gradient: "from-red-400 to-rose-500",
    },
    reconstruction: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
      shadow: "shadow-green-500/10",
      gradient: "from-green-400 to-emerald-500",
    },
    modern: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
      shadow: "shadow-purple-500/10",
      gradient: "from-purple-400 to-pink-500",
    },
  };

  const currentPeriod = periodConfig[period];

  const handleCardClick = () => {
    if (!isLoading && onClick) {
      onClick();
    }
  };

  const handleReadMore = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onReadMore) {
      onReadMore();
    }
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`
        group relative transition-all duration-300 ease-out
        ${!isLoading && onClick ? "cursor-pointer hover:translate-x-2" : ""}
        ${isSelected ? "scale-[1.02]" : ""}
      `}
      onClick={handleCardClick}
    >
      {/* Glow effect when selected */}
      {isSelected && (
        <div
          className={`
          absolute inset-0 rounded-xl blur-xl opacity-30
          bg-gradient-to-r ${currentPeriod.gradient}
        `}
        />
      )}

      <div
        className={`
        relative overflow-hidden rounded-xl border
        bg-surface transition-all duration-300
        ${currentPeriod.border}
        ${isSelected ? `shadow-xl ${currentPeriod.shadow}` : "shadow-sm"}
        hover:shadow-lg
      `}
      >
        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm z-10 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-start gap-4">
            {/* Enhanced Period Indicator */}
            <div className="relative flex-shrink-0">
              <div
                className={`
                w-1 h-12 rounded-full transition-all duration-500
                ${!isLoading && onClick ? "group-hover:h-16" : ""}
                ${currentPeriod.bg.replace("bg-", "bg-")}
              `}
              />
              {/* Pulse effect for active state */}
              {isSelected && (
                <div
                  className={`
                  absolute inset-0 w-1 rounded-full
                  bg-gradient-to-b ${currentPeriod.gradient}
                  animate-pulse
                `}
                />
              )}
            </div>

            <div className="flex-1 min-w-0">
              {/* Year and Period Badge */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`
                  inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                  text-xs font-semibold uppercase tracking-wider
                  transition-all duration-300
                  ${currentPeriod.bg} ${currentPeriod.text}
                  ${!isLoading && onClick ? "group:scale-105" : ""}
                `}
                >
                  <Calendar size={12} />
                  {year}
                </div>

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    {tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className={`
                          inline-flex items-center gap-1 px-2 py-0.5 rounded-md
                          text-xs font-medium bg-muted text-muted-foreground
                        `}
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                    {tags.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{tags.length - 2}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Title with gradient effect on hover */}
              <h3
                className={`
                mb-3 font-bold text-xl md:text-2xl
                text-foreground transition-all duration-300
                group-hover:text-transparent
                group-hover:bg-gradient-to-r
                ${currentPeriod.gradient}
                group-hover:bg-clip-text
              `}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className={`
                mb-4 text-sm md:text-base leading-relaxed
                text-muted-foreground
                ${!isLoading && onClick ? "group-hover:text-foreground" : ""}
                transition-colors duration-300
              `}
              >
                {description}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleReadMore}
                  className={`
                    inline-flex items-center gap-2
                    font-semibold text-primary
                    hover:gap-3 transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                    rounded px-3 py-1 -mx-3
                  `}
                >
                  Read more
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                {/* Expand/Collapse button */}
                {expandedContent && (
                  <button
                    onClick={handleExpand}
                    className={`
                      inline-flex items-center gap-1
                      text-muted-foreground hover:text-foreground
                      transition-colors duration-300
                      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                      rounded px-2 py-1 -mx-2
                    `}
                    aria-label={
                      isExpanded ? "Collapse" : "Expand"
                    }
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp size={16} />
                        <span className="text-sm font-medium">
                          Show less
                        </span>
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} />
                        <span className="text-sm font-medium">
                          Show more
                        </span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Expanded Content */}
              {expandedContent && (
                <div
                  className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
                `}
                >
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {expandedContent}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Image Preview */}
            {image && (
              <div className="flex-shrink-0 hidden sm:block">
                <div
                  className={`
                  w-20 h-20 rounded-lg overflow-hidden
                  border-2 transition-all duration-300
                  ${currentPeriod.border}
                  ${isSelected ? "scale-110 shadow-lg" : "shadow-sm"}
                  group-hover:scale-105
                `}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom accent line that animates on hover */}
        <div
          className={`
          h-1 transition-all duration-500
          ${currentPeriod.bg}
          ${!isLoading && onClick ? "w-0 group-hover:w-full" : "w-full"}
        `}
        />
      </div>
    </div>
  );
}