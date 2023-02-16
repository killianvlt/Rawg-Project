/* eslint-disable array-callback-return */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import Title from '../../components/Title/Title'
import SearchBar from '../../components/SearchBar/SearchBar'

const key = import.meta.env.VITE_API_KEY

export default function Game() {
  const params = useParams()
  const url = `https://api.rawg.io/api/games/${params.id}?key=${key}`
  const urlTrailer = `https://api.rawg.io/api/games/${params.id}?key=${key}/movies`
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
    fetch(urlTrailer)
      .then((response) => response.json())
      .then((data) => setDataTrailer(data))
  }, [])

  return (
    <>
      <div className="container mx-auto pt-14 flex flex-row items-center justify-between">
        <Title />
        <SearchBar />
      </div>
      <div className="mt-10 relative">
        <img
          className="aspect-square object-none object-center h-108 w-screen"
          src={data.background_image}
          alt=""
        />
        <a href={data.website} target="_blank" rel="noreferrer">
          <button className="text-white absolute bottom-10 right-5 bg-red-800 h-16 w-64 flex justify-around items-center pl-6 text-xl">
            Check Website
            <BsArrowRightCircleFill className="text-white text-2xl" />
          </button>
        </a>
      </div>
      <div className="container mx-auto">
        <section className="flex flex-row justify-between items-center mt-16">
          <h2 className="text-white text-6xl">{data.name},</h2>

          {data.metacritic != null && (
            <div className="text-white text-4xl w-24 h-24 bg-red-500 rounded-xl flex items-center justify-center">
              <p>{data.metacritic}</p>
            </div>
          )}
        </section>
        <section className="mt-4">
          <p className="text-xl leading-9 text-white">{data.description_raw}</p>
          <div className="mt-10 grid grid-cols-4">
            {data.released != null && (
              <div>
                <h3 className="text-white text-xl font-bold">Released Date:</h3>
                <p className="text-white">{data.released}</p>
              </div>
            )}
            <div>
              <h3 className="text-white text-xl font-bold">Developer(s):</h3>
              {data.developers &&
                data.developers.map((e) => (
                  <span className="text-white" key={e.id}>
                    {e.name}
                  </span>
                ))}
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Platform(s):</h3>
              {data.platforms &&
                data.platforms.map((e) => (
                  <p className="text-white" key={e.platform.id}>
                    {e.platform.name}
                  </p>
                ))}
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Publisher(s):</h3>
              {data.publishers &&
                data.publishers.map((e) => (
                  <p className="text-white" key={e.id}>
                    {e.name}
                  </p>
                ))}
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Genre(s):</h3>
              {data.genres &&
                data.genres.map((e) => (
                  <p className="text-white" key={e.id}>
                    {e.name}
                  </p>
                ))}
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Tag(s):</h3>
              {data.tags &&
                data.tags.map((e) => (
                  <span className="text-white" key={e.id}>
                    {e.name},{' '}
                  </span>
                ))}
            </div>
          </div>
        </section>
        <section className="mt-14 pb-16">
          <h2 className="text-red-600 text-4xl mt uppercase">Buy</h2>
          <ul className="mt-8">
            {data.stores &&
              data.stores.map((e) => (
                <li className="text-white text-xl mt-4" key={e.id}>
                  <a
                    className="border-b-2 border-b-red-600"
                    href={`http://${e.store.domain}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {e.store.name}{' '}
                  </a>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </>
  )
}
