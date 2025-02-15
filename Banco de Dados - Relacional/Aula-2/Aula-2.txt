Table Client {
  Cliente_id integer [primary key]
  Nome varchar 
  Habilitação interger
}

Table Carros {
  id integer [primary key]
  Modelo varchar
  Placa varchar
}

Table Aluguel {
  id integer [primary key]
  Cliente_id interger
  Carro_id integer 
}

ref: Client.Cliente_id> Aluguel.Cliente_id

ref: Carros.id> Aluguel.Carro_id


