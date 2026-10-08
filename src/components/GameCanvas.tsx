import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import type { GameLoader } from '../games/types'

type GameStatus = 'loading' | 'ready' | 'error'

interface GameCanvasProps {
  /** Fábrica del juego: monta Phaser en el contenedor y devuelve su limpieza. */
  loadGame: GameLoader
  /** Nombre del juego (accesibilidad). */
  title: string
  className?: string
}

/**
 * Contenedor reutilizable que monta/desmonta un juego de Phaser dentro de React.
 * Gestiona estados de carga/error y libera recursos al desmontar.
 */
export function GameCanvas({ loadGame, title, className }: GameCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<GameStatus>('loading')

  useEffect(() => {
    const parent = containerRef.current
    if (!parent) return

    let cancelled = false
    let cleanup: (() => void) | undefined

    setStatus('loading')

    loadGame(parent)
      .then((dispose) => {
        if (cancelled) {
          dispose()
          return
        }
        cleanup = dispose
        setStatus('ready')
      })
      .catch((error: unknown) => {
        console.error('No se pudo iniciar el juego:', error)
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [loadGame])

  return (
    <div
      ref={containerRef}
      role="application"
      aria-label={`Juego: ${title}`}
      className={clsx(
        'gh-game-canvas relative aspect-[3/2] w-full overflow-hidden rounded-kid bg-night',
        className,
      )}
    >
      {status !== 'ready' && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-night/90 px-4 text-center text-sky-200">
          {status === 'loading' ? (
            <>
              <span
                className="h-10 w-10 animate-spin rounded-full border-4 border-sky-200/40 border-t-sun"
                aria-hidden="true"
              />
              <p className="text-base font-semibold">Cargando juego…</p>
            </>
          ) : (
            <>
              <p className="text-lg font-bold text-sun">¡Ups!</p>
              <p className="max-w-xs text-sm">
                No pudimos cargar el juego. Recarga la página e inténtalo de nuevo.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )
}
