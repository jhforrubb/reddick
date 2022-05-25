import { Box } from '@chakra-ui/react';
import TrendingBanner from '../../features/TrendingBanner/TrendingBanner';
import MainLayout from '../../layouts/MainLayout';
import Post from '../../features/Post/Post';
import TopCommunities from '../../features/TopCommunities/TopCommunities';

const Homepage = () => {
    const communitiesJson = [
        { id: 0, trending: true, icon:'https://styles.redditmedia.com/t5_2qh3l/styles/communityIcon_fmygcobc22z81.png',r: 'r/news' },
        { id: 1, trending: true, icon:'https://styles.redditmedia.com/t5_2qi4j/styles/communityIcon_a0b0l0lb75k41.png',r: 'r/technews' },
        { id: 2, trending: false,icon:'https://styles.redditmedia.com/t5_323r3/styles/communityIcon_f8aq15b6x9t21.png', r: 'r/savedyouaclick' },
        { id: 3, trending: true,icon:'https://styles.redditmedia.com/t5_21of/styles/communityIcon_s3acgrjuyoe81.jpg?format=pjpg&s=6be19403d863b791c4c4e87db4138533f8733b9f', r: 'r/olympics' },

    ];

    return (
        <Box pt="50px" height="100vh">
            <TrendingBanner />
            <MainLayout
                primaryView={
                    <div>
                        <Post
                            subredditIconUrl="https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png"
                            voteCount={100}
                            subreddit={'r/post'}
                            user={'myau123'}
                            timestamp={new Date().toISOString()}
                            isJoined={false}
                            title={'Better Call Saul S06E07 - [Mid-Season Finale] Plan and Execution - Post-Episode Discussion Thread'}
                            commentCount={50}
                        />{' '}
                    </div>
                }
                secondaryView={
                    <div>
                        <TopCommunities
                            imgUrl="https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png"
                            communities={communitiesJson}
                            isLoading={false}
                        />
                    </div>
                }
            />
        </Box>
    );
};

export default Homepage;
