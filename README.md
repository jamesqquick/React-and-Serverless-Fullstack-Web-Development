# React and Serverless - Fullstack Web Development

In this course, you will build a secure and production-ready fullstack typing application from start to finish. Along the way, you will learn core concepts of developing modern web applications like modern React, authentication and authorization, API creation with Serverless Functions, and continuous integration. By then end of this course, you will have the knowledge you need to build amazing applications to share with the world!


Here's what you will learn.

- Modern React using Hooks and the Context API
- Source Control with Git/Github
- CSS in JSS using Styled Components
- Data storage in Airtable
- Build secure applications using Auth0 and JSON Web Tokens
- Build and Deploying Serverless Functions in Netlify
- Creating a Light/Dark Mode
- Deploying to Netlify using Continuous Integration


## 1. Course Overview and Project Setup


### Course Overview and Resources

- welcome to the course
- what we will cover
- links to resources used in the class

### Create Starter React Project


- use `create-react-app` to generate starter project
- remove unnecessary boilerplate code
- create repository in Github
- connect local code to Github repo



### Add routing with React Router

- install React Router
- create page components for Home, Game, Game Over, and High Scores
- create the Navbar components

## 2. Styled Components

### Introduction to Styled Components


- what are styled components
- benefits vs downsides to styled components

### Create Base Styled Components

- create global CSS
- create utility components like `container`

## Style the Navbar

- create Styled Copmonents for Navbar


### Style the Home Page

- create Styled Components for title
- create Styled Component for Button

### Style the Game Layout

- position Heads Up Display (HUD) for score and timer
- style HUD and random character

## 3. Building core Game Functionality with React Hooks

### What and Why of React Hooks

- what are React Hooks
- why are they useful

### Create the Timer Functionality

- introduction to React Hooks
- using `setInterval` with React Hooks
- use `useEffect` to start timer

### Track User Keypress Input

- add event listener for `keyup`
- unregistering event listeners in `useEffect`


### Track User's Score During Game

- use `useState` to track and update user's score as they play the game
- update user's score based on keyboard input

## 4. Using the Context API to Share State Between Copmonents


### Introduction to React Context

- what is React Context
- why it's useful/why we need it

### Track User's Score Between Components

- store user's score in a `ScoreContext` after completing a game
- display user's score in Game Over page


## 5. Setup Airtable for Storing High Scores

### Introduction to Airtable

- sign up
- what is Airtable
- why we are using it  here

### Airtable Workspace and API

- create a workspace and base (link an excel doc)
- explore the Airtable API with postman

## 6. Serverless Functions to Interact with Airtable

### Introduction to Serverless Functions

- what are serverless functions
- why we are using them here

### Serverless Function for Retrieving High Scores From Airtable

- create new GET endpoint
- implement endpoint for retrieving high scores Airtable
- store API credential in environment variables

### Create Serverless Function for Checking if Score is in the Top 10

- create new GET endpoint
- implement logic to determine whether a score is in the top 10


### Create Serverless Function for Saving High Score

- create new POST endpoint
- implement functionality for saving a score to Airtable

## 7. Adding Authentication with Auth0

### Introduction to Authentication/Authorization and Auth0
- why do we need authentication/authorization
- what is Auth0 and how does it help

### Sign Up and Create Tenant in Auth0
- sign up for free account
- create tenant and application for our project

### Implement Authentication in React with Auth0

- create React Hook to interact with Auth0 for authentication
- implement login/logout functionality

### Require Username in Account Registration

- make username a required field when registering with Auth0
- what is an Identity Token
- display username in navbar

## 8. Add Authentication to Serverless Function for Saving Score

### Include Access Token in Save Score Requests

- what is an Access Token
- configure Auth0 Client to retrieve Access Token
- update Fetch request to include Access Token

### What Are JSON Web Tokens

- what are JSON Web Tokens
- when are they used and why

### Retrieve and Validate Access Token

- create API application in Auth0
- configure Serverless Function to work with Access Tokens from Auth0
- parse and validate Access Token before saving score

## 9. Create Light/Dark Mode with Context API and Hooks

### Define Dark and Light Theme

- create dark and light theme objects that we will swap between

### Create Theme Context

- create React Context for tracking the user's theme
- add ability to save user's theme in local storage
- create useTheme Hook for accessing them in components

### Toggle Theme 

- add toggle theme button to Navbar
- update them on button press

## 10. Hosting in Netlify

### Create Deployment Configurations

- add Netlify.toml configuration file
- add `prod` script in package.json

### Creat and Deploy Your Netlify Site

- create new website in Netlify
- connect to our Github repo

### Wrap Up

- course summary and what we accomplished
- next steps and ideas for additional features

