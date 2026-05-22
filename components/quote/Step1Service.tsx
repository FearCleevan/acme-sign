import type { IconType } from 'react-icons'
import { BiStore, BiCube, BiSun, BiShield, BiWindow, BiFlag, BiTag, BiCheck } from 'react-icons/bi'
import { RiShirtLine } from 'react-icons/ri'
import { services } from '@/lib/mockData'
import Eyebrow from '@/components/shared/Eyebrow'

const iconMap: Record<string, IconType> = {
  'channel-signs':       BiStore,
  'dimensional-signs':   BiCube,
  'illuminated-signs':   BiSun,
  'safety-parking-signs':BiShield,
  'window-graphics':     BiWindow,
  banners:               BiFlag,
  'decals-stickers':     BiTag,
  apparel:               RiShirtLine,
}

interface Step1Props {
  selectedServices: string[]
  onToggleService: (id: string) => void
  onNext: () => void
}

const OTHER_ID = 'other'

const allTiles = [
  ...services.map((s) => ({
    id: s.slug,
    name: s.name,
    description: s.shortDescription,
  })),
  { id: OTHER_ID, name: 'Other / Not Sure', description: 'Tell us what you have in mind and we\'ll figure it out together.' },
]

export default function Step1Service({ selectedServices, onToggleService, onNext }: Step1Props) {
  const canContinue = selectedServices.length > 0

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Eyebrow variant="signal" className="mb-3">STEP 1 OF 3</Eyebrow>
        <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
          WHAT CAN WE MAKE FOR YOU?
        </h2>
        <p className="font-sans text-[15px] text-iron-soft mt-2 leading-relaxed">
          Select everything that applies — multiple selections are fine.
        </p>
      </div>

      {/* Service tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {allTiles.map((tile) => {
          const Icon = iconMap[tile.id]
          const selected = selectedServices.includes(tile.id)

          return (
            <button
              key={tile.id}
              onClick={() => onToggleService(tile.id)}
              className={`relative flex flex-col gap-3 p-4 rounded-card border-2 text-left transition-all duration-150 ${
                selected
                  ? 'border-signal bg-signal/5'
                  : 'border-chalk-deep bg-chalk-mid hover:border-iron-soft'
              }`}
              aria-pressed={selected}
            >
              {/* Selected checkmark */}
              {selected && (
                <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-signal flex items-center justify-center">
                  <BiCheck size={13} className="text-steel" />
                </span>
              )}

              {/* Icon */}
              {Icon && (
                <Icon
                  size={28}
                  className={selected ? 'text-signal' : 'text-iron-soft'}
                  aria-hidden="true"
                />
              )}

              <div className="flex flex-col gap-1">
                <span
                  className={`font-display text-[16px] leading-tight tracking-[0.02em] ${
                    selected ? 'text-steel' : 'text-steel'
                  }`}
                >
                  {tile.name.toUpperCase()}
                </span>
                <span className="font-sans text-[11px] text-iron-soft leading-snug line-clamp-2">
                  {tile.description}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Continue */}
      <div className="flex justify-end pt-2">
        <button
          onClick={onNext}
          disabled={!canContinue}
          className="inline-flex items-center justify-center min-h-13 px-10 font-display text-[18px] tracking-wider uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark transition-all duration-200 hover:-translate-y-px disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          Continue →
        </button>
      </div>
    </div>
  )
}
