import './trending-banner.scss';

type TrendingCardProps = {
    title: string,
    subtitle: string,
    sub?: string,
    imgUrl?: string,
}

const TrendingCard = (props: TrendingCardProps) => {
    const { title, subtitle, sub, imgUrl } = props;

    return (
        <div className="trending-card-root">
            <img alt={imgUrl} src={imgUrl} />

            <div className="trending-card-info">
                <div className="trending-card-title">{title}</div>
                <div className="trending-card-subtitle">{subtitle}</div>
                <div className="trending-card-sub">{sub}</div>
            </div>
        </div>
    )
}

export default TrendingCard