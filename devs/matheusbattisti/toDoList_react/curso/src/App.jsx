import './App.css'

import AnotherComponent from './components/AnotherComponent'
import Container from './components/Container'
import FirstComponent from './components/FirstComponent'
import Fragment from './components/Fragment'
import Hooks from './components/Hooks'
import Images from './components/Images'
import List from './components/List'
import RenderCond from './components/RenderCOnd'

function App() {
  return (
    <div className="App">
      <h1>Olá !</h1>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={8} y={20} />
      <Fragment />
      <Container>
        <h2>Este é filho do Container !</h2>
      </Container>
    </div>
  )
}

export default App
