import { useState } from 'react'
import { GameView } from './components/GameView'
import { HomeView } from './components/HomeView'
import { Layout } from './components/Layout'
import type { ViewName } from './components/Navbar'

type View = { name: 'home' } | { name: 'game'; gameId: string }

function App() {
  const [view, setView] = useState<View>({ name: 'home' })

  const goHome = () => {
    setView({ name: 'home' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goGames = () => {
    setView({ name: 'home' })
    window.setTimeout(() => {
      document
        .getElementById('juegos')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
  }

  const playGame = (gameId: string) => {
    setView({ name: 'game', gameId })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentView: ViewName = view.name

  return (
    <Layout currentView={currentView} onGoHome={goHome} onGoGames={goGames}>
      {view.name === 'home' ? (
        <HomeView onPlay={playGame} />
      ) : (
        <GameView gameId={view.gameId} onExit={goHome} />
      )}
    </Layout>
  )
}

export default App
