'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().min(2, 'Please enter your name'),
  email:   z.string().email('Please enter a valid email'),
  phone:   z.string().min(7, 'Please enter your phone number'),
  message: z.string().min(10, 'Please include a brief message'),
})

type FormData = z.infer<typeof schema>

const labelClass = 'font-mono text-[10px] uppercase tracking-[0.2em] text-iron-soft block mb-2'

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
      {error && (
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-crimson mt-1.5">{error}</p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })

  function onSubmit(data: FormData) {
    console.log('Contact form submitted:', data)
    setSubmitted(true)
  }

  const inputBase =
    'w-full border-b-2 bg-transparent py-2 font-sans text-[16px] text-steel outline-none transition-colors placeholder:text-chalk-deep'
  const inputOk    = `${inputBase} border-chalk-deep focus:border-signal`
  const inputError = `${inputBase} border-crimson focus:border-crimson`

  if (submitted) {
    return (
      <div className="flex flex-col gap-4 py-8">
        <div className="w-8 h-[2px] bg-signal" />
        <h3 className="font-display text-[28px] tracking-[0.02em] text-steel">MESSAGE SENT.</h3>
        <p className="font-sans text-[15px] text-iron-soft leading-relaxed">
          Thanks for reaching out. We&apos;ll get back to you within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <Field label="Name *" error={errors.name?.message}>
          <input {...register('name')} type="text" placeholder="Jane Smith"
            className={errors.name ? inputError : inputOk} />
        </Field>
        <Field label="Phone *" error={errors.phone?.message}>
          <input {...register('phone')} type="tel" placeholder="(902) 555-0100"
            className={errors.phone ? inputError : inputOk} />
        </Field>
      </div>

      <Field label="Email *" error={errors.email?.message}>
        <input {...register('email')} type="email" placeholder="jane@example.com"
          className={errors.email ? inputError : inputOk} />
      </Field>

      <Field label="Message *" error={errors.message?.message}>
        <textarea {...register('message')} rows={4}
          placeholder="Tell us what you need…"
          className={`${errors.message ? inputError : inputOk} resize-none leading-relaxed`} />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark transition-all duration-200 hover:-translate-y-px disabled:opacity-60 self-start"
      >
        Send Message →
      </button>
    </form>
  )
}
