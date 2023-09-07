export const loadLazyVideo = (video: HTMLVideoElement, onLoad?: Function) => {
  for (let source in video.children) {
    let videoSource = video.children[source];
    if (videoSource.tagName === "SOURCE") {
      // @ts-ignore
      videoSource.src = videoSource.dataset.src;
    }
  }
  if (onLoad) onLoad();
};

export const lazyLoadVideos = (
  videos: Array<HTMLVideoElement>,
  onItemLoad?: Function
) => {
  console.log(videos);
  if ("IntersectionObserver" in window) {
    let lazyVideoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((video) => {
          if (video.isIntersecting) {
            for (let source in video.target.children) {
              let videoSource = video.target.children[source];
              if (videoSource.tagName === "SOURCE") {
                // @ts-ignore
                videoSource.src = videoSource.dataset.src;
              }
            }
            // @ts-ignore
            video.target.load();
            lazyVideoObserver.unobserve(video.target);
            if (onItemLoad) onItemLoad();
          }
        });
      },
      {
        threshold: 0,
      }
    );

    videos.forEach(function (lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
};

export default lazyLoadVideos;
