import { Stack, Skeleton } from '@chakra-ui/react'
import React from 'react'

export default function SkeletonLoading() {
    return (
        <Stack>
            <Skeleton height='280px' />
            <Skeleton height='120px' />
            <Skeleton height='20px' />
        </Stack>
    )
}
