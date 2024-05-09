"use client";

import { useCallback, useState, lazy } from "react";

// HOOKS
import { useParams } from "next/navigation";
import useSWR from "swr";

// UTILS
import { fetcher } from "@/utils/api";

// COMPONENTS
import {
  Grid,
  Box,
  CircularProgress,
  Alert,
  Divider,
  Typography,
  Button,
} from "@/material/index";

import ProductReview from "@/elements/comments/productReview/ProductReview";

const CreateNewProductReviewDialog = lazy(
  () => import("@/features/products/dialogs/CreateNewProductReviewDialog")
);

// TYPES
import type { FC } from "react";
import { IProductReview } from "@/types/productReview";

const ProductReviewsSection: FC = () => {
  const { id } = useParams<{ id: string }>();

  // STATES
  const { isLoading, error, data, mutate } = useSWR<IProductReview[]>(
    `${process.env.NEXT_PUBLIC_MOCKAPI_V1}/product/${id}/comment`,
    fetcher
  );
  const [isCreateNewReviewDialogOpen, setIsCreateNewReviewDialogOpen] =
    useState(false);

  // HANDLERS
  const handleCreateProductToggle = useCallback(() => {
    setIsCreateNewReviewDialogOpen((prev) => !prev);
  }, []);
  const handleSubmitAction = () => {
    /**
     * NOTE: to solve the mockapi issue where after creaing new resource it is not available immediately
     */
    setTimeout(() => {
      mutate();
    }, 1000);
  };

  // RENDERING
  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  if (data) {
    return (
      <>
        <Box>
          <Grid container className="justify-between">
            <Typography variant="h4">Reviews</Typography>
            <Button variant="contained" onClick={handleCreateProductToggle}>
              Create new review
            </Button>
          </Grid>
          <Divider className="my-8" />
          <Grid container gap={2} direction="column">
            {data.map((product) => {
              return (
                <Grid key={product.id}>
                  <ProductReview data={product} />
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <CreateNewProductReviewDialog
          open={isCreateNewReviewDialogOpen}
          toggle={handleCreateProductToggle}
          productId={id}
          onSubmitAction={handleSubmitAction}
        />
      </>
    );
  }

  return <Alert color="info">This product has no review</Alert>;
};

export default ProductReviewsSection;
