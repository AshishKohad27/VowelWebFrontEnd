import { useEffect, useState } from "react";

import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    MenuList,
    MenuItem,
    MenuDivider,
    Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import styles from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import { postVerify } from "../redux/user/user.action";
// import { LOGOUT } from "../redux/user/user.type";

const SendToken = {
    token: "",
};

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [click, setClick] = useState(false);
    const closeMenu = () => setClick(false);
    console.log(click);

    const dispatch = useDispatch();
    // const { tokenDetails, isAuth } = useSelector((store) => store.user);
    // console.log("isAuth:", isAuth);

    // useEffect(() => {
    // SendToken.token = axios.defaults.headers.common["authorization"];
    // dispatch(postVerify(SendToken));
    // }, [isAuth, dispatch]);

    const handleClick = () => {
        // dispatch({ type: LOGOUT });
    };

    return (
        <>
            <Box bg="#1D4044" color="white" px={4} className={styles.Navbar}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Box>
                            <Link
                                to="/"
                               
                                
                                offset={-150}
                                duration={500}
                                onClick={closeMenu}
                            >
                                <Avatar size={"lg"} src={"img/logo.png"} />
                            </Link>
                        </Box>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                            className={styles.NavbarTitle}
                        >
                            <Link
                                to="/"
                              
                                
                                offset={-100}
                                duration={500}
                                onClick={closeMenu}
                            >
                                <Heading as="h1" fontSize="26px">
                                    Home
                                </Heading>
                            </Link>
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            {/* {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))} */}
                            <Link
                                to="/"
                               
                                
                                offset={-100}
                                duration={500}
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
