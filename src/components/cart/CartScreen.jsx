import React from 'react'
import CartItem from './CartItem';
import Shoes from "../../assets/shoes.jpg";
import MacBook from "../../assets/macbook.jpeg";
import LeatherJacket from "../../assets/leather.jpg";
import Shirt from "../../assets/shirt.jpg";
import Watch from "../../assets/watch.png";
import Lamp from "../../assets/lamp.jpg";
import Frok from "../../assets/frok.jpg";
import Kurta from "../../assets/kurta.jpg";
import KeyBoard from "../../assets/keyboard.jpg";
import { v4 as uuidv4 } from "uuid";
export default function CartScreen() {

     const cartItems = [

        {
          id: uuidv4(),
          name: "Shoes",
          description: "Running Sheos",
          price: "$5",
          image: Shoes,
        },
        {
          id: uuidv4(),
          name: "MacBook",
          description: "Personal Pc of Apple",
          price: "$10",
          image: MacBook,
        },
      
        {
          id: uuidv4(),
          name: "Keyboard",
          description: "Wireless Keyboard for Best use",
          price: "$2",
          image: KeyBoard,
        },
        {
          id: uuidv4(),
          name: "Leather Jacket",
          description: "Fantastic Leather Jacket for Great personality",
          price: "$5",
          image: LeatherJacket,
        },
        {
          id: uuidv4(),
          name: "Man Shirt",
          description: "Casual Shirt for men to wear in  Summer ",
          price: "$4",
          image: Shirt,
        },
        {
          id: uuidv4(),
          name: "Girl's Frok",
          description: "Best Dress for Kids Girls",
          price: "$10",
          image: Frok,
        },
        {
          id: uuidv4(),
          name: "Lamp",
          description: "A Room Lamp that make more Fantastic look to your room,",
          price: "$6",
          image: Lamp,
        },
        {
          id: uuidv4(),
          name: "Watch",
          description: "Men's Watch to Grwo personality  ",
          price: "$2",
          image: Watch,
        },
        {
          id: uuidv4(),
          name: "Men Kurta",
          description: "Very Best stuff for Man",
          price: "$5",
          image: Kurta,
        },
      ];
  return (
    <>
       {
           cartItems.map((product)=>{
<CartItem  product={product} />
           })
       } 
    </>
  )
}
