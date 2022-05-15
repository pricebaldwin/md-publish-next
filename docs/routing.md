Routing follows the structure of your markdown, starting from the root directory.

That means that if you have a directory structure like this:

```
- docs
  - routing.md
  - advanced
    - advanced.md
```
`https://{yourdomain}/routing` will be a valid URL.

`https://{yourdomain}/advanced/advanced` will be a valid URL.

**Only markdown files are supported!**

## Related
- https://nextjs.org/docs/routing