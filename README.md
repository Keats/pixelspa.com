# The mighty pixelspa.com

## Quick glossary
- Git: version control tool, allow you to go back to previous version and see history
- Github: service for Git in the cloud
- AWS/S3: amazon services, think of S3 as a big hard drive where your site is
- Npm: javascript package manager, we use it for the css/publishing
- Hugo: the static site builder, transforms markdown into html, not used yet


## Local setup
Since Mac doesn't have a package manager, install Homebrew by following the instructions at [http://brew.sh/](http://brew.sh/).

Next we need to install Node.js, npm and Hugo.  
Open a terminal and type:

```bash
$ brew update
$ brew install git
$ brew install node
$ brew install hugo
```

To make sure you have them, type:

```bash
$ node -v
# should display a version number
$ npm -v
# should display a version number
$ hugo version
```

*From now on, all the commands you see needs to be execute in the folder where this README is.*

Go in this folder in the terminal and type to install the nodejs dependencies:

```bash
$ npm install
```

Now create a real-aws.json file by copying aws.json and fill the keys with the IAM user secrets.

## Running the site locally
```bash
$ hugo server
```
Site will be available at http://localhost:1313/

## Add case study
All case studies are located in `pixelspa/content/projects`.
The easiest way to add a new project is to copy one of the existing folder and rename it.

There is a `index.md` file for each project that contains the metadata and the text. For example:

```
+++
title = "The Sun UK homepage WYSIWYG editor"
client = "Human Made/The Sun UK"
colours = []
date = "2016-04-27"
tags = ["TAG", "TAG", "TAG"]
url = "sun-editor"
listimages = ["sun-list.png", "sun-list@2x.png"]
draft = true
+++
```
Note that all the metadata need to be between `+++` lines.
`colours` is unused for now, it's meant to represent the colour palette later on. `url` is what url you want the project page to be, ie it will be `http://www.pixelspa.com/sun-editor` in the example above.

## Blocks
Markdown doesn't work magically for all the use case the design needs to do so I added some blocks.

### Quote
Use it like so:
```
{{< quote >}}
Blabla
{{< /quote >}}
```
No option for that one.

### Pic
The most complex block. Use it like that:

```
{{< pic src="before.png" src2x="before@2x.png" caption="The Children’s Society website - before" > bg="#ccc"}}
```

This one represents all possible options, `caption` and `bg` are optional, only `src` and `src2x` are mandatory.

The `src` and `src2x` field need to refer to the filenames in the same folder as the `index.md` file.

Note: don't put double quotes (`"`) in the caption.

### Bgtext
Gives a background color to the text. Use it like so:
```
{{< bgtext "#f5f6f4" >}}
blabla
{{< /bgtext >}}
```

The color is mandatory and can be any valid css color (rgb, rgba, hex, etc).

## Push to github
To ensure your changes are `in the cloud`TM, you want to push them to github using git.
You can either use a gui but here's how it looks in the command line.

These commands to be executed at the root of this folder, ie `Google Drive/!PIXELSPA/pixelspa.com` for example on your iMac. Use `cd` to get there.

```bash
# Adds all the files for the commit
$ git add . 
# Replace your_message by something appropriate
$ git commit -m "your_message"
$ git push
```
After `git push`, github should be up-to-date.
If you get an error about fast-forward or something like that, try to use the GUI or ask me for more details.

## Publish
Simply type:

```bash
$ ./deploy.sh
```

Note that the whole website is cached so it can take up to a day for something to appear. We can trigger a manual invalidation at https://console.aws.amazon.com/cloudfront/home?region=us-west-2#distribution-settings:E8IXNA15B4UNR
Invalidating is more involved so i'll need to be there.
