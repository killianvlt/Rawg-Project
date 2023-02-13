/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react'

export default function ShowMoreButton({ handleClick }) {
  return (
    <div className="flex justify-center pb-10">
      <button
        onClick={() => handleClick()}
        className="h-14 w-56 border-red-600 border-2 text-white duration-300 hover:bg-red-600"
      >
        Show More
      </button>
    </div>
  )
}
