'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Eyebrow from '@/components/shared/Eyebrow'

const schema = z.object({
  name:    z.string().min(2, 'Please enter your full name'),
  email:   z.string().email('Please enter a valid email address'),
  phone:   z.string().min(7, 'Please enter your phone number'),
  company: z.string().optional(),
  message: z.string().optional(),
})

export type ContactData = z.infer<typeof schema>

interface Step3Props {
  onSubmit: (data: ContactData) => void
  onBack: () => void
}

const labelClass = 'font-mono text-[10px] uppercase tracking-[0.2em] text-iron-soft block mb-2'

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
      {error && (
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-crimson mt-1.5">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Step3Contact({ onSubmit, onBack }: Step3Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })

  const inputBase =
    'w-full border-b-2 bg-transparent py-2 font-sans text-[16px] text-steel outline-none transition-colors placeholder:text-chalk-deep'
  const inputOk    = `${inputBase} border-chalk-deep focus:border-signal`
  const inputError = `${inputBase} border-crimson focus:border-crimson`

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-col gap-8">
        <div>
          <Eyebrow variant="signal" className="mb-3">STEP 3 OF 3</Eyebrow>
          <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
            HOW DO WE REACH YOU?
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Field label="Full Name *" error={errors.name?.message}>
              <input
                {...register('name')}
                type="text"
                placeholder="Jane Smith"
                className={errors.name ? inputError : inputOk}
              />
            </Field>

            <Field label="Phone Number *" error={errors.phone?.message}>
              <input
                {...register('phone')}
                type="tel"
                placeholder="(902) 555-0100"
                className={errors.phone ? inputError : inputOk}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Field label="Email Address *" error={errors.email?.message}>
              <input
                {...register('email')}
                type="email"
                placeholder="jane@example.com"
                className={errors.email ? inputError : inputOk}
              />
            </Field>

            <Field label="Company Name (optional)" error={errors.company?.message}>
              <input
                {...register('company')}
                type="text"
                placeholder="Your company"
                className={errors.company ? inputError : inputOk}
              />
            </Field>
          </div>

          <Field label="Additional Notes (optional)" error={errors.message?.message}>
            <textarea
              {...register('message')}
              rows={3}
              placeholder="Anything else you'd like us to know?"
              className={`${errors.message ? inputError : inputOk} resize-none leading-relaxed`}
            />
          </Field>
        </div>

        {/* Privacy note */}
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-iron-soft">
          WE NEVER SHARE YOUR INFORMATION. NO SPAM. NO LISTS.
        </p>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={onBack}
            className="font-mono text-[12px] uppercase tracking-[0.16em] text-iron-soft hover:text-signal-dark transition-colors"
          >
            ← Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center min-h-[52px] px-10 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark transition-all duration-200 hover:-translate-y-px disabled:opacity-60"
          >
            Submit Request →
          </button>
        </div>
      </div>
    </form>
  )
}
