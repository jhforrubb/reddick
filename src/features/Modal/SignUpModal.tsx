import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from '@chakra-ui/react';
import { useContext, useState, FormEvent } from 'react';
import { ModalContext, ModalType } from '../../contexts/ModalContext';
import validation from '../../utils/ValidationHelper';

export type SignUpModalProps = {
    isOpen: boolean;
};

const SignUpModal = (props: SignUpModalProps) => {
    const { isOpen } = props;
    const modalContext = useContext(ModalContext);
    const [email, setEmail] = useState<string>('');
    const [isEmailFocus, setIsEmailFocus] = useState<boolean>(false);
    const [isEmailError, setEmailError] = useState<boolean>(false);

    const handleSignUp = (event: FormEvent) => {
        event.preventDefault();

        if (validation.isEmail(email) === false) {
            setEmailError(true);
            return;
        }

        setEmailError(false);
    };
    return (
        <>
            <Modal isOpen={isOpen} onClose={() => modalContext.setCurrentModal(ModalType.CLOSED)} isCentered>
                <ModalOverlay />
                <ModalContent w="850px" h="650px" maxW="850px" maxH="650px" display="flex" flexDir="row" m="0" p="0">
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
                            Sign up
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
                        <form onSubmit={handleSignUp}>
                            <FormControl>
                                {/* <FormLabel htmlFor="email">Email address</FormLabel> */}
                                <FormLabel
                                    htmlFor="signup-email"
                                    position="absolute"
                                    fontSize="10px"
                                    fontWeight="semibold"
                                    letterSpacing="0.5px"
                                    color="#A5A4A4"
                                    textAlign="start"
                                    textTransform="uppercase"
                                    lineHeight={isEmailFocus || email.length > 0 ? '14px' : '23px'}
                                    transform={isEmailFocus || email.length > 0 ? 'translate3d(-5px, -8px ,0) scale(.83333333)' : ''}
                                    top="14px"
                                    left="12px"
                                    pointerEvents="none"
                                >
                                    Email
                                </FormLabel>
                                <Input
                                    id="signup-email"
                                    type="text"
                                    h="48px"
                                    w="280px"
                                    p="22px 12px 10px"
                                    borderRadius="4px"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    onFocus={() => setIsEmailFocus(true)}
                                    onBlur={() => setIsEmailFocus(false)}
                                    onMouseEnter={() => setIsEmailFocus(true)}
                                    onMouseLeave={() => setIsEmailFocus(false)}
                                />
                                <FormHelperText
                                    fontSize="12px"
                                    fontWeight="500"
                                    lineHeight="16px"
                                    mt="4px"
                                    opacity={isEmailError ? '1' : '0'}
                                    color="#EA0027"
                                    transition="all .2s ease-in-out"
                                >
                                    Invalid email
                                </FormHelperText>
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
                                    Sign Up
                                </Box>
                            </FormControl>
                        </form>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    );
};

export default SignUpModal;
