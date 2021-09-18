import { useEffect, useState } from "react"
import type { Character, CharacterResponse } from "../types/character"

export const useCharacter = (url: string) => {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then((data: CharacterResponse) => setCharacters(data.results))
  }, [url])

  return characters
}