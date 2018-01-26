# github-corner-generator

This is based off of Tim Holan's [github-corners](https://github.com/tholman/github-corners) 
repo. I liked the design but it seemed tedious to implement on every page,
especially if you change repo URLs or want to change the colors.

This is another ~~uneccessary~~ really neat dependency for your site that generates the
github-corners programmatically and references a single location for it. Mainly
intended to be used for static site generators, it has minimal dependencies.
Integration with more templating libraries coming soon.

This also allows you to take advantage of caching, I may want to add the plain old
black and white SVG to some sort of CDN at some point, but we'll see.

## Todo

- Make the project
- Make a more comprehensive todo
- Once [this PR](https://github.com/tholman/github-corners/pull/34) is merged, change the SVG files.