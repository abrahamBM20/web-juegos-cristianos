import { EyeOff, Gamepad2, ShieldCheck, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SITE } from '../content/site'

interface FooterProps {
  onOpenCredits: () => void
}

interface TrustItem {
  icon: LucideIcon
  title: string
  text: string
}

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: ShieldCheck,
    title: 'Ambiente seguro',
    text: 'Sin enlaces externos ni contenido no apto para niños.',
  },
  {
    icon: EyeOff,
    title: 'Sin rastreo',
    text: 'No mostramos anuncios ni recolectamos datos personales.',
  },
  {
    icon: Gamepad2,
    title: 'Historias de la Biblia',
    text: 'Relatos narrados sin interpretaciones doctrinales.',
  },
]

export function Footer({ onOpenCredits }: FooterProps) {
  return (
    <footer className="mt-auto bg-blue-800 text-sky-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Sello e identidad institucional (espacio reservado) */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 rounded-kid bg-white/95 p-4">
            <img
              src={SITE.sealSrc}
              alt={SITE.sealAlt}
              width={64}
              height={64}
              className="h-16 w-16 shrink-0"
            />
            <div>
              <p className="text-lg font-extrabold text-blue-800">
                {SITE.churchName}
              </p>
              <p className="text-sm font-semibold text-blue-600">
                {SITE.churchTagline}
              </p>
            </div>
          </div>
          <p className="max-w-xs text-sm">
            Espacio reservado para el sello e identidad visual de la iglesia
            desarrolladora.
          </p>
        </div>

        {/* Principios de seguridad para niños */}
        <div>
          <h2 className="text-base font-extrabold text-white">
            Pensado para niños
          </h2>
          <ul className="mt-4 space-y-4">
            {TRUST_ITEMS.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <item.icon
                  className="mt-0.5 h-6 w-6 shrink-0 text-sun"
                  aria-hidden="true"
                />
                <span>
                  <span className="block font-bold text-white">
                    {item.title}
                  </span>
                  <span className="block text-sm">{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Créditos */}
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-extrabold text-white">Créditos</h2>
          <p className="text-sm">
            Plataforma educativa construida con React, TypeScript, Vite y
            Phaser.
          </p>
          <button
            type="button"
            onClick={onOpenCredits}
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-sun px-5 py-2.5 font-bold text-blue-800 transition hover:brightness-105"
          >
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            Ver créditos
          </button>
          <p className="text-xs text-sky-200/80">
            © {SITE.year} {SITE.churchName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
