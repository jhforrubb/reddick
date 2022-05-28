import React from 'react';
import { Box, Text, Skeleton, SkeletonCircle, HStack } from '@chakra-ui/react';

type TrendingCardProps = {
    title: string;
    subtitle: string;
    sub?: string;
    imgUrl?: string;
    isLoading?: boolean;
};

const TrendingCard = (props: TrendingCardProps) => {
    const { title, subtitle, sub, imgUrl, isLoading } = props;

    const renderSkeleton = () => {
        return (
            <React.Fragment>
                <Skeleton w="200px" h="15px" mb="5px" />
                <Skeleton w="160px" h="15px" mb="5px" />
                <HStack>
                    <SkeletonCircle h="15px" w="15px" />
                    <Skeleton w="110px" h="15px" mb="5px" />
                </HStack>
            </React.Fragment>
        );
    };

    const renderInfo = () => {
        return (
            <React.Fragment>
                <Text fontSize="md" color="#FFFFFF" fontWeight="500">
                    {title}
                </Text>
                <Text fontSize="sm" color="#FFFFFF" fontWeight="400" maxH="40px" textOverflow="ellipsis" overflow="hidden">
                    {subtitle}
                </Text>

                <Text fontSize="xs" color="#FFFFFF" minH="18px">
                    {sub}
                </Text>
            </React.Fragment>
        );
    };

    return (
        <Box
            w="240px"
            h="185px"
            position="relative"
            borderWidth="1px"
            borderStyle="solid"
            borderRadius="15px"
            background={`${isLoading ? '#FFFFFF' : `url(${imgUrl}) center center / cover no-repeat #FFFFFF;`}`}
        >
            <Box position="absolute" px="2.5" py="2.5" bottom="0">
                {isLoading ? renderSkeleton() : renderInfo()}
            </Box>
        </Box>
    );
};

export default TrendingCard;
