const items = [
  { value: '42 YEARS', label: 'IN BUSINESS' },
  { value: '1000+', label: 'PROJECTS COMPLETED' },
  { value: 'ATLANTIC', label: 'CANADA WIDE' },
  { value: 'FREE', label: 'CONSULTATIONS' },
]

export default function TrustStrip() {
  return (
    <div className="bg-signal">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-5 px-4 text-center border-r border-steel/15 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
            >
              <span className="font-display text-[26px] tracking-[0.04em] text-steel leading-none">
                {item.value}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-steel/70 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
