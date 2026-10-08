/**
 * Contrato reutilizable entre React y los juegos de Phaser.
 * Cualquier juego nuevo solo necesita exponer un `GameLoader`.
 */
export type GameCleanup = () => void

export type GameLoader = (parent: HTMLElement) => Promise<GameCleanup>
