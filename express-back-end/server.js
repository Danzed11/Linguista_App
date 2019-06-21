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

App.post('/upload', (req, res) => {
  upload(req,res,function(err) {
    if(err) {
        return res.end("Error uploading file.");
    }
    let output;
    extract(epubFullPath,
      (err, txt, n) => {
        console.log(txt)
      },
      function() {
        res.redirect('/library')
      })

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


//https://github.com/Projet-TAMIS/epub-to-text/blob/master/index.js Source
function extract(sourceFile, callback, initialCallback) {
    var epub = new EPub(sourceFile);

    // callback fired for each chapter (or they are written to disk)
    epub.on('end', function() {
      epub.flow.forEach(function(chapter, sequence) {
        epub.getChapter(chapter.id, function(err, html) {
          var txt = '';
          if (html) {
            txt = htmlToText.fromString(html.toString(), {ignoreHref: true});
          };
          var meta = {};
          meta.id = chapter.id;
          meta.excerpt = txt.trim().slice(0, 250);
          meta.size = txt.length
          meta.sequence_number = sequence
          if (chapter.title) {
            meta.title = chapter.title
          } else {
            meta.title = getTitleFromHtml(html);
          }
          callback(err, txt, sequence, meta);
        });
      });
    });

    // callback as soon as file is ready to give info on how many chapters will be processed
    epub.on('end', function() {
      if (initialCallback) {
        initialCallback(null, epub.flow.length);
      };
    });

    epub.parse();
  }

function getTitleFromHtml(html) {
    const root = htmlParser.parse(html);
    var title = root.querySelector('h1');
    if (title == null) {
      title = root.querySelector('title');
      if (title == null) {
        return '';
      };
    };
    return title.structuredText.replace("\n", " ");
}

