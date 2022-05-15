> :warning:️ **This project is pre-alpha! Docs may not be accurate and features (or everything) may not work!**

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
- [ ] "Zero config setup". Be able to point at any collection of .md files with wikilinks or markdown links, and publish it as a static website.
- [ ] Be able to add themes and components to the project.

### Non-Goals
(Note: In all cases, non-goals are "for now". Goals can change. Mostly this is a list of things that I don't want to get distracted by.)

#### MDX-in-Markdown
It's very tempting to try to bring notes into some kind of MDX context, since we're already using a system that understands MDX. However, this raises a lot of complexity. **This project is only interested in displaying notes as they are, not in enabling non-markdown features.**

### Maybe Goals?
- Plugins
- Graph visualization

### TODO
- [ ] Auto-permalinks
- [ ] Snazzy name
- [ ] Handle knowing what note to use as "home"
- [x] Handle note structure for routing (2022-05-15)
- [ ] 404 handling
- [ ] Error handling
- [ ] "Andy's Mode"

## History and Motivations
This project is a result of me wanting a way to quickly publish vaults of notes, which I had been collecting in Obsidian.

Obsidian itself has a service to do this! https://obsidian.md/publish is a great service, and I recommend it as a quick setup for those using Obsidian. But I needed something I could publish privately for work purposes, and Obsidian Publish doesn't support that. Beyond that, I also had/have ideas for other customizations that I wanted to make, but I wasn't confident that Obsidian Publish would support those kinds of ideas, so I gave in and made my this project

There is also something to be said, of course, for hosting something yourself. And, of course, it's cheaper (in money, if not in time)!