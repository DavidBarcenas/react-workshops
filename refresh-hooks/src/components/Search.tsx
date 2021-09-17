import { LegacyRef } from "react"

type Props = {
  search: string
  searchInput: LegacyRef<HTMLInputElement> | undefined
  handleSearch: () => void
}

export const Search = ({ search, searchInput, handleSearch }: Props) => {
  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        ref={searchInput}
      />
    </div>
  )
}
