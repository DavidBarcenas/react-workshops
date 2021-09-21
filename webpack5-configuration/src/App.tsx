import { sayHi } from "./utils"

const App: React.FC = () => {
  return (
    <div>
      <h1>{sayHi()}</h1>
    </div>
  )
}

export default App