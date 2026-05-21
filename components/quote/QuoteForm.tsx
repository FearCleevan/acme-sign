'use client'

import { useState } from 'react'
import QuoteProgress from './QuoteProgress'
import Step1Service from './Step1Service'
import Step2Details from './Step2Details'
import type { DetailsState } from './Step2Details'
import Step3Contact from './Step3Contact'
import type { ContactData } from './Step3Contact'
import QuoteConfirmed from './QuoteConfirmed'

type QuoteStep = 1 | 2 | 3 | 'confirmed'

export default function QuoteForm() {
  const [step, setStep] = useState<QuoteStep>(1)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [details, setDetails] = useState<DetailsState>({
    description: '',
    timeline:    '',
    budget:      '',
    hasArtwork:  '',
  })

  function toggleService(id: string) {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  function updateDetail(field: keyof DetailsState, value: string) {
    setDetails((prev) => ({ ...prev, [field]: value }))
  }

  function handleFinalSubmit(contactData: ContactData) {
    const fullData = {
      services: selectedServices,
      ...details,
      ...contactData,
    }
    console.log('Quote request submitted:', fullData)
    setStep('confirmed')
  }

  if (step === 'confirmed') return <QuoteConfirmed />

  return (
    <section className="bg-chalk">
      <div className="container-site max-w-[780px] py-14 lg:py-20">
        {/* Progress indicator */}
        <div className="mb-12 lg:mb-16">
          <QuoteProgress step={step as 1 | 2 | 3} />
        </div>

        {/* Step panels */}
        {step === 1 && (
          <Step1Service
            selectedServices={selectedServices}
            onToggleService={toggleService}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <Step2Details
            details={details}
            onChange={updateDetail}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}

        {step === 3 && (
          <Step3Contact
            onSubmit={handleFinalSubmit}
            onBack={() => setStep(2)}
          />
        )}
      </div>
    </section>
  )
}
