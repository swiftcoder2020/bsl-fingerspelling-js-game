<div>
   <img src="https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png" style="margin: 0; padding-right: 15px;">
   <img src="assets/images/learning-people-logo.png" style="margin: 0; padding-left: 15px; width: auto; height: 88px;">
</div>

# JavaScript Educational Game:- British Sign Language Fingerspelling
*Constructed as part of Code Institute's Milestone 2 Project: Interactive Front-End Development module*

## Table of Contents

1. [Overview](#overview)
2. [User Experience Design (UXD)](#user-experience-design-uxd)
   1. [Project Goals](#project-goals)
   2. [Strategy](#strategy)
   3. [Scope](#scope)
      - [User Stories](#user-stories)
      - [Features](#features)
   4. [Structure](#)
      - [Interaction Design (IXD)](#)
      - [Information Architecture](#)
   5. [Skeleton](#)
      - [Wireframing the website](#)
   6. [Surface](#)
      - [Colour palette](#)
3. [Features](#)
4. [Technologies Utilised](#)
5. [Project bugs and solutions](#)
6. [Testing](#)
7. [Deployment](#)
8. [Credits](#)

# Overview

On approach to the second milestone project, which derives on the learning experience of exploring 
through the fundamentals of JavaScript and the Interactive Front-End Development module, the focus has 
progressively transitioned from a static site to one that will become interactive that allows visitors to 
actively engage with data. It also completes what's known as the 'trinity of web development' whereby 
this forms the basis of front-end development that concerns itself with data as presented through 
components such as HTML, CSS & the addition of JavaScript. The core attention of this project however, is 
to construct an interactive front-end website that responds to user's actions which revolves around a 
sense of engagement.

# User Experience Design

## Project Goals

The sole purpose into this website is one that originated through a discussion with a tutor who had 
expressed an interest in a subject that relates to oneself and was requesting some resources into it 
which lead to an identifiable moment of inspiration into a conceptual idea of a project that focuses on 
an interactive front-end website. This was established as a window of opportunity into the goal of the 
second project, which is to develop a memory matching game that is educational to the users, specifically 
aiming to raise awareness of British Sign Language (abbreviated as BSL). This in my view was an excellent 
idea to utilise the functionality & capability of the JavaScript language that would enable users either 
with a vested interest or as a new interest into a hobby to practise and improve on their fingerspelling 
skills.

## Strategy

The construction into this website serves as a purpose of demonstrating the knowledge and skills obtained 
within the programming language of JavaScript and providing new/returning users the key to an open door 
as an introduction, that is akin to the Code Institute's 5 day coding challenge, into the community of 
the deaf society such as how they communicate with to one another. The value in this project would be the 
hope to influence a positive impact towards this community, especially and yet significantly more so 
under the current times of the pandemic whereby it encourages potential users to use the quality of being 
considerate and thoughtful in helpfulness by engaging to communicate with them to break through the social 
barriers or assisting them in their difficulties.

Also research was undertaken to establish if such a game exists which will form the basis of this project 
and it was with luck that one has been developed through a separate website.

To summarise the website project's goals:

* To demonstrate the implementation of acquiring a new skill in JavaScript whilst supplementing the 
experience of HTML & CSS to the design & development of the project
* To provide an interactive educational game to target interested users with the objective of achieving 
in acquiring the knowledge and in addition the ability to fingerspell or action in motion the alphabet in 
BSL
* To construct a game that elicits a positive user experience in a way that it encourages new/returning 
visitors to continue the learning experience in an engaging way that is resourceful to them

## Scope

### User Stories

* As a user, I want to be able to easily understand the sole purpose of the website and comprehend the 
rationale into why it has been built and developed
* As a user, I want to be assured that the website overall and its content can be viewed clearly on a 
range of devices
* As a user, I expect to be given instructions as guidance into the rules which is easily understood as 
to how the game is to be played and the learning outcome of it
* As a user, I want to comfortably be allowed to commence the game when I am prepared and it is suitably 
convenient to proceed
* As a user, I expect to see a clear image depicting a sign that represents a letter in sequence to form 
a word and have the ability to duplicate the sign
* As a user, I expect to be provided with a resourceful content that would assist me when there is a 
moment of doubt that can easily be referred to
* As a user, I want the game to determine whether my thought was correct or incorrect
* As a user, I expect the game to provide a way to restart it subsequent to the current play mode upon 
of it ending
* As a user, I would like to be able to visually view my score in the current game to gain confidence in 
the ability to learn so that I can demonstrate it by motion
* As a user, I would like to access any further resources that would progress or advance my learning, 
should I wish to dedicate a commitment in making a difference within a community
* As a user, I expect to be able to access contact details into the owner of the website, should I wish 
to reach out by raising queries, commend the game by providing feedback
* As a user, I would like to explore any other projects that the developer has constructed

### Features

The features which I envisage to incorporate into project are as follows:

* An introductory heading section that delves into the purpose of the website
* A BSL Fingerspelling game that will be interactively engaging
* Instructions that clearly defines into the usage of how the game is to be played
* Various high quality images that depicts a sign into an alphabetic letter 
* The ability to flash <!--increases & decreases in size so that the image is still visible--> each image 
to form a sequence into a word
* The ability where users can select their appropriate speed level of how slow/fast the images flashes
* A start button to activate the play
* A timer that is based on each word that a user is given as opposed to the whole time allocated to 
complete the game
* An interactive event that determines whether a letter or word is incorrect when typed in
* A replay button that allows users to review the letters that has been displayed
* A positive/encouraging message when a letter or word is correct or not
* An small area that calculates the score per word which builds up to the total score
* An overview message into the progress of their learning and to provide positive encouragement

These items are above are determined in the below table:

| Item | Description                      | Importance | Viability | Score |
| ---- | -------------------------------- | ---------- | --------- | ----- |
| 1.   | Introductory heading section     | 3          | 5         | 8     |
| 2.   | Interactive & engaging BSL game  | 5          | 4         | 9     |
| 3.   | Defining the instructions        | 4          | 5         | 9     |
| 4.   | Obtaining high quality images    | 5          | 5         | 10    |
| 5.   | Flash the letter signs as images | 5          | 3         | 8     |
| 6.   | Construct speed level            | 3          | 4         | 7     |
| 7.   | Construct a start button         | 4          | 5         | 9     |
| 8.   | Create a timer per word          | 5          | 3         | 9     |
| 9.   | Approve typed letter/word        | 5          | 4         | 9     |
| 10.  | Construct a replay button        | 5          | 3         | 8     |
| 11.  | Encouragement message            | 4          | 5         | 9     |
| 12.  | Construct game score             | 3          | 4         | 7     |
| 13.  | Concluding game message          | 4          | 4         | 8     |



<!-- Testing - this will be more complex according to Igor as functionality will require testing as well 
as display and responsiveness -->