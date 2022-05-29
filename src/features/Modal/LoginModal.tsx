import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    Box,
    Text,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button,
} from '@chakra-ui/react';
import { ModalContext, ModalType } from '../../contexts/ModalContext';
import { useContext, useState, FormEvent } from 'react';

export type LoginModalProps = {
    isOpen: boolean;
};

const LoginModal = (props: LoginModalProps) => {
    const { isOpen } = props;
    const modalContext = useContext(ModalContext);
    const [isUsernameFocus, setIsUsernameFocus] = useState<boolean>(false);
    const [isPasswordFocus, setIsPasswordFocus] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isUsernameError, setUsernameError] = useState<boolean>(false);

    const handleLogin = (event: FormEvent) => {
        event.preventDefault();
        console.log('submitting login');

        if (username.length < 3 || username.length > 20) {
            setUsernameError(true);
            return;
        }

        setUsernameError(false);
    };

    return (
        <Modal isOpen={isOpen} onClose={() => modalContext.setCurrentModal(ModalType.CLOSED)}>
            <ModalOverlay />
            <ModalContent w="850px" h="650px" maxW="850px" maxH="650px" display="flex" flexDir="row" overflow="hidden">
                <ModalCloseButton />
                <Box
                    w="130px"
                    h="inherit"
                    bgImage="url(https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png)"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                />
                <Box alignSelf="center" p="25px">
                    <Text fontSize="18px" fontWeight="medium" lineHeight="22px">
                        Log In
                    </Text>
                    <Text fontFamily="Noto Sans,sans-serif" fontSize="12px" fontWeight="normal" lineHeight="18px" mt="8px" mb="50px">
                        <Box as="span">By continuing, you agree to our </Box>
                        <Box as="span" color="#0079D3" _hover={{ color: '#3394DC' }} cursor="pointer">
                            User Agreement{' '}
                        </Box>
                        <Box as="span">and </Box>
                        <Box as="span" color="#0079D3" _hover={{ color: '#3394DC' }} cursor="pointer">
                            Privacy Policy
                        </Box>
                        <Box as="span">. </Box>
                    </Text>
                    <form onSubmit={handleLogin}>
                        <FormControl>
                            <FormLabel
                                htmlFor="login-username"
                                position="absolute"
                                fontSize="10px"
                                fontWeight="semibold"
                                letterSpacing="0.5px"
                                color="#A5A4A4"
                                textAlign="start"
                                textTransform="uppercase"
                                lineHeight={isUsernameFocus || username.length > 0 ? '14px' : '23px'}
                                transform={isUsernameFocus || username.length > 0 ? 'translate3d(-5px, -8px ,0) scale(.83333333)' : ''}
                                top="14px"
                                left="12px"
                                pointerEvents="none"
                            >
                                Username
                            </FormLabel>
                            <Input
                                id="login-username"
                                type="text"
                                h="48px"
                                w="280px"
                                p="22px 12px 10px"
                                borderRadius="4px"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                onFocus={() => setIsUsernameFocus(true)}
                                onBlur={() => setIsUsernameFocus(false)}
                                onMouseEnter={() => setIsUsernameFocus(true)}
                                onMouseLeave={() => setIsUsernameFocus(false)}
                            />
                            <FormHelperText
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight="16px"
                                mt="4px"
                                opacity={isUsernameError ? '1' : '0'}
                                color="#EA0027"
                                transition="all .2s ease-in-out"
                            >
                                Username must be between 3 and 20 characters
                            </FormHelperText>
                        </FormControl>
                        <FormControl mt="15px">
                            <FormLabel
                                htmlFor="login-password"
                                position="absolute"
                                fontSize="10px"
                                fontWeight="semibold"
                                letterSpacing="0.5px"
                                color="#A5A4A4"
                                textTransform="uppercase"
                                lineHeight={isPasswordFocus || password.length > 0 ? '14px' : '23px'}
                                transform={isPasswordFocus || password.length > 0 ? 'translate3d(-5px, -8px ,0) scale(.83333333)' : ''}
                                top="14px"
                                left="12px"
                                pointerEvents="none"
                            >
                                Password
                            </FormLabel>
                            <Input
                                id="login-password"
                                type="password"
                                h="48px"
                                w="280px"
                                p="22px 12px 10px"
                                borderRadius="4px"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                onFocus={() => setIsPasswordFocus(true)}
                                onBlur={() => setIsPasswordFocus(false)}
                                onMouseEnter={() => setIsPasswordFocus(true)}
                                onMouseLeave={() => setIsPasswordFocus(false)}
                            />
                        </FormControl>

                        <Box
                            as={Button}
                            borderWidth="1px"
                            borderStyle="solid"
                            borderColor="#0079D3"
                            bgColor="#0079D3"
                            color="#FFFFFF"
                            borderRadius="9999px"
                            w="280px"
                            _hover={{ bg: '#1484D7' }}
                            _focus={{ outline: 'none', boxShadow: 'none' }}
                            _active={{ outline: 'none', boxShadow: 'none' }}
                            type="submit"
                            mt="15px"
                        >
                            Log In
                        </Box>
                    </form>
                    <Box fontFamily="IBMPlexSans,sans-serif" fontSize="12px" fontWeight="normal" lineHeight="18px" color="#1A1A1B">
                        <Box mt="8px" mb="20px">
                            <Box as="span">Forgor your </Box>
                            <Box as="span" color="#0079D3" _hover={{ color: '#3394DC' }} cursor="pointer">
                                username{' '}
                            </Box>
                            <Box as="span">or </Box>
                            <Box as="span" color="#0079D3" _hover={{ color: '#3394DC' }} cursor="pointer">
                                password
                            </Box>
                            <Box as="span">?</Box>
                        </Box>
                        <Box mt="8px">
                            <Box as="span">New to Reddit? </Box>
                            <Box
                                as="span"
                                textTransform="uppercase"
                                fontWeight="semibold"
                                color="#0079D3"
                                cursor="pointer"
                                _hover={{ color: '#3394DC' }}
                            >
                                sign up
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ModalContent>
        </Modal>
    );
};

export default LoginModal;
