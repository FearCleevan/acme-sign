import Eyebrow from '@/components/shared/Eyebrow'

export interface DetailsState {
  description: string
  timeline: string
  budget: string
  hasArtwork: string
}

interface Step2Props {
  details: DetailsState
  onChange: (field: keyof DetailsState, value: string) => void
  onNext: () => void
  onBack: () => void
}

const artworkOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'need-design', label: 'Need Help with Design' },
]

const labelClass = 'font-mono text-[10px] uppercase tracking-[0.2em] text-iron-soft block mb-2'
const inputClass =
  'w-full border-b-2 border-chalk-deep bg-transparent py-2 font-sans text-[16px] text-steel outline-none transition-colors focus:border-signal placeholder:text-chalk-deep'
const selectClass =
  'w-full border-b-2 border-chalk-deep bg-transparent py-2 font-sans text-[16px] text-steel outline-none transition-colors focus:border-signal appearance-none cursor-pointer'

export default function Step2Details({ details, onChange, onNext, onBack }: Step2Props) {
  const canContinue = details.timeline && details.budget && details.hasArtwork

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Eyebrow variant="signal" className="mb-3">STEP 2 OF 3</Eyebrow>
        <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
          TELL US ABOUT YOUR PROJECT.
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {/* Project description */}
        <div>
          <label className={labelClass}>Project Description</label>
          <textarea
            value={details.description}
            onChange={(e) => onChange('description', e.target.value)}
            rows={4}
            placeholder="Describe your project in your own words. The more detail the better — size, location, how many vehicles, what you're trying to achieve."
            className={`${inputClass} resize-none leading-relaxed`}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Timeline */}
          <div>
            <label className={labelClass}>Timeline</label>
            <select
              value={details.timeline}
              onChange={(e) => onChange('timeline', e.target.value)}
              className={selectClass}
            >
              <option value="">Select a timeline…</option>
              <option value="asap">As soon as possible</option>
              <option value="1-2-weeks">1–2 weeks</option>
              <option value="1-month">1 month</option>
              <option value="2-3-months">2–3 months</option>
              <option value="no-rush">No rush</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className={labelClass}>Budget Range</label>
            <select
              value={details.budget}
              onChange={(e) => onChange('budget', e.target.value)}
              className={selectClass}
            >
              <option value="">Select a range…</option>
              <option value="under-500">Under $500</option>
              <option value="500-2000">$500 – $2,000</option>
              <option value="2000-10000">$2,000 – $10,000</option>
              <option value="10000-plus">$10,000+</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>
        </div>

        {/* Artwork */}
        <div>
          <label className={labelClass}>Do you have existing artwork?</label>
          <div className="flex flex-wrap gap-2 mt-1">
            {artworkOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange('hasArtwork', opt.value)}
                className={`font-mono text-[11px] uppercase tracking-[0.14em] px-4 py-2 rounded-pill border-2 transition-all duration-150 ${
                  details.hasArtwork === opt.value
                    ? 'border-signal bg-signal/8 text-steel'
                    : 'border-chalk-deep text-iron-soft hover:border-iron-soft'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={onBack}
          className="font-mono text-[12px] uppercase tracking-[0.16em] text-iron-soft hover:text-signal-dark transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={!canContinue}
          className="inline-flex items-center justify-center min-h-[52px] px-10 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark transition-all duration-200 hover:-translate-y-px disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          Continue →
        </button>
      </div>
    </div>
  )
}
