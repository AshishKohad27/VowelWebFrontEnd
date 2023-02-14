import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Styles/Landing.module.css";

export default function Item({ item }) {
    return (
        <Box bg="" className={style.Item}>
            <Link to={`${item._id}`}>
                <Box bg="" h="280px" w="280px" m="auto">
                    <Image h="280px" w="280px" src={item.image} />
                </Box>
                <Box bg="" h="120px">
                    <Heading as="h1">{item.title.slice(0, 42)}...</Heading>
                    <Flex
                        justifyContent="center"
                        alignContent="center"
                        mt="10px"
                        gap={{ base: "80px", sm: "200px", lg: "200px" }}
                    >
                        <Flex justifyContent="center" alignItems="center" gap={4}>
                            <Text fontSize="18px" fontWeight={500}>
                                {" "}
                                ₹{item.price}
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
                                ₹{item.mrp}
                            </Text>
                            <Text
                                padding={2}
                                borderRadius={5}
                                color="white"
                                background={"#f47779"}
                            >
                                {item.discount}
                            </Text>
                        </Flex>


                    </Flex>
                  
                </Box>
            </Link>
        </Box>
    )
}
