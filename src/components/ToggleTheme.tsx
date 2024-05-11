'use client'

import { useTheme } from "next-themes"

import React from 'react'

function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <button className="non-selectable" title="Toggle Color Scheme" onClick={() => toggleTheme()}>
      <span className="material-symbols-outlined">{theme === "light" ? "light_mode" : "dark_mode"}</span>
    </button>
  )
}

export default ToggleTheme