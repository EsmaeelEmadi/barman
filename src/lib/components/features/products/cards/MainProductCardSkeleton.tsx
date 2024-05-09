import { Card, CardActionArea, CardMedia, CardContent, Skeleton } from "@/material/index"

// TYPES
import type { FC } from "react";

export const MainProductCardSkeletonMedia: FC = () => {
    return <Skeleton height={140} className="transform-none scale-100" />
}

export const MainProductCardSkeletonText: FC = () => {
    return <>
        <Skeleton />
        <Skeleton />
        <Skeleton width={100} />
    </>
}

const MainProductCardSkeleton: FC = () => {
    return <Card>
        <CardActionArea>
            <MainProductCardSkeletonMedia />
            <CardContent>
                <MainProductCardSkeletonText />
            </CardContent>
        </CardActionArea>
    </Card>
}

export default MainProductCardSkeleton;

