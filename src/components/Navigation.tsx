import React from 'react'
import ToggleTheme from './ToggleTheme'
import Link from 'next/link'

function Navigation() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item"><Link href={`/`}><span className='nav-text'>home</span><span className="material-symbols-outlined nav-icon">home</span></Link></li>
        <li className="nav-item"><Link href={`/photography`}><span className='nav-text'>photography</span><span className="material-symbols-outlined nav-icon">photo_camera</span></Link></li>
        <li className="nav-item"><Link href={`/thoughts`}><span className='nav-text'>thoughts</span><span className="material-symbols-outlined nav-icon">article</span></Link></li>
        <li className="nav-item"><Link href={`/gallery`}><span className='nav-text'>gallery</span><span className="material-symbols-outlined nav-icon">auto_awesome_mosaic</span></Link></li>
        <li className="nav-item no-underline"><ToggleTheme/></li>
      </ul>
    </nav>
  )
}

export default Navigation
