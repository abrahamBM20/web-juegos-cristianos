/**
 * Configuración institucional del sitio.
 * Centraliza el sello y los datos de la iglesia para reutilizarlos en el
 * Navbar, el Footer y el modal de Créditos sin duplicar valores.
 */
export interface SiteConfig {
  appName: string
  tagline: string
  churchName: string
  churchTagline: string
  sealSrc: string
  sealAlt: string
  year: number
}

export const SITE: SiteConfig = {
  appName: 'Luz Kids',
  tagline: 'Juegos bíblicos para niños',
  churchName: 'Iglesia [Nombre de la Iglesia]',
  churchTagline: 'Ministerio Infantil · Historias de la Biblia',
  sealSrc: '/sello-iglesia.svg',
  sealAlt: 'Sello institucional de la iglesia desarrolladora',
  year: new Date().getFullYear(),
}
