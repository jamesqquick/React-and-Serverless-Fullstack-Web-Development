# React and Serverless - Fullstack Web Development

> Tired of building Todo apps? Want to know what it's like to build a real-world application from start to finish?

In this course, you will build a secure and production-ready fullstack typing application from start to finish. Along the way, you will learn core concepts of developing modern web applications like modern React, authentication and authorization, API creation with Serverless Functions, and continuous integration. By then end of this course, you will have the knowledge you need to build amazing applications to share with the world!

Here's what you will learn.

-   Modern React including Hooks and the Context API
-   Source Control with Git/Github
-   CSS in JSS using Styled Components
-   Store Data using the Airtable API
-   Secure applications using JSON Web Tokens
-   Build and Deploy Serverless Functions in Netlify
-   Create a Light/Dark Mode
-   Deploy to Netlify using Continuous Integration

## 1. Course Overview and Project Setup

### 1.1 Course Overview and Resources

-   welcome to the course
-   what we will cover
-   links to resources used in the class

### 1.2 Create Starter React Project

-   use `create-react-app` to generate starter project
-   remove unnecessary boilerplate code
-   create repository in Github
-   connect local code to Github repo

### 1.3 Add routing with React Router

-   install React Router
-   create page components for Home, Game, Game Over, and High Scores

### 1.4 Create the Navbar

-   create the Navbar component

## 2. Styled Components

### 2.1 Introduction to Styled Components

-   what are styled components
-   benefits vs downsides to styled components

### 2.2 Create Base Styled Components

-   create global CSS
-   create Main and Container components

### 2.3 Style the Navbar

-   create Styled Copmonents for Navbar
-   create StyledLink component
-   create Accent component

### 2.4 Style the Home Page

-   create Styled Components for title
-   create Styled Component for CTA

### 2.5 Style the Game Layout

-   position Heads Up Display (HUD) for score and timer
-   style HUD and random character
-   add bold styled in global styled

## 3. Game Functionality with React Hooks

### 3.1 Introduction to React Hooks

-   what are React Hooks
-   why are they useful

### 3.2 Track Score with Your First React Hook

-   use `useState` to track the user's score
-   use `setInterval` to tsimulate increase in score

### 3.3 Create Timer Functionality

-   use `useEffect` to start timer
-   use `setInterval` inside of `useEffect`
-   add the logic to update timer
-   navigate to GameOver page when timer expires

### 3.4 Track User Input on Keypress

-   add event listener for `keyup`
-   unregistering event listeners in `useEffect`

### 3.5 Update User Score Based on Input

-   use `useState` to track and update user's score as they play the game
-   update user's score based on keyboard input
-   display random character

## 4. React Context API to Share State Between Copmonents

### 4.1 Introduction to React Context

-   what is React Context
-   why it's useful/why we need it

### 4.2 Track User's Score Between Components

-   store user's score in a `ScoreContext` after completing a game
-   display user's score in Game Over page
-   prevent users from navigating directly to Game Over page

## 5. Airtable API and Setup

### 5.1 Introduction to Airtable

-   sign up
-   what is Airtable
-   why we are using it here

### 5.2 Airtable Workspace and API

-   create a workspace and base (link an excel doc)
-   explore the Airtable API with postman

## 6. Netlify and Serverless Functions

### 6.1 Introduction to Serverless Functions

-   what are serverless functions
-   why we are using them here

## 6.2 Netlify Init and Setup

-   create a new website in Netlify connected to your repository
-   create local netlify.toml file for configuration
-   explore the netlify dashboard

### 6.3 Creating Your First Serverless Function

-   install `netlify dev` to run site and functions locally
-   create Hello World GET endpoint
-   connect local code to site in Netlify

Helpful tools - json viewer in Chrome

### 6.4 Retrieving High Scores From Airtable

-   create new GET endpoint
-   implement endpoint for retrieving high scores Airtable

Resources

-   https://flaviocopes.com/airtable/

### 6.5 Setup Environment Variables

-   use `dotenv` package to store private credentials
-   store Airtable credentials in environment variables

### 6.6 Display High Scores in High Scores Page

-   create fetch Data hook
-   call serverless function for high score data

### 6.7 Create Save High Score Serverless Function

-   create new POST endpoint
-   implement functionality for saving a score to Airtable

Helpful tools - postman

### 6.8 Refactoring Common Airtable Code

-   create an Airtable utils file to share code from

### 6.9 Save High Score on Game Over

-   attempt to save the user's high score when the game is finished
-   display message for whether or not the user got a high score

### 6.10 Game Over Bug Fix and Extra Styling

## 7. Add Authentication with Auth0

### 7.1 Introduction to Authentication/Authorization and Auth0

-   why do we need authentication/authorization
-   what is Auth0 and how does it help

### 7.2 Sign Up and Create Tenant in Auth0

-   sign up for free account
-   create tenant and application for our project

### 7.3 Add Authentication in React with Auth0

-   create React Hook to interact with Auth0 for authentication
-   implement login/logout functionality
-   create ButtonLink component

### 7.4 Require Username in Sign Up

-   make username a required field when registering with Auth0
-   what is an Identity Token
-   display username in navbar (where to put it)

## 8. Add Security Serverless Functions

### 8.1 What Are JSON Web Tokens

-   what are JSON Web Tokens
-   when are they used and why

### 8.2 What Are Access Tokens

### 8.3 Include Access Token in Save Score Requests

-   what is an Access Token
-   configure Auth0 Client to retrieve Access Token
-   update Fetch request to include Access Token
-   create API application in Auth0

### 8.4 Retrieve and Parse Access Token

-   parse Access Token in save high score serverless function

### 8.5 Validate Access Token

-   use jwks-rsa and jsonwebtoken packages to validate access Token

## 9. Create Light/Dark Mode with Context API and Hooks

### 9.1 Intro to Theming

-   https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

### 9.2 Define CSS Variables for Theming

-   create css variables for background color, text color, and accent

### 9.3 Use Theme Provider From Styled Components

-   create dark and light theme objects that we will swap between
-   pass theme to ThemeProvider
-   update CSS Variables based on theme

### 9.4 Create Use Theme Hook

-   create React Context for tracking the user's theme
-   add toggle theme button to Navbar
-   update them on button press

### 9.5 Persist Theme Choice in Local Storage

-   add ability to save user's theme in local storage

## 10. Final Touches

### 10.1 Styling and Cleanup

-   create button link and linkButton
-   create loader styled component

### 10.2 Final Hosting Configurations for Netlify

-   environment variables
-   auth0 callback urls

## 11. Wrap Up

### 11.1 What Next

-   next steps and ideas for additional features

### 11.2 Wrap Up

-   course summary and what we accomplished
