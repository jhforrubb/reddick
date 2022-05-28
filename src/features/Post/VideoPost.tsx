import { useState, useRef, useEffect, useCallback, MouseEvent } from 'react';
import { Box, Icon, HStack, Text, Fade, CircularProgress } from '@chakra-ui/react';
import moment from 'moment';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SettingsIcon from '@mui/icons-material/Settings';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import StopIcon from '@mui/icons-material/Stop';

type VideoPostProps = {
    content: string;
};

const VideoPost = (props: VideoPostProps) => {
    const { content } = props;
    const videoContainerEl = useRef<HTMLDivElement>(null);
    const videoEl = useRef<HTMLVideoElement>(null);
    const videoSeekerEl = useRef<HTMLDivElement>(null);
    const videoPreviewContainerEl = useRef<HTMLDivElement>(null);
    const videoPreviewEl = useRef<HTMLImageElement>(null);
    const videoPreviewTimestampEl = useRef<HTMLDivElement>(null);
    const videoHiddenEl = useRef<HTMLVideoElement>(null);
    const videoSliderEl = useRef<HTMLDivElement>(null);
    const videoBufferEl = useRef<HTMLDivElement>(null);

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [videoPlayTime, setVideoPlayTime] = useState<number>(0);
    const [isUtilShown, setIsUtilShown] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getTimestampStr = (sec: number) => {
        return `${moment.utc(sec * 1000).format('mm:ss')}`;
    };

    const handleVideoSliderMouseMove = (event: MouseEvent) => {
        const video = videoEl.current!;
        const videoPreviewCont = videoPreviewContainerEl.current;
        const videoPreview = videoPreviewEl.current;
        const videoSeeker = videoSeekerEl.current;
        const videoSlider = videoSliderEl.current;
        const videoPreviewTS = videoPreviewTimestampEl.current;
        const videoHidden = videoHiddenEl.current;

        if (!videoPreviewCont || !videoSeeker || !videoSlider || !videoPreviewTS || !videoPreview || !videoHidden) return;

        // controls of the grey bar that follows user's cursor
        videoSeeker.style.width = `${(event.nativeEvent.offsetX / videoSlider.clientWidth) * 100}%`;

        // controls the position of video snapshot that follows user's cursor
        videoPreviewCont.style.left = `${event.nativeEvent.offsetX + 72.5}px`;

        // controls the timestamp when mouse hover over progres bar
        videoPreviewTS.textContent = getTimestampStr((event.nativeEvent.offsetX / videoSlider.clientWidth) * video.duration);

        // TODO: SHOULD CREATE THUMBNAILS FROM SERVER
        // controls the current frame of video videoPreviewCont -> videoPreview
        // let frameTimestamp = (event.nativeEvent.offsetX / videoSlider.clientWidth) * video.duration;
        // if (frameTimestamp < 0) {
        //     frameTimestamp = 0;
        // }

        // videoHidden.currentTime = frameTimestamp;
        // const canvas = document.createElement('canvas');
        // canvas.width = 90
        // canvas.height = 40
        // const cContext = canvas.getContext('2d');
        // cContext?.drawImage(videoHidden, 0, 0, 90, 40);
        // videoPreview.src = canvas.toDataURL()
    };

    const handleVideoSliderMouseDown = (event: MouseEvent) => {
        const video = videoEl.current;
        const videoSlider = videoSliderEl.current;
        if (!videoSlider || !video) return;
        // update the progress bar when user selects new position of the video
        video.currentTime = (event.nativeEvent.offsetX / videoSlider.clientWidth) * video.duration;
    };

    const handleVideoSliderMouseLeave = () => {
        const videoSeeker = videoSeekerEl.current;
        const videoPreviewCont = videoPreviewContainerEl.current;
        if (!videoSeeker || !videoPreviewCont) return;
        // disappear the video preview after mouse has left the progress bar
        videoSeeker.style.width = '0%';
        videoPreviewCont.style.display = 'none';
    };

    const handleVideoSliderMouseEnter = () => {
        const videoPreviewCont = videoPreviewContainerEl.current;
        const videoPreview = videoPreviewEl.current;
        if (!videoPreviewCont || !videoPreview) return;
        // appear the video preview after mouse has entered the progress bar
        videoPreviewCont.style.display = 'flex';
        // remove preview snapshot
        videoPreview.src = '';
    };

    const handleVideoLoadedData = () => {
        setIsLoading(false);
    };

    const handleVideoProgress = () => {
        const video = videoEl.current;
        const videoBuffer = videoBufferEl.current;
        if (!video || !videoBuffer) return;
        const timeRange = video.buffered;
        const end = timeRange.end(timeRange.length - 1);
        // end - latest buffering time of the video
        videoBuffer.style.width = `${(end / video.duration) * 100}%`;
    };

    const getVideoPlayTimeInPercentage = () => {
        const video = videoEl.current;
        if (!video) return;
        return `${(videoPlayTime / video.duration) * 100}%`;
    };

    const getVideoLengthInTimestamp = () => {
        const video = videoEl.current;
        if (!video) return;
        return moment.utc(video.duration * 1000).format('mm:ss');
    };

    const handleToggleFullscreenVideo = () => {
        const videoCont = videoContainerEl.current;
        if (!videoCont) return;

        if (document.fullscreenElement) {
            document.exitFullscreen();
            return;
        }

        videoCont.requestFullscreen();
    };

    const handleVideoPlay = useCallback(() => {
        const video = videoEl.current;
        if (!video) return;

        if (isPlaying) {
            video.play();
            return;
        }

        video.pause();
    }, [isPlaying]);

    useEffect(() => {
        handleVideoPlay();
    }, [handleVideoPlay, isPlaying]);

    return (
        <Box
            as="div"
            maxH="340px"
            minH="340px"
            minW="100%"
            position="relative"
            ref={videoContainerEl}
            onMouseEnter={() => setIsUtilShown(true)}
            onMouseLeave={() => setIsUtilShown(false)}
        >
            <video
                ref={videoEl}
                muted={true}
                preload="auto"
                style={styles.videoStyles}
                onClick={() => setIsPlaying((prevState) => !prevState)}
                onTimeUpdate={(event) => setVideoPlayTime(event.currentTarget.currentTime)}
                onLoadedData={handleVideoLoadedData}
                onProgress={handleVideoProgress}
            >
                <source src={content} type="video/mp4" />
            </video>

            {isLoading ? (
                <CircularProgress
                    isIndeterminate
                    position="absolute"
                    w="50px"
                    h="50px"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                />
            ) : (
                <Icon
                    as={PlayArrowIcon}
                    position="absolute"
                    w="50px"
                    h="50px"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    cursor="pointer"
                    color="#FFFFFF"
                    onClick={() => setIsPlaying(true)}
                    display={isPlaying ? 'none' : 'block'}
                />
            )}

            <Fade in={true}>
                <HStack position="absolute" bottom="0" w="100%" p="20px">
                    <Icon as={ReadMoreIcon} {...styles.iconStyles} onClick={() => console.log('it should take user into the post')} />
                    <Icon
                        as={isPlaying ? StopIcon : PlayArrowIcon}
                        {...styles.iconStyles}
                        onClick={() => setIsPlaying((prevState) => !prevState)}
                    />
                    <Text {...styles.timestampStyles}>{getTimestampStr(videoPlayTime)}</Text>

                    {/* Video Progress Bar*/}
                    <Box
                        ref={videoSliderEl}
                        borderRadius="4px"
                        w="inherit"
                        h="5px"
                        position="relative"
                        cursor="pointer"
                        onMouseEnter={handleVideoSliderMouseEnter}
                        onMouseLeave={handleVideoSliderMouseLeave}
                        onMouseMove={handleVideoSliderMouseMove}
                        onMouseDown={handleVideoSliderMouseDown}
                    >
                        {/* Video Play Time Bar*/}
                        <Box
                            position="absolute"
                            bgColor="#0079d3"
                            borderRadius="inherit"
                            h="inherit"
                            zIndex="4"
                            style={{ width: getVideoPlayTimeInPercentage() }}
                        />
                        {/* Video Total Length Bar*/}
                        <Box position="absolute" bgColor="#FFFFFF" zIndex="1" borderRadius="inherit" h="inherit" opacity={0.2} w="100%" />
                        {/* Video User-Seek Bar*/}
                        <Box
                            ref={videoSeekerEl}
                            position="absolute"
                            zIndex="3"
                            bgColor="#FFFFFF"
                            borderRadius="inherit"
                            h="inherit"
                            opacity={0.5}
                        />
                        {/* Video Buffer Bar*/}
                        <Box
                            ref={videoBufferEl}
                            position="absolute"
                            bgColor="#FFFFFF"
                            zIndex="2"
                            borderRadius="inherit"
                            h="inherit"
                            opacity={0.7}
                        />
                    </Box>

                    {/* <Box
                        ref={videoPreviewContainerEl}
                        display="none"
                        position="absolute"
                        w="100px"
                        h="50px"
                        bottom="60px"
                        flexDir="column"
                        alignItems="center"
                        pointerEvents="none"
                        border="1px solid red"
                    >
                        <img ref={videoPreviewEl} alt={`${content} snapshot preview`} />
                        <Box ref={videoPreviewTimestampEl}></Box>
                    </Box> */}
                    <Text {...styles.timestampStyles}>{getVideoLengthInTimestamp()}</Text>
                    <Icon as={SettingsIcon} {...styles.iconStyles} onClick={() => console.log('it should open video quality')} />
                    <Icon
                        as={document.fullscreenElement ? ZoomInMapIcon : ZoomOutMapIcon}
                        {...styles.iconStyles}
                        onClick={handleToggleFullscreenVideo}
                    />
                </HStack>
            </Fade>
            {/* <video ref={videoHiddenEl} muted={true} preload="auto" style={{ display: 'none' }} crossOrigin="anonymous" src={content} /> */}
        </Box>
    );
};

const styles = {
    iconStyles: {
        w: '20px',
        h: '20px',
        mx: '5px',
        cursor: 'pointer',
        color: '#FFFFFF',
    },
    timestampStyles: {
        color: '#FFFFFF',
        fontSize: '12px',
    },
    videoStyles: {
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
        position: 'absolute',
    } as React.CSSProperties,
    videoTipStyles: {
        width: '100px',
        height: '50px',
        position: 'absolute',
        bottom: '60px',
        flexDirection: 'column',
        alignItems: 'center',
        pointerEvents: 'none',
    } as React.CSSProperties,
    videoTipTextStyles: {
        color: '#FFFFFF',
        fontSize: '12px',
        backgroundColor: 'grey',
        padding: '2.5px',
    } as React.CSSProperties,
};

export default VideoPost;
