import { ArrowLeft, MousePointerClick } from 'lucide-react'
import { Suspense } from 'react'
import { GAMES } from '../content/games'
import { GAME_COMPONENTS } from '../games/registry'

interface GameViewProps {
  gameId: string
  onExit: () => void
}

export function GameView({ gameId, onExit }: GameViewProps) {
  const game = GAMES.find((item) => item.id === gameId)
  const Game = GAME_COMPONENTS[gameId]

  if (!game || !Game) {
    return (
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-4 px-4 py-20 text-center">
        <h1 className="text-3xl">Juego no disponible</h1>
        <p className="text-blue-800/80">
          Este juego todavía no está listo. Vuelve pronto.
        </p>
        <button
          type="button"
          onClick={onExit}
          className="mt-2 inline-flex min-h-12 items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-lg font-bold text-white transition hover:brightness-110"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          Volver al inicio
        </button>
      </section>
    )
  }

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 py-8">
      <button
        type="button"
        onClick={onExit}
        className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 font-bold text-blue-600 shadow-kid transition hover:bg-sky-200"
      >
        <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        Volver a los juegos
      </button>

      <div className="mt-6">
        <h1 className="text-3xl sm:text-4xl">{game.title}</h1>
        <p className="mt-2 max-w-2xl text-lg text-blue-800/80">
          {game.description}
        </p>
      </div>

      <div className="mt-6">
        <Suspense
          fallback={
            <div className="flex aspect-[3/2] w-full items-center justify-center rounded-kid bg-night text-sky-200">
              Cargando juego…
            </div>
          }
        >
          <Game />
        </Suspense>
      </div>

      <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-800/70">
        <MousePointerClick className="h-4 w-4" aria-hidden="true" />
        Usa el mouse o el dedo para jugar.
      </p>
    </section>
  )
}
