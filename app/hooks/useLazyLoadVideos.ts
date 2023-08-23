import { useEffect } from "react";

const useVideoLazyLoad = () => {
  useEffect(() => {
    let lazyVideos = [].slice.call(document.querySelectorAll("video"));

    if ("IntersectionObserver" in window) {
      let lazyVideoObserver = new IntersectionObserver((entries) => {
        entries.forEach(function (video) {
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
          }
        });
      });

      lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  }, []);
};

export default useVideoLazyLoad;
