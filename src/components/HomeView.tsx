import { Gamepad2, Rocket, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { GAMES } from '../content/games'
import { SITE } from '../content/site'
import { GameCard } from './GameCard'

interface HomeViewProps {
  onPlay: (id: string) => void
}

const TRUST_CHIPS = [
  { icon: ShieldCheck, label: 'Sin anuncios' },
  { icon: Sparkles, label: 'Sin registro' },
  { icon: Rocket, label: '60 FPS' },
]

export function HomeView({ onPlay }: HomeViewProps) {
  const scrollToGames = () => {
    document
      .getElementById('juegos')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Presentación */}
      <section className="relative overflow-hidden bg-linear-to-b from-sky-200 via-sky-200 to-cloud">
        <Star
          className="absolute top-10 left-[8%] h-10 w-10 text-white/70"
          aria-hidden="true"
        />
        <Sparkles
          className="absolute top-24 right-[10%] h-12 w-12 text-sun/80"
          aria-hidden="true"
        />
        <Star
          className="absolute bottom-8 right-[22%] h-8 w-8 text-white/60"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-blue-600 shadow-sm">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            {SITE.tagline}
          </span>

          <h1 className="mt-6 text-4xl leading-tight sm:text-5xl">
            Aprende las historias de la Biblia jugando
          </h1>

          <p className="mt-4 max-w-xl text-lg text-blue-800/80">
            Juegos sencillos, coloridos y seguros para niños. Historias
            narradas con fidelidad al texto bíblico y sin contenido doctrinal
            divisivo.
          </p>

          <button
            type="button"
            onClick={scrollToGames}
            className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-full bg-sky-500 px-8 py-4 text-xl font-extrabold text-white shadow-kid transition hover:brightness-110"
          >
            <Gamepad2 className="h-6 w-6" aria-hidden="true" />
            Ver juegos
          </button>

          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {TRUST_CHIPS.map((chip) => (
              <li
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-blue-600"
              >
                <chip.icon className="h-4 w-4" aria-hidden="true" />
                {chip.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selección de juegos */}
      <section
        id="juegos"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-14"
      >
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl">Elige tu juego</h2>
          <p className="mt-2 text-lg text-blue-800/80">
            Cada juego se carga solo cuando lo abres, para que la página siempre
            vaya rápida.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((game) => (
            <GameCard key={game.id} game={game} onPlay={onPlay} />
          ))}
        </div>
      </section>
    </>
  )
}
