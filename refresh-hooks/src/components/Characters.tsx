import { useCallback, useMemo, useReducer, useRef, useState } from "react"

import { Search } from "./Search";
import { useCharacter } from "../hooks/useCharacter";

import type { Character } from '../types/character';

const API = 'https://rickandmortyapi.com/api/character'

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
  const [search, setSearch] = useState('')
  const [{ favorites }, dispatch] = useReducer(favoriteReducer, initialState)
  const characters = useCharacter(API)
  const searchInput = useRef<HTMLInputElement | null>(null)

  const handleFavorite = (favorite: Character) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  const handleSearch = useCallback(() => {
    if (searchInput.current) {
      setSearch(searchInput.current.value)
    }
  }, [])

  const filteredUsers = useMemo(() =>
    characters.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())),
    [characters, search]
  )

  return (
    <main className="Characters">
      <h1>Favorites</h1>
      <ul>
        {favorites.map(favorite => (<li key={favorite.id}>{favorite.name}</li>))}
      </ul>

      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

      <h1>Characters</h1>
      {filteredUsers.map(character => (
        <div key={character.id}>
          <h2 key={character.id}>{character.name}</h2>
          <button type='button' onClick={() => handleFavorite(character)}>Add to Favorites</button>
        </div>
      ))}
    </main>
  )
}
