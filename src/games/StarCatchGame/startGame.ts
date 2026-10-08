import Phaser from 'phaser'
import type { GameLoader } from '../types'
import { GAME_HEIGHT, GAME_WIDTH } from './config'
import { StarCatchScene } from './StarCatchScene'

/**
 * Arranca el juego de prueba y devuelve su función de limpieza.
 * Este módulo importa Phaser, por lo que se carga bajo demanda mediante
 * `import()` dinámico (ver `StarCatchGame.tsx`) para no afectar la carga inicial.
 */
export const startStarCatchGame: GameLoader = async (parent) => {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    backgroundColor: '#0B2A45',
    banner: false,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    render: {
      antialias: true,
      roundPixels: false,
    },
    scene: [StarCatchScene],
  })

  await new Promise<void>((resolve) => {
    if (game.isRunning) {
      resolve()
      return
    }
    game.events.once(Phaser.Core.Events.READY, () => resolve())
  })

  return () => {
    game.destroy(true)
  }
}
