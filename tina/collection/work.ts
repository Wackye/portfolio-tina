import type { Collection } from "tinacms";

const Work: Collection = {
  label: "Works",
  name: "work",
  path: "content/works",
  format: "mdx",
  ui: {
    router: ({ document }) => {                  
      return `/posts/${document._sys.breadcrumbs.join("/")}`;
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
  ],
};

export default Work;
