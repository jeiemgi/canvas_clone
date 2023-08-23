import clsx from "clsx";
import { useRef } from "react";
import type { VideoProps } from "react-html-props";

interface Props extends VideoProps {
  playable?: boolean;
  square?: boolean;
}

// const isVideoPlaying = (video: HTMLVideoElement | null) => {
//   return video
//     ? video.currentTime > 0 &&
//         !video.paused &&
//         !video.ended &&
//         video.readyState > 2
//     : false;
// };

function Video({
  autoPlay,
  className,
  playable = false,
  square = false,
  src,
  ...props
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  const extraProps: VideoProps = autoPlay
    ? { autoPlay: true, playsInline: true, muted: true, loop: true }
    : {};

  return (
    <video
      // onClick={async () => {
      //   if (!playable) return;
      //   const isPlaying = isVideoPlaying(ref.current);
      //   if (isPlaying) ref.current?.pause();
      //   else await ref.current?.play();
      // }}
      ref={ref}
      src={src}
      preload={"none"}
      {...props}
      {...extraProps}
      className={clsx(playable ?? "cursor-pointer", className)}
    />
  );
}

export default Video;
