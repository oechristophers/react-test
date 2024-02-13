import Link from "next/link";
import React from "react";

export default function FruitNav({ title }) {
  return (
      <li>
          <Link href={`/fruits/category/${title.toLowerCase().split(" ").join("-")}`}>
        {title}
    </Link>
        </li>
  );
}
