import { BiCheckCircle } from 'react-icons/bi'
import type { Service } from '@/lib/types'

interface ServiceFeaturesProps {
  service: Service
}

export default function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="bg-chalk py-section">
      <div className="container-site">
        <div className="flex flex-col gap-3 mb-12">
          <span className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-signal-dark">
            WHY CHOOSE ACME FOR {service.name.toUpperCase()}
          </span>
          <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
            BUILT FOR ATLANTIC CANADIAN BUSINESSES.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-chalk-mid border border-chalk-deep rounded-card p-6"
            >
              <BiCheckCircle
                size={22}
                className="text-signal flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="font-sans text-[15px] text-iron leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>

        {/* Use cases strip */}
        {service.useCases.length > 0 && (
          <div className="mt-12 pt-10 border-t border-chalk-deep">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-iron-soft mb-5">
              Common Applications
            </p>
            <div className="flex flex-wrap gap-3">
              {service.useCases.map((useCase, i) => (
                <span
                  key={i}
                  className="font-sans text-[14px] text-iron bg-chalk border border-chalk-deep rounded-pill px-4 py-2"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
