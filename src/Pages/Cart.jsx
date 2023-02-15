import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, getCartUser } from '../Redux/cart/action';
import { postVerify } from '../Redux/user/user.action';
import axios from 'axios';
import CartItem from '../Components/CartItem';
import { Grid, GridItem } from '@chakra-ui/react';
import Bill from '../Components/Bill';
import AddAddress from '../Components/AddAddress';

const SendToken = {
    token: "",
};

export default function Cart() {
    const dispatch = useDispatch();
    const { cart, loading, error, total } = useSelector((store) => store.cart)
    console.log('total:', total);
    // console.log('allCart:', allCart)
    // console.log('cart, loading, error:', cart, loading, error)
    const { tokenDetails, isAuth } = useSelector((store) => store.user);
    // console.log('tokenDetails cart:', tokenDetails)
    // console.log("isAuth:", isAuth);




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
    return (
        <div>
            <Grid
                h='auto'
                maxW="1248px"
                m="auto"
                templateColumns='repeat(6, 1fr)'
                gap={4}
            >

                <GridItem colSpan={4} bg='' >
                    {
                        cart && cart.map((item) => (
                            <CartItem item={item} />
                        ))
                    }
                </GridItem>
                <GridItem colSpan={2} bg='' >
                    <Bill total={total} data={cart} />
                    <AddAddress />
                </GridItem>
            </Grid>

        </div>
    )
}
