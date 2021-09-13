import { useState } from "react"

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleMode = () => {
    setDarkMode(prevState => !prevState)
  }

  return (
    <header>
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleMode}>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  )
}
