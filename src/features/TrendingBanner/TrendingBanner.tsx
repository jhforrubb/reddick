import TrendingCard from './TrendingCard';
import { Box, Text, HStack } from '@chakra-ui/react';

const sampleJson = [
    {
        id: 0,
        title: 'Premier League',
        subtitle: '[Official] Manchester City are the 2021/22 Premier League Champions',
        sub: 'r/soccer and more',
        img: 'https://preview.redd.it/9whvjcb9k5191.jpg?auto=webp&s=540da297fc16dd1b09aee898b3aab1ce62068d82',
    },
    {
        id: 1,
        title: 'Baby Formula',
        subtitle: "Jen Psaki Says Biden Administration Providing Migrant Infants Baby Formula amid Shortage Is 'Morally Right'",
        sub: 'r/politics and more',
        img: 'https://external-preview.redd.it/bxyS0vJyvulIMKFhxArghMXXZvQDqv4kGY0uDwDWZbo.jpg?auto=webp&s=ab1edb617083d28f2c207075a4a49ddc4e8e5f25',
    },
    {
        id: 2,
        title: 'Max Verstappen',
        subtitle: 'Max Verstappen wins the 2022 Spanish Grand Prix',
        sub: 'r/formula1 and more',
        img: 'https://preview.redd.it/us9qmvjeh1191.png?auto=webp&s=c799f4feef27d6ba229706a37245ab038f9ff863',
    },
    {
        id: 3,
        title: 'Ukraine',
        subtitle: 'Zelensky says Russia has blocked Ukraine from exporting 22M tons of food products',
        sub: '',
        img: 'https://external-preview.redd.it/xt4UKKuC6wKKLoZebZYynM-Hs-ikDj1gYWCcBhShuDg.jpg?auto=webp&s=9e1625747c9f965503b9904b175c29d198d52275',
    },
];

const TrendingBanner = () => {
    return (
        <Box>
            <Text>Trending Today</Text>
            <HStack gap={1}>
                {sampleJson.map((el) => (
                    <TrendingCard key={el.id} title={el.title} subtitle={el.subtitle} sub={el.sub} imgUrl={el.img} isLoading={false} />
                ))}
            </HStack>
        </Box>
    );
};

export default TrendingBanner;
