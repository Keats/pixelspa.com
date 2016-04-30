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
$ cd pixelspa
$ hugo serve
```
Site will be available at http://localhost:1313/

## Add case study
TBD

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
Simply go in the folder and run:

```bash
$ npm run publish
```
