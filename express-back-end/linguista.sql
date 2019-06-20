DROP TABLE IF EXISTS linguista CASCADE;

CREATE TABLE library(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    text ,
    coverArt,
    bookmark    
);

CREATE TABLE wordlist(
    id SERIAL PRIMARY KEY,
    frenchWord VARCHAR(100),
    engWord VARCHAR(100),
);

INSERT INTO library (title,text, coverArt)
  VALUES ('something','somethingelse');
INSERT INTO wordlist (frenchWord,engWord,)
  VALUES ('tabernaak', 'fuck');