import { Text, Box, Link, Flex } from '@chakra-ui/react';
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons';

export type LinkPostProps = {
    url: string;
    content: string;
    thumbnail?: string;
};

const LinkPost = (props: LinkPostProps) => {
    const { thumbnail, content, url } = props;

    return (
        <Flex>
            <Box w="75%">
                <Text fontSize="18px" fontWeight="500" lineHeight="22px" pr="5px" color="#878A8C" my="5px">
                    {/* <Text fontSize="14px" fontWeight="400" lineHeight="21px" maxH="250px" overflow="hidden" wordBreak="break-word"> */}
                    {content}
                </Text>
                <Link href={url} fontSize="sm">
                    {url.substring(0, 20) + '...'}
                    <ExternalLinkIcon />
                </Link>
            </Box>

            <Box position="relative" border="1px" borderRadius="5px" w="25%">
                <Link href={url}>
                    <Box bgImage={thumbnail ? thumbnail : ''} bgPos="50% top" bgSize="cover" bgRepeat="no-repeat" w="100%" h="100%"></Box>
                    {thumbnail ? '' : <LinkIcon left="45%" top="45%" position="absolute" />}

                    <ExternalLinkIcon
                        position="absolute"
                        right="0"
                        bottom="0"
                        bgColor="black"
                        color="white"
                        p="2px"
                        borderTopLeftRadius="4px"
                    />
                </Link>
            </Box>
        </Flex>
    );
};

export default LinkPost;
