
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <ul className='flex justify-between px-4 bg-slate-900 h-10 text-white'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
      <Link href='./fruits'>Fruits</Link>
      
        </ul>
    </nav>
    
  )
}
