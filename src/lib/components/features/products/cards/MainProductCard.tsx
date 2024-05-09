import { useState } from "react";

// PROVIDERS
import { useProductDialogContext } from "@/providers/product/ProductDialogProvider";

// COMPONENTS
import {  Card, CardContent, CardMedia, Typography, CardActions, Button } from "@/material/index";

import { MainProductCardSkeletonMedia } from "./MainProductCardSkeleton"

// TYPES
import type { FC } from "react";
import { IProduct } from '@/types/product';

interface IMainProductCardProps { product: IProduct };

const MainProductCard: FC<IMainProductCardProps> = ({ product }) => {
  // STATES
  const {setProduct} = useProductDialogContext();

  const [imageLoaded, setImageLoaded] = useState(false);

  // HANDLERS
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleOpenProductDialog = () => { 
    setProduct(product);
  }

  return (
    <>
      <Card>
        {!imageLoaded ?
          <MainProductCardSkeletonMedia />
          : null
        }
        <CardMedia
          component="img"
          height="140"
          alt={product.name}
          image={product.image}
          onLoad={handleImageLoad}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.detail}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpenProductDialog}>open details dialog</Button>
        </CardActions>
      </Card> 
    </>
  );
}

export default MainProductCard;
