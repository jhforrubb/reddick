import { Text } from '@chakra-ui/react';

type TextPostProps = {
    content: string;
};

const TextPost = (props: TextPostProps) => {
    const { content } = props;

    return (
        <Text fontSize="14px" fontWeight="400" lineHeight="21px" maxH="250px" overflow="hidden" wordBreak="break-word">
            {content}
        </Text>
    );
};

export default TextPost;
