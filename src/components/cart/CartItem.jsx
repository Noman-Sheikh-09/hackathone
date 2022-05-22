import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function CartItem({product}) {
  return (
    <>
<Grid container align="center"  >
  <Typography variant="h1" color="initial">
    Cart 
  </Typography>
   <Grid item xs={12} sm={12} md={6}>
<img src={product.image} alt="" />

   </Grid>
   <Grid item xs={12} sm={12} md={6}>
<Typography variant="h2" color="initial">
  {product.name}
</Typography>
<Typography variant="body1" color="initial">
  {product.description}
</Typography>
<Typography variant="body1" color="initial">
  {product.price}
</Typography>
</Grid>

</Grid>
<Typography variant="h1" color="initial">
  Hello World!
</Typography>
    </>
  )
}
