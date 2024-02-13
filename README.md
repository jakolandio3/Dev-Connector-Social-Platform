# Dev Social 2024 - Jakob Douglas

QUICK START (for development)
(1) npm i (install dependencies)
(2) choose to run server locally or use my deployed server
(2a) cd ./client npm run dev (runs NextJS on your localhost port)
(2b) npm run dev (runs server locally and runs client server for Next.JS)
(3) open a new window in your browser to http://localhost:3000 (should open on run start)

## About

This project makes use of Next.js and its routing capabilities to create a full stack application with the use of Redux for complex reducer functionality and context providers through the application, it also makes use of some strict typescript code for dependability of the types and code.

The server side makes use of MongoDB Atlas and Express as well as JWT tokens for validation and Bcrypt for password and data encryption

Mainly built for personal development purposes in getting dependencies to work well together loosely based off of a MERN stack this project utilizes some amazing modern frameworks and is set up to be easily scalable

### cd/client `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### cd/client `npm run build`

Builds the app for production to the `.next` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### 'npm run server'

Starts the server on http://localhost:5000 so the application can use the data as a 'fake API' there is a server hosted @OnRender you can use also, this project is also on my github
