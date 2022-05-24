import { Box, Image, Text } from '@chakra-ui/react';

type TrendingCardProps = {
    title: string,
    subtitle: string,
    sub?: string,
    imgUrl?: string,
}

const TrendingCard = (props: TrendingCardProps) => {
    const { title, subtitle, sub, imgUrl } = props;

    return (
        <Box
            w="240px"
            h="185px"
            position="relative"
            borderWidth="1px"
            borderStyle="solid"
            borderRadius="15px"
            background={`url(${imgUrl}) center center / cover no-repeat #FFFFFF;`}
        >
            <Box position="absolute" px="2.5" py="2.5" bottom="0">
                <Text fontSize="md" color="#FFFFFF" fontWeight="500">{title}</Text>
                <Text fontSize="sm" color="#FFFFFF" fontWeight="400" maxH="40px" textOverflow="ellipsis" overflow="hidden">{subtitle}</Text>
                <Text fontSize="xs" color="#FFFFFF" minH="18px">{sub}</Text>
            </Box>
        </Box >
    )
}

export default TrendingCard