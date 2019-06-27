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

App.get('/words/data', (req, res) => {
  knex('studylist').asCallback((err,result) => {
    res.json(result);
  });
});

App.post('/studylist', (req, res) => {
  console.dir(req)
  knex('studylist')
    .insert({
      foreign_word: req.body.original,
      english_word: req.body.translation,
      interval: 1
    })
    .then(entry => res.status(204).send())
})

App.get('/books/data', (req, res) => {
  knex('books').asCallback((err,result) => {
    res.json(result);
  });
});

App.get('/getchapter/:book/:chapter', (req, res) => {
  knex('words')
  .where({bookid: req.params.book, chapter_ref: req.params.chapter})
  .asCallback((err, result) => {
    res.json(result)
  })

})

App.get('/testbook/data', (req, res) => {
  knex('words')
  .where({bookid: 6, chapter_ref: 4})
  .asCallback((err,result) => {
    res.json(result);
  });
});


App.post('/upload', (req, res) => {
  upload(req,res,function(err) {
    if(err) {
        return res.end("Error uploading file.");
    }
    knex('books').insert({
      title: req.body.title
    })
    .returning('id')
    .then(function(bookId){
      extractProm(epubFullPath)
      .then(({chapters, getChapter}) => {
        return Promise.all(
          chapters.map(getChapter)
        )
      })
      .then(chaptersTextArr => {
        let output = [];
        chaptersTextArr.forEach((element, chapterNumber) => {
          bookArray = element.replace(/\r?\n|\r/g , " \n ").split(" ");
          let wordSegmented = [];
          bookArray.forEach((el, index) => {
            wordSegmented.push({
              word: el,
              bookid: bookId[0],
              chapter_ref: chapterNumber,
              sequence_ref: index
            })
          });
          knex('words').insert(wordSegmented).asCallback()
          output.push(wordSegmented);

        })
        // res.json(output)
        // res.status(204).send()
        res.redirect('/library')
      })
      .catch(err => {
        console.log(`Error: ${err}`)
      })
    })
    //create a book entry in knex here, .then (extract)
  // .replace(/[a-z]/ig, function(word) {})

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

function getChapt(chapter) {
  return new Promise((resolve, reject) => {
    this.getChapter(chapter.id, function(error, text){
      if (error) {
        console.log(`getChapt error:`, error.stack)
        return reject(error)}
        output = htmlToText.fromString(text,{
          preserveNewlines: true
        })
      resolve(output)
    })
  })
}

function extractProm(sourceFile) {
  return new Promise((resolve, reject) => {
    let epub = new EPub(sourceFile);
    let output = "";
    epub.on('end', () => {
      resolve({ chapters: epub.flow, getChapter: getChapt.bind(epub) })
    });

    epub.on('error', function(err) {
      console.log("extractPromErr", err.stack)
      reject(err)
    });
    epub.parse();
  })
}

