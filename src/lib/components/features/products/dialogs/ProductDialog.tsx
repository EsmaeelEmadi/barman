'use client'

import { lazy } from "react";

// PROVIDERS
import { useProductDialogContext } from "@/providers/product/ProductDialogProvider"

// COMPONENTS
import { Divider, Grid, Typography, Button } from "@/material/index";

import Link from "next/link";
import Image from "next/image";

// TYPES
import type { FC } from "react";

const MainDialog = lazy(() => import("@/elements/dialogs/mainDialog/MainDialog"));

const ProductDialog: FC = () => {
  const { product, setProduct } = useProductDialogContext();

  return (
    <MainDialog title={product?.name} open={Boolean(product?.id)} toggle={() => setProduct(undefined)} actions={
      <>
        <Typography>to see the reviews</Typography>,
        <Button><Link href={`/product/${product?.id}`}>Go to product SSG page</Link></Button>
      </>
    }>
      {product ?
        <Grid container gap={1} direction="column">
          <Image src={product.image} alt={product.name} height={800} width={1200} />
          <Typography variant="h4">
            {product?.name}
          </Typography>
          <Divider />
          <Typography variant="h5" >
            detail
          </Typography>
          <Typography >
            {product.detail}
          </Typography>
          <Typography variant="h5" >
            Price
          </Typography>
          <Typography >
            {product.price}
          </Typography>
          <Typography variant="h5" >
            ID
          </Typography>
          <Typography >
            {product.id}
          </Typography>
        </Grid>
        : null}
    </MainDialog>
  )
}

export default ProductDialog;