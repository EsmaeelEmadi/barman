// COMPONENTS
import { Rating, Box, Grid, Paper, Typography } from "@/material/index";

// TYPES
import type { FC } from "react";
import type { IProductReview } from "@/types/productReview";
import { grey } from "@mui/material/colors";

interface IProductReviewProps { data: IProductReview };

const ProductReview: FC<IProductReviewProps> = ({ data }) => {
    return <Paper className="p-4">
        <Grid container>
            <Grid className="w-full">
                <Box className="flex flex-row justify-between">
                    <Box className="flex flex-row gap-2 items-center">
                        <Typography fontWeight="bold">
                            {data.username}
                        </Typography>
                        <Typography variant="caption" color={grey[500]}>
                            {data.createdAt}
                        </Typography>
                        
                    </Box>
                    <Rating value={data.rating % 5} disabled />
                </Box>
                <Box>
                    {data.data}
                </Box>
            </Grid>
        </Grid>
    </Paper>
}

export default ProductReview;