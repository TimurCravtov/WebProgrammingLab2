import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,
  clientId: "840d13f1-f9d5-4f14-be21-261999f07836",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "pictures",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "heroName",
            label: "Hero Name",
          },
          {
            type: "string",
            name: "heroTagline",
            label: "Hero Tagline",
          },
          {
            type: "string",
            name: "heroDescription",
            label: "Hero Description",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "ctaText",
            label: "CTA Button Text",
          },
          {
            type: "string",
            name: "ctaLink",
            label: "CTA Link URL",
          },
          {
            type: "string",
            name: "gallerySectionTitle",
            label: "Gallery Section Title",
          },
          {
            type: "string",
            name: "gallerySectionSubtitle",
            label: "Gallery Section Subtitle",
          },
          {
            type: "object",
            name: "gallery",
            label: "Gallery Paintings",
            list: true,
            fields: [
              { type: "image", name: "src", label: "Image" },
              { type: "string", name: "alt", label: "Alt Text" },
              { type: "string", name: "paintingTitle", label: "Painting Title" },
              { type: "string", name: "medium", label: "Medium" },
            ],
          },
          {
            type: "string",
            name: "reviewsSectionTitle",
            label: "Reviews Section Title",
          },
          {
            type: "object",
            name: "reviews",
            label: "Reviews",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Reviewer Name" },
              {
                type: "string",
                name: "text",
                label: "Review Text",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "string",
            name: "contactSectionTitle",
            label: "Contact Section Title",
          },
          {
            type: "string",
            name: "contactDescription",
            label: "Contact Description",
          },
          {
            type: "object",
            name: "socialLinks",
            label: "Social Links",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "url", label: "URL" },
              { type: "image", name: "icon", label: "Icon URL" },
            ],
          },
          {
            type: "string",
            name: "mascotMessage",
            label: "Mascot Hover Message",
          },
        ],
      },
    ],
  },
});
