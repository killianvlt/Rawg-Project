import React from 'react'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    navigate(`/search/${searchInput}`)
    window.location.reload(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center relative border-2 border-white rounded-xl"
    >
      <input
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        className="h-12 w-64 pl-4 bg-transparent outline-none text-white"
        placeholder="Search a game"
      />
      <button type="submit" title="Launch search" className="pr-4 h-12">
        <AiOutlineSearch className="text-white aspect-square text-3xl ml-4" />
      </button>
    </form>
  )
}
