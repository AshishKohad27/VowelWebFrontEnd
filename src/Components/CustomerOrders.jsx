import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
} from '@chakra-ui/react'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHistory } from '../Redux/cart/action';

export default function CustomerOrders() {
    const dispatch = useDispatch()
    const { history } = useSelector((store) => store.cart);
    console.log('history:', history)

    useEffect(() => {
        dispatch(getHistory());
    }, [dispatch])

    return (
        <div>
            <TableContainer mt="50px">
                <Heading>Order History</Heading>
                <Table variant='simple'>

                    <Thead>
                        <Tr>
                            <Th>Order No.</Th>
                            <Th>Status</Th>
                            <Th>UserId</Th>
                            <Th>category</Th>
                            <Th>Price</Th>
                            <Th>Quantity</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            history && history.map((item) => (

                                <Tr>
                                    <Td>{item._id}</Td>
                                    <Td>Deliver</Td>
                                    <Td >{item.userID}</Td>
                                    <Td >{item.category}</Td>
                                    <Td >{item.price}₹</Td>
                                    <Td >{item.quantity}</Td>
                                </Tr>
                            ))
                        }

                    </Tbody>

                </Table>
            </TableContainer>

        </div>
    )
}
