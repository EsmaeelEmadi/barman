import { useEffect } from "react";

// COMPONENTS
import { Form, Field, useFormikContext } from "formik";

import { LoadingButton, MenuItem } from "@/material/index";
import { Select, TextField } from "@/elements/form/index";

// TYPES
import type { FC } from "react";

interface IProductReviewFormProps {
  onSubmitAction: () => void;
}

const ProductReviewForm: FC<IProductReviewFormProps> = ({ onSubmitAction }) => {
  const { isSubmitting, submitCount } = useFormikContext();

  useEffect(() => {
    if (submitCount > 0) {
      onSubmitAction();
    }
  }, [submitCount]);

  return (
    <Form className="flex flex-col gap-8">
      <Field
        component={TextField}
        name="review"
        type="text"
        label="review"
        disabled={isSubmitting}
      />
      <Field
        component={Select}
        name="rating"
        label="rating"
        disabled={isSubmitting}
      >
        <MenuItem value={1}>{1}</MenuItem>
        <MenuItem value={2}>{2}</MenuItem>
        <MenuItem value={3}>{3}</MenuItem>
        <MenuItem value={4}>{4}</MenuItem>
        <MenuItem value={5}>{5}</MenuItem>
      </Field>
      <LoadingButton
        type="submit"
        className="w-fit"
        disabled={isSubmitting}
        loading={isSubmitting}
      >
        Submit
      </LoadingButton>
    </Form>
  );
};

export default ProductReviewForm;
