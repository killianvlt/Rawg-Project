import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonLinkTo({ name, route, cssClass }) {
  return (
    <Link to={route}>
      <button className={cssClass} type="button">
        {name}
      </button>
    </Link>
  )
}
