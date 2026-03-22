import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || "",
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
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "boolean", name: "enabled", label: "Enable Section" },
              { type: "string", name: "heroName", label: "Hero Name" },
              { type: "string", name: "heroTagline", label: "Hero Tagline" },
              {
                type: "string",
                name: "heroDescription",
                label: "Hero Description",
                ui: { component: "textarea" },
              },
              { type: "string", name: "ctaText", label: "CTA Button Text" },
              { type: "string", name: "ctaLink", label: "CTA Link URL" },
            ],
          },
          {
            type: "object",
            name: "gallery",
            label: "Gallery Section",
            fields: [
              { type: "boolean", name: "enabled", label: "Enable Section" },
              { type: "string", name: "title", label: "Section Title" },
              { type: "string", name: "subtitle", label: "Section Subtitle" },
              {
                type: "object",
                name: "items",
                label: "Gallery Paintings",
                list: true,
                fields: [
                  { type: "image", name: "src", label: "Image" },
                  { type: "string", name: "alt", label: "Alt Text" },
                  { type: "string", name: "paintingTitle", label: "Painting Title" },
                  { type: "string", name: "medium", label: "Medium" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "reviews",
            label: "Reviews Section",
            fields: [
              { type: "boolean", name: "enabled", label: "Enable Section" },
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "object",
                name: "items",
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
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Section",
            fields: [
              { type: "boolean", name: "enabled", label: "Enable Section" },
              { type: "string", name: "title", label: "Section Title" },
              { type: "string", name: "description", label: "Description" },
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
            ],
          },
          {
            type: "object",
            name: "mascot",
            label: "Mascot Widget",
            fields: [
              { type: "boolean", name: "enabled", label: "Enable Mascot" },
              { type: "string", name: "message", label: "Hover Message" },
            ],
          },
        ],
      },
    ],
  },
});