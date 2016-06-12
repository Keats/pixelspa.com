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

Proppy is a tool for freelancers and small agencies needing to send proposals to clients. I had the real pleasure of working with the guys at We Are Wizards to bring the project to life, helping them recognise the issues they needed to address, as well as designing the interface and a temporary brand.

## FINDING THE PROBLEM(S)

In order to work out the most important factors for Proppy to consider, I worked closely with the team to investigate the common issues around creating proposals:

- 'Who does that?'
- 'How do they do it?'
- 'How often do they do it?'

We discovered the following recurring problems:

### 1) Creating a great proposal takes time

Winning a project requires a huge amount of time and effort. Competition is always high and although you’re confident that you have the best proposal on offer, the way in which you present yourself and your work matters the same or more than the actual work you’re pitching. 

Therefore, a tool that cuts the time spent trying to convince someone that you’re amazing — time that you’d prefer to spend doing the actual job — would be essential to freelancers and small businesses.

### 2) Some of the tools to make great proposals are not for everyone 

Most of the users I interviewed would create fairly standard documents to send externally. To create better looking proposals, they usually need the help of designer. But what if Proppy was easy enough for anyone to use while still delivering visual impact? Proppy’s key idea was to allow people to deliver the wow effect, without the traditional skills required.

### 3) It’s hard to collaborate on the same proposal…

…unless it sits somewhere in the cloud. Even then, how can you easily separate the conversations you have internally with your team, and the discussions you have with your client?

### 4) Keeping proposals organised

Many people send quotes to potential clients by email, and use other tools depending on how complex is the proposal. I wanted to figure a solution to get all of this data in one place. I also started thinking how cool and useful it would be to access meaningful data like ‘Proposals Won/Proposals Lost’ during any given year. This would allow people to analyse their performances to improve for future work.

## The design

I created a list of features that would solve one or more of the problems above, and sorted them by priority.

### 1) Editor

First question:

***‘What are the differences between the editorial interface and the one seen by clients?’***

I decided on three key stages: 

- An editable proposal
- A preview
- A shared proposal (the one your client sees and can comment on)

{{< pic src="sketch03@2x.jpg" src2x="sketch03@2x.jpg" caption="Different stages of a proposal / Initial sketches" >}}

Second question:

***‘What level of customisation would freelancers and companies want for their proposals?’***

This might sound weird, but when I need to get things done I'm a real fan of small choice. That's not only because anything that requires too much decision making takes time and is a source of anxiety, but, in this case, I also have to ensure that even non-designers can create good looking proposals.

I decided to lock the editor to one style, but a freaking good one. One colour, a simple font, nothing too opinionated, and then give users the freedom to add their brand to it. And that's why we added customisable cover and logo. 

The design principle behind the editor's interface it to look as clean as possible, so that people can just focus on what they're writing rather than being distracted by other stuff.

Here is how the current version looks like:

{{< pic src="proppy-editor-clean.png" src2x="proppy-editor-clean@2x.png" caption="This is the editor" >}}

{{< pic src="proppy-editor-blocks.png" src2x="proppy-editor-blocks@2x.png" caption="This is how you create and change blocks." >}}

**What is 'Import' for?**

Quite early on, I considered an import function for proposals; parts that don’t change so often, like an About section, a Team section, or a Case Study section. How great would it be to be able to quickly and easily import only the Case Studies relevant to a certain project?

{{< pic src="proppy-import-section.png" src2x="proppy-import-section@2x.png" caption="Import section pop-up" >}}

After finishing work on a proposal, you can preview the whole document to see it through the eyes of the client.

For example:

{{< pic src="proppy-preview.png" src2x="proppy-preview@2x.png" caption="Preview" >}}


### Dashboard

I realised that proposals often share common structures and that when starting a new one, people often ***duplicate*** an old one before changing the contents.

I also wanted a search function that was smart and effortless to use, capable of filtering proposals by client, tags, project name etc. I experimented with templates and anything else that could make the process as easy and seamless as possible.


{{< pic src="sketch02@2x.jpg" src2x="sketch02@2x.jpg" caption="Initial sketches / Dashboard" >}}

{{< pic src="sketch@2x.jpg" src2x="sketch@2x.jpg" caption="Dashboard (different layout) and Create New pop up / Initial sketches" >}}

This is the final dashboard design:

{{< pic src="proppy-dashboard02.png" src2x="proppy-dashboard02@2x.png" caption="Dashboard design" >}}

The colours next to the proposal titles indicate its status and are coordinated with the colours found in the navigation panel.

{{< pic src="proppy-menu.png" src2x="proppy-menu@2x.png" caption="Menu, active/inactive states" >}}

[Proppy] (https://app.proppy.io) is currently undergoing a heavy series of tests, and therefore we’re constantly improving it. It doesn’t yet have a finalised brand image, which is something I will be working on very soon.

If you want to learn more about the technology behind Proppy, the Wizards have written [a fantastic post] (https://blog.wearewizards.io/how-proppy-is-made-and-its-inception) about it that tells you all you need to know.