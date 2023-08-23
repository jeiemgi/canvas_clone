import type { VideoProps } from "react-html-props";

interface Props extends VideoProps {
  playable?: boolean;
  square?: boolean;
}

function Video({
  autoPlay,
  className,
  playable = false,
  square = false,
  poster,
  src,
  ...props
}: Props) {
  const extraProps: VideoProps = autoPlay
    ? { autoPlay: true, muted: true, loop: true, playsInline: true }
    : {};

  return (
    <video poster={poster} className={className} {...extraProps} {...props}>
      <source data-src={src} type="video/mp4" />
    </video>
  );
}

export default Video;
