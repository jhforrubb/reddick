import { communitiesJson, categoriesJson, postJson } from '../../sample/sample';
import { Box, Stack } from '@chakra-ui/react';
import TrendingBanner from '../../features/TrendingBanner/TrendingBanner';
import MainLayout from '../../layouts/MainLayout';
import Post from '../../features/Post/Post';
import TopCommunities from '../../features/TopCommunities/TopCommunities';
import CategoryCard from '../../features/CategoryCard/CategoryCard';
import SiteMap from '../../features/SiteMap/SiteMap';
import { useCallback } from 'react';
import TextPost from '../../features/Post/TextPost';
import VideoPost from '../../features/Post/VideoPost';
import LinkPost from '../../features/Post/LinkPost';
import GifPost from '../../features/Post/GifPost';
import ImagePost from '../../features/Post/ImagePost';
import { PostType, PostProps, Posts } from '../../features/Post/Post';

const Homepage = () => {
    function renderContent(post: Posts) {
        const { content, postType, thumbnail, url } = post;
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
    }

    return (
        <Box pt="50px" height="100vh">
            <TrendingBanner />
            <MainLayout
                primaryView={
                    <div>
                        {postJson.map((el) => {
                            return (
                                <Post
                                    key={el.id}
                                    id={el.id}
                                    subredditIconUrl={el.subredditIconUrl}
                                    voteCount={el.voteCount}
                                    subreddit={el.subreddit}
                                    user={el.user}
                                    timestamp={el.timestamp}
                                    isJoined={el.isJoined}
                                    title={el.title}
                                    commentCount={el.commentCount}
                                    postView={false}
                                    content={el.content}
                                    postType={el.postType}
                                    // thumbnail={el.thumbnail}
                                    // url={el.url}
                                >
                                    {renderContent(el)}
                                    {/* <TextPost content={postJson[0].content} /> */}
                                </Post>
                            );
                        })}
                    </div>
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

export default Homepage;
