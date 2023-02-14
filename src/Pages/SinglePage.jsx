import React from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    Button,
    Flex,
    Heading,
    Img,
    Select,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/router";
import { getAllProducts, getSingleProduct } from "../Redux/product/action";

export default function SinglePage() {
    const { productID } = useParams();
    // console.log("productID:", productID);
    const dispatch = useDispatch();
    const { product, loading, error, errorMessage, message, singleData } =
        useSelector((store) => store.product);
    // console.log("singleData:", singleData);

    useEffect(() => {
        dispatch(getSingleProduct(productID));
    }, [dispatch, productID]);

    //     const [index, setIndex] = useState(0);
    const [quantity, setQuantity] = useState(0);
    //     const {singlesingleData :singleData} = useSelector(state => state.product);
    //     const {message ,error} = useSelector(state => state.cart);

    //     const router = useRouter();
    //     const { id } = router.query;
    const toast = useToast();

    useEffect(() => {
        if (message) {
            toast({
                title: message,
                status: error ? "error" : "success",
                duration: 3000,
                isClosable: true,
                position: "top",
            });
            //  dispatch({type : CLEAR_CART_MESSAGE})
        }
    }, [dispatch, toast]);

    // useEffect(() => {
    //     // dispatch(getSingleProduct(id));
    // }, [dispatch])

    if (error) {
        return <Box>
            <Heading>{errorMessage}</Heading>
        </Box>
    }
    return (
        <Box width={"90%"} margin="auto" mt="15vh">
            <Flex gap={10} mt={16}>
                <Box w={{ base: "90%", md: "80%" }} m="auto">
                    <Flex gap={10} direction={{ base: "column", md: "row" }}>
                        <Box w={{ base: "100%", md: "50%" }}>
                            <Box
                                borderRadius={7}
                                padding={10}
                                boxShadow="md"
                                cursor="pointer"
                            >
                                <Img
                                    margin={"auto"}
                                    width={"400px"}
                                    src={singleData.image && singleData.image}
                                />
                            </Box>
                        </Box>

                        <Box p={4}>
                            <Heading as={"h5"} size="md" fontWeight={700} color="gray.600">
                                {" "}
                                {singleData.title}
                            </Heading>

                            <Text mt={3} fontSize={14} color={"teal.500"} cursor="pointer">
                                Visit PharmEasy Store
                            </Text>

                            <Flex gap={{ base: "80px", sm: "200px", lg: "200px" }}>
                                <Flex gap={4}>
                                    <Text fontSize={22} fontWeight={500}>
                                        {" "}
                                        ₹{singleData.price}
                                    </Text>
                                    <Text color="grey" mt="1">
                                        MRP
                                    </Text>
                                    <Text
                                        mt={2}
                                        fontSize={13}
                                        textDecoration={"line-through"}
                                        color="grey"
                                    >
                                        {" "}
                                        ₹{singleData.mrp}
                                    </Text>
                                    <Text
                                        padding={2}
                                        borderRadius={5}
                                        color="white"
                                        background={"#f47779"}
                                    >
                                        {singleData.discount}
                                    </Text>
                                </Flex>
                            </Flex>

                            <Text fontSize={12} color="grey">
                                Inclusive of all taxes
                            </Text>
                            <Text fontSize={12} mt="1">
                                {" "}
                                Delivery with in 7 days
                            </Text>
                            <Select
                                mt={5}
                                placeholder="Select Quantity"
                                onChange={(e) => setQuantity(e.target.value)}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Select>
                            <Button
                                mt="6"
                                onClick={() => {
                                    if (quantity === 0) {
                                        toast({
                                            title: "Please Select Quantity",
                                            status: "error",
                                            duration: 3000,
                                            isClosable: true,
                                            position: "top",
                                        });
                                        return;
                                    }
                                    // dispatch(addItemCart({ productId: singleData._id, quantity }))
                                }}
                                background={"#10847e"}
                                _hover={{ background: "#14918b" }}
                                color="white"
                                p="5"
                            >
                                Add To Cart
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
