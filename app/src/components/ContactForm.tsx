// Shared form that sends straight to Matt through Formspree.
// If FORMSPREE_ID in config.ts is empty, the submit button falls back to
// opening the visitor's email app with everything pre-filled.

import { useState, type FormEvent } from 'react'
import BlobButton from '@/components/BlobButton'
import { FORMSPREE_ID, SITE } from '@/config'

export type Field = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  placeholder?: string
  required?: boolean
  options?: string[]
  rows?: number
  half?: boolean // sit two fields side by side on wide screens
}

type Props = {
  formName: string // shows up as the email subject in Matt's inbox
  fields: Field[]
  submitLabel: string
  thanks: string
}

const input =
  'w-full rounded-xl border-[3px] border-ink bg-white px-4 py-2.5 font-body text-sm font-semibold text-ink placeholder:text-ink/40 focus:outline-none focus:ring-4 focus:ring-butter/70'

export default function ContactForm({ formName, fields, submitLabel, thanks }: Props) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.name, f.type === 'select' ? f.options?.[0] ?? '' : ''])),
  )
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const live = FORMSPREE_ID.trim().length > 0

  const set = (name: string, v: string) => setValues((s) => ({ ...s, [name]: v }))

  const summary = fields
    .map((f) => `${f.label}: ${values[f.name] || '(not provided)'}`)
    .join('\n')

  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(formName)}&body=${encodeURIComponent(
    `${summary}\n\n(Attach a photo if you have one.)`,
  )}`

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'sending') return // ignore repeat clicks while a send is in flight
    if (!live) {
      window.location.href = mailto
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, _subject: formName }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border-[3px] border-ink bg-butter/60 p-6">
        <p className="font-display text-xl uppercase">Got it.</p>
        <p className="mt-2 text-sm font-semibold text-ink/75">{thanks}</p>
      </div>
    )
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((f) => {
          const label = (
            <span className="font-display text-xs uppercase tracking-wide">
              {f.label}
              {f.required && <span className="text-flame"> *</span>}
            </span>
          )
          const span = f.half ? '' : 'sm:col-span-2'
          if (f.type === 'textarea') {
            return (
              <label key={f.name} className={`grid gap-1.5 ${span}`}>
                {label}
                <textarea
                  name={f.name}
                  className={input}
                  rows={f.rows ?? 4}
                  value={values[f.name]}
                  onChange={(e) => set(f.name, e.target.value)}
                  placeholder={f.placeholder}
                  required={f.required}
                />
              </label>
            )
          }
          if (f.type === 'select') {
            return (
              <label key={f.name} className={`grid gap-1.5 ${span}`}>
                {label}
                <select
                  name={f.name}
                  className={input}
                  value={values[f.name]}
                  onChange={(e) => set(f.name, e.target.value)}
                >
                  {f.options?.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
            )
          }
          return (
            <label key={f.name} className={`grid gap-1.5 ${span}`}>
              {label}
              <input
                name={f.name}
                type={f.type ?? 'text'}
                className={input}
                value={values[f.name]}
                onChange={(e) => set(f.name, e.target.value)}
                placeholder={f.placeholder}
                required={f.required}
              />
            </label>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <BlobButton type="submit" color="sun">
          {status === 'sending' ? 'Sending...' : submitLabel}
        </BlobButton>
        {!live && (
          <span className="text-xs font-semibold text-ink/50">Opens in your email app</span>
        )}
      </div>

      {status === 'error' && (
        <p className="text-sm font-bold text-flame">
          That didn't go through. Email us directly at{' '}
          <a href={mailto} className="underline">
            {SITE.email}
          </a>
          .
        </p>
      )}
    </form>
  )
}
