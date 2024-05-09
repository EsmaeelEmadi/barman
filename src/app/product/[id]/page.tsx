// API
import { getProductById, getProducts } from "@/mock/api/product";

// COMPONENTS
import { Grid, Paper, Typography, Divider} from "@/material/index";
import Image from "next/image";


export async function generateStaticParams(): Promise<{ id: string }[]> {
    const products = await getProducts();

    // NOTE: due to bug in mockapi
    const limitedProducts = products.slice(0, 12);

    const paths = limitedProducts.map((product) => ({
        id: product.id
    }));

    return paths;
}


export default async function Page({ params }: { params: { id: string } }) {
    const product = await getProductById(params.id);


    return (
            <Grid container direction="row" spacing={4}>
                <Grid  sm={12} md={6}>
                    <Paper elevation={4}>
                        <Image src={product.image} alt={product.name} width={2000} height={2000} className="rounded-md"/>
                    </Paper>
                </Grid>
                <Grid sm={12} md={6}>
                    <Paper elevation={4} className="p-8  h-full rounded-md">
                        <Grid container spacing={1} gap={1} direction="column">
                            <Typography variant="h4">
                                {product.name}
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
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
    );
}