CREATE DATABASE mydb;

\c mydb;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (name, email) VALUES ('Mor DIOP', 'mor.diop@gmail.com');
INSERT INTO users (name, email) VALUES ('Aminata Ba', 'aminata2.ba@uadb.edu.sn ');
INSERT INTO users (name, email) VALUES ('Adjafatou Basse', 'adjafatou.basse@uadb.edu.sn');
INSERT INTO users (name, email) VALUES ('Raky Bocoum', 'raky.bocoum@uadb.edu.sn');
INSERT INTO users (name, email) VALUES ('T. Malady Diallo', 'maladydiallo2@gmail.com');








