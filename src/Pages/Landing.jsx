import React, { useEffect, useState } from "react";
import {
    SimpleGrid,
    Box,
    Heading,
    Button,
    Flex,
    Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/product/action";
import style from "../Styles/Landing.module.css";
import Item from "../Components/Item";
import SkeletonLoading from "../Components/SkeletonLoading";

export default function Landing() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const { data, loading, error, errorMessage } = useSelector(
        (store) => store.product
    );
    // console.log("loading:", loading);

    useEffect(() => {
        dispatch(getAllProducts(page));
    }, [dispatch, page]);

    if (error) {
        return <Stack>
            <Flex justifyContent="center" alignItems="center">
                <Heading>{errorMessage}</Heading>
            </Flex>
        </Stack>
    }
    return (
        <>
            <SimpleGrid
                maxW="1248px"
                m="auto"
                mt="50px"
                columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
                spacing="20px"
                className={style.Container}
            >
                {data &&
                    data.map((item, index) => (
                        <Box key={index}>
                            {loading ? <SkeletonLoading /> : <Item item={item} />}
                        </Box>
                    ))}
            </SimpleGrid>
            <Flex justifyContent="center" alignItems="center" m="50px auto">
                <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
                    Prev
                </Button>
                <Button>{page}</Button>
                <Button
                    disabled={data && data.length !== 12}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </Button>
            </Flex>
        </>
    );
}
