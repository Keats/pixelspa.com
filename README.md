# The mighty pixelspa.com

## Local setup
Since Mac doesn't have a package manager, install Homebrew by following the instructions at [http://brew.sh/](http://brew.sh/).

Next we need to install Node.js, npm and Hugo.  
Open a terminal and type:

```bash
$ brew update
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

Go in this folder in the terminal and type:

```bash
$ npm install
```

Now create a real-aws.json file by copying aws.json and fill it with the right values.
Region is already filled to the one in Ireland
