import { useEffect, useReducer, useState } from "react"
import { Character, CharacterResponse } from '../types/character';

type FavoriteProps = {
  favorites: Character[]
}

type FavoriteAction = { type: 'ADD_TO_FAVORITE', payload: Character }

const initialState: FavoriteProps = {
  favorites: []
}

const favoriteReducer = (state: FavoriteProps, action: FavoriteAction) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }

    default:
      return state
  }
}

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [{ favorites }, dispatch] = useReducer(favoriteReducer, initialState)

  const handleFavorite = (favorite: Character) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(resp => resp.json())
      .then((data: CharacterResponse) => setCharacters(data.results))
  }, [])

  return (
    <main className="Characters">
      <h1>Favorites</h1>
      {favorites.map(favorite => (<h2 key={favorite.id}>{favorite.name}</h2>))}
      <h1>Characters</h1>
      {characters.map(character => (
        <>
          <h2 key={character.id}>{character.name}</h2>
          <button type='button' onClick={() => handleFavorite(character)}>Add to Favorites</button>
        </>
      ))}
    </main>
  )
}
