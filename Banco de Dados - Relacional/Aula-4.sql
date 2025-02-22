CREATE TABLE cursos (
id_curso SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL
);
CREATE TABLE alunos (
id_aluno SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
idade INT,
id_curso INT REFERENCES cursos(id_curso)
);

insert into cursos(id_curso, nome)
values (1,'engenharia'),(2,'Psicologia'),(3, 'Direito');

select * from alunos;

insert into alunos (nome, idade, id_curso)
values ('João', 21,1),('Maria',20,2);

update alunos set idade=22 
where nome ='João';

update alunos set idade=21, id_curso=3 
where nome = 'Maria';

DELETE FROM alunos;
