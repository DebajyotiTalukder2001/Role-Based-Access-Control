# Role-Based Access Control (RBAC) 

This project is a simple RESTful API for user registration, authentication, and user management (Role-Based Access Control (RBAC)) built using Node.js, Express.js,Typescript, and MongoDB. It provides endpoints for user `registration,` `login`, `Role-Based Access Control (RBAC)`, `fetching user details`, `logging out`, and `logging out from all devices`. 

## Features

- User registration: Register a new user with a name, email, password, and role.
- User login: Authenticate users with their email and password.
- Fetch user details: Retrieve user details after authentication.
- Logout: Logout the user from the current device.
- Logout from all devices: Logout the user from all devices.
- **Role-based Access Control (RBAC)**


## Installation

- Required Installations: Node.js, VS Code IDE, MongoDB (Installation Required) or MongoDB Atlas Cloud (No installation required)
- Used VS Code Extensions: MongoDB, Thunder Client

1. Clone the repository

2. Navigate to the project directory

3. Install dependencies
  

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the following variables:
     - `PORT`: Port number for the server.
     - `MONGODB_URL`: MongoDB connection URL.
     - `JWT_SECRET`: Secret key for JWT token generation.

5. Start the server: 


<h3>Terminal></h3>

```Set-ExecutionPolicy RemoteSigned -Scope CurrentUser```

``` npm install -g yarn  ```

``` yarn```

``` yarn start```

``` CTRL + C ```


## Usage

Used Thunder Client VSCode Extension (Similar to Postman):


- Register a new user: Send a POST request to `/api/users/register` with JSON data containing `name`, `email`, `password`, and `role`.
- Login: Send a POST request to `/api/users/login` with JSON data containing `email` and `password`.
- Fetch user details: Send a GET request to `/api/users/me` with a valid JWT token in the Authorization header.
- Logout: Send a POST request to `/api/users/logout` with a valid JWT token in the Authorization header.
- Logout from all devices: Send a POST request to `/api/users/logoutall` with a valid JWT token in the Authorization header.
- **Role-based Access Control (RBAC)**:  Send a GET request to `/api/users/moderator` or `/api/users/admin` with a valid JWT token in the Authorization header.


## Dependencies

[@npm](https://docs.npmjs.com)
[@yarn](https://classic.yarnpkg.com/en/docs/getting-started)


- express: Web framework for Node.js
- mongodb: NoSQL database
- mongoose: MongoDB object modeling tool
- bcryptjs: Password hashing library
- jsonwebtoken: JWT token generation and verification
- TypeScript: Superset of JavaScript that compiles to clean JavaScript output

## Getting Started ##

Initialization:

`yarn init`

Dependencies:

`yarn add express mongodb mongoose bcryptjs validator jsonwebtoken`

DevDependencies:

`yarn add env-cmd nodemon typescript ts-node-dev @types/express --dev`

tsconfig:

`npx tsc --init`



## File Structure




src/: This is our root folder where our project resides.

- app.ts: This file will serve as the entry point for our Express server.

- controllers/: Contains the logic for handling different user-related operations.

- db/: Houses the database connection logic.

- middleware/: Stores middleware functions, including the `auth` middleware for securing endpoints.

- models/: Holds the data models for our application. In this case, we'll have a User model.

- routers/: Handles routing logic for our API endpoints. Specifically, `userRoutes.ts` will define routes related to user interactions.


## ScreenShots



