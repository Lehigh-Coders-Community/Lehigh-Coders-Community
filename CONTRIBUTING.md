# Contributing

We want everyone to get involved with this!

If you just want to modify content, check out the [content](./content) folder. Each root folder (like pages or activities) represents a collection type. By adding [Markdown](https://www.markdownguide.org/) (.md) or [MDX](https://mdxjs.com/) (.mdx) files, you can automatically create new pages and set the content of the website. No coding experience necessary!

If you'd like to change the overall structure or style of the site, you'll need to get familiar with [Gatsby](https://www.gatsbyjs.com/). If you've used React before, this will be easy! Gatsby is just a flavor of React that compiles down to (mostly) static files at build time. During the build process, it pulls data directly from a variety of sources using GraphQL. In our case, we use GraphQL to query the file system directly, pulling in data from the [content](./content) and rendering it into React components.

## Submitting Changes

Once you've made your changes in your own branch or fork, just submit a pull request. Another member will review your changes and merge them into our `main` branch.