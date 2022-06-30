import {
    HStack,
    Box,
    Button,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    FormControl,
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import TextEditor from './TextEditor';

function CreatePost() {
    return (
        <>
            <Box pt="70px">
                <HStack justifyContent="space-between" borderBottom="1px" borderColor="white">
                    <Box>Create a post</Box>
                    <Button>Drafts</Button>
                </HStack>
                <InputGroup bg="white">
                    <InputLeftElement pointerEvents={'none'} children={<SearchIcon color={'#878A8C'} />} />
                    <Input placeholder="Choose a community" value="r/AskReddit" />
                    <InputRightElement>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}></MenuButton>
                            <MenuList>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                    </InputRightElement>
                </InputGroup>
                <Tabs isFitted variant="enclosed" bg="white">
                    <TabList mb="1em">
                        <Tab>Post</Tab>
                        <Tab>Images & Video</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <form>
                                <FormControl>
                                    <Input placeholder="Title"></Input>
                                    <TextEditor />
                                    <Button>Save Draft</Button>
                                    <Button>Post</Button>
                                </FormControl>
                            </form>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    );
}

export default CreatePost;
