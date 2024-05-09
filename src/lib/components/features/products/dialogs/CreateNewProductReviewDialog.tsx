"use client";

import { lazy } from "react";

// COMPONENTS
import ProductReviewFormProvider from "@/providers/product/ProductReviewFormProvider";
import ProductReviewForm from "@/features/products/forms/ProductReviewForm";

const MainDialog = lazy(
  () => import("@/elements/dialogs/mainDialog/MainDialog")
);

// TYPES
import type { FC } from "react";
import type { IBaseDialog } from "@/types/components";

interface ICreateNewProductReviewDialogProps extends IBaseDialog {
  productId: string;
  onSubmitAction: () => void;
}

const CreateNewProductReviewDialog: FC<ICreateNewProductReviewDialogProps> = ({
  open,
  toggle,
  productId,
  onSubmitAction
}) => {
  const handleSubmitAction = () => {
    onSubmitAction();
    toggle();
  };

  return (
    <MainDialog title="Create new product review" open={open} toggle={toggle}>
      <ProductReviewFormProvider mode="create" productId={productId}>
        <ProductReviewForm onSubmitAction={handleSubmitAction} />
      </ProductReviewFormProvider>
    </MainDialog>
  );
};

export default CreateNewProductReviewDialog;
