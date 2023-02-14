import React from "react";
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
  Box,
  Image,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { deleteProduct } from "../Redux/product/action";
import style from "../Styles/Landing.module.css";
import { Link } from "react-router-dom";

export default function DeleteItem({ item }) {
  // console.log('Delete item:', item)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleDelete = () => {
    // console.log('id:', item._id)
    dispatch(deleteProduct(item));
  };
  return (
    <>
      <Button
        background={"#FC8181"}
        _hover={{ background: "#E53E3E" }}
        color="white"
        p="5"
        onClick={onOpen}
      >
        Delete
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Item Id: {item._id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProductItem item={item} />

            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                onClick={handleDelete}
                w={{ base: "", md: "390px" }}
                colorScheme="green"
                mr={3}
                mt="10px"
              >
                Submit
              </Button>
            </Box>
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

function ProductItem({ item }) {
  return (
    <Box bg="" className={style.Item}>
      <Link>
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
  );
}
