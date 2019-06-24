let string11 = "Hello mate can I call you sometime?"

function splitIt(string) {
  let splitter = string.split(" ")
  splitter.forEach(function(element) {
    console.log(element);
  })
}
console.log("SPLIT....")
console.log(splitIt(string11));














// // Imports the Google Cloud client library
// const {Translate} = require('@google-cloud/translate');

// // Creates a client
// const translate = new Translate();

// /**
//  * TODO(developer): Uncomment the following lines before running the sample.
//  */
// const text = 'That is one giant pig';
// const target = 'de';

// // Translates the text into the target language. "text" can be a string for
// // translating a single piece of text, or an array of strings for translating
// // multiple texts.
// let [translations] = await translate.translate(text, target);
// translations = Array.isArray(translations) ? translations : [translations];
// console.log('Translations:');
// translations.forEach((translation, i) => {
//   console.log(`${text[i]} => (${target}) ${translation}`);
// });