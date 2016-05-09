+++
title = "Proppy"
client = "We Are Wizards"
colour = "#E6CFFF"
date = "2016-05-08"
tags = ["UI", "UX", "Web app"]
url = "proppy"
listimages = ["proppy-list.png", "proppy-list@2x.png"]
description = "Proppy is a must have web app for any type of freelancer or small agency that needs to send proposals to clients. Being myself the perfect target audience for this product, I had the real pleasure to work for the guys at We Are Wizards to make it happen."
+++

Proppy is the must have tool for any type of freelancer or small agency that needs to send proposals to clients.

Being myself the perfect target audience for this product, I had the real pleasure to work for the guys at We Are Wizards to make it happen.

## Existing problems

We started investigating the generic issues around creating proposals. Who does that? How and how often?

We found some common pain points:

### Creating a great proposal takes time

Winning a project requires a good investment of time and effort. Competition is very high and, although you know you are the best, the way you present yourself and your work is going to matter more than whatever you can promise. 

For this reason, it would be great to have a tool that cuts the time you spend trying to convince someone that you are amazing, time that you’d probably prefer spending doing the actual job!

### Some of the tools to make great proposals are not for everyone 

Most of the users we have interviewed would create pretty standard documents and to create more beautiful proposals they need the help of designers. What if Proppy could be easy enough to be used by anyone and still delivering the wow effect? 

### It’s hard to collaborate on the same proposal

...Unless it sits somewhere in the cloud, and even then, how can you easily separate the conversation you have with your team and the conversation you want to have with your client? 

### Keeping proposals organised

Many people send quotes to potential clients by email as well as other tools depending on how complex is the proposal. How to get all the data in ONE place? And how cool would be to get real meaningful data like Proposal Won vs Proposal Lost during the year?

## Design

We started creating a list of features that would solve the problematics above, and sorted it by priority.

### Editor

First question to ask: what would be the differences between the editorial interface and the one seen by clients?

We decided to have 3 stages, an editable proposal, a preview, and a shared proposal (the one your clients sees and can comment on):

{{< pic src="sketch03@2x.jpg" src2x="sketch03@2x.jpg" caption="Different stages of a proposal / Initial sketches" >}}

Second question to ask: What level of customisation would freelancers and companies want for their proposals? This might sound weird, but when I need to get things done I'm a real fan of small choice. That's not only because anything that requires too much decision making takes time and is a source of anxiety, but, in this case, I also have to ensure that even non-designers can create good looking proposals.

I decided to lock the editor to one style, but a freaking good one. One colour, a simple font, nothing too opinionated, and then give users the freedom to add their brand to it. And that's why we added customisable cover and logo. 

The design principle behind the editor's interface it to look as clean as possible, so that people can just focus on what they're writing rather than being distracted by other stuff.

Here is how the current version looks like:

{{< pic src="proppy-editor-clean.png" src2x="proppy-editor-clean@2x.png" caption="This is the editor" >}}

{{< pic src="proppy-editor-blocks.png" src2x="proppy-editor-blocks@2x.png" caption="This is how you create and change blocks." >}}


**What is 'Import' for?**

We also thought that it would be great to **import** in your proposal those sections that don't change so often like an About section, a Team section, or a Case Study section. How great would it be to import just those Case Studies that are relevant for a certain project?

{{< pic src="proppy-import-section.png" src2x="proppy-import-section@2x.png" caption="Import section pop-up" >}}

Once finished writing a proposal the Preview buttons shows you how it would look like from the eyes of the client.

For example:

{{< pic src="proppy-preview.png" src2x="proppy-preview@2x.png" caption="Preview" >}}


### Dashboard

We thought that quite often, proposals share a common structure and the easiest way to start a new one is by duplicating an older one. 

We also wanted a **search** that worked smartly, finding proposals by client, tags, project name etc. and talked about having **templates** and anything else that could make the process easy and effortless.

{{< pic src="sketch02@2x.jpg" src2x="sketch02@2x.jpg" caption="Initial sketches / Dashboard" >}}

{{< pic src="sketch@2x.jpg" src2x="sketch@2x.jpg" caption="Dashboard (different layout) and Create New pop up / Initial sketches" >}}

This is how the final design of the dashboard looks like:

{{< pic src="proppy-dashboard02.png" src2x="proppy-dashboard02@2x.png" caption="Dashboard design" >}}

The colours next to the titles indicate the status of the proposal and they reflect the same colours you can find in the navigation panel.

{{< pic src="proppy-menu.png" src2x="proppy-menu@2x.png" caption="Menu, active/inactive states" >}}

[Proppy] (https://app.proppy.io) is currently being heavily tested and we're constantly improving it. It doesn't have a proper brand so that's one of the things I'm going to have a look at very soon.

If you want to learn more about the technology behind Proppy, the Wizards have written [a nice post] (https://blog.wearewizards.io/how-proppy-is-made-and-its-inception) about it.





