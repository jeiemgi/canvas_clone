import type { VideoProps } from "react-html-props";
import { forwardRef } from "react";

interface Props extends VideoProps {
  lazy?: boolean;
  playable?: boolean;
  square?: boolean;
}

const Video = forwardRef<HTMLVideoElement, Props>(
  (
    {
      lazy = true,
      autoPlay,
      className,
      playable = false,
      square = false,
      poster,
      src,
      ...props
    },
    ref
  ) => {
    const extraProps: VideoProps = autoPlay
      ? { autoPlay: true, muted: true, loop: true, playsInline: true }
      : {};

    if (lazy)
      return (
        <video
          ref={ref}
          poster={poster}
          className={className}
          {...extraProps}
          {...props}
        >
          <source data-src={src} type="video/mp4" />
        </video>
      );

    return (
      <video
        ref={ref}
        src={src}
        poster={poster}
        className={className}
        {...extraProps}
        {...props}
      />
    );
  }
);

export default Video;
