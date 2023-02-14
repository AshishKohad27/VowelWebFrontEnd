import React, { useEffect, useState } from "react";
import {
  SimpleGrid,
  Box,
  Heading,
  Button,
  Flex,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/product/action";
import style from "../Styles/Landing.module.css";
import SkeletonLoading from "../Components/SkeletonLoading";
import EditItem from "../Components/EditItem";
import DeleteItem from "../Components/DeleteItem";
import AddItem from "../Components/AddItem";

export default function Admin() {
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
    return (
      <Stack>
        <Flex justifyContent="center" alignItems="center">
          <Heading>{errorMessage}</Heading>
        </Flex>
      </Stack>
    );
  }
  return (
    <>
      <Box maxW="1248px" m="auto" mt="30px">
        <AddItem />
      </Box>
      <Box>
        <SimpleGrid
          maxW="1248px"
          m="auto"
          mt="25px"
          columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
          spacing="20px"
          className={style.Container}
        >
          {data &&
            data.map((item, index) => (
              <Box key={index}>
                {loading ? (
                  <SkeletonLoading />
                ) : (
                  <Box bg="" className={style.Item}>
                    <Box bg="" h="280px" w="280px" m="auto">
                      <Image h="280px" w="280px" src={item.image} />
                    </Box>
                    <Box bg="" h="170px">
                      <Heading as="h1">{item.title.slice(0, 42)}...</Heading>
                      <Stack
                        justifyContent="center"
                        alignContent="center"
                        flexDirection="column"
                        mt="10px"
                        gap={{ base: "80px", sm: "200px", lg: "200px" }}
                      >
                        <Box>
                          <Flex
                            justifyContent="center"
                            alignItems="center"
                            gap={4}
                          >
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
                              padding={"5px"}
                              borderRadius={5}
                              color="white"
                              background={"#A0AEC0"}
                            >
                              {item.discount}
                            </Text>
                          </Flex>
                          <Flex
                            mt="10px"
                            justifyContent="center"
                            alignItems="center"
                            gap={4}
                          >
                            <DeleteItem item={item} />

                            <EditItem item={item} />
                          </Flex>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                )}
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
      </Box>
    </>
  );
}
