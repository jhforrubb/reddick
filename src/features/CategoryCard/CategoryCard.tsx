import {useState} from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Link, Flex, Button } from '@chakra-ui/react';

type CategoriesProps = {
    categories: Array<Category>;
};

type Category = {
    id: number;
    category: string;
    tag: Array<String>;
};

const CategoryCard = (props: CategoriesProps) => {
    const { categories } = props;
const [show,setShow]=useState<boolean>(false)

    return (
        <Accordion allowToggle bg="white" fontSize="xs" fontWeight="medium" border='1px' borderColor='gray.200' borderRadius='5px' onChange={(e)=>setShow(false)}>
            {categories.map((el) => (
                <AccordionItem key={el.id}>
                    <AccordionButton _hover={{bg:'white'}}>
                        <Box flex="1" textAlign="left" fontSize="x-small" textTransform="uppercase" fontWeight="semibold">
                            {el.category}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Flex flexWrap='wrap' maxH={show?'':'75px'} overflow='hidden'>
                            {el.tag.map((tag, index) => (
                                <Link key={index} href="/" p='2px'>
                                    {tag}
                                </Link>
                            ))}
                            </Flex>
                            <Button size='xs' marginBlock='12px' marginInline='0' onClick={()=>setShow(!show)}>{show?'Less':'See more'}</Button>

                    </AccordionPanel>

                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default CategoryCard;
