# Jai Austin - Memory Card Game

## Overview

This is my Interactive Front-End development project. My goal with this project is to create a memory game, I want it to be simple and clean using the knowledge I have learnt in this module. 
I would like to target a younger audience with the game, due to its simplicity, probably in the 5-8 year old age group. 
 
## UX

For this game I'm looking to target the age group 4-8 years old. I want to produce a simple memory card game that is easy to operate with age appropriate.

Using the following user story to make the site: "I am a child, who wants to play a game to have fun."


A link for my mock up framework [here.](https://imgur.com/w6cWtxX)

## Features

The sections on my website game are broken down into two main parts, the side menu section and the main section containing the game itself.

Side bar: 

The side bar consists on 2 seperate divs, one is just a basic title for the page. The second div is a refresh button, once the user has completted the game it can be clicked to refresh and reshuffle the board.

Main Section:

The main section holds each individual card, which there are 12 divs in total (one for each side of the card), the container is programmed through Javascript to respond to different outcomes to form the general rules of the game.

### Existing Features
- Feature 1 - Cards when not matched will automaticly turn back around.

- Feature 2 - A script has been written to avoid double clicking bugs.

- Feature 3 - When a card is matched all functions for the pair are disabled until game is reset.

- Feature 4 - Reset button on the side bar section to reset the game.

### Future Ideas / Feature Left to Implement: 

1. Add a congratulation modal to pop up at the completion of the game.

2. Add more levels with more cards on the page.

## Technologies Used

1. HTML - basic building blocks of the site.

2. CSS - Styling the sight and creating animation for  the cards.

3. Javascript - USed to set out the rules for the game, allowing certain functions to activate due to event triggers.
i.e, "when two cards match disable all classes and freeze in place".


## Testing

### Double click  anti-lock: 
When the game was first created I had an issue with the cards locking when double clicked, after tickering with a rule I tested the following to see if ti was fixed.

    1. Go to the main game page.
    2. Try to double-click a card.
    3. Card should not be locked in place when another card is wrongly matched and both will turn back over.
    
### Disable all cards while animation is active.
In order to keep the cards from being turned too quickly or overlaping each other, causing bugs, I had to create a rule that while the animation is playing the other cards in the 

    1. Go to the main game page.
    2. Try to find two unmatching cards.
    3. While the cards are animating try to click on another card.
    4. Other cards should remain inactive while animation is playing.

### Refreshing the board.

    1. Go to the main game page.
    2. Win the game by matching all pairs.
    3. click the refresh button, card board refreshes and re-shuffles.

### Devices

This website is specifically desinged for desktop webpages, though it will load on mobile screens, it is heavily advised not to play on mobile devices.


## Deployment

Here is a link to the deployed site: [Monster-Memory!](https://jai-austin95.github.io/Memory-Card-Game/)

This site is hosted using GitHub pages, deployed directly from the master branch. The live site updates automatically each time there is a new push to the repository. You can git clone the code to run it locally on your machine.


## Credits

### Media
- The photos used in this site were obtained from Shutterstock.com

- Font used was from GoogleFonts