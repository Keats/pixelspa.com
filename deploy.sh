#!/bin/bash

# Generate the website
cd pixelspa && hugo

# Generated website is in pixelspa/public directory
# Let's move that to S3
npm run publish
