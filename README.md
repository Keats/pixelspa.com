# The mighty pixelspa.com

## Quick glossary
- Git: version control tool, allow you to go back to previous version and see history
- Github: service for Git in the cloud
- Zola: static site generator


## Local setup
Since Mac doesn't have a package manager, install Homebrew by following the instructions at [http://brew.sh/](http://brew.sh/).

Next we need to install Node.js, npm and Hugo.  
Open a terminal and type:

```bash
$ brew update
$ brew install git
$ brew install zola
```

To make sure you have them, type:

```bash
# should display a version number
$ zola --version
```

## Running the site locally
Open a terminal and go to the directory where the repository is.

```bash
$ zola serve
```
Site will be available at http://localhost:1111/

## Add case study
All case studies are located in `content`.
The easiest way to add a new project is to copy one of the existing folder and rename it.

There is a `index.md` file for each project that contains the metadata and the text. For example:

```
+++
title = "The Children’s Society Digital Rebranding"
description = "I designed a shiny new website for The Children’s Society, a UK charity which fights childhood poverty, harm and neglect through direct practice, policy work and campaigning."
weight = 10

[extra]
client = "Manifesto Digital / The Children’s Society"
colour = "#def9af"
list_images = ["children-list.png", "children-list@2x.png"]
tags = ["Design", "UX", "website"]
+++
```
Note that all the metadata need to be between `+++` lines.
`colour` is the background color of the header.

## Blocks
Markdown doesn't work magically for all the use case the design needs to do so I added some blocks.

### Quote
Use it like so:
```
{% quote() %}
Blabla
{% end %}
```
No option for that one.

### Pic
The most complex block. Use it like that:

```
{{ pic(src="tcs-blocks.png", src2x="tcs-blocks@2x.png", bg="#c2f0ff", caption="Study on tiles and call to actions") }}
```

This one represents all possible options, `caption` and `bg` are optional, only `src` and `src2x` are mandatory.

The `src` and `src2x` field need to refer to the filenames in the same folder as the `index.md` file.

Note: don't put double quotes (`"`) in the caption.

Recommended sizes: min 1650px width for a @2x (780px @1x)

### Bgtext
Gives a background color to the text. Use it like so:
```
{% bgtext(colour="#f5f6f4") %}
blabla
{% end %}
```

The color is mandatory and can be any valid css color (rgb, rgba, hex, etc).

## Publish
This is done automatically when you commit.