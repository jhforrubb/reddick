import { useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, Flex, Box } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const UserSelect = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <Box as={Menu} size="sm" onOpen={() => setIsMenuOpen(true)} onClose={() => setIsMenuOpen(false)}>
            <Box
                as={MenuButton}
                _hover={{ borderWidth: '1px' }}
                marginLeft="1px"
                borderWidth={isMenuOpen ? '1px' : '0px'}
                borderStyle="solid"
                borderColor="grey"
                borderRadius="5px"
            >
                <Flex>
                    <Icon as={PersonOutlineOutlinedIcon} />
                    <Icon as={KeyboardArrowDownOutlinedIcon} />
                </Flex>
            </Box>
            <MenuList>
                <MenuItem icon={<Icon as={PersonOutlineOutlinedIcon} />}>Sign up or Log In</MenuItem>
                <MenuGroup
                    title="© 2022 Reddit, Inc. All rights reserved"
                    fontSize="12px"
                    fontWeight={400}
                    lineHeight="16px"
                    textAlign="start"
                    color="#878A8C"
                />
            </MenuList>
        </Box>
    );
};

export default UserSelect;
