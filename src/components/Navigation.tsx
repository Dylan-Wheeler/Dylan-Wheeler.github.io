import React from 'react'
// import ToggleTheme from './ToggleTheme'
import dynamic from 'next/dynamic'
import { TransitionLink } from './TransitionLink'

const CsrToggleTheme = dynamic(() => import('./ToggleTheme'), { ssr: false })


function Navigation() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item"><TransitionLink href={`/`}><span className='nav-text'>home</span><span className="material-symbols-outlined nav-icon">home</span></TransitionLink></li>
        <li className="nav-item"><TransitionLink href={`/photography`}><span className='nav-text'>photography</span><span className="material-symbols-outlined nav-icon">photo_camera</span></TransitionLink></li>
        <li className="nav-item"><TransitionLink href={`/thoughts`}><span className='nav-text'>thoughts</span><span className="material-symbols-outlined nav-icon">article</span></TransitionLink></li>
        <li className="nav-item"><TransitionLink href={`/gallery`}><span className='nav-text'>gallery</span><span className="material-symbols-outlined nav-icon">auto_awesome_mosaic</span></TransitionLink></li>
        <li className="nav-item no-underline"><CsrToggleTheme/></li>
      </ul>
    </nav>
  )
}

export default Navigation
