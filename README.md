# EmployWise Assignment

## Overview
This React-based frontend application integrates with the Reqres API to perform basic user management functions, including authentication, listing users, editing user details, and deleting users. It follows the requirements outlined in the assignment and is built with React, React Router, and Axios.

## Features
Level 1: Authentication ScreenA login screen where users authenticate using credentials.
Uses the following API endpoint for authentication:
1. POST /api/login with email and password in the request body.
Sample credentials:
Email: eve.holt@reqres.in
Password: cityslicka
On successful login, stores the token and navigates to the Users List page.

Level 2: List All UsersDisplays a paginated list of users fetched from the Reqres API.
2. API used: GET /api/users?page=1
Shows the user's first name, last name, and avatar in a card-based layout.
Implements pagination for easy navigation through different pages of users.

Level 3: Edit, Delete, and Update UsersEdit User:
Clicking "Edit" opens a form pre-filled with user data.
Users can update the first name, last name, and email.
3. Uses API endpoint: PUT /api/users/{id}

Delete User:
Clicking "Delete" removes the user from the list.
4. Uses API endpoint: DELETE /api/users/{id}
Displays success or error messages based on API responses.


## Technologies Used React: Frontend framework.
## React Router: For navigation.
## Axios: For API requests.
## Tailwind CSS: For styling.
## Local Storage: To persist authentication token.

## Installation and Setup
1. Clone the repository:
git clone <repository-url>Navigate to the project directory:
cd employwise-assignmentInstall dependencies:
npm installStart the development server:
npm startOpen http://localhost:3000 in your browser.

DeploymentHosted on [Netlify/Vercel] (Provide the deployment link here)
Used React Router for navigation.
Author: Shriya Uppal

