import { Box, Stack } from '@chakra-ui/react';
import TrendingBanner from '../../features/TrendingBanner/TrendingBanner';
import MainLayout from '../../layouts/MainLayout';
import Post, { PostProps } from '../../features/Post/Post';
import TopCommunities from '../../features/TopCommunities/TopCommunities';
import CategoryCard from '../../features/CategoryCard/CategoryCard';
import SiteMap from '../../features/SiteMap/SiteMap';

const Homepage = () => {
    const communitiesJson = [
        { id: 0, trending: true, icon: 'https://styles.redditmedia.com/t5_2qh3l/styles/communityIcon_fmygcobc22z81.png', r: 'r/news' },
        { id: 1, trending: true, icon: 'https://styles.redditmedia.com/t5_2qi4j/styles/communityIcon_a0b0l0lb75k41.png', r: 'r/technews' },
        {
            id: 2,
            trending: false,
            icon: 'https://styles.redditmedia.com/t5_323r3/styles/communityIcon_f8aq15b6x9t21.png',
            r: 'r/savedyouaclick',
        },
        {
            id: 3,
            trending: true,
            icon: 'https://styles.redditmedia.com/t5_21of/styles/communityIcon_s3acgrjuyoe81.jpg?format=pjpg&s=6be19403d863b791c4c4e87db4138533f8733b9f',
            r: 'r/olympics',
        },
    ];

    const categoriesJson = [
        {
            id: 0,
            category: 'Popular Communities',
            tag: [
                'AskReddit',
                'StardewValley',
                'AskReddit',
                'AskReddit',
                'AskReddit',
                'StardewValley',
                'AskReddit',
                'AskReddit',
                'AskReddit',
                'StardewValley',
                'AskReddit',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
                'Pikachu',
            ],
        },
        {
            id: 1,
            category: 'Gaming',
            tag: [
                'StardewValley',
                'AskReddit',
                'AskReddit',
                'AskReddit',
                'AskReddit',
                'AskReddit',
                'AskReddit',
                'AskReddit',
                'AskReddit',
                'AskReddit',
                'StardewValley',
            ],
        },
        {
            id: 2,
            category: 'Sports',
            tag: [
                'AskReddit',
                'AskReddit',
                'AskReddit',
                'StardewValley',
                'AskReddit',
                'AskReddit',
                'AskReddit',
                'AskReddit',
                'AskReddit',
                'StardewValley',
                'AskReddit',
            ],
        },
    ];

    const postJson: PostProps[] = [
        {
            id: '1',
            subredditIconUrl: 'https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png',
            voteCount: 100,
            subreddit: 'r/post',
            user: 'myau123',
            timestamp: new Date().toISOString(),
            isJoined: false,
            commentCount: 50,
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            postType: 'text',
            title: 'Better Call Saul S06E07 - [Mid-Season Finale] Plan and Execution - Post-Episode Discussion Thread',
        },
        {
            id: '2',
            subredditIconUrl: 'https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png',
            voteCount: 110,
            subreddit: 'r/post',
            user: 'myau123',
            timestamp: new Date().toISOString(),
            isJoined: false,
            commentCount: 50,
            content: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            postType: 'video',
            title: 'Guy Catches Tear Gas Shell Mid Air During Protest In Lahore, Pakistan',
        },
        {
            id: '3',
            subredditIconUrl: 'https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png',
            voteCount: 100,
            subreddit: 'r/post',
            user: 'myau123',
            timestamp: new Date().toISOString(),
            isJoined: false,
            commentCount: 50,
            url: 'https://people.com/pets/the-gorilla-family-harambe-left-behind/?amp=true',
            content:
                'TIL that Harambe’s mother, only full brother, and two of his half siblings were killed when a tub of wet chlorine tablets was left by a space heater. The toxic fumes were blown into the gorilla enclosure and killed the four gorillas.',
            thumbnail: 'https://a.thumbs.redditmedia.com/iJhUw7Co_VUG4g1xwMZmoAk9tIF40bir4TWMVqiexn8.jpg',
            postType: 'link',
        },
        {
            id: '4',
            subredditIconUrl: 'https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png',
            voteCount: 100,
            subreddit: 'r/post',
            user: 'myau123',
            timestamp: new Date().toISOString(),
            isJoined: false,
            commentCount: 50,
            url: 'https://people.com/pets/the-gorilla-family-harambe-left-behind/?amp=true',
            content:
                'TIL that Harambe’s mother, only full brother, and two of his half siblings were killed when a tub of wet chlorine tablets was left by a space heater. The toxic fumes were blown into the gorilla enclosure and killed the four gorillas.',
            postType: 'link',
        },
        {
            id: '5',
            subredditIconUrl: 'https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png',
            voteCount: 100,
            subreddit: 'r/post',
            user: 'myau123',
            timestamp: new Date().toISOString(),
            isJoined: false,
            commentCount: 50,
            content: 'https://preview.redd.it/43181ffbycn51.gif?width=578&format=mp4&s=a419a19ec6d00a7686be71b1c28ee5f947ac5c45',
            title: 'Seriously... Because the Shotpost Volume Is High',
            postType: 'gif',
        },
    ];

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
                                    postType={el.postType}
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
