DROP TABLE IF EXISTS Library CASCADE;
DROP TABLE IF EXISTS Wordlist CASCADE;
DROP TABLE IF EXISTS Bookwords CASCADE;

CREATE TABLE Library(
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  book text NOT NULL,
  coverArt bytea,
  bookmark int
);

CREATE TABLE Bookwords(
  id SERIAL PRIMARY KEY,
  word text,
  isWord boolean,
  sequenceId int
);

CREATE TABLE Wordlist(
  id SERIAL PRIMARY KEY,
  foreign_word VARCHAR(100) NOT NULL,
  english_word VARCHAR(100) NOT NULL,
  interval int
);

INSERT INTO library (title, book, coverArt, bookmark)
  VALUES ('something','somethingelse', bytea('pathtoimage'), 0);


INSERT INTO wordlist (foreign_word, english_word, interval)
  VALUES ('méduse', 'jellyfish', 1);
INSERT INTO wordlist (foreign_word, english_word, interval)
  VALUES ('papillon', 'butterfly', 1);
INSERT INTO wordlist (foreign_word, english_word, interval)
  VALUES ('vache', 'cow', 1);
INSERT INTO wordlist (foreign_word, english_word, interval)
  VALUES ('chèvre', 'goat', 1);
INSERT INTO wordlist (foreign_word, english_word, interval)
  VALUES ('taureau', 'bull', 1);
INSERT INTO wordlist (foreign_word, english_word, interval)
  VALUES ('grenouille', 'frog', 1);
INSERT INTO wordlist (foreign_word, english_word, interval)
  VALUES ('élan', 'moose', 1);
INSERT INTO wordlist (foreign_word, english_word, interval)
  VALUES ('chauve-souris', 'bat', 1);

