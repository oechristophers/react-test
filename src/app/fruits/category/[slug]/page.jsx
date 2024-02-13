import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {fruits} from '../../page';

export default function Category({params}) {
    const fruitCard = fruits.filter(fruit => fruit.type.toLowerCase().split(' ').join('-') == params.slug)

    const fruitGrp = fruitCard.map((fruit, index) => (
      <section
        key={index}
        className="mx-auto my-auto border rounded-md w-80 mt-6 shadow-2xl bg-white  px-4 "
      >
        <Link href={`/fruits/${fruit.name.split(" ").join("-")}`}>
          <Image
            src={`https://robohash.org/${fruit.name}`}
            alt={fruit.name}
            width={120}
            height={120}
            className="ml-32 "
          />
          <h2 className="text-[20px] uppercase mt-2 font-bold text-red-500">
            {fruit.name}
          </h2>
          <p className="text-[13px]">{`${fruit.description[0]}`}</p>
          <p className=" text-red-500  font-semibold">{`${
            "$" + fruit.price
          }`}</p>
        </Link>
      </section>
    ));
  return (
    <div>
        
        {fruitGrp}
        </div>
  )
}
