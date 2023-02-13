/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="https://live.staticflickr.com/5561/31014385396_8e35c2d1e8_b.jpg"
        className="absolute h-full w-full object-cover"
      />
      <div className="inset-0 bg-black opacity-25 absolute" />
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            You are all alone here
          </h1>
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
            404
          </p>
          <Link to="/">
            <button className="h-20 w-60 border-white border-4 text-white hover:bg-white hover:text-black duration-200">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
