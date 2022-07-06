import { useState, useCallback, BaseSyntheticEvent } from 'react';
import { Box, Image } from '@chakra-ui/react';

type ImagePostProps = {
    content: string;
};

const ImagePost = (props: ImagePostProps) => {
    const { content } = props;
    const [isHigherThan1000px, setIsHigherThan1000px] = useState<boolean>(false);

    const handleImageLoad = (e: BaseSyntheticEvent) => {
        if (e.currentTarget.naturalHeight > 1000) {
            setIsHigherThan1000px(true);
        }
    };

    const renderZoomBtn = useCallback(() => {
        if (isHigherThan1000px) {
            return (
                <Box
                    position="absolute"
                    bottom="15"
                    fontSize="12px"
                    fontWeight="700"
                    letterSpacing="0.5px"
                    textTransform="uppercase"
                    borderRadius="4px"
                    lineHeight="32px"
                    bgColor="rgba(80, 85, 87, 0.8)"
                    color="#fff"
                    textAlign="center"
                    width="320px"
                    userSelect="none"
                    cursor="pointer"
                >
                    see full image
                </Box>
            );
        }

        return null;
    }, [isHigherThan1000px]);

    return (
        <Box maxH="512px" overflow="hidden" display="flex" justifyContent="center" position="relative">
            <Box>
                <Image onLoad={handleImageLoad} src={content} alt={content} maxH={isHigherThan1000px ? 'none' : '512px'} />
            </Box>
            {renderZoomBtn()}
        </Box>
    );
};

export default ImagePost;
