import React from "react";
import { fruits } from "../page";
import Image from "next/image";
import Link from "next/link";

export default function page({ params }) {
  const fruitCard = fruits.find(
    (fruit) => fruit.name.split(" ").join("-") == params.univel
  );

 const relatedFruits = fruits.filter(fruit => (fruit.type == fruitCard.type) && (fruit.name !== fruitCard.name)).slice(0,3).sort((a,b)=> b.price - a.price)

 const relatedCategory = relatedFruits.map((fruit, index) => (
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
       <p className=" text-red-500  font-semibold">{`${"$" + fruit.price}`}</p>
     </Link>
   </section>
 ));

  return (
    <body className=" bg-pink-200">
      <div className=" mx-14 grid grid-cols-2 grid-rows-5 pt-6 bg-white shadow-2xl px-6 my-20 rounded-md gap-y-0">
        <h2 className=" uppercase font-bold text-2xl">{fruitCard.name}</h2>
        <Image
          src={`https://robohash.org/${fruitCard.name}`}
          alt={fruitCard.name}
          width={250}
          height={250}
          className=" col-start-2 row-start-1 row-end-3 h-32 w-60 "
        />
        <p>{fruitCard.type}</p>
        <p>{"$" + fruitCard.price}</p>
        <p className=" row-start-4 row-end-4 col-start-1 col-end-3 px-6 text-[20px] w-[90ch]">
          {fruitCard.description}
        </p>
      </div> 
      {relatedCategory}
    </body>
  );
}
