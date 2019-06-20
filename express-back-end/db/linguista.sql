DROP TABLE IF EXISTS linguista CASCADE;

CREATE TABLE library(
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  book text NOT NULL,
  coverArt bytea,
  bookmark int    
);

CREATE TABLE wordlist(
  id SERIAL PRIMARY KEY,
  foreign_word VARCHAR(100) NOT NULL,
  english_word VARCHAR(100) NOT NULL,
  interval int (1-4)
);

INSERT INTO library (title, book, coverArt, bookmark)
  VALUES ('something','somethingelse', bytea('pathtoimage'), 0);


INSERT INTO wordlist (foreign_word, english_word, interval)
  VALUES ('tabernaak', 'fuck', 1);
INSERT INTO wordlist (foreign_word, english_word, interval)
  VALUES ('citrouille', 'pumpkin', 1);
