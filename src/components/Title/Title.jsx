import React from 'react'
import { Link } from 'react-router-dom'

export default function Title() {
  return (
    <Link to="/">
      <h1 className="text-6xl text-red-500 font-bold">The Hyper Progame</h1>
    </Link>
  )
}
