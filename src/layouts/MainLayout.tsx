import React from 'react';
import { Box, useMediaQuery, Flex } from '@chakra-ui/react'

type MainLayoutProps = {
    primaryView: React.ReactNode,
    secondaryView: React.ReactNode
}

const MainLayout = (props: MainLayoutProps) => {
    const [isWiderThan960px] = useMediaQuery("(min-width: 960px)");
    const { primaryView, secondaryView } = props;

    return (
        <Flex direction="row" justifyContent="space-around">
            <Box width={isWiderThan960px ? "640px" : "100%"} border="1px solid red">{primaryView}</Box>
            <Box display={isWiderThan960px ? "block" : "none"} width="310px" border="1px solid red">{secondaryView}</Box>
        </Flex>
    )
}

export default MainLayout