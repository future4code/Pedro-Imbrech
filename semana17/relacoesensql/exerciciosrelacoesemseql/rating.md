 
   ### Exercício 1
    CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)


*a. Explique o que é uma chave estrangeira*

*b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*

*c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*

d. *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*

*e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*




CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)


ALTER TABLE Movie DROP COLUMN rating;

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

*a. Explique, com as suas palavras, essa tabela*

*b. Crie, ao menos, 6 relações nessa tabela* 

*c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*

*d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*



INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
)



INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
)

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;


```sql
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

```sql
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);


SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

*a. Explique, com suas palavras essa query. Por que há a necessidade de dois `JOIN`?*

*b. Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque `alias` para facilitar o endentimento do retorno da query*

*c. A query abaixo **deveria** ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.*

- Veja a query

    ```sql
    SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id;
    ```

*d. **Desafio:** Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)*


SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

SELECT 
		m.id as movie_id, 
    m.title, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movie m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;








### EXERCICIOS DA AULA 


### Exercício 1
### 1a Relação: Usuários e Contas , Isso caracteriza a relação 1:1
CREATE TABLE aula53_users (
 id VARCHAR(255) PRIMARY KEY,
 name VARCHAR(255),
 gender ENUM('male', 'female')
);
INSERT INTO aula53_users VALUES
('a', 'Alice', 'female'),
('b', 'Bob', 'male');
SELECT * FROM aula53_users;


### 2a Relação: Fornecedores e Produtos , 
### ○ Isso é chamado de relação 1:N

CREATE TABLE aula53_suppliers (
 id VARCHAR(255) PRIMARY KEY,
 name VARCHAR(255),
 gender ENUM('male', 'female')
);
INSERT INTO aula53_suppliers VALUES
('c', 'Coragem', 'male'),
('d', 'Dory', 'female');
SELECT * FROM aula53_suppliers;


### 3a Relação: Usuários e Produtos
### Isso é chamado de relação N:M

### Cada usuário pode escolher vários produtos. Ou seja, um-
### usuário está relacionado a vários produtos-
### ○ Cada produto pode ser escolhido por vários usuários. Ou-
### seja, um produto está relacionado a vários usuários </b>



### Criando Relações em MySQL 👷🏼‍♀

### Relação 1:1

CREATE TABLE aula53_accounts (
 id INT PRIMARY KEY,
 balance FLOAT,
 user_id VARCHAR(255),
 FOREIGN KEY (user_id) REFERENCES aula53_users(id)
);
INSERT INTO aula53_accounts VALUES
(659182, 1000.99, 'a'),
(662834, 1000.99, 'b');
SELECT * FROM aula53_accounts;



### Relação 1:N

CREATE TABLE aula53_products (
 id VARCHAR(255) PRIMARY KEY,
 name VARCHAR(255) UNIQUE,
 price FLOAT,
 supplier_id VARCHAR(255),
 FOREIGN KEY (supplier_id ) REFERENCES aula53_suppliers(id)
);
INSERT INTO aula53_products VALUES
('okm','cenoura' , 10.00, 'c'),
('uhb','abacate', 11.50, 'c'),
('ygv','cebola', 12.00, 'c'),
('ijn','camarão', 21.50, 'd'),
('tfc','lula', 22.00, 'd');
SELECT * FROM aula53_products;

b) A resposta é: , porque:

1. ijn	camarão	21.5	d
2. okm	cenoura	10	    c
3. tfc	lula	22	    d
4. uhb	abacate	11.5	c
5. ygv	cebola	12	    c





### Relação N:M
### ○ Vamos, então, criar uma tabela intermediária ou de junção.
### Vamos chamá-la de Compras

CREATE TABLE aula53_sales (
 user_id VARCHAR(255),
 product_id VARCHAR(255),
 FOREIGN KEY (user_id ) REFERENCES aula53_users(id),
 FOREIGN KEY (product_id ) REFERENCES aula53_products(id)
);
INSERT INTO aula53_sales VALUES
('b', 'okm'), ('b','uhb'), ('a','ygv'), ('b','ygv'),
('b','ijn'), ('b','tfc'), ('a','tfc');
SELECT * FROM aula53_sales;



