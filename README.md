# Linguista
Improve your foreign language skills by reading your favourite books! Linguista is built using React and Express.

# SET UP THE DATABASE

To set up database:
  1. In terminal go to the express-back-end folder.
  2. Run `psql` in the terminal.
  3. Run `create database linguista;`
  4. Run `\c linguista`
  5. Run `\i db/linguista.sql`.

Tables should be created locally for your server instance.

## User Stories
- "As a user, I want to improve my french comprehension skills."
- "I want to upload my own Epub docs and read my book in a reader. If I don't understand a word, I want to be able to click on it and see the translation pop-up while also adding that word into a library to review later"
- " I want to be able to review trouble words at my leisure later on and rank them based on difficulty"

# React + Express No-Fluff Boilerplate

A boilerplate project for anyone interested in making a project that uses React and Express.

This repository is a bootleg of @NimaBoscarino's [React Rails Boilerplate](https://github.com/NimaBoscarino/react-rails-boilerplate). It uses the same React app, but replaces the Rails server with an Express server.

Note! This boilerplate has _no fluff_! That means that there's nothing set up for you to do authentication stuff, there's no Redux stuff, and there's no React Router stuff. On the Express end, there is no session storage or database connection.

The main important bit is that the React project has `proxy` set to `localhost:8080` in the `package.json` file, and that the Express app listens to port 8080 in `server.js`. Take a look!

## Running the projects

You need **TWO** terminals for this.

In one terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.

In the other terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn start` to launch the server.

In the browser, you can click on the button and see the data get loaded.

If this doesn't work, please message me!

## Next steps

From here, you can start working on your project!

As soon as the dependencies are installed, your Express server can serve JSON and static assets (like images) in response to API calls from the React app. You can get started on developing your React app, routing plan, etc. right away! Any request that isn't handled by React is passed on to the Express server. That means that you can call a route like `/api/users` from React using `fetch`, `axios`, or something else, and Express will receive it as though they originated from the same app. For routing, best practice is to namespace all of your data routes to `/api`, so that they don't clash with other routing schemes, like React Router.

At some point, you'll likely want to install and configure a database driver for Postgres or MongoDB-- Refer to past projects for hints on how to do this!

## Contact

Please contact me on Slack (@garrettgsb) or Nima at `nima@lighthouselabs.com` if you have any questions or requests, or post an issue to this repo.
