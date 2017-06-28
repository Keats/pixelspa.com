+++
title = "The Sun UK homepage WYSIWYG editor"
client = "Human Made / The Sun UK"
colour = "#C2F0FF"
draft = true
date = "2016-05-01"
tags = ["UI", "UX", "CMS"]
url = "the-sun-editor"
listimages = ["sun-list.png", "sun-list@2x.png"]
description = "I joined the Wordpress gurus at Human Made and The Sun UK tech team as UX consultant and visual designer to help them design their internal content management system."
+++

I joined the Wordpress gurus at Human Made as a UX consultant and visual designer after they had been enlisted by The Sun UK tech team to design their internal content management system.

## The brief

The editors and journalists at The Sun UK needed an easy way to populate their homepage and edit the content on the go in today’s fast moving news landscape.

## Gathering requirements

In an energising, day-long workshop involving editors, product managers, designers and software engineers, we talked about what type of users would use the platform and what type of tasks would they want to accomplish.

To gather everyone’s ideas I chose the Vision Board format, which compares users, needs/goals, features and the value they bring.

{{< pic src="vision.jpg" src2x="vision@2x.jpg" caption="Vision Board" >}}

### Needs vs Features: Drag & drop or click?

Some of the editors were really keen on having a ‘drag & drop’ functionality because it’s simple and intuitive.

In this case ‘drag & drop’ is considered a feature; a way to achieve the goal of ‘moving things around easily’ but what if there were plenty of other solutions to get the same outcome? Sometimes, what seems like a good solution might not be the best one. In this scenario, a designer should always take a step back and focus on the real user goals at any given point in the process.

In this instance, drag & drop seemed unnecessary - even frustrating - as source and destination may not both be in view or in reach. Therefore, we went for simple clicks to select articles and available slots.

{{< quote >}}
Tell me what you want and I’ll tell you what you need.
{{< /quote >}}

## Sketching/Wireframing

After analysing all the materials from the workshop I started sketching some possible interfaces to create an order in my head. I then compared my understanding of this with the rest of the team.

{{< pic src="the-sun-sketches.png" src2x="the-sun-sketches@2x.png" >}}

### Editing Tools

We successively dove into more detail, starting from the article preview itself. The editors needed some tools to accomplish certain tasks, such as editing articles headlines and images — resizing them and moving articles to different slots. We needed to ascertain the best way to access those tools and the best way to display them.

After considering several different options, we opted for a small toolbar that would appear when clicking on each article block. My aim was to keep the editing interface as invisible as possible, as WYSIWYG really should be.

Testing the toolbar on the tiniest of the article blocks seems to work fine:

{{< pic src="toolbar-interaction.gif" caption="A little prototype of the toolbar" >}}

### Swapping Articles/Sections

As well as editing each article block, it was necessary to edit the page at higher level - changing article positions and moving entire sections of the page up and down.

I evaluated and prototyped different options using very simple wireframes with colorful blocks.

{{< pic src="article-blocks-prototype.png" src2x="article-blocks-prototype@2x.png" caption="Example of simple flow to move an article to a different slot" >}}

Moving A to B is a deceptively complex flow, as the interface needs to answer the following questions:

- “What article am I moving?”
- “Where can I move it to?”
- “What is it going to look like?”
- “What happens when I’ve finished swapping articles?”
- “What if I changed my mind?”

To answer those questions these notifications and visual cues play a significant role in the user experience.

{{< pic src="messages.png" src2x="messages@2x.png" caption="Notifications" >}}

## Design

Once both I and the team were happy with the overall layout, I translated my sketches into higher quality mock-ups.

### Sourcing Content

To source content for the homepage and potentially the rest of the website, we created a panel where it’s possible to search and filter the entire library of articles and images by keyword, date range and section.

From the panel you can see the latest articles, as well as the ones that are still in progress. Color coding of the bars on the left allows the user to quickly see which section each article belongs to.

{{< pic src="left-panel.png" src2x="left-panel@2x.png" caption="Articles list" >}}


### Clipboard

The clipboard acts as a temporary storage location for articles.

Editors can now play around with the homepage layout and, when they need to retrieve some of the articles they removed, they can just reimport them from the clipboard.

{{< pic src="left-panel-clipboard.png" src2x="left-panel-clipboard@2x.png" caption="Clipboard" >}}

Super useful, indeed!

These are just a handful of the features we designed; there is much more that the editorial interface is capable of, and both the engineering and product teams at Human Made & The Sun UK are working hard to build upon it.

I’m so glad I had the chance to kick-start with them this project — to create a useful system that will speed up someone’s daily tasks, as it’s something I value in my own way of working.
















