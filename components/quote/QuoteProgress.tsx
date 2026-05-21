const steps = [
  { num: 1, label: 'WHAT DO YOU NEED' },
  { num: 2, label: 'PROJECT DETAILS' },
  { num: 3, label: 'YOUR CONTACT INFO' },
]

interface QuoteProgressProps {
  step: 1 | 2 | 3
}

export default function QuoteProgress({ step }: QuoteProgressProps) {
  return (
    <div className="flex items-start gap-0">
      {steps.map((s, i) => {
        const isComplete = step > s.num
        const isActive   = step === s.num

        return (
          <div key={s.num} className="flex items-start flex-1">
            {/* Step node */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-[12px] font-medium transition-colors ${
                  isComplete
                    ? 'bg-signal text-steel'
                    : isActive
                    ? 'border-2 border-signal text-signal'
                    : 'bg-chalk-deep text-iron-soft'
                }`}
              >
                {isComplete ? '✓' : s.num}
              </div>
              <span
                className={`font-mono text-[9px] uppercase tracking-[0.14em] text-center leading-tight max-w-[80px] ${
                  isActive ? 'text-steel font-medium' : isComplete ? 'text-iron' : 'text-iron-soft'
                }`}
              >
                {s.label}
              </span>
            </div>

            {/* Connector */}
            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-[1px] mt-4 mx-2 transition-colors ${
                  isComplete ? 'bg-signal' : 'bg-chalk-deep'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
