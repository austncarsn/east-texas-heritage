import React from "react";

type Size = "sm" | "md" | "lg";
type NodeState =
  | "active"
  | "completed"
  | "disabled"
  | "default";

interface TimelineNodeProps {
  isActive?: boolean;
  isCompleted?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  label?: string;
  showTooltip?: boolean;
  size?: Size;
  id?: string; // optional stable id if you have one
}

const SIZES: Record<
  Size,
  { box: string; dot: string; icon: string }
> = {
  sm: { box: "w-4 h-4", dot: "w-1.5 h-1.5", icon: "w-3 h-3" },
  md: { box: "w-5 h-5", dot: "w-2 h-2", icon: "w-3.5 h-3.5" },
  lg: { box: "w-6 h-6", dot: "w-2.5 h-2.5", icon: "w-4 h-4" },
};

const stateOf = ({
  isDisabled,
  isActive,
  isCompleted,
}: Pick<
  TimelineNodeProps,
  "isDisabled" | "isActive" | "isCompleted"
>): NodeState =>
  isDisabled
    ? "disabled"
    : isActive
      ? "active"
      : isCompleted
        ? "completed"
        : "default";

export function TimelineNode({
  isActive = false,
  isCompleted = false,
  isDisabled = false,
  onClick,
  label,
  showTooltip = false,
  size = "md",
  id,
}: TimelineNodeProps) {
  const s = SIZES[size];
  const nodeState = stateOf({
    isDisabled,
    isActive,
    isCompleted,
  });

  const tooltipId =
    showTooltip && label
      ? `${id ?? "timeline-node"}-tip`
      : undefined;

  return (
    <div className="relative flex items-center justify-center">
      <button
        type="button"
        data-state={nodeState}
        className={[
          "relative rounded-full transition-all duration-300 ease-out",
          "flex items-center justify-center",
          s.box,
          // base surface and border come from data-state below
          // interactivity
          isDisabled
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer hover:scale-110",
          // focus treatment
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          // state styles
          nodeState === "active" &&
            "bg-primary border-surface border-[3px] shadow-lg shadow-primary/30 ring-4 ring-primary/20",
          nodeState === "completed" &&
            "bg-success border-surface border-[2px] shadow-md",
          nodeState === "disabled" &&
            "bg-muted border-surface border-[2px] shadow-sm",
          nodeState === "default" &&
            "bg-surface-contrast border-surface border-[2px] shadow-sm",
        ].join(" ")}
        onClick={isDisabled ? undefined : onClick}
        disabled={isDisabled}
        aria-label={label || "Timeline node"}
        aria-current={isActive ? "step" : undefined}
        aria-describedby={tooltipId}
      >
        {/* Active pulse; respects reduced motion */}
        {isActive && (
          <>
            <span className="absolute inset-0 rounded-full bg-primary/75 motion-safe:animate-ping" />
            <span className="absolute inset-0 rounded-full bg-primary/40 motion-reduce:hidden" />
          </>
        )}

        {/* Inner dot */}
        <span
          className={[
            "absolute rounded-full bg-surface transition-all duration-300",
            isActive ? s.dot : s.dot, // keep same size; change if you want a pop on active
          ].join(" ")}
        />

        {/* Completed check */}
        {isCompleted && (
          <svg
            className={[
              "absolute",
              s.icon,
              "text-surface",
            ].join(" ")}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4.707 9.293L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Tooltip (hover/visual only, but still referenced for SR) */}
      {showTooltip && label && !isDisabled && (
        <div
          id={tooltipId}
          role="tooltip"
          className={[
            "pointer-events-none absolute -translate-x-1/2 whitespace-nowrap rounded border border-border bg-popover px-2 py-1 text-xs text-surface",
            "left-1/2 bottom-full mb-2 opacity-0 transition-opacity duration-200",
            "group-has-[button:hover]:opacity-100", // Tailwind v4: parent state if you use .group on wrapper, else fallback to :hover
          ].join(" ")}
        >
          {label}
          <div className="absolute top-full left-1/2 -mt-px -translate-x-1/2">
            <div className="h-0 w-0 border-l-4 border-r-4 border-t-4 border-t-popover border-transparent" />
          </div>
        </div>
      )}
    </div>
  );
}