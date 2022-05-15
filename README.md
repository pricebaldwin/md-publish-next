> :warning:️ **This project is pre-alpha! Docs may not be accurate and features may not work!**

This project is a way to publish any collection of linked markdown notes (such as you might get from using [Obsidian.md](https://obsidian.md) as a static website.

The project comes with a single theme and a basic set of needed components, but keeps the ability to add more themes and components, so you others can easily build their own for people to use.

The site is built using [Next.js](https://nextjs.org/), and docs can be found [here](https://nextjs.org/docs/).

## How It Works
The site will build a graph of your markdown files from any directory you specify. The graph accepts all linked markdown files, and makes those files available as pages.

## Routing
Because the pages are built from the markdown files, the site will use the file name as the page's URL. However, you can also specify a custom URL for each page by adding a `url` property to the markdown file's front matter.

## Permalinks
The project can give each page a permalink, which is a URL that won't change if even if the title of the page changes. However, to do this, the project needs to be able to write back to your note files, and will add frontmatter to the note files to specify the permalink. This way, even if you move the file, the permalink will still be the same the next time you publish, and the site will route accordingly.

## Project Goals
- [ ] Be able to take an Obsidian.md collection and publish it as a static website.
- [ ] Be able to add themes and components to the project.

### TODO Features
- [ ] Auto-permalinks
