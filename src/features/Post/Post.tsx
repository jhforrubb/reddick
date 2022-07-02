import { useCallback } from 'react'
import { Box, Flex, Text, Image, HStack, Icon } from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import moment from 'moment';
import PostUtilButton from './PostUtilButton';
import TextPost from './TextPost';
import VideoPost from './VideoPost';
import LinkPost from './LinkPost';
import GifPost from './GifPost';

export enum PostType {
    TEXT = 'text',
    VIDEO = 'video',
    LINK = 'link',
    GIF = 'gif',
}

export type PostProps = {
    id: string,
    voteCount: number,
    subreddit: string,
    subredditIconUrl: string,
    user: string,
    timestamp: string,
    isJoined: boolean,
    title?: string,
    commentCount: number,
    content: string,
    url?: string,
    videoSrc?: string,
    thumbnail?: string,
    postType: string,
}

const Post = (props: PostProps) => {
    const { voteCount, subreddit, user, timestamp, title, commentCount, subredditIconUrl, content, postType, url, thumbnail } = props;

    const renderContent = useCallback(() => {
        if (postType === PostType.TEXT) {
            return <TextPost content={content} />
        }

        if (postType === PostType.VIDEO) {
            return <VideoPost content={content} />
        }

        if (postType === PostType.LINK) {
            return <LinkPost content={content} url={url} thumbnail={thumbnail} />
        }

        if (postType === PostType.GIF) {
            return <GifPost content={content} />
        }
    }, [content, postType, thumbnail, url]);

    return (
        <Flex w="100%" direction="row" mb="15px" border="1px" borderRadius="5px" borderColor="gray.300" overflow="hidden">
            <Flex w="40px" direction="column" alignItems="center" bgColor="rgba(255,255,255, 0.5)" py="8px">
                <ArrowUpIcon cursor="pointer" onClick={() => console.log('it should upvote')} />
                <Text color="#1A1A1B" fontSize="12px" fontWeight="700" lineHeight="16px" pointerEvents="none" wordBreak="normal" my="5px">
                    {voteCount}
                </Text>
                <ArrowDownIcon cursor="pointer" onClick={() => console.log('it should downvote')} />
            </Flex>

            <Box w="100%" bgColor="#FFFFFF" py="8px" px="8px">
                <HStack>
                    <Image src={subredditIconUrl} alt={subredditIconUrl} borderRadius="full" w="20px" h="20px" />
                    <Text color="#1c1c1c" fontSize="12px" fontWeight="700" lineHeight="20px">
                        {subreddit}
                    </Text>
                    <Text color="#7c7c7c" fontSize="6px" lineHeight="20px">
                        {' '}
                        •{' '}
                    </Text>
                    <Text color="#787C7E" fontSize="12px">
                        Posted by {`u/${user}`} {moment.duration(timestamp).humanize(true)}
                    </Text>
                </HStack>
                <Text fontSize="18px" fontWeight="500" lineHeight="22px" pr="5px" color="#878A8C" my="10px">
                    {title}
                </Text>
                {renderContent()}
                <HStack>
                    <PostUtilButton
                        icon={ChatBubbleOutlineOutlinedIcon}
                        label={`${commentCount} Comments`}
                        onClick={() => console.log('it should comment')}
                    />
                    <PostUtilButton icon={IosShareOutlinedIcon} label="Share" onClick={() => console.log('it should share')} />
                    <PostUtilButton icon={BookmarkAddOutlinedIcon} label="Save" onClick={() => console.log('it should save')} />
                </HStack>
            </Box>
        </Flex>
    );
};

export default Post;
