CREATE TABLE empresa (
 id_func SERIAL PRIMARY KEY,
nome VARCHAR(100) ,
cargo Varchar(100),
salario INTEGER);

INSERT INTO empresa (nome, cargo, salario)
VALUES 
('Ana Silva', 'Gerente', 5000),
('Carlos Souza', 'Desenvolvedor', 3500),
('Maria Oliveira', 'Analista de Sistemas', 4000);


SELECT * FROM empresa;
