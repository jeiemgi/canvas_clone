import clsx from "clsx";
import { useRef } from "react";
import type { VideoProps } from "react-html-props";

interface Props extends VideoProps {
  playable?: boolean;
  square?: boolean;
  containerClassName?: string;
}

const isVideoPlaying = (video: HTMLVideoElement | null) => {
  return video
    ? video.currentTime > 0 &&
        !video.paused &&
        !video.ended &&
        video.readyState > 2
    : false;
};

function Video({
  className,
  containerClassName,
  playable = false,
  square = false,
  src,
  ...props
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <div
      className={clsx(
        "relative bg-black",
        square ? "aspect-square" : "aspect-video",
        containerClassName
      )}
    >
      {!src ?? (
        <div className={"absolute flex h-full w-full items-center"}>
          <h1 className={"heading--3 text-white"}>VIDEO PLACEHOLDER</h1>
        </div>
      )}
      <video
        onClick={async () => {
          if (!playable) return;
          const isPlaying = isVideoPlaying(ref.current);
          if (isPlaying) ref.current?.pause();
          else await ref.current?.play();
        }}
        ref={ref}
        src={src}
        {...props}
        className={clsx(
          "object-cover",
          playable ?? "cursor-pointer",
          className
        )}
      />
    </div>
  );
}

export default Video;
