import * as prismic from "@prismicio/client";
import { PRISMIC_REPOSITORY_NAME } from "~/lib/constants";

// export const client = prismic.createClient(repositoryName, {
// If your repository is private, add an access token
// accessToken: process.env.PRISMIC_ACCESS_TOKEN,
// fetch,

// This defines how you will structure URL paths in your project.
// Update the types to match the custom types in your project, and edit
// the paths to match the routing in your project.
//
// If you are not using a router in your project, you can change this
// to an empty array or remove the option entirely.
// routes: [
//   {
//     type: "homepage",
//     path: "/",
//   },
// ],
// });

export function createClient() {
  return prismic.createClient(PRISMIC_REPOSITORY_NAME, {
    // If your repository is private, add an access token
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,

    // This defines how you will structure URL paths in your project.
    // Update the types to match the custom types in your project, and edit
    // the paths to match the routing in your project.
    //
    // If you are not using a router in your project, you can change this
    // to an empty array or remove the option entirely.
    // routes: [
    //   {
    //     type: "homepage",
    //     path: "/",
    //   },
    // ],
  });
}
