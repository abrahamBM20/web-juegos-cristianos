import { useState } from 'react'
import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { ModalCreditos } from './ModalCreditos'
import { Navbar } from './Navbar'
import type { ViewName } from './Navbar'

interface LayoutProps {
  currentView: ViewName
  onGoHome: () => void
  onGoGames: () => void
  children: ReactNode
}

/**
 * Estructura base de la plataforma: barra de navegación, área principal,
 * pie de página con el sello de la iglesia y el modal de créditos.
 */
export function Layout({
  currentView,
  onGoHome,
  onGoGames,
  children,
}: LayoutProps) {
  const [creditsOpen, setCreditsOpen] = useState(false)
  const openCredits = () => setCreditsOpen(true)
  const closeCredits = () => setCreditsOpen(false)

  return (
    <div className="flex min-h-svh flex-col bg-cloud">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-blue-600"
      >
        Saltar al contenido
      </a>

      <Navbar
        currentView={currentView}
        onGoHome={onGoHome}
        onGoGames={onGoGames}
        onOpenCredits={openCredits}
      />

      <main id="contenido" className="flex flex-1 flex-col">
        {children}
      </main>

      <Footer onOpenCredits={openCredits} />
      <ModalCreditos open={creditsOpen} onClose={closeCredits} />
    </div>
  )
}
