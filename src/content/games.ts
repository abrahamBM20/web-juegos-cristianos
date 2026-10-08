/**
 * Catálogo de juegos de la plataforma.
 *
 * IMPORTANTE (Neutralidad doctrinal): las descripciones se limitan al texto
 * narrativo e histórico de la Biblia. No incluir interpretaciones dogmáticas
 * ni puntos divisivos entre denominaciones.
 */
export type GameIcon = 'star' | 'ark' | 'crown' | 'memory'

export interface GameMeta {
  id: string
  title: string
  description: string
  icon: GameIcon
  age: string
  duration: string
  /** `false` muestra la tarjeta como "Próximamente" (sin enlace de juego). */
  available: boolean
}

export const GAMES: GameMeta[] = [
  {
    id: 'estrellas-creacion',
    title: 'Estrellas de la Creación',
    description:
      'Toca las estrellas que brillan en el cielo y suma puntos. Juego de prueba para verificar la integración y el rendimiento a 60 FPS.',
    icon: 'star',
    age: '4-8 años',
    duration: '2 min',
    available: true,
  },
  {
    id: 'arca-de-noe',
    title: 'El Arca de Noé',
    description:
      'Ayuda a los animales a subir al arca antes de que llegue la lluvia.',
    icon: 'ark',
    age: '5-9 años',
    duration: '3 min',
    available: false,
  },
  {
    id: 'david-y-goliat',
    title: 'David y Goliat',
    description:
      'Acompaña al joven pastor en el relato de David y Goliat.',
    icon: 'crown',
    age: '6-10 años',
    duration: '3 min',
    available: false,
  },
  {
    id: 'memoria-biblica',
    title: 'Memoria Bíblica',
    description:
      'Encuentra las parejas de animales y personajes de las historias.',
    icon: 'memory',
    age: '4-9 años',
    duration: '5 min',
    available: false,
  },
]
