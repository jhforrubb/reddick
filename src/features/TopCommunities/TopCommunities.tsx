import { Box, Image, Flex, HStack, Spacer, Button, Center, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

type TopCommunitiesProps = {
    isLoading: boolean;
    imgUrl?: string;
    communities: Array<Community>;
};

type Community = {
    id: number;
    trending: boolean;
    icon: string;
    r: string;
};

const TopCommunities = (props: TopCommunitiesProps) => {
    const { isLoading, imgUrl, communities } = props;

    const renderSkeleton = () => {
        return (
            <>
                <Skeleton h="50px" />
                {[...Array(5)].map((value: undefined, index: number) => (
                    <Box padding="7px" borderBottom="1px" borderColor="gray.200" key={index}>
                        <HStack>
                            <SkeletonCircle size="10" />
                            <Skeleton h="30px" w="250px" />
                        </HStack>
                    </Box>
                ))}
            </>
        );
    };

    const renderInfo = () => {
        return (
            <>
                <Flex
                    h="80px"
                    direction="column-reverse"
                    padding="15px"
                    color="white"
                    fontWeight="medium"
                    backgroundPosition="50%"
                    bgImage={imgUrl}
                >
                    Top News Communities
                </Flex>
                {/* bgImage={`linear-gradient(0deg,rgba(0,0,0,.7) 0,transparent,url(${imgUrl}))`} */}
                {/* <Image src={imgUrl} alt={imgAlt} objectFit='none'/>             */}

                <Box>
                    {communities.map((el) => (
                        <Flex padding="10px" borderBlock="1px" borderColor="gray.300" fontSize="small" fontWeight="semibold" key={el.id}>
                            <HStack>
                                <Box w="10px">{el.id + 1}</Box>
                                <Box w="20px">{el.trending ? <ChevronUpIcon boxSize="1.5em" color="green.400" /> : ''}</Box>
                                <Box>
                                    <Image borderRadius="full" boxSize="30px" src={el.icon} alt="comuIcon" />
                                </Box>
                                <Box>{el.r}</Box>
                            </HStack>
                            <Spacer />
                            <Box>
                                <Button colorScheme="blue" size="sm" borderRadius="20px" height="25px" fontSize="xs">
                                    Join
                                </Button>
                            </Box>
                        </Flex>
                    ))}
                </Box>

                <Center paddingBlock="12px">
                    <Button colorScheme="blue" size="md" borderRadius="20px" height="30px" width="280px">
                        View All
                    </Button>
                </Center>

                <Box padding="0 8px 12px">
                    <Button colorScheme="gray" size="sm" fontSize="smaller" borderRadius="15px" margin='4px'>
                        Top
                    </Button>
                    <Button colorScheme="gray" size="sm" fontSize="smaller" borderRadius="15px" margin='4px'>
                        Near You
                    </Button>
                    <Button colorScheme="gray" size="sm" fontSize="smaller" borderRadius="15px" margin='4px'>
                        Sports
                    </Button>
                </Box>
            </>
        );
    };

    return (
        <Box border="1px" borderRadius="5px" borderColor="gray.300" bgColor="rgba(255,255,255)" overflow="hidden">
            {isLoading ? renderSkeleton() : renderInfo()}
        </Box>
    );

};

export default TopCommunities;
