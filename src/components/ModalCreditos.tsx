import { BookOpen, Heart, Palette, ShieldCheck, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { SITE } from '../content/site'

interface ModalCreditosProps {
  open: boolean
  onClose: () => void
}

interface CreditItem {
  icon: LucideIcon
  title: string
  text: string
}

const CREDITS: CreditItem[] = [
  {
    icon: BookOpen,
    title: 'Historia bíblica pura',
    text: 'El contenido se basa en el texto narrativo e histórico de la Biblia, sin interpretaciones dogmáticas.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad y privacidad',
    text: 'Sin anuncios, sin rastreadores de terceros y sin recolección de datos personales de menores.',
  },
  {
    icon: Palette,
    title: 'Diseño y tecnología',
    text: 'Interfaz amigable para niños construida con React, TypeScript, Vite, Tailwind CSS y Phaser.',
  },
]

export function ModalCreditos({ open, onClose }: ModalCreditosProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Cerrar créditos"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-blue-800/70 backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-creditos"
        className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-kid bg-white p-6 shadow-kid"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={SITE.sealSrc}
              alt={SITE.sealAlt}
              width={64}
              height={64}
              className="h-16 w-16 shrink-0"
            />
            <div>
              <p className="text-sm font-bold text-sky-500">
                {SITE.tagline}
              </p>
              <h2
                id="titulo-creditos"
                className="text-2xl font-extrabold text-blue-800"
              >
                Créditos
              </h2>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cloud text-blue-800 transition hover:bg-sky-200"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 rounded-kid bg-cloud p-4 text-center">
          <p className="text-lg font-extrabold text-blue-800">
            {SITE.churchName}
          </p>
          <p className="text-sm font-semibold text-blue-600">
            {SITE.churchTagline}
          </p>
        </div>

        <ul className="mt-5 space-y-5">
          {CREDITS.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-200 text-blue-600">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-bold text-blue-800">
                  {item.title}
                </span>
                <span className="block text-sm text-blue-800/80">
                  {item.text}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm font-semibold text-blue-800/70">
          Hecho con
          <Heart className="h-4 w-4 text-sky-500" aria-hidden="true" />
          para los más pequeños
        </p>
      </div>
    </div>
  )
}
