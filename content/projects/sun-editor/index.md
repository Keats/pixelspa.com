+++
title = "The Sun UK homepage WYSIWYG editor"
client = "Human Made / The Sun UK"
colour = "#C2F0FF"
date = "2016-05-01"
tags = ["UX", "Interface", "Wordpress"]
url = "the-sun-editor"
listimages = ["sun-list.png", "sun-list@2x.png"]
+++

I joined the Wordpress gurus at Human Made and The Sun UK tech team as UX consultant and visual designer to help them redesign their internal content management system.

Editors and journalists at The Sun UK that daily update the content of the homepage, needed an easy way to populate the page and edit the content on the go.  

## Gathering requirements

In a day-long energising workshop that involved editors, product managers, designers and software engineers, we talked about what type of users would use the platform and what type of tasks would they want to accomplish.

To gather everyone’s ideas I’ve chosen the Vision Board format, that compares users, needs/goals, features and the value they bring:

{{< pic src="vision.png" src2x="vision@2x.png" caption="Vision Board" >}}

### Needs, Goals and Features

Some of the editors were really keen in having a ‘drag and drop’ functionality. Reason being as expected: *‘Because that way it’s easy to move things around’*.

In this case ‘drag and drop’ it’s considered a feature, a way to achieve a goal. The goal of ‘moving things around easily’. What if there were plenty of other solutions to get the same outcome? 

That’s why designers should always take a step back and question what the real user goals are before taking any suggestions. Sometimes what seems a good solution might not be the best.

{{< quote >}}
Tell me what you want and I’ll tell you what you need.
{{< /quote >}}

## Sketching/Wireframing

After having analysed all the materials from the workshop I started sketching some possible interfaces to make some order in my head and compare my understanding with the rest of the team.

{{< pic src="the-sun-sketches.png" src2x="the-sun-sketches@2x.png" >}}

### Editing Tools

Successively we decided to dive into more detail starting from the article preview itself. It was clear that the editors needed a specific set of tools to accomplish certain tasks like: edit articles headlines and images, resize them, move articles to different slots. How to access those tools and what the best way to display them? 

After considering different options we opted for a small toolbar that would appear when clicking on each article block. My aim was to keep the editing interface as invisible as possible, as WYSIWYG should be.

Testing the toolbar on the tiniest of the article blocks seems to work fine:

{{< pic src="toolbar-interaction.gif" caption="A little prototype of the toolbar" >}}

### Swap Articles/Sections

As well as editing each article block, it was necessary to edit the page at higher level: change article position and move entire sections of the page up and down.

I evaluated and prototyped different options using very simple wireframes with colorful blocks.

{{< pic src="article-blocks-prototype@2x.png" caption="Example of simple flow to move an article to a different slot" >}}

Moving A to B it’s a pretty simple flow part from the fact that it’s not. The interface needs to answer questions like “What article am I moving?”, “Where can I move it to?”, “ How is it going to look like?”, “What happens when I’ve finished swapping articles?”, “What if I changed my mind?”

To answer those questions, notifications and visual cues play a significant role.

{{< pic src="messages.png" src2x="messages@2x.png" caption="Notifications" >}}

### Sourcing Content

To source content for the homepage and potentially the rest of the website we created a panel where it's possible to search and filter the library of articles and images by keyword, date range and Section.

From the panel you can see what the latest articles are and which one are still in progress. Color coding for the bars on the left allow to see at glance the section the articles belong to.

{{< pic src="left-panel.png" src2x="left-panel@2x.png" caption="Notifications" >}}


### Clipboard

The clipboard is a temporary storage for articles.

Editors can now play around with the homepage layout and, when they need to retrieve some of the articles they removed, they can just reimport them from the clipboard.

Useful, indeed!






























