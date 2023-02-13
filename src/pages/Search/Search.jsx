/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/alt-text */
import { useParams, Link } from 'react-router-dom'
import { React, useState, useEffect } from 'react'
import Title from '../../components/Title/Title'
import SearchBar from '../../components/SearchBar/SearchBar'
import ShowMoreButton from '../../components/ShowMoreButton/ShowMoreButton'
import PlatformsLogo from '../../components/PlatformsLogo/PlatformsLogo'

const key = import.meta.env.VITE_API_KEY

export default function Search() {
  const [data, setData] = useState([])
  const params = useParams()
  const [count, setCount] = useState(0)
  const [nbrsItems, setNbrsItems] = useState(9)
  const [isHidden, setIsHidden] = useState(true)
  const url = `https://api.rawg.io/api/games?key=${key}&search=${params.id}&page_size=27`
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.results))
  }, [])

  function handleClick() {
    setCount((prevValue) => prevValue + 1)
    if (count === 0) {
      setNbrsItems((prevValue) => prevValue + 9)
    }
    if (count === 1) {
      setNbrsItems((prevValue) => prevValue + 9)
      setIsHidden(false)
    }
  }

  return (
    <>
      <div className="container mx-auto pt-14 flex flex-row items-center justify-between">
        <Title />
        <SearchBar />
      </div>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-3 gap-8 pb-10 mt-8">
          {data.slice(0, nbrsItems).map((e) => (
            <article key={e.id}>
              <div>
                <Link to={`/game/${e.slug}`}>
                  <img className="aspect-video" src={e.background_image} />
                </Link>
              </div>
              <h3 className="text-white text-2xl mt-4">{e.name}</h3>
              <div className="flex flex-row">
                {e.parent_platforms.map((e) => (
                  <div className="p-2">
                    <PlatformsLogo platform={e.platform.id} />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        {isHidden ? <ShowMoreButton handleClick={handleClick} /> : null}
      </div>
    </>
  )
}
