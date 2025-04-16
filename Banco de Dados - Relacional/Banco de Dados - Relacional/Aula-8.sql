CREATE TABLE clientes (
    id INT PRIMARY KEY,  -- ID único para cada cliente
    nome VARCHAR(100) NOT NULL,         -- Nome do cliente
    saldo DECIMAL(15, 2) NOT NULL       -- Saldo atual do cliente
);

CREATE TABLE saques (
    id INT PRIMARY KEY,  -- ID único para cada saque
    cliente_id INT,                     -- ID do cliente que fez o saque
    valor DECIMAL(15, 2) NOT NULL,      -- Valor do saque
    data_saque TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Data e hora do saque
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)  -- Relaciona o saque com o cliente
);

INSERT INTO clientes (id,nome, saldo) VALUES 
(1,'João Silva', 5000.00),
(2,'Maria Oliveira', 3000.50),
(3,'Carlos Souza', 2000.75);

INSERT INTO saques (id,cliente_id, valor) VALUES 
(1,1, 200.00),  -- João Silva fez um saque de R$200
(2,1, 150.00),  -- João Silva fez outro saque de R$150
(3,2, 500.00),  -- Maria Oliveira fez um saque de R$500
(4,3, 100.00);  -- Carlos Souza fez um saque de R$100


SELECT COUNT(*) AS total_clientes FROM clientes;

SELECT SUM(saldo) AS saldo_total FROM clientes;

SELECT AVG(valor) AS media_saques FROM saques;
