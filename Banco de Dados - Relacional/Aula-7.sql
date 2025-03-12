create database bd_aula05;

create domain chk_categoria text check (value='DRAMA' or value='COMEDIA');
create domain chk_status text check (value='DISPONIVEL' or value='ALUGADO');
create table tbl_cliente (codigo_cliente integer PRIMARY KEY, nome text not null, cidade text, endereco text);
create table tbl_titulo (codigo_titulo integer primary key, titulo text not null, descricao text, categoria chk_categoria);
create table tbl_livros (cod_livro integer PRIMARY KEY, codigo_titulo integer REFERENCES tbl_titulo(codigo_titulo), status chk_status DEFAULT 'DISPONIVEL');
create table tbl_emprestimo (numero_emprestimo integer PRIMARY KEY, codigo_cliente integer REFERENCES tbl_cliente(codigo_cliente), codigo_livro integer REFERENCES tbl_livros(cod_livro));
-- Inserir dados na tabela tbl_cliente
INSERT INTO tbl_cliente (codigo_cliente, nome, cidade, endereco)
VALUES
    (1, 'Joao Silva', 'Sao Paulo', 'Rua A, 123'),
    (2, 'Maria Santos', 'Rio de Janeiro', 'Av. B, 456'),
    (3, 'Pedro Almeida', 'Belo Horizonte', 'Rua C, 789'),
    (4, 'Ana Oliveira', 'Salvador', 'Av. D, 1011'),
    (5, 'Carlos Lima', 'Brasília', 'Rua E, 1213');
-- Inserir dados na tabela tbl_titulo
INSERT INTO tbl_titulo (codigo_titulo, titulo, descricao, categoria)
VALUES
    (1, 'Aventuras Urbanas', 'Uma história emocionante', 'DRAMA'),
    (2, 'Mistérios Antigos', 'Enigmas por resolver', 'COMEDIA'),
    (3, 'Amor nas Estrelas', 'Um romance intergaláctico', 'DRAMA'),
    (4, 'Código Enigmatico', 'Segredos ocultos', 'COMEDIA'),
    (5, 'Histórias Perdidas', 'Contos esquecidos', 'DRAMA');
-- Inserir dados na tabela tbl_livros
INSERT INTO tbl_livros (cod_livro, codigo_titulo, status)
VALUES
    (1, 1, 'ALUGADO'),
    (2, 1, 'ALUGADO'),
    (3, 2, 'DISPONIVEL'),
    (4, 3, 'ALUGADO'),
    (5, 4, 'ALUGADO');
-- Inserir dados na tabela tbl_emprestimo
INSERT INTO tbl_emprestimo (numero_emprestimo, codigo_cliente, codigo_livro)
VALUES
    (1, 1, 2),
    (2, 2, 4),
    (3, 3, 1),
    (4, 4, 5);
--
select * from tbl_cliente;
select * from tbl_titulo;
select * from tbl_livros;
select * from tbl_emprestimo;

--1 Listar os títulos, a descrição, a categoria e o status de todos os livros.
SELECT t.titulo, t.descricao, t.categoria, l.status
FROM tbl_titulo t
JOIN tbl_livros l ON t.codigo_titulo = l.codigo_titulo;

--2 Listar o título, a descrição, a categoria e o status de todos os livros.
SELECT t.titulo, t.descricao, t.categoria, l.status
FROM tbl_titulo t
JOIN tbl_livros l ON t.codigo_titulo = l.codigo_titulo;

--3 Liste os títulos (tbl_titulo) e seus status (tbl_livros), 
--incluindo os que não têm status definido. (retorna 6 linhas)

SELECT t.titulo, l.status
FROM tbl_titulo t
LEFT JOIN tbl_livros l ON t.codigo_titulo = l.codigo_titulo;

--4 Liste os títulos (tbl_titulo.titulo) e suas descrições (tbl_titulo.decricao) dos 
-- livros alugados (tbl_livros.status) (retorna 4 linhas)

SELECT t.titulo, t.descricao
FROM tbl_titulo t
JOIN tbl_livros l ON t.codigo_titulo = l.codigo_titulo
WHERE l.status = 'ALUGADO';

--5 Liste os nomes dos clientes que não têm livros alugados (retorna 1 linha)
--tbl_cliente tbl_livros tbl_emprestimo

SELECT c.nome
FROM tbl_cliente c
LEFT JOIN tbl_emprestimo e ON c.codigo_cliente = e.codigo_cliente
LEFT JOIN tbl_livros l ON e.codigo_livro = l.cod_livro
WHERE l.status IS NULL OR l.status != 'ALUGADO';

--6 Liste os títulos e suas categorias dos livros disponiveis (retorna 1 linha).
--tbl_titulo(codigo_titulo,titulo,categoria) tbl_livros (codigo_titulo,status)

SELECT t.titulo, t.categoria
FROM tbl_titulo t
JOIN tbl_livros l ON t.codigo_titulo = l.codigo_titulo
WHERE l.status = 'DISPONIVEL';

--7 Liste os nomes dos clientes e os títulos dos livros que eles têm alugados (retorna 5 linhas).
--tbl_cliente(nome) tbl_titulo(titulo) tbl_livros (status)

SELECT c.nome, t.titulo
FROM tbl_cliente c
JOIN tbl_emprestimo e ON c.codigo_cliente = e.codigo_cliente
JOIN tbl_livros l ON e.codigo_livro = l.cod_livro
JOIN tbl_titulo t ON l.codigo_titulo = t.codigo_titulo
WHERE l.status = 'ALUGADO';
