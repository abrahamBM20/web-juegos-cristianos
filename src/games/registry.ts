import { lazy } from 'react'
import type { ComponentType, LazyExoticComponent } from 'react'

/**
 * Registro de juegos disponibles. Cada entrada se carga de forma diferida
 * (code splitting) para no afectar el bundle inicial de la interfaz.
 */
export const GAME_COMPONENTS: Record<
  string,
  LazyExoticComponent<ComponentType>
> = {
  'estrellas-creacion': lazy(() => import('./StarCatchGame/StarCatchGame')),
}
