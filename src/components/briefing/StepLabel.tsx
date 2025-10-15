import { useMemo } from "react"
import { cn } from "@/lib/utils"

type StepLabelSize = "md" | "lg"
type StepLabelAlign = "start" | "center"
type StepLabelVariant = "default" | "runway"

interface StepLabelProps {
  id?: string
  step: string
  label: string
  subtitle?: string
  className?: string
  size?: StepLabelSize
  align?: StepLabelAlign
  forceAccent?: boolean
  variant?: StepLabelVariant
}

/**
 * Shared STEP label for the briefing timeline.
 * Displays the step identifier on a stacked column with generous tracking
 * and a scaled headline/optional subtitle to the right so every section stays aligned.
 */
export function StepLabel({
  id,
  step,
  label,
  subtitle,
  className,
  size = "md",
  align = "start",
  forceAccent = false,
  variant = "default"
}: StepLabelProps) {
  const { stepWord, stepNumber } = useMemo(() => {
    const [word, number] = step.split(" ")
    return {
      stepWord: (word ?? "STEP").toUpperCase(),
      stepNumber: (number ?? "").toUpperCase()
    }
  }, [step])

  const labelText = label.trim().toUpperCase()
  const subtitleText = subtitle ? subtitle.toUpperCase() : undefined
  const hasLabel = labelText.length > 0
  const alignItemsClass = align === "center" ? "items-center" : "items-start"
  const textAlignClass = align === "center" ? "text-center" : "text-left"

  if (size === "lg") {
    const labelWords = hasLabel ? labelText.split(" ") : []
    const isRunway = variant === "runway"
    return (
      <div
        id={id}
        className={cn(
          "flex gap-8 text-white",
          align === "center" ? "items-center" : "items-start",
          className
        )}
      >
        <div className={cn("flex flex-col gap-[0.65rem]", alignItemsClass)}>
          <span
            className={cn(
              isRunway
                ? "text-base font-semibold uppercase tracking-[0.32em] text-white/70"
                : "text-sm font-semibold uppercase tracking-[0.6em] text-white/75 sm:text-base",
              textAlignClass
            )}
          >
            {stepWord}
          </span>
          <span
            className={cn(
              isRunway
                ? "text-[3.4rem] font-black uppercase tracking-tight text-white sm:text-[3.75rem] sm:leading-[1.05]"
                : "text-3xl font-semibold uppercase tracking-[0.5em] text-white/85 sm:text-[40px] sm:leading-[1.05]",
              textAlignClass
            )}
          >
            {stepNumber}
          </span>
          {!hasLabel && forceAccent ? (
            <span
              data-step-accent
              className={cn(
                "rounded-full bg-gradient-to-r from-white/85 via-white/65 to-transparent shadow-[0_0_18px_rgba(120,220,255,0.5)]",
                isRunway ? "mt-4 h-1.5 w-32" : "mt-3 h-1 w-20"
              )}
            />
          ) : null}
        </div>
        {(hasLabel || subtitleText) ? (
        <div className={cn("relative flex flex-col gap-2", alignItemsClass, textAlignClass)}>
          {labelWords.length > 0 ? (
            <>
              {labelWords.map((word, index) => (
                <span
                  key={word + index}
                  className={cn("text-2xl font-semibold uppercase tracking-[0.6em] text-white/90 sm:text-[32px] sm:leading-[1.05]", textAlignClass)}
                >
                  {word}
                </span>
              ))}
              <span
                data-step-accent
                className={cn("mt-1 h-1 w-24 rounded-full bg-gradient-to-r from-white/90 via-white/70 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.35)]", align === "center" ? "mx-auto" : undefined)}
              />
            </>
          ) : null}
          {subtitleText ? (
            <span className={cn("text-sm font-medium uppercase tracking-[0.4em] text-white/65", textAlignClass)}>
              {subtitleText}
            </span>
          ) : null}
        </div>
        ) : null}
      </div>
    )
  }

  const sizeStyles: Record<StepLabelSize, {
    root: string
    word: string
    number: string
    label: string
    subtitle: string
  }> = {
    md: {
      root: "sm:flex-row sm:items-end sm:gap-6",
      word: "text-xs font-semibold uppercase tracking-[0.55em] text-white/70",
      number: "text-base font-semibold uppercase tracking-[0.45em] text-white/80 sm:text-lg md:text-xl",
      label: "text-sm font-semibold uppercase tracking-[0.45em] text-white/85 sm:text-base md:text-lg",
      subtitle: "text-[0.65rem] font-medium uppercase tracking-[0.35em] text-white/60 sm:text-xs md:text-sm"
    }
  }

  const current = sizeStyles[size]

  return (
    <div
      id={id}
      className={cn(
        "flex flex-col gap-3 text-white",
        current.root,
        align === "center" ? "items-center text-center" : undefined,
        className
      )}
    >
      <div className="flex items-center gap-2 sm:flex-col sm:items-start sm:gap-1">
        <span className={current.word}>
          {stepWord}
        </span>
        <span className={current.number}>
          {stepNumber}
        </span>
      </div>
      {hasLabel ? (
        <div className="flex flex-col leading-tight">
          <span className={current.label}>
            {labelText}
          </span>
          {subtitleText ? (
            <span className={current.subtitle}>
              {subtitleText}
            </span>
          ) : null}
        </div>
      ) : subtitleText ? (
        <div className="flex flex-col leading-tight">
          <span className={current.subtitle}>
            {subtitleText}
          </span>
        </div>
      ) : null}
    </div>
  )
}
