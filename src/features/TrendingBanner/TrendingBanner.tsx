import TrendingCard from './TrendingCard';
import { trendingJson } from '../../sample/sample'
import { Box, Text, HStack } from '@chakra-ui/react';

const TrendingBanner = () => {
    return (
        <Box mt="25px" mb="25px">
            <Text>Trending Today</Text>
            <HStack gap={1}>
                {trendingJson.map((el) => (
                    <TrendingCard key={el.id} title={el.title} subtitle={el.subtitle} sub={el.sub} imgUrl={el.img} isLoading={false} />
                ))}
            </HStack>
        </Box>
    );
};

export default TrendingBanner;
