// TYPES
import type { IProduct } from "@/types/product";
import type { IProductReview } from "@/types/productReview";

export type TGetProductById = (id: string) => Promise<IProduct>;

export const getProductById: TGetProductById = async (id) => {
  try {
    const res = await fetch(
      `https://66363b01415f4e1a5e26b4ff.mockapi.io/api/v1/product/${id}`
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("error on fetching the product by id");
  }
};

export type TGetProducts = () => Promise<IProduct[]>;

export const getProducts: TGetProducts = async () => {
  try {
    const res = await fetch(
      "https://66363b01415f4e1a5e26b4ff.mockapi.io/api/v1/product"
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("error on fetching the product by id");
  }
};

export type TPostProductReview = (
  productId: string,
  body: Pick<IProductReview, "data" | "rating">
) => Promise<IProductReview>;

export const postProductReview: TPostProductReview = async (
  productId,
  body
) => {
  try {
    const res = await fetch(
      `https://66363b01415f4e1a5e26b4ff.mockapi.io/api/v1/product/${productId}/comment`,
      { method: "POST", body: JSON.stringify({
        rating: body.rating,
        data: body.data,
        username: "you created this",

      }) }
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("error on fetching the product by id");
  }
};
