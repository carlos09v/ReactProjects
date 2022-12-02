import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import './assets/styles/components/app.sass'
import perfil from './assets/data'

function App() {

  return (
    <div id="portfolio">
      <h1>{perfil.nome}</h1>
      <Sidebar imgHref={perfil.foto} imgAlt={perfil.alt} />
      <MainContent />
    </div>
  )
}

export default App
