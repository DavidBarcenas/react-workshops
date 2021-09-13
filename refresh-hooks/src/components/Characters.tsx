import { useEffect, useState } from "react"
import { Character, CharacterResponse } from '../types/character';

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(resp => resp.json())
      .then((data: CharacterResponse) => setCharacters(data.results))
  }, [])

  return (
    <main className="Characters">
      {characters.map(character => (
        <h2 key={character.id}>{character.name}</h2>
      ))}
    </main>
  )
}
