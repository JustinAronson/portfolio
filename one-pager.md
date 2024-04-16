## Overview / Background

Recruiters and interviewers often do not have time to carefully review Github or LinkedIn profiles. I must develop a succinct portfolio website to attract recruiter attention and demonstrate my coding experience to interviewers.
I used next js for this project with app routing. I also took advantage of sendgrid for email contact handling.

## Problem Statement:

There are a few problems to keep track of with this project. Users may be sensitive to light. We need to store user preference for dark or light themes throughout their time on the application so that we do not flash a bright light at the user. Users need an intuitive way to contact me. I must implement an easy-to-use contact form that can reach me through email.

## Layout:

I only had one layout, the root layout, which applies to all pages in the project. This layout contains two components:
### Navbar:

This component should be visible on every page of the website. As such, I decided to place this component into the root layout. The navbar is pretty simple - it contains links to each of the pages in the website, as well as Github and LinkedIn links. I made the external links open in another tab (or window, depending on the user’s browser preferences) so that users are able to easily view both websites at the same time. I also excluded the navbar from the darkmode themes because it does not take up too much space on the screen (so no bright light issue) and I found that light themed links were more readable than the dark themed links. Finally, the navbar is sticky so it is always accessible.
### Darkmode Button:

This component is the darkmode trigger button on the bottom of the page. The darkmode component sets the isDark property for the Darkmode context. Darkmode affects every component in the website (aside from navbar), so I decided to store its value in a React context. Contexts act similarly to global variables, so I can access it in every CSR component. To make sure I can access the preference, I wrapped the entire page in the Darkmode provider.
Like the navbar, I made the button sticky so that it will remain on the same spot in the screen regardless of where the user scrolls.

## Pages

I separated the website into pages based on the topic being presented to the user.
### Home

This is the landing page for the website. I wanted to present the most important information on this page, since it will be the first thing recruiters see. I separated this into components based on screens. This was helpful for me during the development process because I had all the relevant div information in a single file.
#### Components:

IntroPortrait: 
 
This one is super simple: It is just a portrait with a text explanation of myself and my goals. I put in my internship search so that recruiters will be easily able to frame how they should view my portfolio. I also added a small bouncing arrow to the bottom of the screen to indicate that there is more content if you scroll down.

TechnologyView:
 
I wanted to create a modular technology view - I want to be able to add more technologies in the future, without having to edit this component. As such, I load in the technologies from a separate constants file, which houses an array of technology icons. I simply need to add an icon’s path to this array to add a technology in the future. I load the icons by mapping over this array and creating a div for each one. In the future, I might add links for each of these divs to bring you to the technology’s landing page (more obscure technologies may be difficult to identify based on the icon)
For animation details, see the challenges section below.

### Projects

This page displays all of the personal projects I have worked on, both inside and outside of school.

#### Components:
Project View:
This component is mostly just housing for the project list and detailed view components. It has a state variable which stores the project the detailed view should cover. This variable is updated by the project list component and passed to the detailed view component. I decided to make a separate component for the project list and detailed view because they function independently - nothing in the project list view is related to the detailed view except for the project selection.

Project list:
This component takes an array of project information as a parameter. I decided to have project list take an array of projects as a parameter instead of simply retrieving from the constants file itself in case I change how I load project details. It seems better to handle this through dependency injection rather than coupling the project list to the constants loading mechanism. We simply map through the array and create buttons that update the detailed project state variable for each project.

Detailed view:
This component is simply a view for the selected project. I currently have an image, title, and description for each project. In the future, I would add github links and perhaps host demos to better showcase the projects.

### Contact

This page is very simple: just a single component that has a form. The form will send the message to my email through Sendgrid. I followed this tutorial to set up Sendgrid’s API (not the form itself, just the API) https://www.freecodecamp.org/news/how-to-build-a-working-contact-form-with-sendgrid-and-next-js/. The API information is in app/api/sendgrid/routes.js.

## Design approach

I used CSR for this project because I had a focus on user interaction. If I were to spend more time on the website, I would separate out the aspects of the code that are necessary for client side rendering from those that can be rendered on the server side. For example, I would create tailwind class information in client side component wrappers (this needs to be CSR because of darkmode themes), and pass those class names as parameters into server side components for the actual rendering.

## Challenges I encountered:
Animations:
I had some challenges with animating the technology icons. Originally, I had them animate on page load. However, as you can imagine a user wouldn’t be able to see the animations when they booted up the page because it starts in the scrolled-up view. Thus, I decided to use the next js inview component, which gives a property describing whether the divs are visible on screen. This allowed me to play the animations only when the divs are scrolled up. I used the threshold property of inview to play the animation when the div is completely on screen, rather than starting the animation when the div is first scrolled to.

Tailwind:
As I usually find in web development, about 90% of my time was spent struggling with CSS. I took this opportunity to learn Tailwind, which I hope will carry over into future projects. Perhaps I could also use AI tooling to speed this process in the future. I saw github copilot is free for students now 🤔.
