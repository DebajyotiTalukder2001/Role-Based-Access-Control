# Role-Based Access Control (RBAC) 

This project is a simple RESTful API for user registration, login, authentication, and user management (Role-Based Access Control (RBAC)) built using Node.js, Express.js,Typescript, and MongoDB. It provides endpoints for user `registration,` `login`, `Role-Based Access Control (RBAC)`, `fetching user details`, `logging out`, and `logging out from all devices`. 

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


![Screenshot (9)](https://github.com/user-attachments/assets/9a8250e4-7d88-4107-a965-ff78fc6f052e)


src/: This is our root folder where our project resides.

- app.ts: This file will serve as the entry point for our Express server.

- controllers/: Contains the logic for handling different user-related operations.

- db/: Houses the database connection logic.

- middleware/: Stores middleware functions, including the `auth` middleware for securing endpoints.

- models/: Holds the data models for our application. In this case, we'll have a User model.

- routers/: Handles routing logic for our API endpoints. Specifically, `userRoutes.ts` will define routes related to user interactions.


## ScreenShots


![Screenshot (10)](https://github.com/user-attachments/assets/cd7ee043-eb5d-4d9b-bafb-cdc7ad845f19)


<h3>Admin Role:</h3>

![Screenshot (12)](https://github.com/user-attachments/assets/437c2343-ccd8-467f-95bb-88801bf7cb8a)



![Screenshot (13)](https://github.com/user-attachments/assets/c0252c7f-17e8-4085-9dea-aa1b785b92bd)


![Screenshot (14)](https://github.com/user-attachments/assets/0637effe-a052-4cbd-b7ba-26ce8bdac9ed)

Admin can access Moderator Route:

![Screenshot (15)](https://github.com/user-attachments/assets/bfbefd85-180b-4067-a81d-25f3e822eeca)


Admin can access User Details:

![Screenshot (17)](https://github.com/user-attachments/assets/6ed726a3-4eac-46ca-a770-5879e0b43d82)




![Screenshot (25)](https://github.com/user-attachments/assets/2a2f6acf-6757-4333-8f76-297ff7114bd8)


<h3>Moderator Role:</h3>


![Screenshot (18)](https://github.com/user-attachments/assets/478438fa-4504-4485-b744-9ff093c699cb)


Access Denied without authentication:

![Screenshot (19)](https://github.com/user-attachments/assets/1e197580-72d2-49ec-bc02-03dc9627350c)


Access granted with JWT Token (Authentication):

![Screenshot (20)](https://github.com/user-attachments/assets/f5c85b06-9d2f-462d-ba44-4c823b80a553)

Admin Access Denied:

![Screenshot (21)](https://github.com/user-attachments/assets/08e1df93-5473-49de-b123-36b1d291ecf2)



<h3>User Role:</h3>



![Screenshot (22)](https://github.com/user-attachments/assets/6bee53d2-aaa8-4a90-9be9-a4c06df760e2)

Moderator or Admin Access Denied:
![Screenshot (23)](https://github.com/user-attachments/assets/74a1494e-a0f3-48e0-9a76-0c34ff99f51a)



Logout:
![Screenshot (24)](https://github.com/user-attachments/assets/bd4aa6f9-ad00-4a36-882c-a2db200896f4)



