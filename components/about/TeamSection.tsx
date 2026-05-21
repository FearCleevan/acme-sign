import type { TeamMember } from '@/lib/types'
import ImagePlate from '@/components/shared/ImagePlate'
import Eyebrow from '@/components/shared/Eyebrow'

interface TeamSectionProps {
  members: TeamMember[]
}

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <section className="bg-chalk py-section">
      <div className="container-site">
        <div className="flex flex-col gap-3 mb-12">
          <Eyebrow variant="signal">OUR TEAM</Eyebrow>
          <h2 className="font-display text-display-lg leading-[0.96] tracking-[0.02em] text-steel">
            THE PEOPLE BEHIND THE SIGNS.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {members.map((member) => {
            const isFounder = member.yearsAtAcme >= 40
            return (
              <div
                key={member.id}
                className={`flex flex-col gap-4 ${
                  isFounder ? 'sm:col-span-1' : ''
                }`}
              >
                <ImagePlate
                  alt={`${member.name} — ${member.title}`}
                  aspectRatio={isFounder ? '3/4' : '1/1'}
                  className="w-full"
                />

                <div className="flex flex-col gap-1">
                  <h3
                    className="font-display leading-none tracking-[0.02em] text-steel"
                    style={{ fontSize: isFounder ? 28 : 22 }}
                  >
                    {member.name.toUpperCase()}
                  </h3>
                  <p className="font-sans text-[14px] text-iron-soft">{member.title}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal-dark">
                    {member.yearsAtAcme} YEARS WITH ACME
                  </p>
                </div>

                <p className="font-sans text-[13px] text-iron-soft leading-relaxed">{member.bio}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
