'use client'

import { useTheme } from "next-themes"

import React from 'react'
import Image from 'next/image'

function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <button className="non-selectable" title="Toggle Color Scheme" onClick={() => toggleTheme()}>
      <Image src={'/moon-icon2.svg'} alt="Toggle Color Scheme" width={"20"} height={"20"}/>
    </button>
  )
}

export default ToggleTheme