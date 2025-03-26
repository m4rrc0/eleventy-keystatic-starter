# Keystatic with Eleventy

This is a Work in progress! Any input would be much appreciated.

## Context

Keystatic is a Git-based CMS only compatible with Astro, NextJS and Remix. I want to use it with Eleventy. So I am running both Astro and Eleventy side by side.  
My goal is to keep the Astro footprint as minimal as possible while still allowing me to edit content with Keystatic. I hope to remove Astro from the equation eventually but I know nothing about SSR with Eleventy except for the retired [Eleventy Serverless plugin](https://v2.11ty.dev/docs/plugins/serverless/).

## Ressources

- [Keystatic Deploy Test](https://github.com/m4rrc0/keystatic-deploy-test/) repository
- [Eleventy blog example with Markdoc integration](https://github.com/m4rrc0/eleventy-base-blog-markdoc)

## Status

This is mostly working but the developer experience is hell.

### Commands

```bash
npm start # start both Eleventy and Astro on different ports currently
npm run build # build both Eleventy and Astro -> Set your environment variables for compatibility with your preferred hosting provider and Keystatic git mode
```

There is a way to get both on the same port during development but it is a bit messy.

1. Run `npm run pre-watch:netlify` then stop the process (with `Ctrl+C` or `cmd + c` I guess)
2. Run `npm run watch:netlify`.

I know there must be a way to handle this better but I could not figure it out. Don't hesitate to open an issue to discuss it.

### Deployments

See the [Keystatic Deploy Test](https://github.com/m4rrc0/keystatic-deploy-test/) repository for deployment instructions relative to Keystatic.  
Eleventy's side should take care of itself.
