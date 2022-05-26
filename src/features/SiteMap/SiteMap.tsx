import { Box, HStack, Flex, Divider, Spacer } from '@chakra-ui/react';

const SiteMap = () => {
    return (
        <Box paddingInline="15px" paddingBlock="10px" fontSize="small" fontWeight='medium' bg="white" borderRadius="5px" border="gray.200" color="gray.600" position='sticky' top='57px'>
            <HStack align="flex-start">
                <Flex flexDirection="column" w="50%">
                    <a href="/">Help</a>
                    <a href="/">Help</a>
                </Flex>
                <Flex flexDirection="column" w="50%">
                    <a href="/">Help</a>
                    <a href="/">Help</a>
                    <a href="/">Help</a>
                </Flex>
            </HStack>
            <Spacer/>
            <Divider margin='10px'/>
            <HStack>
                <Flex flexDirection="column" w="50%">
                    USA
                </Flex>
                <Flex flexDirection="column" w="50%">
                    Deutsch
                </Flex>
            </HStack>
            <Divider margin='10px'/>
            <Box>Reddick Inc © 2022. All rights reserved</Box>
        </Box>
    );
};

export default SiteMap;
