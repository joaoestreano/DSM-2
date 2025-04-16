create table Produtos (
	ID_produto SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	preço int,
	Categotia varchar(100) not null
)

insert into Produtos (nome, preço, Categotia)
values ('Notebook', 4500.00, 'Eletrônicos'), ('Smartphone', 2500.00, 'Eletrônicos'), ('Cadeira Gamer',
850.00, 'Móveis'), ('Geladeira', 3200.00, 'Eletrodomésticos'), ('Fone de Ouvido', 200.00,
'Acessórios');

select * from Produtos
where Categotia ='Eletrônicos';

select * from Produtos
order by Preço desc;
