import { useState, useRef, useEffect } from 'react';
import { Box, Icon, HStack, Text, Fade, Slider, SliderTrack, SliderFilledTrack, Tooltip } from '@chakra-ui/react';
import moment from 'moment';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SettingsIcon from '@mui/icons-material/Settings';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import StopIcon from '@mui/icons-material/Stop';

type VideoPostProps = {
    content: string,
}

const VideoPost = (props: VideoPostProps) => {
    const { content } = props;
    const videoPlayerRef = useRef<HTMLDivElement>(null!);
    const videoEl = useRef<HTMLVideoElement>(null!);
    const previewEl = useRef<HTMLVideoElement>(null!);
    const sliderEl = useRef<HTMLDivElement>(null!);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [videoPlayTime, setVideoPlayTime] = useState<number>(0);
    const [isUtilShown, setIsUtilShown] = useState<boolean>(false);
    const [isVideoTipShown, setIsVideoTipShown] = useState<boolean>(false);
    const [videoTipPos, setVideoTipPos] = useState<number>(0);

    useEffect(() => {
        if (isPlaying) {
            videoEl.current.play();
        } else {
            videoEl.current.pause();
        }
    }, [isPlaying])

    return (
        <Box
            as="div"
            maxH="340px"
            minH="340px"
            minW="100%"
            position="relative"
            ref={videoPlayerRef}
            onMouseEnter={() => setIsUtilShown(true)}
            onMouseLeave={() => setIsUtilShown(false)}
        >
            <video
                ref={videoEl}
                muted={true}
                preload="auto"
                style={styles.videoStyles}
                onClick={() => setIsPlaying(prevState => !prevState)}
                onTimeUpdate={(event) => setVideoPlayTime(event.currentTarget.currentTime)}
            >
                <source src={content} type="video/mp4" />
            </video>
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
                display={isPlaying ? "none" : "block"}
            />
            <Fade in={isUtilShown}>
                <HStack
                    position="absolute"
                    bottom="0"
                    w="100%"
                    p="20px"
                >
                    <Icon
                        as={ReadMoreIcon}
                        {...styles.iconStyles}
                        onClick={() => console.log("it should take user into the post")}
                    />
                    <Icon
                        as={isPlaying ? StopIcon : PlayArrowIcon}
                        {...styles.iconStyles}
                        onClick={() => setIsPlaying(prevState => !prevState)}
                    />
                    <Text {...styles.timestampStyles}>{moment.utc(videoPlayTime * 1000).format("mm:ss")}</Text>

                    <Slider
                        colorScheme='blue'
                        size='md'
                        value={(videoPlayTime / videoEl.current?.duration) * 100 ? (videoPlayTime / videoEl.current?.duration) * 100 : 0}
                        min={0}
                        max={100}
                        borderRadius="4px"
                        onChange={(value) => videoEl.current.currentTime = (value / 100 * videoEl.current?.duration)}
                        onMouseEnter={() => setIsVideoTipShown(true)}
                        onMouseLeave={() => setIsVideoTipShown(false)}
                        onMouseMove={(event) => {
                            previewEl.current.currentTime = ((event.nativeEvent.offsetX / sliderEl.current?.clientWidth) * 100) / 100 * videoEl.current?.duration
                            setVideoTipPos(event.nativeEvent.offsetX)
                        }}
                    >
                        <SliderTrack ref={sliderEl}>
                            <SliderFilledTrack />
                        </SliderTrack>
                    </Slider>

                    <div style={{ left: videoTipPos + 72.5, display: isVideoTipShown ? "flex" : "none", ...styles.videoTipStyles }}>
                        <video
                            ref={previewEl}
                            muted={true}
                            preload="auto"
                        >
                            <source src={content} type="video/mp4" />
                        </video>
                        <div style={{ ...styles.videoTipTextStyles }}>{moment.utc(previewEl.current?.currentTime * 1000).format("mm:ss")}</div>
                    </div>

                    <Text {...styles.timestampStyles}>{moment.utc(videoEl.current?.duration * 1000).format("mm:ss")}</Text>
                    <Icon
                        as={SettingsIcon}
                        {...styles.iconStyles}
                        onClick={() => console.log("it should open video quality")}
                    />
                    <Icon
                        as={document.fullscreenElement ? ZoomInMapIcon : ZoomOutMapIcon}
                        {...styles.iconStyles}
                        onClick={() => document.fullscreenElement ? document.exitFullscreen() : videoPlayerRef.current.requestFullscreen()}
                    />
                </HStack>
            </Fade>
        </Box >
    )
}

const styles = {
    iconStyles: {
        w: "20px",
        h: "20px",
        mx: "5px",
        cursor: "pointer",
        color: "#FFFFFF"
    },
    timestampStyles: {
        color: "#FFFFFF",
        fontSize: "12px",
    },
    videoStyles: {
        backgroundColor: "#000000",
        width: "100%",
        height: "100%",
        position: "absolute",
        cursor: "pointer"
    } as React.CSSProperties,
    videoTipStyles: {
        width: "100px",
        height: "50px",
        position: "absolute",
        bottom: "60px",
        flexDirection: "column",
        alignItems: "center",
        pointerEvents: "none",
    } as React.CSSProperties,
    videoTipTextStyles: {
        color: "#FFFFFF",
        fontSize: "12px",
        backgroundColor: "grey",
        padding: "2.5px",
    } as React.CSSProperties
}

export default VideoPost