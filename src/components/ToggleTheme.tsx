'use client'

import { useTheme } from "next-themes"
import Image from 'next/image'
// import LightModeIcon from "/light-mode-icon.svg"

import React from 'react'

function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <button className={"theme-toggle-icon " + (theme === "light" ? "light-mode-icon" : "dark-mode-icon")} title="Toggle Color Scheme" onClick={() => toggleTheme()}>
      {/* <span className="material-symbols-outlined">{theme === "light" ? "light_mode" : "dark_mode"}</span> */}
      <Image src={theme === "light" ? `/light-mode-icon.svg` : `/dark-mode-icon.svg`} width={"22"} height={"22"} alt="toggle colour scheme"/>
    </button>
  )
}

export default ToggleTheme