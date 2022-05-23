import './homepage.scss'
import TrendingBanner from '../../features/TrendingBanner/TrendingBanner';

const Homepage = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-container-body">
                {/* <TrendingBanner /> */}
                <div className="homepage-container-header">Popular posts</div>
            </div>
        </div>
    );
};

export default Homepage;
