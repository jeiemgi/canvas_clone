export const lazyLoadVideos = (
  videos: NodeListOf<HTMLVideoElement>,
  onItemLoad?: Function
) => {
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
        rootMargin: "1500px",
      }
    );

    videos.forEach(function (lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
};
