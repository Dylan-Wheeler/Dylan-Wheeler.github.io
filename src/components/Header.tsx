'use client'

import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import { TransitionLink } from './TransitionLink';

function Header() {
  const [atPageTop, setPageTop] = useState(0);
  useEffect(() => {
    const onScroll = (e: any) => {
      setPageTop(e.target.documentElement.scrollTop);
    }
    window.addEventListener('scroll', onScroll);
  }, [atPageTop])

  const [isSmallDevice, setSmallDevice] = useState(false);
  useEffect(() => {
    setSmallDevice(window.innerWidth < 700);
  }, []);

  const setScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const blurSteps = 28;
  const blurElements = [];
  for (let i = 0; i < blurSteps; i++) {
    blurElements.push(<div className='blur' key={i}></div>);
  }

  return (
    <header className={ atPageTop > 80 || !isSmallDevice && atPageTop > 45 ? "smaller-header" : "" }>
        <div id='header-background' aria-hidden='true'>
          {blurElements}
          <div className='page-cover'></div>
        </div>
        <TransitionLink href={`/`} className='home-link'><h1><span className='large-header-link'>Dylan Wheeler</span><span className='small-header-link'>DW</span></h1></TransitionLink>
        <Navigation />
        <button id='scroll-top' className={atPageTop > 300 ? 'icon-button' : 'icon-button removed'} onClick={setScrollTop}><span className="material-symbols-outlined">arrow_upward</span></button>
    </header>
  )
}

export default Header