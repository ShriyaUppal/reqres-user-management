# EmployWise Assignment

## Overview
This React-based frontend application integrates with the Reqres API to perform basic user management functions, including authentication, listing users, editing user details, and deleting users. It follows the requirements outlined in the assignment and is built with React, React Router, and Axios.

## Features
1. Level 1: Authentication ScreenA login screen where users authenticate using credentials.
Uses the following API endpoint for authentication:
POST /api/login with email and password in the request body.
Sample credentials:
Email: eve.holt@reqres.in
Password: cityslicka
On successful login, stores the token and navigates to the Users List page.

2. Level 2: List All UsersDisplays a paginated list of users fetched from the Reqres API.
API used: GET /api/users?page=1
Shows the user's first name, last name, and avatar in a card-based layout.
Implements pagination for easy navigation through different pages of users.

3. Level 3: Edit, Delete, and Update UsersEdit User:
Clicking "Edit" opens a form pre-filled with user data.
Users can update the first name, last name, and email.
Uses API endpoint: PUT /api/users/{id}

4. Delete User:
Clicking "Delete" removes the user from the list.
Uses API endpoint: DELETE /api/users/{id}
Displays success or error messages based on API responses.


## Technologies Used React: Frontend framework.
## React Router: For navigation.
## Axios: For API requests.
## Tailwind CSS: For styling.
## Local Storage: To persist authentication token.

## Installation and Setup
1. Clone the repository:
2. git clone <repository-url>Navigate to the project directory:
3. cd employwise-assignment
4. Install dependencies:npm install
5. Start the development server:npm run dev
4. Open http://localhost:3000 in your browser.

Deployment: Hosted on [Netlify] 
Deployment Link: (https://employee-list-reqres.netlify.app/)
Used React Router for navigation.
Author: Shriya Uppal

