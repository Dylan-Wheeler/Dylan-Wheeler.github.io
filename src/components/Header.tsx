'use client'

import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
  const pathname = usePathname();

  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    }
    window.addEventListener('scroll', onScroll);
  }, [scrollTop])

  const [isSmallDevice, setSmallDevice] = useState(false);
  useEffect(() => {
    setSmallDevice(window.innerWidth < 700)
  }, [])

  return (
    <header className={ scrollTop > 80 || !isSmallDevice && scrollTop > 45 ? "smaller-header" : "" }>
        <div id='header-background' aria-hidden='true'></div>
        <Link href={`/`} className='home-link'><h1><span className='large-header-link'>Dylan Wheeler</span><span className='small-header-link'>DW</span></h1></Link>
        <Navigation />
    </header>
  )
}

export default Header