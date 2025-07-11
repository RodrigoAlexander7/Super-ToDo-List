import { TextEditor } from './components/TextEditor'
import { Timer } from './components/Timer'

function App() {

  return (
    <div>
      <Timer startTime = {10} />
      <TextEditor></TextEditor>
    </div>
  )
}

export default App
