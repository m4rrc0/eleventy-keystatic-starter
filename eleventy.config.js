import pluginMarkdoc from "@m4rrc0/eleventy-plugin-markdoc";

/**
 * @typedef { import("@11ty/eleventy").UserConfig } UserConfig
 */
export const config = {
  dir: {
    input: "content",
    includes: "",
    output: "dist", // TODO: should it output to public on build?
  },
  templateFormats: ["md", "njk", "html", "11ty.js"],
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
};

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginMarkdoc);
}
