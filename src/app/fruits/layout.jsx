import React from 'react'
import FruitNav from './FruitNav'
import Link from 'next/link';

export default function layout({children}) {
  return (
    
    <>
      <nav>
        <ul className="flex justify-around">
            <Link href='/fruits'>
            <li>All Fruits</li>
            </Link>
          <FruitNav title="Tropical Fruits" />
          <FruitNav title="Core" />
          <FruitNav title="Berries" />
          <FruitNav title="Citrus Fruits" />
          <FruitNav title="Melons" />
          <FruitNav title="Pits" />
        </ul>
      </nav>
      {children}
    
    </>
  );
}
