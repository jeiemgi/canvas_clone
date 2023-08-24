import { useEffect } from "react";
import { useLocation } from "@remix-run/react";

const useVideoLazyLoad = (onItemLoad?: Function) => {
  const location = useLocation();

  useEffect(() => {
    const videos = document.querySelectorAll("video");
    if ("IntersectionObserver" in window) {
      let lazyVideoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((video) => {
            if (video.isIntersecting) {
              console.log("loading", video.target.children[0]);
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
          rootMargin: "500px",
        }
      );

      videos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  }, [location]);
};

export default useVideoLazyLoad;
