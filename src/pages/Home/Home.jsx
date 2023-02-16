import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PlatformsFilter from '../../components/PlatformsFilter/PlatformsFilter'
import PlatformsLogo from '../../components/PlatformsLogo/PlatformsLogo'
import Title from '../../components/Title/Title'
import SearchBar from '../../components/SearchBar/SearchBar'
import Introduction from '../../components/Introduction/Introduction'
import ShowMoreButton from '../../components/ShowMoreButton/ShowMoreButton'
import ButtonLinkTo from '../../components/ButtonLinkTo/ButtonLinkTo'

const key = import.meta.env.VITE_API_KEY
const now = dayjs().format('YYYY-MM-DD')
const later = dayjs().add(1, 'year')
const addYear = later.format('YYYY-MM-DD')

const url = `https://api.rawg.io/api/games?key=${key}&dates=${now},${addYear}&page_size=27`

export default function Home() {
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const [nbrsItems, setNbrsItems] = useState(9)
  const [isHidden, setIsHidden] = useState(true)
  useEffect(() => {
    axios.get(url).then((data) => setData(data.data.results))
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
      <div className="container mx-auto">
        <Introduction />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center mt-8">
          <PlatformsFilter />
          <ButtonLinkTo
            cssClass="h-14 w-28 border-red-600 border-2 text-white hover:bg-red-600 duration-150"
            name="Login"
            route="/login"
          />
        </div>
        <div className="grid grid-cols-3 gap-8 pb-10 mt-8">
          {data.slice(0, nbrsItems).map((e, index) => (
            <article key={index}>
              <div>
                <Link to={`/game/${e.slug}`}>
                  <img className="aspect-video" src={e.background_image} />
                </Link>
              </div>
              <h3 className="text-white text-2xl mt-4">{e.name}</h3>
              <div className="flex flex-row">
                {e.parent_platforms.map((e, index) => (
                  <div key={index} className="p-2">
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
