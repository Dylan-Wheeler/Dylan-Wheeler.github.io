'use client'

import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    }
    window.addEventListener('scroll', onScroll);
    console.log(window.innerWidth)
  }, [scrollTop])

  const [isSmallDevice, setSmallDevice] = useState(false);
  useEffect(() => {
    setSmallDevice(window.innerWidth < 700)
  }, [])

  return (
    <header className={ showMobileMenu ? "show-mobile-menu" : "" + " " + (scrollTop > 80 || !isSmallDevice && scrollTop > 45 ? "smaller-header" : "") }>
        <div id='header-background' aria-hidden='true'></div>
        <Link href={`/`} className='home-link'><h1>Dylan Wheeler</h1></Link>
        <button id='nav-toggle' onClick={() => setShowMobileMenu(!showMobileMenu)} aria-label="Toggle navigation menu">X</button>
        <Navigation />
    </header>
  )
}

export default Header