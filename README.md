# Evanston Climate Fund Web App - GPT Prototype

## Summary

# What the code is doing

Editable text box that renders Markdown text as HTML
Save and Cancel buttons used for editing text

### Structure and function

src/App.jsx: Main app component
src/components/EditableTextBox.jsx: Editable text box component that uses showdown and npm package thats converts markup to HTML.
src/index.css: Tailwind CSS configuration

### My ChatGPT Prompt:
```
The Evanston Climate Fund project is made to allow administrators from various cities to create and customize their own climate fund pages. I use React, Tailwind, and Vite to create this webpage. Can we make a frontend mockup of the web app. 

Make each text box a component that's editable similar to a basic CMS. Admin users  should be able to hover over the text block and click to edit it, replace text, then press save/cancel. We want the text boxes be edited with markup, but after saving being rendered to HTML with the rpm showdown package. Start by creating our web app with site. Tell me the commands to get app running with tailwind.
```

### Questions 

#### Does the code work? If not, what's broken?

Yes, the code works very well.

#### How is the code better than what the team currently has?

This code has a cancel button which makes the UI easier to use compared to our current implementation. We will add this later on.

#### How is the code worse?

The prototype only allows editing of the current text block and does not support adding new text blocks. Also lacks a backend to save changes persistently if the browser tab closes.

This prototype only allows for editing current text block and save/canceling such edits; however, it lacks support for adding new text blocks and it doesn't have a backend component like Firebase to save changes if, for instance, the browser is closed.

#### How many tries did it take to get the code? Main struggles?

It only took me one try, and I had no struggles at all since GPT-4o gave accurate, functional code on the first try.

#### Overall impression of the experience

This experience was easy since GPT-4o showed that it was a very useful model for quick prototyping and generating code that works to demo certain ideas, which is what I personally believe GPT-4o is best used for.
