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
import { addProduct } from "../Redux/product/action";

let payload = {
    image: "",
    title: "",
    price: "",
    mrp: "",
    category: "",
    quantity: "",
    discount: "",
};

export default function AddItem() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({ payload });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleAdd = () => {

        dispatch(addProduct(form));
        console.log("form:", form);

    };

    // console.log('Edit item:', item)
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { image, title, price, mrp, category, quantity, discount } = form;
    return (
        <>
            <Button
                background={"#B794F4"}
                _hover={{ background: "#805AD5" }}
                color="white"
                p="5"
                onClick={onOpen}
            >
                Add
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Product</ModalHeader>
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
                                <option value="-">Select Category</option>
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
                                    onClick={() => handleAdd()}
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
