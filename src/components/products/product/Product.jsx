import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Grid,
  Button,
} from "@mui/material";
import "./ProductStyle.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
const myStyles = {
  heading: {
    color: "green",
    backgroundColor: "black",
  },
};
export default function Product({ product }) {
  
  const classes = myStyles;
  return (
    <Card style={{ marginTop: "80px" }} className="product-card">
      <CardMedia
        component="img"
        height="140"
        src={product.image}
        title={product.name}
        className="card-media"
      />
      <CardContent>
        <div>
          <Typography variant="h5" className={classes.heading}>
            {product.name}
          </Typography>

          <Typography variant="body2">{product.price}</Typography>
        </div>
        <Typography variant="h5">{product.description}</Typography>
      </CardContent>
      <CardActions>
        <Link to="/cart" style={{textDecoration:'none'}}>
       <Button variant="contained" color="secondary">
         Add to Cart
       </Button>
        </Link>
      </CardActions>
    </Card>
//   
  );
}
