'use client'

import { match } from 'ts-pattern';

// HOOKS
import useSWR from 'swr';

// UTILS
import { fetcher } from "@/utils/api"

// COMPONENTS
import { Grid, Alert } from "@mui/material";

import MainProductCard from "@/features/products/cards/MainProductCard";
import MainProductCardSkeleton from "@/features/products/cards/MainProductCardSkeleton";

// TYPES
import type { FC } from "react"
import type { IProduct } from '@/types/product';

const MainProductList: FC = () => {
    const { isLoading, error, data } = useSWR<IProduct[]>(`${process.env.NEXT_PUBLIC_MOCKAPI_V1}/product`, fetcher)

    if (isLoading) {
        return <Grid container>
            {Array.from(new Array(20)).map((_, index) => {
                return <Grid key={index} md={3} sm={6} padding={2}><MainProductCardSkeleton /></Grid>
            })}
        </Grid>
    }

    if (error) {
        /**
         * Pattern matching
         * It can be very powerfull in a real life scenario with
         * good documentation for api
         */
        const msg: string = match(error)
            .with({ message: 'string' }, (err) => err.message)
            .with({ error: 'string' }, (err) => err.error)
            .otherwise(() => JSON.stringify(error));

        return <Alert color="error">{msg}</Alert>
    }

    if (data?.length) {
        return (
            <Grid container justifyContent="center">
                {data.map((product) => {
                    return <Grid key={product.id} md={3} sm={6} padding={2} >
                        <MainProductCard product={product} />
                    </Grid>
                })}
            </Grid>
        );
    }

    return <Alert color="info" className="my-8">No result has been found</Alert>
}

export default MainProductList;