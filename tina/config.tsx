import { defineConfig } from "tinacms";

import Post from "./collection/post";
import Global from "./collection/global";
import Author from "./collection/author";
import Page from "./collection/page";

const config = defineConfig({

  //// remote version config start
  clientId: "929ab886-f81d-4dfa-9bf6-23e5acf02139",
  branch:
    "main", // Netlify branch env
  token: "69f67292c342edced3444fcb822ca3a16da59771", 
  //// remote version config end

  //// local version config start
  // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  // branch:
  //   process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
  //   process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
  //   process.env.HEAD!, // Netlify branch env
  // token: process.env.TINA_TOKEN!,
  //// local version config end

  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [Page, Post, Author, Global],
  },
});

export default config;
