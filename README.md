# Dev Social

A social platform for developers to share repositories and thoughts with friends.

Built with Next.js, this full-stack application leverages its routing capabilities alongside Redux for state management and context providers throughout. The project implements strict TypeScript for enhanced type safety and code reliability.

The backend utilizes MongoDB Atlas and Express, with JWT tokens for authentication and Bcrypt for secure password encryption.

Developed as a personal project to explore modern framework integration, this MERN-inspired stack is designed for easy scalability.

![Dev Social Chats](/client/public//img/Screenshot%202024-02-13%20160741.png)

[Visit Live Demo](https://dev-connector-social-platform.vercel.app/dashboard)

## Table of Contents

- [Installation](about:blank#installation)
- [Usage](about:blank#usage)
- [Features](about:blank#features)
- [Project Structure](about:blank#project-structure)
- [Environment Variables](about:blank#environment-variables)
- [Scripts](about:blank#scripts)
- [Contributing](about:blank#contributing)
- [Authors](about:blank#authors)
- [Feedback](about:blank#feedback)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dev-social.git
cd dev-social
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NEXT_PUBLIC_DATABASE_URL=your-backend-api(http://localhost:4200)
```

## Usage

To start the development server and Next.js server concurrently:

```bash
npm run start
```

Optionally you can just start the Next.js server if the backend is hosted elsewhere

```sh
cd client
npm run start
```

To build the project for production, run:

```bash
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Redux**: A state management library for JavaScript applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **MongoDB Atlas**: A cloud database service for MongoDB.
- **Express**: A minimal and flexible Node.js web application framework.
- **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **Bcrypt**: A library to help hash passwords.
- **Vercel**: A platform for frontend frameworks and static sites, used for deploying the Next.js client.
- **Heroku/Render**: Platforms for deploying the Express server.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **CSS Modules**: A CSS file in which all class and animation names are scoped locally by default.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **React**: A JavaScript library for building user interfaces.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Prettier**: An opinionated code formatter.
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity.
- **React Testing Library**: A library for testing React components.
- **Docker**: A platform for developing, shipping, and running applications in containers.
- **Git**: A distributed version-control system for tracking changes in source code during software development.
- **GitHub**: A provider of Internet hosting for software development and version control using Git.
- **Postman**: An API platform for building and using APIs.
- **Webpack**: A static module bundler for modern JavaScript applications.
- **Babel**: A JavaScript compiler.
- **Nodemon**: A tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- **Sass**: A preprocessor scripting language that is interpreted or compiled into CSS.
- **Formik**: A small group of React components and hooks for building forms in React and React Native.
- **Yup**: A JavaScript schema builder for value parsing and validation.

## Features

- **User Authentication**: Secure login and registration using JWT and Bcrypt.
- **Profile Management**: Create and update user profiles with personal information and social links.
- **Post Creation**: Share your thoughts and projects with the community.
- **Commenting System**: Engage with other users by commenting on their posts.
- **Like and Unlike Posts**: Show appreciation for posts by liking them.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Real-time Notifications**: Get notified about new comments and likes on your posts along with updates from the server.
- **API Integration**: Seamless integration with third-party APIs for enhanced functionality and linking getting your repos.
- **Continuous Integration**: Automated testing and deployment with GitHub Actions.
- **Environment Configuration**: Manage environment variables for different deployment stages.
- **Error Handling**: Robust error handling and logging for better debugging.
- **Code Quality**: Enforced code quality standards using ESLint and Prettier.
- **Form Validation**: Reliable form validation using Formik and Yup.
- **State Management**: Efficient state management with Redux and Context API.
- **Scalable Architecture**: Designed to be easily scalable and maintainable.

## Project Structure

- **client/**: Contains the Next.js frontend application.
  - **.env**: Environment variables for the client.
  - **.eslintrc.json**: ESLint configuration file.
  - **.next/**: Next.js build output directory.
  - **package.json**: Client-specific dependencies and scripts.
  - **postcss.config.js**: PostCSS configuration file.
  - **public/**: Public assets such as images.
  - **src/**: Source code for the client application.
    - **actions/**: Redux action creators.
    - **app/**: Next.js pages and components.
    - **reducers/**: Redux reducers.
    - **store.tsx**: Redux store configuration.
    - **hooks/**: Custom React hooks.
    - **utils/**: Utility functions.
  - **tailwind.config.ts**: Tailwind CSS configuration file.
  - **tsconfig.json**: TypeScript configuration file.
  - **README.md**: Client-specific README file.
- **config/**: Configuration files for the server.
  - **db.ts**: Database connection configuration.
  - **default.json**: Default configuration settings.
  - **production.json**: Production configuration settings.
- **middleware/**: Express middleware functions.
  - **auth.ts**: Authentication middleware.
- **models/**: Mongoose models for MongoDB.
  - **Post.ts**: Post model.
  - **Profile.ts**: Profile model.
  - **User.ts**: User model.
- **routes/**: Express routes.
  - **api/**: API routes.
    - **auth.ts**: Authentication routes.
    - **posts.ts**: Post routes.
    - **profile.ts**: Profile routes.
    - **users.ts**: User routes.
- **server.ts**: Entry point for the Express server.
- **package.json**: Project dependencies and scripts.
- **README.md**: Project README file.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

-`MONGODB_URI`=your_mongodb_uri -`JWT_SECRET`=your_jwt_secret -`NEXT_PUBLIC_DATABASE_URL`=your-backend-api

## Scripts

- `npm run start:` Start the development server(backend) and Next.js server(frontend).
- `npm run server:` Start the development server(backend).
- cd client `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint to check for linting errors.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Authors

- @jakolandio3

## Feedback

If you have any feedback, please reach out to me at [jakobdouglas.dev@gmail.com](mailto:jakobdouglas.dev@gmail.com)
