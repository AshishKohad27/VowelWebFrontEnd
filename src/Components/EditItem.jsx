import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Flex,
    Input,
    Select,
    Box,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../Redux/product/action";

export default function EditItem({ item }) {
    // console.log('item:', item)
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        _id: item._id,
        image: item.image,
        title: item.title,
        price: item.price,
        mrp: item.mrp,
        category: item.category,
        quantity: item.quantity,
        discount: item.discount,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleEdit = () => {

        dispatch(updateProduct(form));
    };

    // console.log('Edit item:', item)
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { image, title, price, mrp, category, quantity, discount } = form;
    return (
        <>
            <Button
                background={"#63B3ED"}
                _hover={{ background: "#3182CE" }}
                color="white"
                p="5"
                onClick={onOpen}
            >
                Edit
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Item Id: {item._id}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                            m="auto"
                        >
                            <Input
                                mt="10px"
                                placeholder="Title"
                                name="title"
                                value={title}
                                onChange={handleChange}
                            />
                            <Input
                                mt="10px"
                                placeholder="Image"
                                name="image"
                                value={image}
                                onChange={handleChange}
                            />
                            <Input
                                mt="10px"
                                placeholder="Price"
                                type="number"
                                name="price"
                                value={price}
                                onChange={handleChange}
                            />
                            <Input
                                mt="10px"
                                placeholder="MRP"
                                type="number"
                                name="mrp"
                                value={mrp}
                                onChange={handleChange}
                            />
                            <Select
                                mt="10px"
                                name="category"
                                value={category}
                                onChange={handleChange}
                            >
                                <option value="healthcare">Health Care</option>
                            </Select>
                            <Input
                                mt="10px"
                                placeholder="Quantity"
                                type="Number"
                                name="quantity"
                                value={quantity}
                                onChange={handleChange}
                            />
                            <Input
                                mt="10px"
                                placeholder="Discount"
                                name="discount"
                                value={discount}
                                onChange={handleChange}
                            />

                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Button
                                    onClick={() => handleEdit()}
                                    w={{ base: "", md: "390px" }}
                                    colorScheme="green"
                                    mr={3}
                                    mt="10px"
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
