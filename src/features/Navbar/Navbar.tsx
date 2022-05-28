import Searchbar from '../Searchbar/Searchbar';
import UserSelect from '../UserSelect/UserSelect';
import { Flex, Spacer, Button, ButtonGroup, Heading, Box, useMediaQuery } from '@chakra-ui/react';

const Navbar = () => {
    const [isWiderThan1180px] = useMediaQuery('(min-width: 1180px)');

    return (
        <Box as={Flex} gap="2" alignItems={'center'} pl={5} pr={5} py={2.5} height="50px" bgColor="#FFFFFF" position="fixed" width="100vw">
            <Heading size="sm">Reddit</Heading>
            <Spacer />
            <Searchbar />
            <Spacer />
            <ButtonGroup>
                <Box
                    as={Button}
                    size="sm"
                    w={isWiderThan1180px ? '120px' : ''}
                    borderWidth="1px"
                    borderStyle="solid"
                    borderColor="#0079D3"
                    color="#0079D3"
                    borderRadius="9999px"
                    _hover={{ bg: '#DAE0E6' }}
                    _focus={{ outline: 'none', boxShadow: 'none' }}
                    _active={{ outline: 'none', boxShadow: 'none' }}
                >
                    Log In
                </Box>

                <Box
                    as={Button}
                    size="sm"
                    w={isWiderThan1180px ? '120px' : ''}
                    borderWidth="1px"
                    borderStyle="solid"
                    borderColor="#0079D3"
                    bgColor="#0079D3"
                    color="#FFFFFF"
                    borderRadius="9999px"
                    _hover={{ bg: '#0079D3' }}
                    _focus={{ outline: 'none', boxShadow: 'none' }}
                    _active={{ outline: 'none', boxShadow: 'none' }}
                >
                    Sign In
                </Box>
                <UserSelect />
            </ButtonGroup>
        </Box>
    );
};

export default Navbar;
