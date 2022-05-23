import './trending-banner.scss';
import TrendingCard from './TrendingCard';

const sampleJson = [
    { id: 0, title: "Premier League", subtitle: "[Official] Manchester City are the 2021/22 Premier League Champions", sub: "r/soccer and more" },
    { id: 1, title: "Baby Formula", subtitle: "Jen Psaki Says Biden Administration Providing Migrant Infants Baby Formula amid Shortage Is 'Morally Right'", sub: "r/politics and more" },
    { id: 2, title: "Max Verstappen", subtitle: "Max Verstappen wins the 2022 Spanish Grand Prix", sub: "r/formula1 and more" },
    { id: 3, title: "Ukraine", subtitle: "Zelensky says Russia has blocked Ukraine from exporting 22M tons of food products", sub: "" },
]


const TrendingBanner = () => {
    return (
        <div className="trending-banner-root">
            <div className="trending-banner-header">Trending Today</div>
            <div className="trending-banner-slide">
                {sampleJson.map(el => <TrendingCard key={el.id} title={el.title} subtitle={el.subtitle} sub={el.sub} />)}
            </div>
        </div>
    )
}

export default TrendingBanner