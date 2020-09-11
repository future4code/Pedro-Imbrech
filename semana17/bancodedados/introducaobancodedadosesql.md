CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("003", "Fernanda Montenegro", 300000,"1929-10-19", "female");

INSERT INTO Actor
VALUES ("002", "Gloria  Pires", 1200000,"1963-08-23", "female");


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "maria",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);


SELECT id, name, salary, birth_date, gender
FROM Actor;

SELECT id, name, salary, birth_date, gender

FROM Actor;


SELECT * FROM Actor

