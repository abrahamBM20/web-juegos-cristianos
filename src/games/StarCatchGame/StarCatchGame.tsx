import { GameCanvas } from '../../components/GameCanvas'
import type { GameLoader } from '../types'

/**
 * Phaser se importa dinámicamente: el motor (gran tamaño) solo se descarga
 * cuando el usuario entra a este juego, manteniendo ligera la carga inicial.
 */
const loadGame: GameLoader = async (parent) => {
  const { startStarCatchGame } = await import('./startGame')
  return startStarCatchGame(parent)
}

/** Juego de prueba (estrellas de la Creación) envuelto en un contenedor React. */
export default function StarCatchGame() {
  return <GameCanvas loadGame={loadGame} title="Estrellas de la Creación" />
}
