import clsx from 'clsx'
import { ChevronRight, Clock, Crown, Lock, Ship, Sparkles, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { GameIcon, GameMeta } from '../content/games'

const ICONS: Record<GameIcon, LucideIcon> = {
  star: Star,
  ark: Ship,
  crown: Crown,
  memory: Sparkles,
}

interface GameCardProps {
  game: GameMeta
  onPlay: (id: string) => void
}

export function GameCard({ game, onPlay }: GameCardProps) {
  const Icon = ICONS[game.icon]

  return (
    <article
      className={clsx(
        'flex h-full flex-col rounded-kid bg-white p-6 ring-1 ring-sky-200 transition',
        game.available ? 'shadow-kid hover:-translate-y-1' : 'opacity-90',
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-200 text-blue-600">
          <Icon className="h-9 w-9" strokeWidth={2.5} aria-hidden="true" />
        </span>
        {!game.available && (
          <span className="rounded-full bg-cloud px-3 py-1 text-xs font-bold text-blue-600">
            Próximamente
          </span>
        )}
      </div>

      <h3 className="mt-4 text-xl">{game.title}</h3>
      <p className="mt-2 flex-1 text-base text-blue-800/80">
        {game.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-600">
        <span className="rounded-full bg-cloud px-3 py-1">{game.age}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-cloud px-3 py-1">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {game.duration}
        </span>
      </div>

      {game.available ? (
        <button
          type="button"
          onClick={() => onPlay(game.id)}
          className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-lg font-extrabold text-white transition hover:brightness-110"
        >
          Jugar ahora
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      ) : (
        <button
          type="button"
          disabled
          className="mt-5 inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-full bg-cloud px-5 py-3 text-lg font-extrabold text-blue-600/60"
        >
          <Lock className="h-5 w-5" aria-hidden="true" />
          Próximamente
        </button>
      )}
    </article>
  )
}
