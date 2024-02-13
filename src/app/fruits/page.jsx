import React from "react";
import FruitCart from "./FruitCart";

export const fruits = [
  {
    name: "pears",
    price: 2.29,
    description: [
      "Pears are sweet and juicy, making them a great choice for fresh snacks.",
      "They pair wonderfully with cheese and salads.",
      "Pears offer a delightful combination of sweetness and a touch of grittiness in every bite.",
    ],
    type: "Core",
  },
  {
    name: "grapes",
    price: 1.49,
    description: [
      "Grapes are small and sweet, making them a delightful snack option.",
      "They can be enjoyed on their own or added to cheese platters.",
      "Grapes are a convenient and healthy choice for those looking for a quick and tasty treat.",
    ],
    type: "Berries",
  },
  {
    name: "guavas",
    price: 3.99,
    description: [
      "Guavas are sweet and tropical, enjoyed fresh or in smoothies.",
      "They are a great source of vitamin C and bring a burst of exotic flavor to your palate.",
      "Guavas are a delightful tropical treat for those seeking a taste of the tropics.",
    ],
    type: "Tropical Fruits",
  },
  {
    name: "limes",
    price: 1.49,
    description: [
      "Limes are tangy and essential for cocktails and cooking.",
      "They add a zesty and refreshing flavor to both beverages and dishes.",
      "Limes are a must-have for anyone looking to elevate their culinary creations.",
    ],
    type: "Citrus Fruits",
  },
  {
    name: "apricots",
    price: 2.49,
    description: [
      "Apricots are sweet and slightly tangy, making them perfect for jams and preserves.",
      "They can also be enjoyed fresh or dried as a healthy snack.",
      "Apricots bring a touch of sunshine to your palate.",
    ],
    type: "Pits",
  },
  {
    name: "cantaloupe",
    price: 3.99,
    description: [
      "Cantaloupe is sweet and aromatic, perfect for fruit salads.",
      "This melon offers a burst of tropical flavor and pairs wonderfully with other fruits.",
      "Cantaloupe is a refreshing addition to your summertime gatherings.",
    ],
    type: "Melons",
  },
  {
    name: "watermelon",
    price: 1.99,
    description: [
      "Watermelon is juicy and hydrating, perfect for picnics.",
      "It's a classic choice for summer gatherings and can be enjoyed in various forms.",
      "Watermelon adds a burst of refreshment to your outdoor activities.",
    ],
    type: "Melons",
  },
  {
    name: "figs",
    price: 3.29,
    description: [
      "Figs are sweet and seedy, great for desserts and preserves.",
      "They have a unique texture and flavor that pairs wonderfully with cheese and honey.",
      "Figs are a gourmet choice for those looking to elevate their culinary experiences.",
    ],
    type: "Tropical Fruits",
  },
  {
    name: "dates",
    price: 2.79,
    description: [
      "Dates are sweet and chewy, ideal for snacking or baking.",
      "They are a natural source of sweetness and can be stuffed with various ingredients.",
      "Dates are a nutritious and delicious addition to your diet.",
    ],
    type: "Tropical Fruits",
  },
  {
    name: "mangoes",
    price: 2.99,
    description: [
      "Mangoes are sweet and juicy, perfect for salsas and desserts.",
      "They are a tropical delight with a distinctive flavor and fragrance.",
      "Mangoes add a touch of the exotic to your culinary adventures.",
    ],
    type: "Tropical Fruits",
  },
  {
    name: "blueberries",
    price: 3.49,
    description: [
      "Blueberries are not only sweet but incredibly versatile.",
      "They are perfect for snacking and also ideal for baking, whether in muffins, pancakes, or pies.",
      "These little blue fruits are packed with antioxidants and bring a burst of flavor to your snacks and desserts.",
    ],
    type: "Berries",
  },
  {
    name: "oranges",
    price: 1.99,
    description: [
      "Oranges are juicy and packed with vitamin C, making them great for juicing.",
      "They add a burst of citrus flavor to your morning routine.",
      "Oranges are not only refreshing but also a nutritious choice.",
    ],
    type: "Citrus Fruits",
  },
  {
    name: "coconut",
    price: 3.49,
    description: [
      "Coconut is rich and tropical, used in both sweet and savory dishes.",
      "It's a staple in many tropical cuisines and adds a unique flavor to your recipes.",
      "Coconut is a versatile ingredient for those looking to explore exotic tastes.",
    ],
    type: "Tropical Fruits",
  },
  {
    name: "strawberries",
    price: 2.79,
    description: [
      "Strawberries are juicy and versatile, making them ideal for a wide range of desserts.",
      "They pair wonderfully with chocolate, cream, and other fruits.",
      "Whether you're making a strawberry shortcake or adding them to your morning breakfast, they are a crowd-pleaser.",
    ],
    type: "Berries",
  },
  {
    name: "red raspberries",
    price: 4.29,
    description: [
      "Red raspberries are known for their delicate and sweet taste.",
      "They are perfect for fresh consumption and can be enjoyed on their own or added to various desserts.",
      "These vibrant berries add a touch of elegance to your culinary creations.",
    ],
    type: "Berries",
  },
  {
    name: "bananas",
    price: 0.99,
    description: [
      "Bananas are sweet and portable, perfect for snacking.",
      "They are a convenient source of energy and can be enjoyed on the go",
    ],
    type: "Tropical Fruits",
  },
];

export default function Fruits() {
  return (
    <div>
      <FruitCart fruits={fruits} />
    </div>
  );
}
