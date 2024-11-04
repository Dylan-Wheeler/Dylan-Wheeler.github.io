import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer>
      <hr/>
      <p className='copyright-text'><Link href={"https://creativecommons.org/licenses/by-nc-sa/4.0/"}>CC BY-NC-SA 4.0</Link> - 2023-PRESENT © Dylan Wheeler</p>
    </footer>
  )
}

export default Footer