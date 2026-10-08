import clsx from 'clsx'
import { Gamepad2, House, Menu, ShieldCheck, X } from 'lucide-react'
import { useState } from 'react'
import type { ReactNode } from 'react'
import { SITE } from '../content/site'

export type ViewName = 'home' | 'game'

interface NavbarProps {
  currentView: ViewName
  onGoHome: () => void
  onGoGames: () => void
  onOpenCredits: () => void
}

interface NavItemProps {
  active?: boolean
  onClick: () => void
  children: ReactNode
}

function NavItem({ active = false, onClick, children }: NavItemProps) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={clsx(
          'flex min-h-11 w-full items-center gap-2 rounded-full px-5 py-2.5 text-base font-bold transition md:w-auto',
          active
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-white hover:bg-blue-800/50',
        )}
      >
        {children}
      </button>
    </li>
  )
}

export function Navbar({
  currentView,
  onGoHome,
  onGoGames,
  onOpenCredits,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const handleHome = () => {
    closeMenu()
    onGoHome()
  }

  const handleGames = () => {
    closeMenu()
    onGoGames()
  }

  const handleCredits = () => {
    closeMenu()
    onOpenCredits()
  }

  return (
    <header className="sticky top-0 z-40 border-b border-sky-200/60 bg-blue-600/95 text-white backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3"
      >
        <button
          type="button"
          onClick={handleHome}
          aria-label={`${SITE.appName} — ir al inicio`}
          className="flex items-center gap-3 rounded-2xl px-2 py-1 text-left transition hover:bg-blue-800/40"
        >
          <img
            src={SITE.sealSrc}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full bg-white/90 p-1"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-tight">
              {SITE.appName}
            </span>
            <span className="text-xs font-semibold text-sky-200">
              {SITE.tagline}
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-2 md:flex">
          <NavItem active={currentView === 'home'} onClick={handleHome}>
            <House className="h-5 w-5" aria-hidden="true" />
            Inicio
          </NavItem>
          <NavItem onClick={handleGames}>
            <Gamepad2 className="h-5 w-5" aria-hidden="true" />
            Juegos
          </NavItem>
          <NavItem onClick={handleCredits}>
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            Créditos
          </NavItem>
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="menu-movil"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-2xl text-white transition hover:bg-blue-800/50 md:hidden"
        >
          {menuOpen ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <ul
          id="menu-movil"
          className="flex flex-col gap-2 border-t border-sky-200/40 px-4 pt-3 pb-4 md:hidden"
        >
          <NavItem active={currentView === 'home'} onClick={handleHome}>
            <House className="h-5 w-5" aria-hidden="true" />
            Inicio
          </NavItem>
          <NavItem onClick={handleGames}>
            <Gamepad2 className="h-5 w-5" aria-hidden="true" />
            Juegos
          </NavItem>
          <NavItem onClick={handleCredits}>
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            Créditos
          </NavItem>
        </ul>
      )}
    </header>
  )
}
