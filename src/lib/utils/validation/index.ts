import * as Yup from "yup";

/**
 * review
 */
export const reviewValidationSchema = Yup.string().required().min(20).max(200);
export const ratingValueSchema = Yup.number().required().min(1).max(5)