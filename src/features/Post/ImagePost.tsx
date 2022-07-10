import { BaseSyntheticEvent, useRef } from 'react';
import { Box, Image } from '@chakra-ui/react';

type ImagePostProps = {
    content: string;
};

const ImagePost = (props: ImagePostProps) => {
    const { content } = props;
    const imageRef = useRef<HTMLImageElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const handleImageLoad = (e: BaseSyntheticEvent) => {
        if (!imageRef.current || !buttonRef.current) return;

        if (e.currentTarget.naturalHeight > 1000) {
            imageRef.current.style.maxHeight = 'none';
            buttonRef.current.style.display = 'block';
            return;
        }

        imageRef.current.style.maxHeight = '512px';
        buttonRef.current.style.display = 'none';
    };

    return (
        <Box maxH="512px" overflow="hidden" display="flex" justifyContent="center" position="relative">
            <Box>
                <Image ref={imageRef} onLoad={handleImageLoad} src={content} alt={content} />
            </Box>
            <Box
                ref={buttonRef}
                as="div"
                display={'none'}
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
        </Box>
    );
};

export default ImagePost;
