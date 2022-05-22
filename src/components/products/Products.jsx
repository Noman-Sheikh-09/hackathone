import { Grid } from "@mui/material";
import React from "react";
import Product from "../products/product/Product";
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
import { Fade } from "react-reveal";

// import { useDispatch, useSelector } from "react-redux";
// import { listProducts } from "../../redux/actions/ProductActions";
 const products = [
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
export default function Products() {
  // const dispatch = useDispatch();

  // const productsList = useSelector((state) => state.productsList);

  // const { loading, error, products } = productsList;
  // React.useEffect(() => {
  //   dispatch(listProducts());
  // }, [dispatch]);

  return (
    <main>
      <Fade left>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
              <Product product={product} />
            </Grid>
          ))}
          ;
        </Grid>
      </Fade>
    </main>
  );
}
