DROP TABLE IF EXISTS Library CASCADE;
DROP TABLE IF EXISTS Wordlist CASCADE;
DROP TABLE IF EXISTS Bookwords CASCADE;

DROP TABLE IF EXISTS Books CASCADE;
DROP TABLE IF EXISTS Words CASCADE;
DROP TABLE IF EXISTS Studylist CASCADE;

CREATE TABLE Books(
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  coverArt bytea
);

CREATE TABLE Words(
  id SERIAL PRIMARY KEY,
  bookID int,
  FOREIGN KEY (bookID) REFERENCES Books(id),
  word text,
  chapter_ref int,
  sequence_ref int
);

CREATE TABLE Studylist(
  id SERIAL PRIMARY KEY,
  foreign_word VARCHAR(100) NOT NULL,
  english_word VARCHAR(100) NOT NULL,
  interval int
);
