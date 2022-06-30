import { Outlet } from 'react-router-dom';
import Navbar from '../../features/Navbar/Navbar';
import { Box, Container } from '@chakra-ui/react';

const Mainpage = () => {
    return (
        <Box>
            <Navbar />
            <Container maxW="container.lg">
                <Outlet />
            </Container>
        </Box>
    );
};

export default Mainpage;
