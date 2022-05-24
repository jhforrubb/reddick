import { Box } from '@chakra-ui/react'
import TrendingBanner from '../../features/TrendingBanner/TrendingBanner';
import MainLayout from '../../layouts/MainLayout';

const Homepage = () => {
    return (
        <Box pt="50px" height="100vh">
            <TrendingBanner />
            <MainLayout primaryView={<div>MAIN CONTAINER</div>} secondaryView={<div>SECONDARY CONTAINER</div>} />
        </Box>
    );
};

export default Homepage;
