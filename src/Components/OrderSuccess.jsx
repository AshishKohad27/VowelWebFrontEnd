import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/OrderSuccess.module.css";

export default function OrderSuccess() {
    const [flag, setFlag] = useState(true);
    let id = setTimeout(() => {
        setFlag(false)
    }, 3000);

    if (!flag) {
        clearInterval(id)
    }

    console.log("flag:", flag)
    if (flag) {
        return (
            <Box maxW="1348px" m="auto" mt="70px" bg="">
                <Box m="auto" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <Image m="auto" borderRadius="30px" src="https://www.bikaji.com/pub/media/animation.gif" alt="" />
                    <Heading m="auto" as="h1" color="teal.400">Order will deliver to your door step</Heading>
                </Box>
            </Box>
        )

    } else


        return (
            <Flex maxW="1349px" justifyContent="center" alignItems="center" flexDir="column" m="auto" mt="50px">

                <Heading as="h1">Order Placed Successfully</Heading>
                <Button
                    w={{ md: "240px", lg: "360px" }}
                    colorScheme="teal.400"
                    bg="teal"
                    className={styles.offerButton}
                >
                    {" "}
                    <Link to="/">Go Back To Home</Link>
                </Button>
            </Flex>
        );
}
