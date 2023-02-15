import {
    Box,
    Grid,
    GridItem,
    Heading,
    Image,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Button,
    Input,

    Link,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartUser, placeOrder } from "../Redux/cart/action";
import { postVerify } from "../Redux/user/user.action";
import styles from "../Styles/PaymentMethod.module.css";
import Bill from "./Bill";


const SendToken = {
    token: "",
};

export default function PaymentMethod() {
    const dispatch = useDispatch();
    const { cart, total } = useSelector((store) => store.cart)
    console.log('total:', total);

    const { tokenDetails, isAuth } = useSelector((store) => store.user);




    useEffect(() => {
        SendToken.token = axios.defaults.headers.common["authorization"];
        dispatch(postVerify(SendToken));
    }, [isAuth, dispatch]);


    useEffect(() => {
        const payload = {
            "userID": tokenDetails && tokenDetails.id,
        }
        dispatch(getCartUser(payload));
    }, [dispatch, getCartUser, tokenDetails])

    const handlePlaceOrder = () => {
        const payload = {
            "userID": tokenDetails && tokenDetails.id,
        }
        dispatch(placeOrder(payload))
    }

    return (
        <Box maxW="1349px" h="auto" className={styles.paymentMethod}>
            <Box maxW="1024px" m="auto">
                <Grid
                    h="auto"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap="80px"

                >
                    <GridItem
                        colSpan={{ base: 5, sm: 5, md: 3 }}
                        className={styles.cartList}
                    >

                        <Box m="20px">
                            <Text className={styles.offersHeading}>Other Options</Text>

                            <Accordion defaultIndex={[0]} allowMultiple>


                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box
                                                as="span"
                                                flex="1"
                                                textAlign="left"
                                                className={styles.offerContent}
                                            >
                                                <Box>
                                                    <Image
                                                        w="40px"
                                                        h="40px"
                                                        src="https://cdn.pharmeasy.in/payments/upi.png"
                                                        alt=""
                                                    />
                                                </Box>
                                                <Box>
                                                    <Heading as="h1">UPI</Heading>
                                                    <Box w="450px" className={styles.upi}>
                                                        <Image
                                                            w="40px"
                                                            h="40px"
                                                            src="https://consumer-app-images.pharmeasy.in/payment-icons/bhim.png"
                                                            alt="bhim"
                                                        />
                                                        <Image
                                                            w="40px"
                                                            h="40px"
                                                            src="https://consumer-app-images.pharmeasy.in/payment-icons/paytmUpi.png"
                                                            alt="paytm"
                                                        />
                                                        <Image
                                                            w="40px"
                                                            h="40px"
                                                            src="https://consumer-app-images.pharmeasy.in/payment-icons/phonepeWallet.png"
                                                            alt="phonewallet"
                                                        />
                                                        <Image
                                                            w="40px"
                                                            h="40px"
                                                            src="https://consumer-app-images.pharmeasy.in/payment-icons/amazonpay.png"
                                                            alt="amazonpay"
                                                        />
                                                        <Image
                                                            w="40px"
                                                            h="40px"
                                                            src="https://consumer-app-images.pharmeasy.in/payment-icons/gpay.png"
                                                            alt="gpay"
                                                        />
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel
                                        pb={4}
                                        display="flex"
                                        justifyContent="flex-start"
                                    >
                                        <Box mr="10px">
                                            <Input w="200px" placeholder="e.g. 99xxxxxxxx @paytm" />
                                        </Box>
                                        <Box>
                                            <Button
                                                colorScheme="teal.400"
                                                className={styles.offerButton}
                                                onClick={handlePlaceOrder}
                                            >
                                                <Link href="/orderplace">Place Order</Link>
                                            </Button>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box
                                                as="span"
                                                flex="1"
                                                textAlign="left"
                                                className={styles.offerContent}
                                            >
                                                <Box>
                                                    <Image
                                                        w="40px"
                                                        h="40px"
                                                        src="https://cdn.pharmeasy.in/payments/netbanking.png"
                                                        alt=""
                                                    />
                                                </Box>
                                                <Box>
                                                    <Heading as="h1">Net Banking</Heading>
                                                    <Text w="450px">We support over 100 banks</Text>
                                                </Box>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Button
                                            colorScheme="teal.400"
                                            className={styles.offerButton}
                                            onClick={handlePlaceOrder}
                                        >
                                            {" "}
                                            <Link href="/orderplace">Place Order</Link>
                                        </Button>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box
                                                as="span"
                                                flex="1"
                                                textAlign="left"
                                                className={styles.offerContent}
                                            >
                                                <Box>
                                                    <Image
                                                        w="40px"
                                                        h="40px"
                                                        src="https://consumer-app-images.pharmeasy.in/payment-icons/cod.png"
                                                        alt=""
                                                    />
                                                </Box>
                                                <Box>
                                                    <Heading as="h1">Cash on Delivery</Heading>
                                                    <Text>
                                                        ₹25 will be charged for Cash on Delivery. Switch to
                                                        online payments to save on ₹25.
                                                    </Text>
                                                </Box>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Button
                                            colorScheme="teal.400"
                                            className={styles.offerButton}
                                            onClick={handlePlaceOrder}
                                        >
                                            {" "}
                                            <Link href="/orderplace">Place Order</Link>
                                        </Button>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </GridItem>

                    <GridItem

                        colSpan={{ base: 5, sm: 5, md: 2 }}
                        className={styles.cartTotal}
                        bg=""
                    >
                        <Box m="auto">
                            {/* Billing Summary */}
                            {cart.length > 0 ? (
                                <Bill total={total} data={cart} />
                            ) : null}
                            {/* Billing Summary */}
                        </Box>
                        {/* details of address */}

                        {/* details of address */}
                    </GridItem>
                </Grid>
            </Box>
        </Box>


    );
}
