import { Box, HStack, Stack, Text, Image } from '@chakra-ui/react';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PostUtilButton from '../../features/Post/PostUtilButton';
import moment from 'moment';
import { postCommentsJson } from '../../sample/sample';
import { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export type CommentProps = {
    id: string;
    content: string;
    user: string;
    upvote: number;
    downvote: number;
    timestamp: string;
    comments?: Array<CommentProps>;
};

const Comment = (props: CommentProps) => {
    // const timestamp = new Date().toISOString;
    const [show, setShow] = useState(true);

    // console.log('props>', props);
    const { content, comments } = props;
    // const comments = postCommentsJson[0].comments;
    // console.log('comments>', comments);

    return (
        <Box p="10px">
            <HStack fontSize="xs" fontWeight="semibold" p="5px">
                {show ? '' : <ChevronDownIcon onClick={() => setShow(true)} />}
                <Image
                    borderRadius="full"
                    boxSize="30px"
                    src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png"
                ></Image>
                <Box>username</Box>
                <Box>Time</Box>
            </HStack>
            {show ? (
                <Box>
                    <HStack>
                        <Box fontSize="medium" p="5px">
                            <Box onClick={() => setShow(false)} border="1px" h="100%" pos="absolute" m="5px" right="10px"></Box>
                            <Box>{content}</Box>
                            <HStack fontSize="sm" color="gray.500" fontWeight="semibold" p="5px">
                                <Text color="#787C7E" fontSize="12px">
                                    Reply
                                </Text>
                                <Text color="#787C7E" fontSize="12px">
                                    Share
                                </Text>
                            </HStack>
                        </Box>
                    </HStack>
                    <Box>
                        {comments
                            ? comments.map((el) => (
                                  <Comment
                                      key={el.id}
                                      id={el.id}
                                      content={el.content}
                                      user={el.user}
                                      upvote={el.upvote}
                                      downvote={el.downvote}
                                      timestamp={el.timestamp}
                                      comments={el.comments}
                                  />
                              ))
                            : ''}
                    </Box>
                </Box>
            ) : (
                <div></div>
            )}
        </Box>
    );
};

export default Comment;
