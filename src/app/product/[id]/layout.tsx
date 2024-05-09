// COMPONENTS
import { Container, Grid } from "@/material/index";

import ProductReviewsSection from "@/features/products/sections/Reviews";
import ProductOptionsSection from "@/features/products/sections/Options";

// TYPES
import type { FC, PropsWithChildren } from "react";

const ProductPageLayout: FC<PropsWithChildren> = ({ children }) => {

    return <Container maxWidth="lg" className="mt-12">
        <Grid container direction="column" gap={4}>
            {children}
            <ProductOptionsSection />
            <ProductReviewsSection />
        </Grid>
    </Container>
}

export default ProductPageLayout;
