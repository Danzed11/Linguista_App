const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

const knexConfig  = require("./knexfile")["development"];
const knex        = require("knex")(knexConfig);

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.get('/words/data', (req, res) => {
  knex('wordlist').asCallback((err,result) => {
    res.json(result);
  });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
