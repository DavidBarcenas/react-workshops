import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const { background } = useContext(ThemeContext)

  const handleMode = () => {
    setDarkMode(prevState => !prevState)
  }

  return (
    <header>
      <h1 style={{ background }}>ReactHooks</h1>
      <button type="button" onClick={handleMode}>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  )
}
