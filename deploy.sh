#!/bin/bash

# Generate the website
hugo

# Add to git
git add -A

# Commit
git commit -m "Site updated `date`"

# Push to github
git push origin master
git subtree push --prefix=public git@github.com:WeAreWizards/pixelspa.com.git gh-pages
