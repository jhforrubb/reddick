import { Box, Icon } from '@chakra-ui/react'

type PostUtilButtonProps = {
    label: string,
    icon: any,
    onClick: () => void
}

const PostUtilButton = (props: PostUtilButtonProps) => {
    const { icon, label, onClick } = props;

    return (
        <Box
            display="flex"
            flexDir="row"
            alignItems="center"
            fontSize="12px"
            fontWeight="700"
            lineHeight="16px"
            p="8px"
            boxSizing="border-box"
            color="#878A8C"
            cursor="pointer"
            _hover={{ bgColor: "#CCC" }}
            borderRadius="2px"
            onClick={onClick}
        >
            <Icon as={icon} w="20px" h="20px" mr="4px" />
            {label}
        </Box>
    )
}

export default PostUtilButton