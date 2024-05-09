import React from 'react'
import PropTypes from 'prop-types'
import ToggleTheme from './ToggleTheme'
import Link from 'next/link'

function Navigation() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item"><Link href={`/`}>home</Link></li>
        <li className="nav-item"><Link href={`/photography`}>photography</Link></li>
        <li className="nav-item"><Link href={`/blog`}>blog</Link></li>
        <li className="nav-item"><Link href={`/gallery`}>gallery</Link></li>
        <li className="nav-item no-underline"><ToggleTheme/></li>
      </ul>
    </nav>
  )
}

export default Navigation
