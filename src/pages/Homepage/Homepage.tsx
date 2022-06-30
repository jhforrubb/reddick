import { communitiesJson, categoriesJson, postJson } from '../../sample/sample'
import { Box, Stack } from '@chakra-ui/react';
import TrendingBanner from '../../features/TrendingBanner/TrendingBanner';
import MainLayout from '../../layouts/MainLayout';
import Post, { PostType } from '../../features/Post/Post';
import TopCommunities from '../../features/TopCommunities/TopCommunities';
import CategoryCard from '../../features/CategoryCard/CategoryCard';
import SiteMap from '../../features/SiteMap/SiteMap';

const Homepage = () => {
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
                                    content={el.content}
                                    postType={el.postType as PostType}
                                    thumbnail={el.thumbnail}
                                    url={el.url}
                                />
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
