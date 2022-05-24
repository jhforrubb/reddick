import { Box } from '@chakra-ui/react'
import TrendingBanner from '../../features/TrendingBanner/TrendingBanner';
import MainLayout from '../../layouts/MainLayout';
import Post from '../../features/Post/Post'

const Homepage = () => {
    return (
        <Box pt="50px" height="100vh">
            <TrendingBanner />
            <MainLayout primaryView={<div><Post subredditIconUrl="https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png" voteCount={100} subreddit={"r/post"} user={"myau123"} timestamp={new Date().toISOString()} isJoined={false} title={"Better Call Saul S06E07 - [Mid-Season Finale] Plan and Execution - Post-Episode Discussion Thread"} commentCount={50} /> </div>} secondaryView={<div>SECONDARY CONTAINER</div>} />
        </Box>
    );
};

export default Homepage;
