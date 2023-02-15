import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { postSign } from '../Redux/user/user.action';
const initialState = {
    name: "",
    email: "",
    password: ""
}
export default function SignUp() {
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const { loading, error } = ((store) => store.user);

    useEffect(() => {

    }, [loading, error]);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setForm({
            ...form, [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('form:', form);
        dispatch(postSign(form));
    }

    const { email, password, name } = form;
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>
                        Create Your Account here
                    </Heading>

                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl >
                            <FormLabel>Name</FormLabel>
                            <Input type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="text"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <Stack spacing={10} >

                            <Button
                                mt="20px"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={handleSubmit}
                            >
                                Sign up
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}