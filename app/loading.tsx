export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Hero skeleton — dark */}
      <div className="canvas-dark pt-[72px]">
        <div className="container-site py-16 lg:py-24 flex flex-col gap-5">
          <div className="h-3 w-24 bg-steel-light rounded" />
          <div className="h-16 w-[70%] max-w-[560px] bg-steel-mid rounded" />
          <div className="h-16 w-[55%] max-w-[440px] bg-steel-mid rounded" />
          <div className="h-5 w-[45%] max-w-[360px] bg-steel-light rounded mt-2" />
          <div className="flex gap-4 mt-4">
            <div className="h-[52px] w-40 bg-signal/20 rounded" />
            <div className="h-[52px] w-36 bg-steel-mid rounded" />
          </div>
        </div>
      </div>

      {/* Content skeleton — light */}
      <div className="bg-chalk py-16">
        <div className="container-site grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-chalk-mid border border-chalk-deep rounded-card p-6 flex flex-col gap-4 h-52">
              <div className="w-10 h-10 bg-chalk-deep rounded" />
              <div className="h-5 w-3/4 bg-chalk-deep rounded" />
              <div className="h-4 w-full bg-chalk-deep rounded" />
              <div className="h-4 w-2/3 bg-chalk-deep rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
