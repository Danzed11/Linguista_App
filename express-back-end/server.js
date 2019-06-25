const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

const knexConfig  = require("./knexfile")["development"];
const knex        = require("knex")(knexConfig);

//Large File Upload handlers
const multer  =   require('multer');
const storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, 'epub');
  }
});
const upload = multer({ storage : storage}).single('uploadedEpub');


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

App.get('/testbook/data', (req, res) => {
  knex('bookwords').asCallback((err,result) => {
    res.json(result);
  });
});

App.post('/upload', (req, res) => {
  upload(req,res,function(err) {
    if(err) {
        return res.end("Error uploading file.");
    }
    let output = ""
    extract(epubFullPath, (err, txt, done) => {
      output = output + txt
      if (done) {
        res.json(output)
      }
    })
      // ,
      // function() {
      //   res.redirect('/library')
      // }


  });
})

//Set up POST route to update word interval number via flashcard game.

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

// ======================= Epub Processing ===============

const EPub = require('epub');
const htmlToText = require('html-to-text');
const path = require('path');
const htmlParser = require('node-html-parser');

const epubFullPath = './uploads/epub'


// https://github.com/Projet-TAMIS/epub-to-text/blob/master/index.js Source
function extract(sourceFile, callback, initialCallback) {
    let epub = new EPub(sourceFile);
    let output = "";
    epub.on('end', function() {
      epub.flow
        .map((chapter, index) => {
          epub.getChapter(chapter.id, function(error, text){
            callback({}, text, index === epub.flow.length - 1)
          })
        })
    });
    epub.parse();
}


//===============Book Add ===============

