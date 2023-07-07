import clsx from "clsx";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "~/lib/prismicClient";
import { Video } from "~/components/Video";
import WorkProjectHero from "~/slices/WorkProject/WorkProjectHero";
import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.project) throw new Response("Not Found", { status: 404 });

  const client = createClient();
  const page = await client.getByUID("project_page", params.project);

  if (!page.data) {
    throw new Response("Not Found", { status: 404 });
  }

  const {
    background_image,
    capabilities,
    cta,
    links,
    reel,
    reel_cover,
    roles,
    title,
  } = page.data;

  return json({
    hero: {
      background_image,
      capabilities,
      cta,
      links,
      reel,
      reel_cover,
      roles,
      title,
    },
    slices: page.data.body,
  });
};

function WorkProject() {
  const { slices } = useLoaderData<typeof loader>();

  return (
    <>
      <WorkProjectHero />
      {slices.map((item, index) => {
        let containerClassNames = "";
        let contentClassNames = "";

        switch (item.slice_type) {
          case "project_full_width":
            return (
              <img
                className={"w-full select-none object-cover"}
                key={`WorkProjectSlice-${index}`}
                alt={item.primary.background.alt || ""}
                src={item.primary.background.url || ""}
              />
            );
          case "project_2_column":
            const leftIsVideo = !!item.primary.left_video.url;
            const rightIsVideo = !!item.primary.right_video.url;

            return (
              <div className={"md:flex"} key={`WorkProjectSlice-${index}`}>
                {/* RIGHT MEDIA */}
                {leftIsVideo ? (
                  <div className={"w-full bg-red md:w-1/2"}>
                    <Video autoPlay src={item.primary.left_video.url} />
                  </div>
                ) : (
                  <img
                    className={"w-full select-none md:w-1/2"}
                    alt={item.primary.left_image.url || ""}
                    src={item.primary.left_image.url || ""}
                  />
                )}

                {/* RIGHT MEDIA */}
                {rightIsVideo ? (
                  <div className={"w-full bg-red md:w-1/2"}>
                    <Video autoPlay src={item.primary.right_video.url} />
                  </div>
                ) : (
                  <img
                    className={"w-full select-none md:w-1/2"}
                    alt={item.primary.right_image.url || ""}
                    src={item.primary.right_image.url || ""}
                  />
                )}
              </div>
            );
          case "project_plate_-_videocolor":
            containerClassNames = item.primary.square
              ? "md:min-h-screen"
              : "md:aspect-video";

            contentClassNames = item.primary.square
              ? "md:col-span-6 md:col-start-4"
              : "md:col-span-8 md:col-start-3";

            return (
              <div
                key={`WorkProjectSlice-${index}`}
                className={clsx(
                  "md:grid-container items-center md:aspect-video",
                  containerClassNames
                )}
                style={{
                  backgroundColor: item.primary.background_color || "#fff000",
                }}
              >
                <div className={contentClassNames}>
                  <Video
                    autoPlay
                    square={item.primary.square}
                    src={item.primary.video.url}
                  />
                </div>
              </div>
            );
          case "project_plate_-_videophoto":
            containerClassNames = item.primary.square
              ? "md:min-h-screen"
              : "md:aspect-video";

            contentClassNames = item.primary.square
              ? "md:col-span-6 md:col-start-4"
              : "md:col-span-8 md:col-start-3";

            return (
              <div
                key={`WorkProjectSlice-${index}`}
                className={clsx(
                  "md:grid-container items-center bg-cover bg-center bg-no-repeat",
                  containerClassNames
                )}
                style={{
                  backgroundImage: `url(${item.primary.image.url})` || "",
                }}
              >
                <div className={contentClassNames}>
                  <Video
                    autoPlay
                    square={item.primary.square}
                    src={item.primary.video.url}
                  />
                </div>
              </div>
            );
          case "projectplate_-_picturecolor":
            return (
              <div className={"md:grid-container"}>
                <div
                  className={
                    "flex items-center md:col-span-8 md:col-start-3 md:min-h-screen"
                  }
                  style={{
                    backgroundColor: item.primary.background_color || "white",
                  }}
                >
                  <img
                    className={"w-full select-none"}
                    alt={item.primary.image.url || ""}
                    src={item.primary.image.url || ""}
                  />
                </div>
              </div>
            );
          default:
            return <span>Unknown Slice Type {item.slice_type}</span>;
        }
      })}
    </>
  );
}

export default WorkProject;
