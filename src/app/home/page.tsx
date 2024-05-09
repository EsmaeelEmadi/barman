import { lazy } from "react";

// PROVIDERS
import { ProductDialogProvider } from "@/providers/product/ProductDialogProvider";

// COMPONENTS
import { Container } from "@/material/index";

import MainProductList from "@/features/products/lists/MainProductList";

const ProductDialog = lazy(() => import("@/features/products/dialogs/ProductDialog"));

export default function HomePage() {
  return (
    <main>
      <Container maxWidth="xl" className="pt-6">
        <ProductDialogProvider>
          <MainProductList />
          <ProductDialog />
        </ProductDialogProvider>
      </Container>
    </main>
  );
}
