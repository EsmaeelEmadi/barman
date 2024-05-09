import * as Yup from "yup";

// UTILS
import { reviewValidationSchema, ratingValueSchema } from "@/utils/validation";

// COMPONENTS
import { Formik, FormikHelpers } from "formik";

// TYPES
import type { FC } from "react";
import type { IPropsWithForcedChildren } from "@/types/components";
import { IFormMode } from "@/types/form";
import { postProductReview } from "@/mock/api/product";

interface IFormValues {
  review: string;
  rating: number;
}

// CONSTANTS
const INITIAL_VALUES: IFormValues = {
  review: "",
  rating: 1,
};

// VALIDATIONS
const formValidationSchema = Yup.object().shape({
  review: reviewValidationSchema,
  rating: ratingValueSchema,
});

interface IProductReviewFormProviderProps
  extends IPropsWithForcedChildren,
    IFormMode {
  productId: string;
}

const ProductReviewFormProvider: FC<IProductReviewFormProviderProps> = ({
  children,
  mode,
  productId,
}) => {
  const handleSubmit = async (values: IFormValues, helpers: FormikHelpers<IFormValues>) => {
    if (mode === "create") {
      const res = await postProductReview(productId, {
        data: values.review,
        rating: values.rating as number,
      });

      if (res.id) { 
        helpers.setSubmitting(false);
      }

    }
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={formValidationSchema}
    >
      {children}
    </Formik>
  );
};

export default ProductReviewFormProvider;
