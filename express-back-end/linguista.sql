DROP TABLE IF EXISTS linguista CASCADE;

CREATE TABLE library(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    book json,
    coverArt bytea,
    bookmark int    
);

CREATE TABLE wordlist(
    id SERIAL PRIMARY KEY,
    frenchWord VARCHAR(100),
    engWord VARCHAR(100),
);

INSERT INTO library (title, book, coverArt)
  VALUES ('something','somethingelse', bytea('pathtoimage'));


INSERT INTO wordlist (frenchWord,engWord,)
  VALUES ('tabernaak', 'fuck');