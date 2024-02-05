import Image from 'next/image';
import React from 'react'

export default function Main() {
  return (
    <div className="grid grid-cols-3 mt-10">
      <div>
        
        <Image src='/namso.jpg 'alt="Breakfast" width={600} height={700} />

      </div>

      <div className="text-3xl bg-slate-950 text-white flex flex-col justify-center items-center">
        <h2>Home Page</h2>
        <h1>Fundamentals of React</h1>
      </div>
      <div>
      <Image src="/jake.jpg" alt="Breakfood" width={600} height={700} />
      </div>
    </div>
  );
}
