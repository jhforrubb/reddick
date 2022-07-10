import { communitiesJson, categoriesJson, postCommentsJson } from '../../sample/sample';
import { Box, Stack, Flex, HStack } from '@chakra-ui/react';
import MainLayout from '../../layouts/MainLayout';
import Post from '../../features/Post/Post';
import TopCommunities from '../../features/TopCommunities/TopCommunities';
import CategoryCard from '../../features/CategoryCard/CategoryCard';
import SiteMap from '../../features/SiteMap/SiteMap';
import { useParams } from 'react-router-dom';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import TextEditor from '../Submit/TextEditor';
import TextPost from '../../features/Post/TextPost';
import VideoPost from '../../features/Post/VideoPost';
import LinkPost from '../../features/Post/LinkPost';
import GifPost from '../../features/Post/GifPost';
import ImagePost from '../../features/Post/ImagePost';
import { PostType } from '../../features/Post/Post';
import Comment, { CommentProps } from './Comment';

// export enum PostType {
//     TEXT = 'text',
//     VIDEO = 'video',
//     LINK = 'link',
//     GIF = 'gif',
//     IMAGE = 'image',
// }

const ViewPost = () => {
    let navigate = useNavigate();

    const { id } = useParams();

    //TODO: change to fetch
    console.log(id);
    const post = postCommentsJson[0];
    const { voteCount, subreddit, user, timestamp, title, commentCount, subredditIconUrl, content, postType, isJoined, comments } = post;
    let url = '';
    let thumbnail = '';
    // if(post.url){
    //     url=post.url
    // }

    function handleClose() {
        navigate(-1);
    }

    const renderContent = useCallback(() => {
        if (postType === PostType.TEXT) {
            return <TextPost content={content} />;
        }

        if (postType === PostType.VIDEO) {
            return <VideoPost content={content} />;
        }

        if (postType === PostType.LINK) {
            return <LinkPost content={content} url={url} thumbnail={thumbnail} />;
        }

        if (postType === PostType.GIF) {
            return <GifPost content={content} />;
        }

        if (postType === PostType.IMAGE) {
            return <ImagePost content={content} />;
        }
    }, [content, postType, thumbnail, url]);

    return (
        <Box pt="50px" height="100vh">
            <Flex h="50px" bgColor="gray.600" marginBottom="20px" justifyContent="space-between" color="white" fontSize="sm" p="10px">
                <HStack>
                    <HamburgerIcon />
                    <Box>{title}</Box>
                </HStack>
                <HStack onClick={handleClose} _hover={{ cursor: 'pointer' }}>
                    <CloseIcon />
                    <Box>Close</Box>
                </HStack>
            </Flex>
            <MainLayout
                primaryView={
                    <Box bgColor="white">
                        <Post
                            key={id}
                            id={post.id}
                            subredditIconUrl={subredditIconUrl}
                            voteCount={voteCount}
                            subreddit={subreddit}
                            user={user}
                            timestamp={timestamp}
                            isJoined={isJoined}
                            title={title}
                            commentCount={commentCount}
                            content={content}
                            postType={postType}
                            postView={true}
                        >
                            {renderContent()}
                        </Post>
                        <TextEditor />
                        <div>
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
                        </div>
                    </Box>
                }
                secondaryView={
                    <Stack>
                        <TopCommunities
                            imgUrl="https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png"
                            communities={communitiesJson}
                            isLoading={false}
                        />
                        <CategoryCard categories={categoriesJson} />
                        <SiteMap />
                    </Stack>
                }
            />
        </Box>
    );
};

export default ViewPost;
