type GifPostProps = {
    content: string;
};

const GifPost = (props: GifPostProps) => {
    const { content } = props;

    return (
        <video height="426" loop={true} width="578" muted={true} autoPlay={true}>
            <source src={content} type="video/mp4" />
        </video>
    );
};

export default GifPost;
