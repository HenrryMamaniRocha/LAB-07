import './App.css'
import { List } from './components/List'
import { WrapperList } from './components/WrapperList'
import { Button } from './components/button'
function App() {
  return (
    <>
      <WrapperList>
          <List/>
          <Button/>
      </WrapperList>
    </>
  )
}
export default App
