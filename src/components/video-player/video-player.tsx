import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  posterImage: string;
  videoLink: string;
  isPlaying: boolean;
}

function VideoPlayer({posterImage, videoLink, isPlaying}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if(videoRef.current === null) {
      return;
    }
    if (isPlaying) {
      videoRef.current.play();
      return;
    }
    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video src={videoLink} ref={videoRef} poster={posterImage} width="285" height='175'autoPlay={isPlaying} muted/>
  );
}

export default VideoPlayer;
