--resolução 1
create database bd_escola;

CREATE TABLE cursos 
(id_curso SERIAL PRIMARY KEY, nome VARCHAR(100) NOT NULL);

CREATE TABLE alunos 
(id_aluno SERIAL PRIMARY KEY, nome VARCHAR(100) NOT NULL, 
 idade INT, id_curso INT REFERENCES cursos(id_curso));

CREATE TABLE notas (id_nota int PRIMARY KEY, disciplina VARCHAR(100)
NOT NULL, nota float,
id_aluno INT REFERENCES alunos(id_aluno));^Ç
]

INSERT INTO cursos (nome) VALUES ('Engenharia');
								  
INSERT INTO cursos (nome) VALUES ('Análise de Sistemas'), ('Computação'), ('Matemática');

INSERT INTO alunos (nome, idade, id_curso) VALUES ('João Silva', 22, 1);

INSERT INTO alunos (nome, idade, id_curso) VALUES ('Marina Lima', 16, 3), ('Maria Souza', 20, 3),
('Carlos Lima', 25, 4), ('Lucas Pereira', 18, 3);

INSERT INTO notas (id_nota, id_aluno, disciplina, nota) VALUES (101, 1, 'Matemática', 8.5),(102, 2,
'História', 9.0);

UPDATE alunos SET idade = 16 WHERE nome = 'João Silva';

UPDATE alunos SET idade = 17, id_curso = 1 WHERE nome = 'Marina Lima';

Select * from cursos;

Select * from alunos;

SELECT alunos.nome, notas.disciplina, notas.nota
FROM alunos
INNER JOIN notas ON alunos.id_aluno = notas.id_aluno;

SELECT alunos.nome, notas.disciplina, notas.nota
FROM alunos
LEFT JOIN notas ON alunos.id_aluno = notas.id_aluno;

--Exercicio 1
SELECT alunos.nome, cursos.nome AS curso
FROM alunos
INNER JOIN cursos ON alunos.id_curso = cursos.id_curso;

SELECT alunos.nome, cursos.nome AS curso
FROM alunos
LEFT JOIN cursos ON alunos.id_curso = cursos.id_curso;
