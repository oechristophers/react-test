import React from 'react'
const year = new Date().getFullYear()

export default function Footer() {
  return (
   
   <footer className='flex justify-center h-6 bg-slate-900 text-white'>Copyright&copy; {year}</footer>
  )
}
