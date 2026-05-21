const TEXT =
  'ACME SIGN & GRAPHICS CO. · EST. 1982 · DARTMOUTH NOVA SCOTIA · VEHICLE WRAPS · LED SIGNS · CHANNEL SIGNS · DIMENSIONAL SIGNS · WINDOW GRAPHICS · BANNERS · DECALS · APPAREL · SERVING ATLANTIC CANADA · FREE CONSULTATIONS · '

export default function MarqueeStrip() {
  return (
    <div className="bg-steel overflow-hidden border-y border-steel-light py-3" aria-hidden="true">
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 28s linear infinite' }}>
        {/* Duplicated twice so the loop is seamless (-50% keyframe) */}
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal shrink-0 pr-0">
          {TEXT}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal shrink-0 pr-0">
          {TEXT}
        </span>
      </div>
    </div>
  )
}
